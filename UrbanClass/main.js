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
const maxDate = 2015;
var date = 1995.toString();
/*------------------------------------------------------------------------------
                             Start Training 
-------------------------------------------------------------------------------*/
// Select the bands for training
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];

// Sample the input imagery to get a FeatureCollection of training data.
var training = composite.select(bands).sampleRegions({
  collection: newfc,
  properties: ['landcover'],
  scale: 30
});

// Make a Random Forest classifier and train it.
var classifier = ee.Classifier.randomForest().train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

/*------------------------------------------------------------------------------
            Start of image loading >> classified image loading
-------------------------------------------------------------------------------*/
var result = a.importImage('2017-05-01', '2017-12-31', roi)
Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
