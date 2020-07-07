exports.removeLayer = function() {
  var layers = Map.layers()
  for (i=0;i<layers.length;i++) {
    Map.remove(i)
  }
}