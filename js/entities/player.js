///////////////player///////////////////
class player extends yentity
{
  constructor(x2,y2) 
  {
	  super(x2,y2);
	  this.speed = 4;
	  this.type = "player";
    this.grafic_type = "none";
    this.team = 1
    //this.w = 0
    //this.h = 0
    this.zi = 9999999999999999999999999
    // this.map is the tilemap
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
    t.move();
    t.move_unit();
    t.cancel_unit_selection()
  }//end update
  
  move() {
    var t = this;
    
    if (keyDown('a')) {
        t.move_by(-t.speed, 0);
    }
    if (keyDown('d')) {
        t.move_by(t.speed, 0);
    }
    if (keyDown('s')) {
        t.move_by(0, t.speed);
    }
    if (keyDown('w')) {
        t.move_by(0, -t.speed);
    }
    camera.position.x = t.x;
    camera.position.y = t.y;
  }//end move

  move_unit() {
    var t = this;
    if(mouseWentUp()) {
      var tcx = camera.mouseX / t.tw //tilemap click position x
      var tcy = camera.mouseY / t.th //tilemap click position y
      console.log(t.map)
      if(tcx < 0 || tcy < 0 || tcx > t.map[0].length-1 || tcy > t.map.length-1) return;
      for(var i of t.get_by_type("unit")) {
        if(i.selected && i.team == t.team) {
          i.stxy(tcx, tcy)
          i.get_path();
          //i.selected=false;
        }
      }//end loop
    }//end if
  }

  cancel_unit_selection() {
    var t = this;
    if(keyDown("SPACE")) {
      for(var u of t.get_by_type("unit")) {
        u.cancel_selection()
      }
    }
  }
  
  
  
  
}//end class
///////////////end player///////////////////