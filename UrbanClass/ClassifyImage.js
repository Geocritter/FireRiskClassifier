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
var classified = composite.select(bands).classify(classifier);

// Define a palette for the Land Use classification.
var palette = [
  'D3D3D3', // urban (0)  // grey
  '0000FF', // water (1)  // blue
  '008000' //  forest (2) // green
];

// Display the classification result and the input image.
Map.setCenter(-96.0171, 29.6803);
Map.addLayer(classified, {min: 0, max: 2, palette: palette}, 'Land Use Classification');