import React, { Component } from 'react';
import ReactEsriMap, { BaseMapLayer, TiledMapLayer, GeoJSON } from '../src/index';

import './samplemap.css'

export default class SampleMap extends Component {
    render() {
        var data = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [-77.0429411, 38.9043478]
            }
        };

        return (
            <div className='samplemap'>
                <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
                    <BaseMapLayer></BaseMapLayer>
                    <GeoJSON data={data}></GeoJSON>
                </ReactEsriMap>
            </div>
        );
    }
}
// <TiledMapLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"></TiledMapLayer>
