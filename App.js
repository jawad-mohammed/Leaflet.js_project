const map = L.map('map').setView([22.9074872,79.07306671], 5);
const tileURL  = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tiles = L.tileLayer(tileURL, {attribution})

tiles.addTo(map)

const CLayer = L.circle([22.9074872,79.07306671], {radius:200,color:'coral',fillColor:'blue',
fillOpacity:0.2
})

CLayer.addTo(map)

var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];

const rectangle = L.rectangle(bounds)
rectangle.addTo(map)

//burmuda triangle polygon
const bTriangleCoor= [
    [ [25.774, -80.19],
     [18.466,-66.118],
     [32.321,-64.757]]

]
const polygon = L.polygon(bTriangleCoor)
polygon.addTo(map)

//mumbai location marker
// const marker = L.marker([18.920675417289807,72.82952788802635])
// marker.addTo(map)

//raj bhavan road hyderabad
// const marker = L.marker([17.416482,78.460939])
// marker.addTo(map)


//using custom icon  with logo lmv IT raj bhavan
const icon = L.icon({
    iconUrl : 'lmv1.jpg',
     iconSize: [80,60]
})

 L.marker([17.416482,78.460939],{
    icon,
}).addTo(map).bindPopup('<h3>Welcome to LMV IT </h3>')

//another branch of lmv begumpet
L.marker([17.444708, 78.466377],{
    icon,
}).addTo(map).bindPopup('<h3>Welcome to LMV IT </h3>').bindPopup('<h3>Welcome to LMV Begumpet</h3>')



/////////////////////////tracking live location
const start = document.querySelector('#start')
const end = document.querySelector('#end')
//creating array to store data in local storage
const coordinates =[]


start.addEventListener('click',()=>{
  navigator.geolocation.getCurrentPosition(
    data=>{
    console.log(data);
    coordinates.push([data.coords.longitude,data.coords.latitude])
    window.localStorage.setItem('coordinates',JSON.stringify(coordinates))
  },
  err=> console.log(err),{
enableHighAccuracy:true
    
  }
  
  )
})









