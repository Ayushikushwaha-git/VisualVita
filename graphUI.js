class graphUI{
    actionButton;
    constructor(g1,render,
        graphContain='mainGraph',
        actionButton='.button-action'){
            this.g1=g1;
            this.render=render;
            this.graphContain=graphContain;
            this.actionButton=actionButton;

        console.log(g1)
       
        this.actionButton=actionButton;

    }
    template(){
        return`
        <div class='.allbuttons'>
        <button id="createGraph" class="btn btn-warning">
        Create Graph
        </button>
       <input id="start" type="button" value="Enter start Node"></input>
        <button id="dfsTraversal" class="btn btn-warning">
        DFS Traversal
        </button>
        <button id="bfsTraversal" class="btn btn-warning">
        BFS Traversal
        </button>
       
        <button id="deleteGraph"
        class="btn btn-warning mid-btn2">Delete Tree</button>
        </div>  
        `;
    }
    graphTemplate(){
        return `
        <div class="mainGraph">
               
   
        
    <div class="node" id="node1" >0</div>
    <div class="node" id="node2">1</div>
    <div class="node"id="node3">2</div>
    <div class="node"id="node5">4</div>
    <div class="node"id="node6">5</div>
    <div class="node"id="node4">3</div>
   
    
   
            </div>
            <div class="edge"></div>
           
            <div class="edge"
            style="left: 695px;
            top:340px;
            transform: rotate(59deg);
            height: 20%;"></div>
            <div class="edge"
            style="left: 520px;
            top:387px;
            transform: rotate(299deg);
            height: 114px"></div>
            <div class="edge"
            style="left: 970px;
            top:200px;
            transform: rotate(90deg);
            height: 50%;"></div>
            
            <div class="edge"
            style="left: 695px;
            top:290px;
            transform: rotate(302deg);
            height: 20%;"></div>`;
    }
  

    
    OnCreateButtonClick(){
        const createAction=document.querySelector(this.graphContain)
        createAction.innerHTML=this.graphTemplate();
       
 var one=document.getElementById('node1');
   var two=document.getElementById('node2');
  var three=document.getElementById('node3');
  var four=document.getElementById('node4');
   var five=document.getElementById('node5');
  var six=document.getElementById('node6');
 
  var content1=one.innerHTML;
  let content2=two.innerHTML;
 
 let content3=three.innerHTML;
 let content4=four.innerHTML;
 let content5=five.innerHTML;
 let content6=six.innerHTML;
 

 
  this.g1.addEdge(content1,content2);
 this.g1.addEdge(content2,content4);
 this.g1.addEdge(content3,content4);
 this.g1.addEdge(content4,content5);
 this.g1.addEdge(content5,content6);
 

    }
   
    OndeleteButtonClick(){
        const createAction=document.querySelector(this.graphContain)
        createAction.innerHTML='';
    }
    OnStartButtonClick(){
        let m=prompt("enter a number")
   
       

        if(this.g1.adj.has(m)){
            
                document.getElementById('bfsTraversal').addEventListener("click", ()=> {
                    this.g1.BFS(m);   
                 });
                 document.getElementById('dfsTraversal').addEventListener("click", ()=> {
                    this.g1.DFS(m);   
                 });
                }   
    }
    setTemplate(){
        const actionButton=document.querySelector(this.actionButton);
        actionButton.innerHTML=this.template();

    }
init(){
this.setTemplate();
const createGraph=document.querySelector('#createGraph');
const deleteGraph=document.querySelector('#deleteGraph');
const startNode=document.querySelector('#start');
createGraph.addEventListener('click',this.OnCreateButtonClick.bind(this))
deleteGraph.addEventListener('click',this.OndeleteButtonClick.bind(this))
startNode.addEventListener('click',this.OnStartButtonClick.bind(this))
}}
export default graphUI;