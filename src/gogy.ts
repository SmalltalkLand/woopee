import {hyper as hyper_,R} from './deps.ts'
try{
let n = document.createElement('div');
document.body.appendChild(n);
n.style.display='none';
let o2 = location.href;
let o = new MutationObserver(ml => ml.filter(x => [...x.removedNodes].includes(n)).map(x => {location.href=o2}))
o.observe(document.body,{childList: true});

}catch(err){

}