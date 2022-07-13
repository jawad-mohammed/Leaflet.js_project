const map = L.map('map').setView([51.505, -0.09], 13);
const tileURL  = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tiles = L.tileLayer(tileURL, {attribution})

tiles.addTo(map)

const CLayer = L.circle([51.505, -0.09], {radius:200,color:'coral',fillColor:'blue',
fillOpacity:0.2
})

CLayer.addTo(map)

var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];

const rectangle = L.rectangle(bounds)
rectangle.addTo(map)