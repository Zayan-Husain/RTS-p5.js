//Depth First Search
function dfs(maze, sx, sy, tx, ty, path) {
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