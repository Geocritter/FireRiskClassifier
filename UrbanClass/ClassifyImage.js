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
var sDate = year.toString()+
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

//Initiate loop start for next x amount of images
/*------------------------------------------------------------------------------
            Start of image loading >> classified image loading
-------------------------------------------------------------------------------*/
var result = a.importImage('2017-05-01', '2017-12-31', roi)
Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});


//Classify starts here
var classified = result.select(bands).classify(classifier);

// Define a palette for the Land Use classification.
var palette = [
  'D3D3D3', // urban (0)  // grey
  '0000FF', // water (1)  // blue
  '008000' //  forest (2) // green
];

// Display the classification result and the input image.
Map.addLayer(classified, {min: 0, max: 2, palette: palette}, 'Land Use Classification');



