///////////////minimap///////////////////
class minimap extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
    this.type = "minimap";
    this.max_width = 100;
    this.max_height = 100;
    this.grafic_type = "none"
    this.w = 0
    this.h = 0
    this.arr = [];
    this.game_width = 3000;
    this.game_height = 2000;
  }//end constructor
  
  init() {
    super.init()
    var t = this;
    this.draw = function(){}
  }
  update()
  {
	var t = this;
  super.update();
  camera.off()
  fill(color(0, 0, 0))
  stroke(255, 255, 255)
  rect(0, 0, t.max_width+20, t.max_height+20)
  stroke(0)
  t.generate_minimap();
  camera.on()

  //t.sx(t.ox + camera.position.x - (yscreen.w / 2))
  //t.sy(t.oy + camera.position.y - (yscreen.h / 2))
  }//end update

  generate_minimap() {
    var t = this;
    // var pl = t.get_by_type("player")[0];
    // var es = t.get_by_type("enemy");
    // rect(t.do_op(pl.x + t.x, yscreen.w, t.max_width), t.do_op(pl.y + t.y, yscreen.h, t.max_height), 5, 5);
    for(var i of t.arr) {
      if (!Array.isArray(i)) continue
      var tp = t.get_by_type(i[0])
      for(var j of tp) {
        fill(color(i[1], i[2], i[3]))
        rect(
          t.do_op(j.x + t.x, t.game_width, t.max_width), // x pos
          t.do_op(j.y + t.y, t.game_height, t.max_height), // y pos
          5, 5 // width and height
        );
      }
    } //end loop
  }
  do_op(val, max_val, map_max) {
    return (val / max_val) * map_max
  }
  
  
}//end class
///////////////end minimap///////////////////
