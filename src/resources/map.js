define(['$', 'resources/util', 'resources/Promise'], function($, util, Promise){
  
  var pluck = util.pluck, 
      values = util.values, 
      keys = util.keys;
  
  var terrainTypes;

  var canvas, ctx;
    
  var initialized = false;  
  var map = {
    init: function(cb){
      if(initialized) return;
      canvas = this.canvasNode = document.createElement("canvas");
      canvas.style.cssText = "display:block;margin:4px auto";
      canvas.id = "map_canvas";

      // lazy-load the terrain module
      var loadedPromise = new Promise();
      require(['resources/terrain'], function(terrain){
        terrainTypes = terrain;
        return loadedPromise.resolve(true);
      });
      initialized = true;
      return loadedPromise;
    },
    renderMap: function(mapData, options) {
      options = options || {};
      // loop over the array of locations
      var tile = null, 
          img = null,
          terrain = null,
          tileSize = options.tileSize || 10,
          ctx = (options.canvasNode || this.canvasNode).getContext("2d");
      
      console.log("renderMap at ", tileSize);
      for(var i=0; i<mapData.length; i++){
        tile = mapData[i];
        terrain = terrainTypes[tile.type];
        if(terrain){
          img = terrain.img;
          if(img){
            // console.log("render image for type: ", tile.type, " with url: ", terrainTypes[tile.type].url);
            ctx.drawImage(
                img,                    // image
                0,                      // source-x
                0,                      // source-y
                tileSize,              // source-width
                tileSize,             // source-height
                tileSize*tile.x,        // dest-x
                tileSize*tile.y,        // dest-y
                tileSize,               // dest-width
                tileSize                // dest-height
            );
            // console.log("drawImage: ", img, tileSize*tile.x, tileSize*tile.y, tileSize, tileSize);
          } else {
            console.log("no img property in: ", terrainTypes[tile.type]);
          }
        } else {
          console.warn("unknown terrain type in: ", tile);
        }
      }
      return this.canvasNode;
    }
  };
  return map;
});