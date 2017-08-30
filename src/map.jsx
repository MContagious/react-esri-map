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
        L.Icon.Default.imagePath = this.props.imagePath;
        
        // Set all the events passed through props.
        const events = Object.keys(this.props).filter(ev => /^on[A-Z]/.match(ev)).reduce((acc, ev) => {
            acc[ev] = ev.replace("on", "").replace("on", "").toLowerCase();
        }, {})
        
        for (ev in events) {
            map.on(events[ev], this.props[ev]);
        }
        
        this.setState({ map: map });
    }

    getChildContext() {
        return {
            map: this.state.map
        }
    }

    render() {
        const { map, mapId } = this.state;
        return (
            <div id={mapId} className="react-esri-map">
                { map && this.props.children }
            </div>
        );
    }
}

Map.propTypes = {
    imagePath: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDragStart: PropTypes.func,
    onPreDrag: PropTypes.func,
    zoom: PropTypes.number
};

Map.defaultProps = {
    imagePath: 'https://cdn.socialradar.com/icons/leaflet',
    lat: 38.9043478,
    lng: -77.0429411,
    zoom: 13
};

Map.childContextTypes = {
    map: PropTypes.object
};
