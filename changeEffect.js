export const defaultBSTUIConfig={
    HIGHLIGHT_TIME:1000,
    HIGHLIGHT_CLASS:'node__element--highlight',
};
class binarySearchTreeUI{
    highlightTimer=null;
    actionButton;
    treeContain;

    constructor(tree,render,
        treeContain='.node',
        actionButton='.button-action',
        config={
            HIGHLIGHT_TIME:1000,
            HIGHLIGHT_CLASS:'node__element--highlight',
        } ){
        this.treeContain=treeContain;
        this.actionButton=actionButton;
       
        this.tree=tree;
        this.config=config;
        this.render=render || this.renderTree;
        const root=document.documentElement;
         root.style.setProperty(
            '--animation-timing',
            `${this.config.HIGHLIGHT_TIME/1000}s`
         );
        }

        template(){
            return`
            <div class='.allbuttons'>
            <button id="insertNode" class="btn btn-warning">
            Insert Node
            </button>
            <button id="deleteNode" class="btn btn-warning">
            Delete Node
            </button>
            <button id="findMax" class="btn btn-warning">
            Max Node
            </button>
            <button id="findMin" class="btn btn-warning">
            Min Node
            </button>
            <button id="preOrderTraversal" class="btn btn-warning">
            PreOrderTraversal
            </button>
            <button id="inOrderTraversal" class="btn btn-warning">
            InOrderTraversal
            </button>
            <button id="postOrderTraversal" class="btn btn-warning">
            PostOrderTraversal
            </button>
            <button id="deleteTree"
            class="btn btn-warning mid-btn">Delete Tree</button>
            </div>  
            `;
        }
        traverseUINodes(nodes){
            nodes.reduce((i,node)=>{
            return i.then(()=>this.display(node))},
            Promise.resolve());
            
        }
        getTreeUI(node){
            const{left,right,value}=node;
            if(!node){
                return '';
            }
            return `
            <div class="node__element" data__id="${value}">${value}</div>
            ${
                left || right?`
                <div class="node-bottom-line"></div>
                <div class="node-children">
                <div class="node-left child">
                ${left?this.getTreeUI(left):''}</div>
                <div class="node-right child">
                ${right?this.getTreeUI(right):''}</div>
                </div>
                `:''
            }
            `;
        }

    setTemplate(){
        const actionButton=document.querySelector(this.actionButton);
        actionButton.innerHTML=this.template();
    }
    renderTree(
        node=this.tree.root,
        treeContain=this.treeContain
    ){
        const treeDisplay=document.querySelector(treeContain);
        if(!node){
            return (treeDisplay.innerHTML='');
        }
        const template=this.getTreeUI(node);
        treeDisplay.innerHTML=template;
    }
    display({value}){
        console.log(value)
        const nodeEle=document.querySelector(`[data__id="${value}"]`);
       console.log(nodeEle)
       
        if(this.highlightTimer!==null){
            clearTimeout(this.highlightTimer);
           
            nodeEle.classList.remove(this.config.HIGHLIGHT_CLASS);
            this.highlightTimer=null;
            return;

        }

        nodeEle.classList.add(this.config.HIGHLIGHT_CLASS);
        document.querySelectorAll('button').forEach((btn)=>{
            btn.setAttribute('disabled',true);
        });
        return new Promise((resolve)=>{
            this.highlightTimer = setTimeout(() => {
                nodeEle.classList.remove(this.config.HIGHLIGHT_CLASS);
                document.querySelectorAll('button').forEach((btn) => {
                  btn.removeAttribute('disabled');
                });
                this.highlightTimer = null;
                resolve();
              }, this.config.HIGHLIGHT_TIME);
            });
    }

onInsertButtonClick(){
    const element=prompt('Enter element to add to tree');
    if(!element)return;
    const node=this.tree.insert(element);
    
    this.render(this.tree.root);
    
    this.display(node);
    
}
onPostButtonClick(){
const traverse=this.tree.postOrderTraverse();
this.traverseUINodes(traverse)


    
}
onInButtonClick(){
    const traverse=this.tree.inOrderTraverse();
    this.traverseUINodes(traverse)
    
    
        
    }
    onPreButtonClick(){
        const traverse=this.tree.preOrderTraverse();
        this.traverseUINodes(traverse)
        
        
            
        }
        onMinButton(){
            let node=this.tree.minNode();
            if(node){
                this.display(node);
            }else{
                alert('not found')
            }
           
        }
        onMaxButton(){
            let node=this.tree.maxNode();
            if(node){
                this.display(node);
            }else{
                alert('not found')
            }
           
        }
        onMainDeleteButtonClick(){
            this.display(this.tree.root).then(() => {
                this.tree.root = null;
                this.render(this.tree.root);
              });
        }

onDeleteButtonClick(){
    const element=prompt('Enter element to remove to tree');
   
    const removedEl=this.tree.delete(element);
    if(removedEl){
        this.display(removedEl).then(()=>{
            this.render(this.tree.root);
        });
    }
    else if(this.root==null){
        alert('tree is empty')
    }
        else{
        alert('Element not found')
    }
 
   

}
init(){
    this.setTemplate();
    const insertNode=document.querySelector('#insertNode');
    const deleteNode=document.querySelector('#deleteNode');
    const displayInPostOrder=document.querySelector('#postOrderTraversal');
    const displayInInOrder=document.querySelector('#inOrderTraversal');
    const displayInPreOrder=document.querySelector('#preOrderTraversal');
    const displayMinNode=document.querySelector('#findMin');
    const displayMaxNode=document.querySelector('#findMax');
    const deleteTree=document.querySelector('#deleteTree');
    insertNode.addEventListener('click',this.onInsertButtonClick.bind(this));
    deleteNode.addEventListener('click',this.onDeleteButtonClick.bind(this));
    displayInPostOrder.addEventListener('click',this.onPostButtonClick.bind(this));
    displayInInOrder.addEventListener('click',this.onInButtonClick.bind(this));
    displayInPreOrder.addEventListener('click',this.onPreButtonClick.bind(this));
    displayMinNode.addEventListener('click',this.onMinButton.bind(this));
    displayMaxNode.addEventListener('click',this.onMaxButton.bind(this));
    deleteTree.addEventListener('click',this.onMainDeleteButtonClick.bind(this));
}
}
export default binarySearchTreeUI;