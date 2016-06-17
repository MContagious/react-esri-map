import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

import './leaflet/leaflet.css';
import './map.css';

console.log('MAP LOADED YO');

export default class Map extends Component {
    static propTypes = {
        zoom: PropTypes.number
    };

    componentDidMount() {
        var map = L.map('map').setView([38.9043478, -77.0429411], 13);
        EsriLeaflet.basemapLayer('Streets').addTo(map);
    }

    render() {
        // @todo don't use id for map, this will break with multiples
        return (
            <div id="map" className="react-esri-map"></div>
        );
    }
}
