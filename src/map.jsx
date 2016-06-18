import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

import './leaflet/leaflet.css';
import './map.css';

export default class Map extends Component {
    componentDidMount() {
        var map = L.map('map').setView([this.props.lat, this.props.lng], this.props.zoom);
    }

    render() {
        // @todo don't use id for map, this will break with multiples
        console.log("rendering map");
        return (
            <div id="map" className="react-esri-map"></div>
        );
    }
}

Map.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    zoom: PropTypes.number
};

Map.defaultProps = {
    lat: 38.9043478,
    lng: -77.0429411,
    zoom: 13
};
