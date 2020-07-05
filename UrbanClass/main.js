var a = require('users/tonywangs/GEOG481:UrbanClass/ImportImage.js');

var result = a.importImage()
Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
