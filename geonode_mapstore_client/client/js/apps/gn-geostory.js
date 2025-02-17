/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { connect } from 'react-redux';
import main from '@mapstore/framework/components/app/main';
import MainLoader from '@js/components/MainLoader';
import ViewerRoute from '@js/routes/Viewer';
import Router, { withRoutes } from '@js/components/Router';
import security from '@mapstore/framework/reducers/security';
import maptype from '@mapstore/framework/reducers/maptype';
import geostory from '@mapstore/framework/reducers/geostory';
import gnresource from '@js/reducers/gnresource';
import gnsettings from '@js/reducers/gnsettings';
import { registerMediaAPI } from '@mapstore/framework/api/media';
import * as geoNodeMediaApi from '@js/observables/media/geonode';
import {
    getEndpoints,
    getConfiguration, getAccountInfo
} from '@js/api/geonode/v2';
import { updateGeoNodeSettings } from '@js/actions/gnsettings';
import { requestResourceConfig } from '@js/actions/gnresource';
import gnresourceEpics from '@js/epics/gnresource';
import {
    setupConfiguration,
    initializeApp,
    getPluginsConfiguration
} from '@js/utils/AppUtils';
import { ResourceTypes } from '@js/utils/ResourceUtils';
import pluginsDefinition from '@js/plugins/index';
import ReactSwipe from 'react-swipeable-views';
import SwipeHeader from '@mapstore/framework/components/data/identify/SwipeHeader';
const requires = {
    ReactSwipe,
    SwipeHeader
};

registerMediaAPI('geonode', geoNodeMediaApi);

// TODO: check styles on less files
import 'react-select/dist/react-select.css';

const DEFAULT_LOCALE = {};
const ConnectedRouter = connect((state) => ({
    locale: state?.locale || DEFAULT_LOCALE
}))(Router);

const routes = [{
    name: 'geostory',
    path: '/',
    pageConfig: {
        resourceType: ResourceTypes.GEOSTORY
    },
    component: ViewerRoute
}];

initializeApp();

document.addEventListener('DOMContentLoaded', function() {
    Promise.all([
        getConfiguration(),
        getAccountInfo(),
        getEndpoints()
    ])
        .then(([localConfig, user]) => {
            const {
                securityState,
                geoNodeConfiguration,
                pluginsConfigKey,
                geoNodePageConfig,
                configEpics,
                mapType = 'openlayers',
                onStoreInit,
                targetId = 'ms-container',
                settings
            } = setupConfiguration({ localConfig, user });

            // register custom arcgis layer
            import('@js/map/' + mapType + '/plugins/ArcGisMapServer')
                .then(() => {
                    main({
                        targetId,
                        appComponent: withRoutes(routes)(ConnectedRouter),
                        pluginsConfig: getPluginsConfiguration(localConfig.plugins, pluginsConfigKey),
                        loaderComponent: MainLoader,
                        lazyPlugins: pluginsDefinition.lazyPlugins,
                        pluginsDef: {
                            plugins: {
                                ...pluginsDefinition.plugins
                            },
                            requires: {
                                ...requires,
                                ...pluginsDefinition.requires
                            }
                        },
                        initialState: {
                            defaultState: {
                                maptype: {
                                    mapType: 'openlayers'
                                },
                                ...securityState
                            }
                        },
                        themeCfg: null,
                        appReducers: {
                            geostory,
                            gnresource,
                            gnsettings,
                            security,
                            maptype
                        },
                        appEpics: {
                            ...configEpics,
                            ...gnresourceEpics
                        },
                        onStoreInit,
                        geoNodeConfiguration,
                        initialActions: [
                            // add some settings in the global state to make them accessible in the monitor state
                            // later we could use expression in localConfig
                            updateGeoNodeSettings.bind(null, settings),
                            ...(geoNodePageConfig.resourceId !== undefined
                                ? [ requestResourceConfig.bind(null, ResourceTypes.GEOSTORY, geoNodePageConfig.resourceId) ]
                                : [])
                        ]
                    });
                });
        });

});
