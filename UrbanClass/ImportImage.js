exports.importImage = function() {
  // Load the Landsat 8 scaled radiance image collection.
  var landsatCollection = ee.ImageCollection('LANDSAT/LC08/C01/T1')
      .filterDate('2017-01-01', '2017-12-31');
  
  // Make a cloud-free composite.
  var composite = ee.Algorithms.Landsat.simpleComposite({
    collection: landsatCollection,
    asFloat: true
  });
  
  // Visualize the Composite
  console.log("test")
  return(composite);
}