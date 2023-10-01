
class Graph{
    
    adj;
    constructor(v ){
        this.v=v;
        this.adj=new Map();
       
       
        
    }
    addVertex(v)
    {
        this.adj.set(v, new Set());
    }
addEdge(v,w){
    if (!this.adj.has(v)) {
        this.addVertex(v);
    }
    if (!this.adj.has(w)) {
        this.addVertex(w);
    }
   
    
this.adj.get(v).add(w)
    this.adj.get(w).add(v);  
     for(let i of this.adj.get(v).values()){
        
 }

}



getElementIdByInnerHTML(targetInnerHTML) {
    
    const elements = document.querySelectorAll('.node'); 

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML === targetInnerHTML) {
            return elements[i].id;
        }
    }

    return null; // Return null if the element with the specified innerHTML value is not found
}
display(value,delay){
   
    let  nodeEle=this.getElementIdByInnerHTML(value);
    console.log(delay)
    setTimeout(function() {
        document.getElementById(nodeEle).style.backgroundColor = "darkblue";
      }, delay);
   
  
}
 

BFS(v){
    let visited=new Array(this.v);
    for(let i=0;i<this.v;i++){
        visited[i]=false;

    }
    let queue=[];
    visited[v]=true;
    queue.push(v);
    let k=1;
    const highlightVertex = (vertex, delay) => {
        setTimeout(() => {
            this.display(vertex);
        }, delay);
    };
    while(queue.length!==0){
       v= queue.shift();
      
   
   
        
       for(let i of this.adj.get(v).values()){
        let delay=1000*k;
        k=k+1;
        let n=i;
         this.display(v,delay+10)
       
        if(!visited[n]){
            visited[n]=true;
            queue.push(n);
            highlightVertex(n, delay);
        }
       }
    }
}
DFSutil(v,visited){
    visited[v]=true;
   
    let k=1;
    const highlightVertex = (vertex, delay) => {
        setTimeout(() => {
            this.display(vertex);
        }, delay);
    };
    
    for(let i of this.adj.get(v).values()){
        let delay=1000*k;
        k=k+1;
        let n=i;
      
        if(!visited[n]){
           
            this.DFSutil(n,visited)
            highlightVertex(n, delay);
        }
    }
}
DFS(v){

    let visited=new Array(this.v);
    for(let i=0;i<this.v;i++){
        visited[i]=false;

    }
    
    if (this.adj.has(v)) { 
        // Check if v exists in the graph
        this.display(v,1000)
        this.DFSutil(v, visited);
    }
}
}
export default Graph;