/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = 
    /* color: #98ff00 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-122.62222642536682, 41.14868045119151],
          [-122.62222642536682, 40.44591041948576],
          [-121.29013414021057, 40.44591041948576],
          [-121.29013414021057, 41.14868045119151]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var a = require('users/tonywangs/GEOG481:UrbanClass/ImportImage.js');

var result = a.importImage('2017-01-01', '2017-12-31', roi)

Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
