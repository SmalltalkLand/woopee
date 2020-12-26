import {w,argv} from './worker.ts'
import {R,hyper,$,LzString} from './deps.ts'
import {promise_proxy,unwrap,transmute} from './utils.ts'
let fw = new Proxy(class{},{construct: (o,args,t) => (navigator.serviceWorker.register(args[0]).then(x => transmute(navigator.serviceWorker).x = x), navigator.serviceWorker)});
let fw2 = argv[0] == 'worker' ? undefined : w({Worker: fw,prepend: '',argv: ['worker']});
let wb_ = argv[0] == 'worker' ? import('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js').then(x => true) : Promise.resolve(false);
if(argv[0] == 'worker')Object.keys((self as any).workbox).map(x => (self as any).workbox[x]);
let wb = await wb_;
if(wb)(self as any).workbox.recipies.offlineFallback();
if(fw2 !== undefined){
    
}
if(argv[0] !== "nohash"){
    let hash = location.hash;
    let h64 = atob(hash);
    let parsed = JSON.parse(h64);
}