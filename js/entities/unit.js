///////////////unit///////////////////
class unit extends yentity
{
	constructor(x2,y2) 
	{
		super(x2,y2);
		this.speed = 5;
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
			this.old_draw;
	}//end constructor
	init() {
		var t = this;
		super.init()
		t.cancel_selection()
	}
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
		if (t.path_pos >= mp.length) return;
		if (mp.length === 0) return;
		var tp = mp[mp.length - t.path_pos -1] //target position
		tp={x:tp[0],y:tp[1]}
		t.move_to( tp.y * t.th + (t.th/2),tp.x * t.tw + (t.tw/2));
		if (t.tx === tp.y && t.ty === tp.x) t.path_pos++; // if enemy position reached next position in path
	 // console.log(t.tx +"==="+ tp. y+" && "+t.ty +"==="+ tp.x)
		//console.log(tp)
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
		//dfs_old(deepCopy(t.map), this.ty, this.tx, mty, mtx, this.path);
		//console.log(deepCopy(t.map),this.ty, this.tx, mty, mtx)
		var yp =bfs(deepCopy(t.map), this.ty, this.tx, mty, mtx);
		
		this.path = path_from_point(yp);
		console.log(this.path)
		//console.log(this.ty,this.tx, mty, mtx,this.path)
		this.path_pos = 1
	}//end get_path

	yselect() {
		var t = this;
		if(t.team !== t.get_by_type("player")[0].team) return;
		if(t.clicked(2)) {
			t.selected = true;
			t.sprite.draw = function() {
				fill(color(37,255,37));
				rect(0,0,t.w,t.h)
			}
			t.old_draw = t.sprite.draw
		}
	}

	cancel_selection() {
		var t = this;
		if(t.selected = false) return;
		t.selected = false;
		console.log(t.old_draw)
		t.sprite.draw = function() {
			fill(color(255,255,255));
			rect(0,0,t.w,t.h)
		}
	}
		
		
		
		
}//end class
///////////////end unit///////////////////