/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var image = ee.Image("users/tonywangs/1995");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
    // Define a palette for the Land Use classification.
    var palette = [
      '01380A', // heavy veg
      '07DB29', // light veg
      '0000FF', // water 
      '735005', // bare
      'a3a3a3', // urban 
    ];
    
    // Display the classification result and the input image.
    Map.addLayer(image, {min: 0, max: 4, palette: palette}, 'Land Use Classification');