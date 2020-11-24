
class ypoint
{
  constructor(x2,y2,yparent2) 
  {
      var t = this;
      t.x = x2;
      t.y = y2
      t.yparent = yparent2;
  }
  get_prent() 
  {
     return this.yparent;
  }
  
  yprint() 
  {
     return "x = " + this.x + " y = " + this.y;
  }
  
  
}//end point

//bredth first search

function bfs(maze, sx, sy, tx, ty) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    tx = Math.floor(tx);
    ty = Math.floor(ty);
    var cp = maze[sx][sy] // current pos
    
    maze[tx][ty] = 9;
    
    q = [];//queue
    
    //add start point to q
    q.push(new ypoint(sx,sy,null));
    var i=0;
    //while q is not empty
    while(q.length > 0)
    {
        
        //get point at the top of q
        var p = q.shift();
        //if found the target/end point
        if(p.x==tx && p.y==ty)
        {
            console.log("times run:"+i)
            console.log(maze)
            q=[];//empthy q
            return p;//return it
        }
        
        //check all neighbors

        var dx = -1, dy = 0;

        if (yis_empthy(p.x + dx, p.y + dy,maze)) 
        {
            //mark as visted
            maze[p.x][p.y] = -1;
            nextp = new ypoint(p.x + dx, p.y + dy,p);
            q.push(nextp);
        }
        
        var dx = 1, dy = 0;
        if (yis_empthy(p.x + dx, p.y + dy,maze)) 
        {
            //mark as visted
            maze[p.x][p.y] = -1;
            nextp = new ypoint(p.x + dx, p.y + dy,p);
            q.push(nextp);
        }
        
        var dx = 0, dy = -1;
        if (yis_empthy(p.x + dx, p.y + dy,maze)) 
        {
            //mark as visted
            maze[p.x][p.y] = -1;
            nextp = new ypoint(p.x + dx, p.y + dy,p);
            q.push(nextp);
        }
        var dx = 0, dy = 1;
        if (yis_empthy(p.x + dx, p.y + dy,maze)) 
        {
            //mark as visted
            maze[p.x][p.y] = -1;
            nextp = new ypoint(p.x + dx, p.y + dy,p);
            q.push(nextp);
        }
        
        i++;
    }//end while
    
    return null;
}//end bfs



function yis_empthy(x,y,map)
{
   // console.log(x," ",y)
    if( (x>=0 && x<map.length-1) && (y>=0 &&y<map[0].length-1) 
        && map[x][y]==0 || map[x][y]==9 )
    {
       return true; 
    }
    return false;
}//end yis_empthy

function path_from_point(p)
{
    var path =[];
    if(p==null){return path;}
    while(p.get_prent() != null) {
        p = p.get_prent();
        if(p==null){break;}
        path.push([p.x,p.y]);
    }
    return path;
}//end path_from_point


function empthy_neighbors(maze,x,y,tx,ty)
{
    var ret = [];
    
    var up = maze[x-1][y];
    var down = maze[x+1][y];
    var left = maze[x][y-1];
    var right = maze[x][y+1];
    
    if(up ==0){ret.push({ x: x-1, y: y });}
    if(down ==0){ret.push({ x: x+1, y: y });}
    if(left ==0){ret.push({ x: x, y: y-1 });}
    if(right ==0){ret.push({ x: x, y: y+1 });}
    
    return ret;
    
    
}//end empthy_neighbor


function ManhattanDistance(x,y,tx,ty)
{	// linear movement - no diagonals - just cardinal directions (NSEW)
    return abs(x - tx) + abs(y - ty);
}

function ManhattanDistancep(Point, Goal)
{	// linear movement - no diagonals - just cardinal directions (NSEW)
    return abs(Point.x - Goal.x) + abs(Point.y - Goal.y);
}

function DiagonalDistance(x,y,tx,ty)
{	// diagonal movement - assumes diag dist is 1, same as cardinals
    return max(abs(x - tx), abs(y - ty));
}

function EuclideanDistance(x,y,tx,ty)
{	// diagonals are considered a little farther than cardinal directions
    // diagonal movement using Euclide (AC = sqrt(AB^2 + BC^2))
    // where AB = x2 - x1 and BC = y2 - y1 and AC will be [x3, y3]
    return sqrt(pow(x - tx, 2) + pow(y - ty, 2));
}


function dfs_old(maze, sx, sy, tx, ty, path) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    tx = Math.floor(tx);
    ty = Math.floor(ty);
    var cp = maze[sx][sy] // current pos
    if (sx === tx && sy === ty) {
        path.push( { x: sx, y: sy } )
        return true;
    }
    if (cp === 0) {
        maze[sx][sy] = 2
        var dx = -1, dy = 0;
        if (dfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
        dx = 1, dy = 0;
        if (dfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
        dx = 0, dy = -1;
        if (dfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
        dx = 0, dy = 1;
        if (dfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
    }
    return false;
} // end depth first search



function bfs_old(maze, sx, sy, tx, ty) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    tx = Math.floor(tx);
    ty = Math.floor(ty);
    var cp = maze[sx][sy] // current pos
    
    q = [];//queue
    
    //add start point to q
    q.push(new ypoint(sx,sy,null));
    var i=0;
    //while q is not empty
    while(q.length > 0)
    {
        
        //get point at the top of q
        var p = q.pop();
        
        //console.log(p.x," ",p.y)
       // maze[p.x][p.y] = -1;
       
        //if found the target/end point
        if(p.x==tx && p.y==ty)
        {
            console.log("times run:"+i)
            console.log(maze)
            q=[];//empthy q
            return p;//return it
        }
        
        //check all neighbors
        
        var dx = -1, dy = 0;
        var nextp  = new ypoint(9999, 9999,p);//next point to add to q
       
       if (yis_empthy(p.x + dx, p.y + dy,maze)) {
             
            
            
             //mark as visted
            maze[p.x][p.y] = -1;
          //  var old_dist = ManhattanDistance(nextp.x,nextp.y,tx,ty);
           // var new_dist = ManhattanDistance(p.x + dx, p.y + dy,tx,ty);
           // if(new_dist<old_dist)
           // {
               // maze[p.x + dx][p.y + dy] = -1;//mark as visted
                nextp = new ypoint(p.x + dx, p.y + dy,p);
           // }
            
            
            //create ne point
            //nextp = new ypoint(p.x + dx, p.y + dy,p);
            //add to q
           // q.push(nextp);
        }
        
        dx = 1, dy = 0;
        if (yis_empthy(p.x + dx, p.y + dy,maze)) {
             
            //mark as visted
            maze[p.x][p.y] = -1;
            
            
            
            var old_dist = ManhattanDistance(nextp.x,nextp.y,tx,ty);
            var new_dist = ManhattanDistance(p.x + dx, p.y + dy,tx,ty);
              if(new_dist<old_dist)
            {
              //  maze[p.x + dx][p.y + dy] = -1;//mark as visted
                nextp = new ypoint(p.x + dx, p.y + dy,p);
            }
            

            
            //add to q
        //    q.push(nextp);
        }
        
        dx = 0, dy = -1;
        if (yis_empthy(p.x + dx, p.y + dy,maze)) {
             
            //mark as visted
            maze[p.x][p.y] = -1;
          
            var old_dist = ManhattanDistance(nextp.x,nextp.y,tx,ty);
            var new_dist = ManhattanDistance(p.x + dx, p.y + dy,tx,ty);
            if(new_dist<old_dist){
                //maze[p.x + dx][p.y + dy] = -1;//mark as visted
                nextp = new ypoint(p.x + dx, p.y + dy,p);
            }
           
        }
        
        dx = 0, dy = 1;
        if (yis_empthy(p.x + dx, p.y + dy,maze)) {
             
            //mark as visted
            maze[p.x][p.y] = -1;
           
            var old_dist = ManhattanDistance(nextp.x,nextp.y,tx,ty);
            var new_dist = ManhattanDistance(p.x + dx, p.y + dy,tx,ty);
            if(new_dist<old_dist){
                //maze[p.x + dx][p.y + dy] = -1;//mark as visted
                nextp = new ypoint(p.x + dx, p.y + dy,p);
            }
           
        }
        if(nextp.x==9999){continue;}
        //console.log(nextp)
        q.push(nextp);
        i++;
    }//end while !q.isEmpty()
    console.log("times run(null):"+i)
    console.log(maze)
    return null;

} // end breadth first search old



























//LONGEST PATH ALGORITHM
//rip. we will all remeber it.
//long First Search
function lfs(maze, sx, sy, tx, ty, path) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    tx = Math.floor(tx);
    ty = Math.floor(ty);
    var cp = maze[sx][sy] // current pos
    if (sx === tx && sy === ty) {
        path.push( { x: sx, y: sy } )
        return true;
    }
    if (cp === 0) {
        maze[sx][sy] = 2
        var dx = -1, dy = 0;
        if (lfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
        dx = 1, dy = 0;
        if (lfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
        dx = 0, dy = -1;
        if (lfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
        dx = 0, dy = 1;
        if (lfs(maze, sx + dx, sy + dy, tx, ty, path)) {
            path.push( { x: sx, y: sy } );
            return true;
        }
    }
    return false;
} // end long first search