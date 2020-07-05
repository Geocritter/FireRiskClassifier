/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = 
    /* color: #ffc82d */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-123.41054055342455, 41.346599408357],
          [-123.41054055342455, 40.072492956391045],
          [-120.99904152998705, 40.072492956391045],
          [-120.99904152998705, 41.346599408357]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var a = require('users/tonywangs/GEOG481:UrbanClass/ImportImage.js');
const maxYear = 2015;
var year = 1995;
var result = a.importImage('2017-01-01', '2017-12-31', roi)

Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
