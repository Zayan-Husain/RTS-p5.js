///////////////unit///////////////////
class unit extends yentity
{
  constructor(x2,y2) 
  {
	  super(x2,y2);
	  this.speed = 1;
	  this.type = "unit";
      this.grafic_type = "none";
      this.team = 1
      this.path = [];
      this.path_pos = 0
      this.selected;
      this.tx = 0
      this.ty = 0
      this.debug = true;
      this.targx;
      this.targy;
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
    t.move();
    t.yselect();
    t.hit()
   // t.get_path();
  this.tx = Math.floor(this.x/this.tw)
  this.ty = Math.floor(this.y/this.th)
  }//end update
  
  move() {
    var t = this;
    var mp = t.path
    if (t.path_pos >= mp.length - 1) return;
    if (mp.length === 0) return;
    var tp = mp[mp.length - t.path_pos - 1] //target position
    t.move_to( tp.y * t.th + (t.th/2),tp.x * t.tw + (t.tw/2));
    if (t.tx === tp.x && t.ty === tp.y) t.path_pos++; // if enemy position reached next position in path
    console.log(t.path_pos)
  }//end move

  hit() {
    var t = this
    t.collide("unit")
  }

  stxy(x,y) { // set target x and y
    var t = this
    t.targx = x;
    t.targy = y;
  }

  get_path()
  {
    var t = this; 
    var mtx = this.targx,
        mty = this.targy
    if(mtx ===0 && mty===0) return;
    this.path = [];
    dfs(deepCopy(t.map), this.ty, this.tx, mty, mtx, this.path);
    console.log(this.path)
    //console.log(this.ty,this.tx, mty, mtx,this.path)
    this.path_pos = 1
  }//end get_path

  yselect() {
    var t = this;
    if(t.clicked(2)) {
      t.selected = true;
      t.sprite.draw = function() {
        fill(color(37,255,37));
        rect(0,0,t.w,t.h)
      }
    }
  }
  
  
  
  
}//end class
///////////////end unit///////////////////