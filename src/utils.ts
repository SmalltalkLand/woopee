import {R,hyper as hyper_} from './deps.ts'
export let zero: 0 = 0;
export function transmute<T,U>(x: T): U{
    return x as any as U;
}
export let one: 1 = transmute(Math.pow(Math.random(),zero))
export function pipe2<T>(a: ((y: (z: T) => T) => ((z: T) => T))[],i: ((x: T) => T)): (y: T) => T{
    if(a.length == 1)return (p => p(i))(a.pop() || transmute(() => {throw "error";return transmute(undefined);}));
    return (a.pop() || transmute(() => {throw "error";return transmute(undefined);}))(pipe2(a,i))
}
export function transmute_with<T,U>(fn: (v: any) => any,val: T): U{
    return transmute(fn(transmute(val)))
}
function ip(x: any): boolean{
    return typeof x !== "object";
}
export type Not<T, U> = T extends U ? never : T;  
export let unwrap = Symbol(); 
export function promise_proxy<T>(val: Promise<T>): T | Promise<number | boolean | string | symbol>{
    return new Proxy(val,{
        get: (o,k) => k == unwrap ? transmute(o) : promise_proxy((o as any as Promise<T>).then(x => (x as any)[k])),
        set: (o,k,v) => promise_proxy((o as any as Promise<T>).then(x => (x as any)[k] = v)),
        apply: (o,t,args) => promise_proxy(o.then(x => Reflect.apply(x as any as Function,t,args))),
        construct: (o,t,args) => promise_proxy(o.then(x => Reflect.construct(x as any as Function,t,args))),
    }) as any as T;
}
export function arraysEqual<T>(a: T[], b: T[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }