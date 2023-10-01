
 import graphUI from './graphUI.js';
import Graph from './graph1.js';

const main=()=>{
   
const g1=new Graph(6);
const graphU=new graphUI(g1,null,'#diagram');
graphU.init();

};
main();