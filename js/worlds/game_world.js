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
    mmap.arr = [['player', 0, 0, 255], ['wall', 255, 255, 255], ['unit', 0, 255, 0]]
    t.add(mmap)

    var test_map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//0
      [1,5,0,0,0,0,0,0,0,0,0,0,0,0,1],//1
      [1,0,0,0,0,1,1,1,0,0,0,0,0,0,1],//2
      [1,0,0,1,0,0,1,0,0,1,0,0,0,0,1],//3
      [1,0,0,1,1,0,0,0,0,1,1,1,0,0,1],//4
      [1,0,0,0,0,0,0,3,0,0,0,1,0,0,1],//5
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],//6
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],//7
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],//8
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],//9
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//10
    // 0 1 2 3 4 5 6 7 8 9 1 1 1 1 1
    //                     0 1 2 3 4
    ]
    var tmap = new tilemap(test_map)
    t.add(tmap)
    tmap.draw_map()
    t.add_enemies(tmap)
  }

  add_enemies(tm) {
    var t = this;
    var e = new unit(11*tm.tilew, 8*tm.tileh)
    e.map = tm.map
    e.tw = tm.tilew
    e.th = tm.tileh
    //e.team = 2
    t.add(e)

  }


}
