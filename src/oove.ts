export function oove<T>(obj: T): T & {valueOf: () => 3}{
    let curr: T[]=[];
    return new Proxy(obj as any as object,{
        get: (o,k) => k == "valueOf" ? () => {curr.push(o as any as T);return 3;}: o[k],
        construct: (o: any,args,t,a?) => curr ? (a=[0,1,3*curr.length,Math.pow(3,curr.length)].includes(args[0])?curr.length?o[["sub","div","add","mul"][a.indexOf(args[0])]](((b) => (b=curr,curr=[],b))()):Reflect.construct(o,args,t):Reflect.construct(o,args,t)) : Reflect.construct(o,args,t)
    }) as any as T & {valueOf: () => 3}
}