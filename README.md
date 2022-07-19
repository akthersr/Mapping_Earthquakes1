# Mapping_Earthquakes

## Overview 

The main objective of this project is to visualize and create an earthquake map by using the latest earthquake GeoJSON data from US Geological Survey(USGS) website, with an interactive feature on earthquakes from arround the world in relation to the tectonic plates’ location on the earth, and all the earthquakes with a magnitude greater than 4.5.

## Purpose

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

## Tasks

To complete this project, we use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

## Approach

We use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. We use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

## Resources

-Data sources: Earthquakes GeoJSON data From  USGS website, Tectonic plate data from "GeoJSON/PB2002_boundaries.json".

-VS code, JavaScript, D3, Mapbox and HTML.

## Results

To create this maps we use the JavaScript, D3 library and geoJSON data. Here, we add tectonic plate data by using d3.json(), add the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and add the tectonic plate data to the overlay object with the earthquake data.The image for the final map is as follows:

A street map layer with all earthquake toggles:

![](https://github.com/akthersr/Mapping_Earthquakes1/blob/main/deliverable%201.png)

Then,we add color and set the radius of the circle markers based on the magnitude of earthquake, and add a popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer.The major earthquake data is added as a third layer group in the map and all the earthquake data and tectonic plate data displays the magnitude and location of the earthquake. 

A street map layer with major earthquakes:

![](https://github.com/akthersr/Mapping_Earthquakes1/blob/main/deliverable%202.png)


A dark layer map with all earthquake toggles:

![](https://github.com/akthersr/Mapping_Earthquakes1/blob/main/deliverable%203.png)


By visualizing the data,it was clear that most of the major earthquakes in the last week have occurred near or on the tectonic plates.So, the major earthquakes all fall on or right next to the fault lines.
 

