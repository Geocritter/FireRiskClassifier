var a = require('users/tonywangs/GEOG481:UrbanClass/ImportImage.js');

var result = a.importImage('2017-01-01', '2017-12-31')
Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
