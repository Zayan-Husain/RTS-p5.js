///////////////enemy///////////////////
class enemy extends yentity
{
  constructor(x2,y2) 
  {
	  super(x2,y2);
	  this.speed = 2;
	  this.type = "enemy";
      this.grafic_type = "none";
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update
  
  
}//end class
///////////////end enemy///////////////////