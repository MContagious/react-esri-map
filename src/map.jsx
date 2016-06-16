import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

import './leaflet/leaflet.css';

console.log('MAP LOADED YO');

export default class Map extends Component {
    static propTypes = {
        zoom: PropTypes.number
    };

    componentDidMount() {
        console.log(Leaflet);
        Leaflet.map('map').setView([38.9043478, -77.0429411], 13);
    }

    render() {
        // @todo don't use id for map, this will break with multiples
        return (
            <div>
                <h3>MAP</h3>
                <div id="map"></div>
            </div>
        );
    }
}
