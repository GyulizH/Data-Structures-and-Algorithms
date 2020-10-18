//two major types of graphs directed and undirected
//three ways to represent graphs
//1. Adjacency list
/*
  example:
  let undirectedG = {
    NodeA: ["NodeB"],
    NodeB: ["NodeA","NodeC"],
    NodeC: ["NodeB"]
  }
 */

//Adjacency Matrix
/*
 var adjMat = [
   [0,1,0],
   [1,0,1],
   [0,1,0]
 ]
 */
//3. Incidence Matrix
//rows to represent nodes
//columns to represent edges
/*
  let incMatDirected = [
    [1,0,-1,1],
    [-1,1,0,0],
    [0,-1,1,0],
    [0,0,0,-1]
  ]
 */

//GRAPH TRAVERSAL - algorithms to visit graphs
// how far away every node is from the first node

function bfs(graph,root) {
   let nodesLen = {}

   for(let i=0; i<graph.length; i++){
       nodesLen[i] = Infinity
   }
   nodesLen[root] = 0 //distance to root node from the root node

   let queue = [root]
   let current

   while(queue.length !=0) {
       current = queue.shift()

       let curConnected = graph[current]
       let neighborIdx = []
       let idx = curConnected.indexOf(1) //find the next node after the previous node we found

       while(idx !== -1){
           neighborIdx.push(idx)
           idx = curConnected.indexOf(1,idx +1)
       }

       for(let j = 0; j<neighborIdx.length; j++){
           if(nodesLen[neighborIdx[j]] === Infinity ){
               nodesLen[neighborIdx[j]] = nodesLen[current] + 1
               queue.push(neighborIdx[j])
           }
       }
   }
   return nodesLen
}

let arr = [[0,1,1,1,0],[0,0,1,0,0],[1,1,0,0,0],[0,0,0,1,0],[0,1,0,0,0]]
console.log(bfs(arr,0))
