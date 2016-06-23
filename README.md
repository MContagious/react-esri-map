# React ESRI Maps

React component for rendering ESRI maps

## Examples

#### Most basic map
```jsx
    <ReactEsriMap>
        <BaseMapLayer></BaseMapLayer>
    </ReactEsriMap>
```

#### Satellite imagery with labels
```jsx
    <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
        <BaseMapLayer type="Imagery"></BaseMapLayer>
        <BaseMapLayer type="ImageryLabels"></BaseMapLayer>
    </ReactEsriMap>
```

#### Tiled map layer
```jsx
    <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
        <TiledMapLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"></TiledMapLayer>
    </ReactEsriMap>
```

#### Adding Features to map
