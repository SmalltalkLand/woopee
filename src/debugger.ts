self.Debugger = self.Debugger || class{};
let _d=(self as any)._d=[];
let a = {
    apply: (o,t,args) => {
        
    },
};
Function.prototype.constructor = new Proxy(Function.prototype.constructor,{
apply: (o,t,args) => new Proxy(Reflect.apply(o,t,args),a)
})