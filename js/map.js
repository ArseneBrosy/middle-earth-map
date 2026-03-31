let map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2
})

let bounds = [[0,0], [1024, 1024]];

L.imageOverlay('../img/map/0/0-0.png', {
    bounds: bounds
}).addTo(map);

map.fitBounds(bounds);