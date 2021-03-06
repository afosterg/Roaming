define([
  "image!resources/graphics/clear.gif",
  "image!resources/graphics/dryground.jpg",
  "image!resources/graphics/desertground.jpg",
  "image!resources/graphics/marshyground.png",
  "image!resources/graphics/mountianground.png",
  "image!resources/graphics/grassground.jpg",
  "image!resources/graphics/water.jpg",
  "image!resources/graphics/abyss.jpg",
  "image!resources/graphics/sandground.jpg",
  "image!resources/graphics/forest.jpg",
  "image!resources/graphics/ice.jpg"
  
], function(
  clearImg,
  dryGroundImg, 
  desertImg, 
  marshImg, 
  mountainsImg, 
  plainsImg,
  waterImg,
  abyssImg,
  sandImg,
  forestImg,
  iceImg
){

  // each terrain includes an image and
  // a default description and afar text value for the tile/location
  // 
  return {
    "clear": { 
      img: clearImg,
      backdrop: "image!resources/graphics/terrain/clearbg.jpg",
      description: "",
      afar: ""
    },
    "barren":     { 
      img: desertImg,
      backdrop: "image!resources/graphics/terrain/barrenbg.jpg",
      description: "This is barren land, with only a scattering of rocks to break the monotony.",
      afar: "a flat and featureless landscape"
    },
    "desert":     {
      img: dryGroundImg,
      backdrop: "image!resources/graphics/terrain/desertbg.jpg",
      description: "You are in a sandy desert",
      afar: "desert"
    }, 
    "marsh": {
      img: marshImg,
      backdrop: "image!resources/graphics/terrain/marshbg.jpg",
      description: "You are knee deep in a swampy marsh",
      afar: "marshy landscape"
    },
    "mountains":  {
      img: mountainsImg,
      backdrop: "image!resources/graphics/terrain/mountainsbg.jpg",
      description: "You are in the mountains",
      afar: "rugged mountains"
    },
    "plains":     {
      img: plainsImg,
      backdrop: "image!resources/graphics/terrain/plainsbg.jpg",
      description: "You see flat grassland all around you.",
      afar: "it looks like grass and more grass"
    },
    "water":     {
      img: waterImg,
      backdrop: "image!resources/graphics/terrain/waterbg.jpg",
      description: "You are submerged in deep water",
      afar: "A deep blue pool"
    },
    "abyss":     {
      img: abyssImg,
      backdrop: "image!resources/graphics/terrain/abyssbg.jpg",
      description: "The yawning abyss swallows you up. You fall for a night and a day.",
      afar: "the edge of the world. No man may pass here."
    },
    "sand":     {
      img: sandImg,
      backdrop: "image!resources/graphics/terrain/sandbg.jpg",
      description: "Sand",
      afar: "sand"
    }, 
    "forest":    {
      img: forestImg,
      backdrop: "image!resources/graphics/terrain/forestbg.jpg",
      description: "You are surrounded by huge trees of many types",
      afar: "a vast forest"
    }, 
    "ice":    {
      img: iceImg,
      backdrop: "image!resources/graphics/terrain/icebg.jpg",
      description: "You are slipping on smooth ice",
      afar: "ice"     
    }
  };
});