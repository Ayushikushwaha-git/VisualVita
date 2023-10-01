
class Node{
  constructor(value,data){
   this.value=value;
      this.parent=data || null;
      this.left=null;
      this.right=null;
  }
  get isLeaf() {
    return this.left === null && this.right === null;
  }

}

const comparingNumbers=(a,b)=>{
  if(Number(a)==Number(b)){
    
    return 0;}
   else if( Number(a)<Number(b)){
    
    return -1;
   }else{
    
    return 1;
   }
 

};
class binarySearchTree{
  root;
  compareFun;
    constructor(compareFun=comparingNumbers){
       this.root=null; 
       this.compareFun=compareFun; 
    }
//inserting method
    insert(value){
      let node=this.root;
      let insertNode;
      if(node===null){
        this.root=new Node(value);
        return this.root;
      }
      const nodeInserted=(()=>{
        while(true){
          let compare=this.compareFun(value,node.value);
          if(compare===0){
            insertNode=node;
            return node;
          }
          if(compare===-1){
            if(node.left===null){
               insertNode=new Node(value,node);
              node.left=insertNode;
             return true;

            }
            node=node.left;
           

          }
          if(compare===1){
            if(node.right===null){
               insertNode=new Node(value,node);
              node.right=insertNode;
              return true;

            }
            node=node.right;

          }

        }
        
      })();
      if(nodeInserted){
       
        return insertNode;
      }
    } 
   postOrderTraverse(node=this.root,traversed=[]){
    if(node===null)return traversed;
    if(node.left){
      traversed.push(...this.postOrderTraverse(node.left));
    }
    if(node.right){
      traversed.push(...this.postOrderTraverse(node.right));
    }
    traversed.push(node);
    
    return traversed;
   }
   inOrderTraverse(node=this.root,traversed=[]){
    if(node===null)return traversed;
    if(node.left){
      traversed.push(...this.inOrderTraverse(node.left));
    }
    traversed.push(node);
    if(node.right){
      traversed.push(...this.inOrderTraverse(node.right));
    }
   
    
    return traversed;
   }
   preOrderTraverse(node=this.root,traversed=[]){
    if(node===null)return traversed;
    traversed.push(node);
    if(node.left){
      traversed.push(...this.preOrderTraverse(node.left));
    }
    if(node.right){
      traversed.push(...this.preOrderTraverse(node.right));
    }
   
    
    return traversed;
   }
   findElement(value) {
    
    return this.postOrderTraverse().find((node) => node.value === value);
  }
  
  
    delete(value,node){
    node=node?node:this.findElement(value);
    if(!node)return null;
    const nodeIsRoot=node.parent===null;
    const hasBothChildren=node.left!==null && node.right!==null;
    const isLeftChild=!nodeIsRoot?node.parent.left===node:false;
    if(node.isLeaf){
      if(nodeIsRoot){
        this.root=null;
      }else if(isLeftChild){
        node.parent.left=null;
      }else{
        node.parent.right=null;
      }
      return node;
    }
    if(!hasBothChildren){
      const child=node.left!==null?node.left:node.right;
      if(nodeIsRoot){
        this.root=child;
      }else if(isLeftChild){
node.parent.left=child;
      }else{
        node.parent.right=child;
      }
      child.parent=node.parent;
    }

    if(hasBothChildren){
      if(nodeIsRoot){
        let v=node.right;
        this.root=node.left;
        this.root.right=v;
      }
     else if(isLeftChild){
      node.parent.left=node.left;
      node.left.right=node.right;
      node.right.parent=node.left;
      }else{
        node.parent.right=node.left;
        node.left.right=node.right;
        node.right.parent=node.left;

      }
    }
   return node;
    }
 
    minNode(node=this.root){
      let curr=node;
      while(curr!=null && curr.left!==null){
        curr=curr.left;
      }
      return curr;
    }
    maxNode(node=this.root){
      let curr=node;
      while(curr!=null && curr.right!==null){
        curr=curr.right;
      }
      return curr;
    }

  }



    
        
    
    



 export default binarySearchTree;