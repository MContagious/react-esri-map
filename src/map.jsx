import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';
import Chance from 'chance';

const chance = new Chance();

import './leaflet/leaflet.css';
import './map.css';

export default class Map extends Component {

    state = {
        map: null,
        mapId: chance.hash({length: 15})
    }

    componentDidMount() {
        const map = L.map(this.state.mapId).setView([this.props.lat, this.props.lng], this.props.zoom);
        this.setState({ map: map });
    }

    getChildContext() {
        return {
            map: this.state.map
        }
    }

    render() {
        const { map, mapId } = this.state;
        // @todo don't use id for map, this will break with multiples
        return (
            <div id={mapId} className="react-esri-map">
                { map && this.props.children }
            </div>
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

Map.childContextTypes = {
    map: PropTypes.object
};
