exports.importImage = function(startDate, endDate, imageCollection) {
  // Load the Landsat 8 scaled radiance image collection.
  var landsatCollection = ee.ImageCollection(imageCollection)
      .filterDate(startDate, endDate);
  
  // Make a cloud-free composite.
  var composite = ee.Algorithms.Landsat.simpleComposite({
    collection: landsatCollection,
    asFloat: true
  });
  
  // Visualize the Composite
  Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], max: 0.5, gamma: 2}, 'L8 Image', false);
}