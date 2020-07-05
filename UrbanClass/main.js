var a = require('users/tonywangs/GEOG481:UrbanClass/ImportImage.js');

var roi = ee.Geometry.Point(-40.5865, 122.3917);

var result = a.importImage('2017-01-01', '2017-12-31', roi)
Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
