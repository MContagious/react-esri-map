import React, { Component } from 'react';
import ReactEsriMap from '../src/index';

export default class SampleMap extends Component {
    render() {
        return (
            <ReactEsriMap lat={38.9043478} lng={-77.0429411} />
        );
    }
}
