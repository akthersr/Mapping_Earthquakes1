// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([37.6213, -122.3790],5);

// Coordinates for each point to be used in the polyline.

//let line = [
  //  [37.6213, -122.3790],
   // [30.1975, -97.6664],
  //  [43.6777,- 79.6248],
//    [40.6413,- 73.7781]    
//];

// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Add the geojson data.
let sanFranAirport = 
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// grabing our geojson data.
//L.geoJson(sanFranAirport).addTo(map);
// Create a polyline using the line coordinates and make the line red.
//L.polyline(line,{
  //  color: 'blue',
    //weight: '4',
    //opacity:0.5

//}).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
//    onEachFeature: function(feature, layer) {
//      console.log(layer);
//      layer.bindPopup();
//    }

 // }).addTo(map);

//  var popup = L.popup()
//  .setLatLng([37.6213, -122.3790])
//  .setContent("Airport code:SFO,Airport name:San Francisco Airport")
 // .openOn(map);

// Add a circle to the map
//L.circle([34.0522, -118.2437], {
//  radius: 300,
//  color:'black',
//  fillcolor:'#ffffa1',
//  fillOpacity: 0.5
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   accessToken:  API_KEY

});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   accessToken:  API_KEY

});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Street": streets,
    "Dark": dark,
    "Satellite Streets": satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/akthersr/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/akthersr/Mapping_Earthquakes/main/torontoNeighborhoods.json";
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //creating a geojson layer with the retrived data.
    L.geoJSON(data).addTo(map);
   
});

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/dark-v10',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY
//});



