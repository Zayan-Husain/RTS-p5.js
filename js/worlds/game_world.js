class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.gwidth = 3000;
    this.gheight = 2000;
  }

  init() {
    var t = this;
    t.resetw(); //reset world
    //remove all p5 sprites
    allSprites.clear();

    var mmap = new minimap(75, 75)
    mmap.ox = 75
    mmap.oy = 75 // original x and y
    mmap.arr = [['player', 0, 0, 255], ['enemy', 255, 0, 0], ['wall', 255, 255, 255], ['unit', 0, 255, 0]]
    t.add(mmap)

    var test_map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,5,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,3,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]
    var tmap = new tilemap(test_map)
    t.add(tmap)
    tmap.draw_map()
  }


}
