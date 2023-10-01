
import binarySearchTreeUI from './changeEffect.js';
import binarySearchTree from './binarySearchTree.js';

const main=()=>{
const bn=new binarySearchTree();

const bstUI=new binarySearchTreeUI(bn,null,'.node');
bstUI.init();
bstUI.render();

};
main();