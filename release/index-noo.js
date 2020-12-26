let w = async ({ Worker: Worker1 , prepend , argv  })=>new Worker1(URL.createObjectURL(`self['argv_${Math.random()}']=[${argv.map((x)=>`decodeUriComponent(btoa('${atob(encodeURIComponent(x))}'))`
    ).join(',')}]` + prepend + await (await fetch(eval('import.meta.url'))).text()))
;
let argv = Object.keys(self).filter((x)=>x.startsWith('argv_')
).map((x)=>self[x]
)[0] || (eval('Deno') ? eval('Deno').args : []);
function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}
function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1;
        } else {
            return fn.apply(this, arguments);
        }
    };
}
function _curry2(fn) {
    return function f2(a, b) {
        switch(arguments.length){
            case 0:
                return f2;
            case 1:
                return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
                    return fn(a, _b);
                });
            default:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
                    return fn(_a, b);
                }) : _isPlaceholder(b) ? _curry1(function(_b) {
                    return fn(a, _b);
                }) : fn(a, b);
        }
    };
}
var add1 = _curry2(function add2(a, b) {
    return Number(a) + Number(b);
});
function _concat(set1, set22) {
    set1 = set1 || [];
    set22 = set22 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set22.length;
    var result = [];
    idx = 0;
    while(idx < len1){
        result[result.length] = set1[idx];
        idx += 1;
    }
    idx = 0;
    while(idx < len2){
        result[result.length] = set22[idx];
        idx += 1;
    }
    return result;
}
function _arity(n, fn) {
    switch(n){
        case 0:
            return function() {
                return fn.apply(this, arguments);
            };
        case 1:
            return function(a0) {
                return fn.apply(this, arguments);
            };
        case 2:
            return function(a0, a1) {
                return fn.apply(this, arguments);
            };
        case 3:
            return function(a0, a1, a2) {
                return fn.apply(this, arguments);
            };
        case 4:
            return function(a0, a1, a2, a3) {
                return fn.apply(this, arguments);
            };
        case 5:
            return function(a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
            };
        case 6:
            return function(a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
            };
        case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
            };
        case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
            };
        case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
            };
        case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
            };
        default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
}
function _curryN(length3, received, fn) {
    return function() {
        var combined = [];
        var argsIdx = 0;
        var left = length3;
        var combinedIdx = 0;
        while(combinedIdx < received.length || argsIdx < arguments.length){
            var result;
            if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
                result = received[combinedIdx];
            } else {
                result = arguments[argsIdx];
                argsIdx += 1;
            }
            combined[combinedIdx] = result;
            if (!_isPlaceholder(result)) {
                left -= 1;
            }
            combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length3, combined, fn));
    };
}
var curryN = _curry2(function curryN2(length3, fn) {
    if (length3 === 1) {
        return _curry1(fn);
    }
    return _arity(length3, _curryN(length3, [], fn));
});
function _curry3(fn) {
    return function f3(a, b, c) {
        switch(arguments.length){
            case 0:
                return f3;
            case 1:
                return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
                    return fn(a, _b, _c);
                });
            case 2:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
                    return fn(_a, b, _c);
                }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
                    return fn(a, _b, _c);
                }) : _curry1(function(_c) {
                    return fn(a, b, _c);
                });
            default:
                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
                    return fn(_a, _b, c);
                }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
                    return fn(_a, b, _c);
                }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
                    return fn(a, _b, _c);
                }) : _isPlaceholder(a) ? _curry1(function(_a) {
                    return fn(_a, b, c);
                }) : _isPlaceholder(b) ? _curry1(function(_b) {
                    return fn(a, _b, c);
                }) : _isPlaceholder(c) ? _curry1(function(_c) {
                    return fn(a, b, _c);
                }) : fn(a, b, c);
        }
    };
}
var adjust = _curry3(function adjust2(idx, fn, list) {
    if (idx >= list.length || idx < -list.length) {
        return list;
    }
    var start = idx < 0 ? list.length : 0;
    var _idx = start + idx;
    var _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
});
var _isArray = Array.isArray || function _isArray2(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};
function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
}
function _dispatchable(methodNames, xf, fn) {
    return function() {
        if (arguments.length === 0) {
            return fn();
        }
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!_isArray(obj)) {
            var idx = 0;
            while(idx < methodNames.length){
                if (typeof obj[methodNames[idx]] === "function") {
                    return obj[methodNames[idx]].apply(obj, args);
                }
                idx += 1;
            }
            if (_isTransformer(obj)) {
                var transducer = xf.apply(null, args);
                return transducer(obj);
            }
        }
        return fn.apply(this, arguments);
    };
}
function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
        "@@transducer/value": x,
        "@@transducer/reduced": true
    };
}
var _xfBase = {
    init: function() {
        return this.xf["@@transducer/init"]();
    },
    result: function(result) {
        return this.xf["@@transducer/result"](result);
    }
};
var XAll = function() {
    function XAll2(f, xf) {
        this.xf = xf;
        this.f = f;
        this.all = true;
    }
    XAll2.prototype["@@transducer/init"] = _xfBase.init;
    XAll2.prototype["@@transducer/result"] = function(result) {
        if (this.all) {
            result = this.xf["@@transducer/step"](result, true);
        }
        return this.xf["@@transducer/result"](result);
    };
    XAll2.prototype["@@transducer/step"] = function(result, input) {
        if (!this.f(input)) {
            this.all = false;
            result = _reduced(this.xf["@@transducer/step"](result, false));
        }
        return result;
    };
    return XAll2;
}();
var _xall = _curry2(function _xall2(f, xf) {
    return new XAll(f, xf);
});
var all = _curry2(_dispatchable([
    "all"
], _xall, function all2(fn, list) {
    var idx = 0;
    while(idx < list.length){
        if (!fn(list[idx])) {
            return false;
        }
        idx += 1;
    }
    return true;
}));
var max = _curry2(function max2(a, b) {
    return b > a ? b : a;
});
function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while(idx < len){
        result[idx] = fn(functor[idx]);
        idx += 1;
    }
    return result;
}
function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}
var _isArrayLike = _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
        return true;
    }
    if (!x) {
        return false;
    }
    if (typeof x !== "object") {
        return false;
    }
    if (_isString(x)) {
        return false;
    }
    if (x.nodeType === 1) {
        return !!x.length;
    }
    if (x.length === 0) {
        return true;
    }
    if (x.length > 0) {
        return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
});
var XWrap = function() {
    function XWrap2(fn) {
        this.f = fn;
    }
    XWrap2.prototype["@@transducer/init"] = function() {
        throw new Error("init not implemented on XWrap");
    };
    XWrap2.prototype["@@transducer/result"] = function(acc) {
        return acc;
    };
    XWrap2.prototype["@@transducer/step"] = function(acc, x) {
        return this.f(acc, x);
    };
    return XWrap2;
}();
function _xwrap(fn) {
    return new XWrap(fn);
}
var bind = _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
        return fn.apply(thisObj, arguments);
    });
});
function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        acc = xf["@@transducer/step"](acc, list[idx]);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        idx += 1;
    }
    return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while(!step.done){
        acc = xf["@@transducer/step"](acc, step.value);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        step = iter.next();
    }
    return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
}
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn, acc, list) {
    if (typeof fn === "function") {
        fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
        return _methodReduce(fn, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
        return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
        return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === "function") {
        return _methodReduce(fn, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
}
var XMap = function() {
    function XMap2(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XMap2.prototype["@@transducer/init"] = _xfBase.init;
    XMap2.prototype["@@transducer/result"] = _xfBase.result;
    XMap2.prototype["@@transducer/step"] = function(result, input) {
        return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap2;
}();
var _xmap = _curry2(function _xmap2(f, xf) {
    return new XMap(f, xf);
});
function _has(prop3, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop3);
}
var toString = Object.prototype.toString;
var _isArguments = function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
        return toString.call(x) === "[object Arguments]";
    } : function _isArguments2(x) {
        return _has("callee", x);
    };
}();
var hasEnumBug = !({
    toString: null
}).propertyIsEnumerable("toString");
var nonEnumerableProps = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
];
var hasArgsEnumBug = function() {
    return arguments.propertyIsEnumerable("length");
}();
var contains1 = function contains2(list, item) {
    var idx = 0;
    while(idx < list.length){
        if (list[idx] === item) {
            return true;
        }
        idx += 1;
    }
    return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
}) : _curry1(function keys3(obj) {
    if (Object(obj) !== obj) {
        return [];
    }
    var prop3, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for(prop3 in obj){
        if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
            ks[ks.length] = prop3;
        }
    }
    if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while(nIdx >= 0){
            prop3 = nonEnumerableProps[nIdx];
            if (_has(prop3, obj) && !contains1(ks, prop3)) {
                ks[ks.length] = prop3;
            }
            nIdx -= 1;
        }
    }
    return ks;
});
var map = _curry2(_dispatchable([
    "fantasy-land/map",
    "map"
], _xmap, function map2(fn, functor) {
    switch(Object.prototype.toString.call(functor)){
        case "[object Function]":
            return curryN(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
            });
        case "[object Object]":
            return _reduce(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
            }, {
            }, keys(functor));
        default:
            return _map(fn, functor);
    }
}));
var _isInteger = Number.isInteger || function _isInteger2(n) {
    return n << 0 === n;
};
var nth = _curry2(function nth2(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
});
var paths = _curry2(function paths2(pathsArray, obj) {
    return pathsArray.map(function(paths3) {
        var val = obj;
        var idx = 0;
        var p;
        while(idx < paths3.length){
            if (val == null) {
                return;
            }
            p = paths3[idx];
            val = _isInteger(p) ? nth(p, val) : val[p];
            idx += 1;
        }
        return val;
    });
});
var path = _curry2(function path2(pathAr, obj) {
    return paths([
        pathAr
    ], obj)[0];
});
var prop = _curry2(function prop2(p, obj) {
    return path([
        p
    ], obj);
});
var pluck = _curry2(function pluck2(p, list) {
    return map(prop(p), list);
});
var reduce = _curry3(_reduce);
var always = _curry1(function always2(val) {
    return function() {
        return val;
    };
});
var and = _curry2(function and2(a, b) {
    return a && b;
});
var XAny = function() {
    function XAny2(f, xf) {
        this.xf = xf;
        this.f = f;
        this.any = false;
    }
    XAny2.prototype["@@transducer/init"] = _xfBase.init;
    XAny2.prototype["@@transducer/result"] = function(result) {
        if (!this.any) {
            result = this.xf["@@transducer/step"](result, false);
        }
        return this.xf["@@transducer/result"](result);
    };
    XAny2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.any = true;
            result = _reduced(this.xf["@@transducer/step"](result, true));
        }
        return result;
    };
    return XAny2;
}();
var ap = _curry2(function ap2(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
        return applyF(x)(applyX(x));
    } : _reduce(function(acc, f) {
        return _concat(acc, map(f, applyX));
    }, [], applyF);
});
var XAperture = function() {
    function XAperture2(n, xf) {
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n);
    }
    XAperture2.prototype["@@transducer/init"] = _xfBase.init;
    XAperture2.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XAperture2.prototype["@@transducer/step"] = function(result, input) {
        this.store(input);
        return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
    };
    XAperture2.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    XAperture2.prototype.getCopy = function() {
        return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
    };
    return XAperture2;
}();
var apply = _curry2(function apply2(fn, args) {
    return fn.apply(this, args);
});
var values = _curry1(function values2(obj) {
    var props3 = keys(obj);
    var len = props3.length;
    var vals = [];
    var idx = 0;
    while(idx < len){
        vals[idx] = obj[props3[idx]];
        idx += 1;
    }
    return vals;
});
function mapValues(fn, obj) {
    return keys(obj).reduce(function(acc, key) {
        acc[key] = fn(obj[key]);
        return acc;
    }, {
    });
}
var assoc = _curry3(function assoc2(prop3, val, obj) {
    var result = {
    };
    for(var p in obj){
        result[p] = obj[p];
    }
    result[prop3] = val;
    return result;
});
var isNil = _curry1(function isNil2(x) {
    return x == null;
});
var assocPath = _curry3(function assocPath2(path3, val, obj) {
    if (path3.length === 0) {
        return val;
    }
    var idx = path3[0];
    if (path3.length > 1) {
        var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path3[1]) ? [] : {
        };
        val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
        var arr = [].concat(obj);
        arr[idx] = val;
        return arr;
    } else {
        return assoc(idx, val, obj);
    }
});
var nAry = _curry2(function nAry2(n, fn) {
    switch(n){
        case 0:
            return function() {
                return fn.call(this);
            };
        case 1:
            return function(a0) {
                return fn.call(this, a0);
            };
        case 2:
            return function(a0, a1) {
                return fn.call(this, a0, a1);
            };
        case 3:
            return function(a0, a1, a2) {
                return fn.call(this, a0, a1, a2);
            };
        case 4:
            return function(a0, a1, a2, a3) {
                return fn.call(this, a0, a1, a2, a3);
            };
        case 5:
            return function(a0, a1, a2, a3, a4) {
                return fn.call(this, a0, a1, a2, a3, a4);
            };
        case 6:
            return function(a0, a1, a2, a3, a4, a5) {
                return fn.call(this, a0, a1, a2, a3, a4, a5);
            };
        case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
            };
        case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
            };
        case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
            };
        case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            };
        default:
            throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
    }
});
function _isFunction(x) {
    var type3 = Object.prototype.toString.call(x);
    return type3 === "[object Function]" || type3 === "[object AsyncFunction]" || type3 === "[object GeneratorFunction]" || type3 === "[object AsyncGeneratorFunction]";
}
var liftN = _curry2(function liftN2(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function() {
        return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
});
var lift = _curry1(function lift2(fn) {
    return liftN(fn.length, fn);
});
var curry = _curry1(function curry2(fn) {
    return curryN(fn.length, fn);
});
function _makeFlat(recursive) {
    return function flatt(list) {
        var value, jlen, j;
        var result = [];
        var idx = 0;
        var ilen = list.length;
        while(idx < ilen){
            if (_isArrayLike(list[idx])) {
                value = recursive ? flatt(list[idx]) : list[idx];
                j = 0;
                jlen = value.length;
                while(j < jlen){
                    result[result.length] = value[j];
                    j += 1;
                }
            } else {
                result[result.length] = list[idx];
            }
            idx += 1;
        }
        return result;
    };
}
function _forceReduced(x) {
    return {
        "@@transducer/value": x,
        "@@transducer/reduced": true
    };
}
var preservingReduced = function(xf) {
    return {
        "@@transducer/init": _xfBase.init,
        "@@transducer/result": function(result) {
            return xf["@@transducer/result"](result);
        },
        "@@transducer/step": function(result, input) {
            var ret = xf["@@transducer/step"](result, input);
            return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
        }
    };
};
var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
        "@@transducer/init": _xfBase.init,
        "@@transducer/result": function(result) {
            return rxf["@@transducer/result"](result);
        },
        "@@transducer/step": function(result, input) {
            return !_isArrayLike(input) ? _reduce(rxf, result, [
                input
            ]) : _reduce(rxf, result, input);
        }
    };
};
var _xchain = _curry2(function _xchain2(f, xf) {
    return map(f, _flatCat(xf));
});
var chain = _curry2(_dispatchable([
    "fantasy-land/chain",
    "chain"
], _xchain, function chain2(fn, monad) {
    if (typeof monad === "function") {
        return function(x) {
            return fn(monad(x))(x);
        };
    }
    return _makeFlat(false)(map(fn, monad));
}));
function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
}
var type1 = _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
function _clone(value, refFrom, refTo, deep) {
    var copy = function copy2(copiedValue) {
        var len = refFrom.length;
        var idx = 0;
        while(idx < len){
            if (value === refFrom[idx]) {
                return refTo[idx];
            }
            idx += 1;
        }
        refFrom[idx + 1] = value;
        refTo[idx + 1] = copiedValue;
        for(var key in value){
            copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
        }
        return copiedValue;
    };
    switch(type1(value)){
        case "Object":
            return copy({
            });
        case "Array":
            return copy([]);
        case "Date":
            return new Date(value.valueOf());
        case "RegExp":
            return _cloneRegExp(value);
        default:
            return value;
    }
}
function _pipe(f, g) {
    return function() {
        return g.call(this, f.apply(this, arguments));
    };
}
function _checkForMethod(methodname, fn) {
    return function() {
        var length3 = arguments.length;
        if (length3 === 0) {
            return fn();
        }
        var obj = arguments[length3 - 1];
        return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
    };
}
var slice = _curry3(_checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
var tail = _curry1(_checkForMethod("tail", slice(1, Infinity)));
function pipe() {
    if (arguments.length === 0) {
        throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}
var reverse = _curry1(function reverse2(list) {
    return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
});
function compose() {
    if (arguments.length === 0) {
        throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse(arguments));
}
function composeK() {
    if (arguments.length === 0) {
        throw new Error("composeK requires at least one argument");
    }
    var init2 = Array.prototype.slice.call(arguments);
    var last2 = init2.pop();
    return compose(compose.apply(this, map(chain, init2)), last2);
}
function _pipeP(f, g) {
    return function() {
        var ctx = this;
        return f.apply(ctx, arguments).then(function(x) {
            return g.call(ctx, x);
        });
    };
}
function pipeP() {
    if (arguments.length === 0) {
        throw new Error("pipeP requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
}
var head = nth(0);
function _identity(x) {
    return x;
}
var identity = _curry1(_identity);
var pipeWith = _curry2(function pipeWith2(xf, list) {
    if (list.length <= 0) {
        return identity;
    }
    var headList = head(list);
    var tailList = tail(list);
    return _arity(headList.length, function() {
        return _reduce(function(result, f) {
            return xf.call(this, f, result);
        }, headList.apply(this, arguments), tailList);
    });
});
function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while(!(next = iter.next()).done){
        list.push(next.value);
    }
    return list;
}
function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        if (pred(x, list[idx])) {
            return true;
        }
        idx += 1;
    }
    return false;
}
function _functionName(f) {
    var match3 = String(f).match(/^function (\w*)/);
    return match3 == null ? "" : match3[1];
}
function _objectIs(a, b) {
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    } else {
        return a !== a && b !== b;
    }
}
var _objectIs$1 = typeof Object.is === "function" ? Object.is : _objectIs;
function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
}
var pad = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
    return d.toISOString();
} : function _toISOString3(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + "Z";
};
function _complement(f) {
    return function() {
        return !f.apply(this, arguments);
    };
}
function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while(idx < len){
        if (fn(list[idx])) {
            result[result.length] = list[idx];
        }
        idx += 1;
    }
    return result;
}
function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
}
var XFilter = function() {
    function XFilter2(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XFilter2.prototype["@@transducer/init"] = _xfBase.init;
    XFilter2.prototype["@@transducer/result"] = _xfBase.result;
    XFilter2.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter2;
}();
var _xfilter = _curry2(function _xfilter2(f, xf) {
    return new XFilter(f, xf);
});
var filter = _curry2(_dispatchable([
    "filter"
], _xfilter, function(pred, filterable) {
    return _isObject(filterable) ? _reduce(function(acc, key) {
        if (pred(filterable[key])) {
            acc[key] = filterable[key];
        }
        return acc;
    }, {
    }, keys(filterable)) : _filter(pred, filterable);
}));
var reject = _curry2(function reject2(pred, filterable) {
    return filter(_complement(pred), filterable);
});
var constructN = _curry2(function constructN2(n, Fn) {
    if (n > 10) {
        throw new Error("Constructor with greater than ten arguments");
    }
    if (n === 0) {
        return function() {
            return new Fn();
        };
    }
    return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
        switch(arguments.length){
            case 1:
                return new Fn($0);
            case 2:
                return new Fn($0, $1);
            case 3:
                return new Fn($0, $1, $2);
            case 4:
                return new Fn($0, $1, $2, $3);
            case 5:
                return new Fn($0, $1, $2, $3, $4);
            case 6:
                return new Fn($0, $1, $2, $3, $4, $5);
            case 7:
                return new Fn($0, $1, $2, $3, $4, $5, $6);
            case 8:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
            case 9:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
            case 10:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
        }
    }));
});
var converge = _curry2(function converge2(after, fns) {
    return curryN(reduce(max, 0, pluck("length", fns)), function() {
        var args = arguments;
        var context = this;
        return after.apply(context, _map(function(fn) {
            return fn.apply(context, args);
        }, fns));
    });
});
var XReduceBy = function() {
    function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
        this.valueFn = valueFn;
        this.valueAcc = valueAcc;
        this.keyFn = keyFn;
        this.xf = xf;
        this.inputs = {
        };
    }
    XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
    XReduceBy2.prototype["@@transducer/result"] = function(result) {
        var key;
        for(key in this.inputs){
            if (_has(key, this.inputs)) {
                result = this.xf["@@transducer/step"](result, this.inputs[key]);
                if (result["@@transducer/reduced"]) {
                    result = result["@@transducer/value"];
                    break;
                }
            }
        }
        this.inputs = null;
        return this.xf["@@transducer/result"](result);
    };
    XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
        var key = this.keyFn(input);
        this.inputs[key] = this.inputs[key] || [
            key,
            this.valueAcc
        ];
        this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
        return result;
    };
    return XReduceBy2;
}();
var defaultTo = _curry2(function defaultTo2(d, v) {
    return v == null || v !== v ? d : v;
});
var differenceWith = _curry3(function differenceWith2(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while(idx < firstLen){
        if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
            out.push(first[idx]);
        }
        idx += 1;
    }
    return out;
});
var dissoc = _curry2(function dissoc2(prop3, obj) {
    var result = {
    };
    for(var p in obj){
        result[p] = obj[p];
    }
    delete result[prop3];
    return result;
});
var remove = _curry3(function remove2(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
});
var update1 = _curry3(function update2(idx, x, list) {
    return adjust(idx, always(x), list);
});
var XDrop = function() {
    function XDrop2(n, xf) {
        this.xf = xf;
        this.n = n;
    }
    XDrop2.prototype["@@transducer/init"] = _xfBase.init;
    XDrop2.prototype["@@transducer/result"] = _xfBase.result;
    XDrop2.prototype["@@transducer/step"] = function(result, input) {
        if (this.n > 0) {
            this.n -= 1;
            return result;
        }
        return this.xf["@@transducer/step"](result, input);
    };
    return XDrop2;
}();
var _xdrop = _curry2(function _xdrop2(n, xf) {
    return new XDrop(n, xf);
});
var drop = _curry2(_dispatchable([
    "drop"
], _xdrop, function drop2(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
}));
var XTake = function() {
    function XTake2(n, xf) {
        this.xf = xf;
        this.n = n;
        this.i = 0;
    }
    XTake2.prototype["@@transducer/init"] = _xfBase.init;
    XTake2.prototype["@@transducer/result"] = _xfBase.result;
    XTake2.prototype["@@transducer/step"] = function(result, input) {
        this.i += 1;
        var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
        return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
    };
    return XTake2;
}();
var _xtake = _curry2(function _xtake2(n, xf) {
    return new XTake(n, xf);
});
var take = _curry2(_dispatchable([
    "take"
], _xtake, function take2(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
}));
var XDropLast = function() {
    function XDropLast2(n, xf) {
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n);
    }
    XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLast2.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLast2.prototype["@@transducer/step"] = function(result, input) {
        if (this.full) {
            result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
        }
        this.store(input);
        return result;
    };
    XDropLast2.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    return XDropLast2;
}();
var XDropLastWhile = function() {
    function XDropLastWhile2(fn, xf) {
        this.f = fn;
        this.retained = [];
        this.xf = xf;
    }
    XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
        this.retained = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    };
    XDropLastWhile2.prototype.flush = function(result, input) {
        result = _reduce(this.xf["@@transducer/step"], result, this.retained);
        this.retained = [];
        return this.xf["@@transducer/step"](result, input);
    };
    XDropLastWhile2.prototype.retain = function(result, input) {
        this.retained.push(input);
        return result;
    };
    return XDropLastWhile2;
}();
var XDropRepeatsWith = function() {
    function XDropRepeatsWith2(pred, xf) {
        this.xf = xf;
        this.pred = pred;
        this.lastValue = void 0;
        this.seenFirstValue = false;
    }
    XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
    XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
    XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
        var sameAsLast = false;
        if (!this.seenFirstValue) {
            this.seenFirstValue = true;
        } else if (this.pred(this.lastValue, input)) {
            sameAsLast = true;
        }
        this.lastValue = input;
        return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
    };
    return XDropRepeatsWith2;
}();
var last = nth(-1);
var XDropWhile = function() {
    function XDropWhile2(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f) {
            if (this.f(input)) {
                return result;
            }
            this.f = null;
        }
        return this.xf["@@transducer/step"](result, input);
    };
    return XDropWhile2;
}();
var or = _curry2(function or2(a, b) {
    return a || b;
});
var empty = _curry1(function empty2(x) {
    return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {
    } : _isArguments(x) ? function() {
        return arguments;
    }() : void 0;
});
var takeLast = _curry2(function takeLast2(n, xs) {
    return drop(n >= 0 ? xs.length - n : 0, xs);
});
var XFind = function() {
    function XFind2(f, xf) {
        this.xf = xf;
        this.f = f;
        this.found = false;
    }
    XFind2.prototype["@@transducer/init"] = _xfBase.init;
    XFind2.prototype["@@transducer/result"] = function(result) {
        if (!this.found) {
            result = this.xf["@@transducer/step"](result, void 0);
        }
        return this.xf["@@transducer/result"](result);
    };
    XFind2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, input));
        }
        return result;
    };
    return XFind2;
}();
var XFindIndex = function() {
    function XFindIndex2(f, xf) {
        this.xf = xf;
        this.f = f;
        this.idx = -1;
        this.found = false;
    }
    XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindIndex2.prototype["@@transducer/result"] = function(result) {
        if (!this.found) {
            result = this.xf["@@transducer/step"](result, -1);
        }
        return this.xf["@@transducer/result"](result);
    };
    XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
        this.idx += 1;
        if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, this.idx));
        }
        return result;
    };
    return XFindIndex2;
}();
var XFindLast = function() {
    function XFindLast2(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLast2.prototype["@@transducer/result"] = function(result) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
    };
    XFindLast2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.last = input;
        }
        return result;
    };
    return XFindLast2;
}();
var XFindLastIndex = function() {
    function XFindLastIndex2(f, xf) {
        this.xf = xf;
        this.f = f;
        this.idx = -1;
        this.lastIdx = -1;
    }
    XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
    };
    XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
        this.idx += 1;
        if (this.f(input)) {
            this.lastIdx = this.idx;
        }
        return result;
    };
    return XFindLastIndex2;
}();
var flip = _curry1(function flip2(fn) {
    return curryN(fn.length, function(a, b) {
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = b;
        args[1] = a;
        return fn.apply(this, args);
    });
});
var hasPath = _curry2(function hasPath2(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
        return false;
    }
    var val = obj;
    var idx = 0;
    while(idx < _path.length){
        if (!isNil(val) && _has(_path[idx], val)) {
            val = val[_path[idx]];
            idx += 1;
        } else {
            return false;
        }
    }
    return true;
});
function _objectAssign(target) {
    if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length3 = arguments.length;
    while(idx < length3){
        var source = arguments[idx];
        if (source != null) {
            for(var nextKey in source){
                if (_has(nextKey, source)) {
                    output[nextKey] = source[nextKey];
                }
            }
        }
        idx += 1;
    }
    return output;
}
var _objectAssign$1 = typeof Object.assign === "function" ? Object.assign : _objectAssign;
var objOf = _curry2(function objOf2(key, val) {
    var obj = {
    };
    obj[key] = val;
    return obj;
});
var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function(xs, x) {
        xs.push(x);
        return xs;
    },
    "@@transducer/result": _identity
};
var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function(a, b) {
        return a + b;
    },
    "@@transducer/result": _identity
};
var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function(result, input) {
        return _objectAssign$1(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    "@@transducer/result": _identity
};
function _stepCat(obj) {
    if (_isTransformer(obj)) {
        return obj;
    }
    if (_isArrayLike(obj)) {
        return _stepCatArray;
    }
    if (typeof obj === "string") {
        return _stepCatString;
    }
    if (typeof obj === "object") {
        return _stepCatObject;
    }
    throw new Error("Cannot create transformer for " + obj);
}
var is = _curry2(function is2(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
});
function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
}
var length = _curry1(function length2(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
});
var lens = _curry2(function lens2(getter, setter) {
    return function(toFunctorFn) {
        return function(target) {
            return map(function(focus) {
                return setter(focus, target);
            }, toFunctorFn(getter(target)));
        };
    };
});
var sum = reduce(add1, 0);
var mean = _curry1(function mean2(list) {
    return sum(list) / list.length;
});
var mergeWithKey = _curry3(function mergeWithKey2(fn, l, r) {
    var result = {
    };
    var k;
    for(k in l){
        if (_has(k, l)) {
            result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
        }
    }
    for(k in r){
        if (_has(k, r) && !_has(k, result)) {
            result[k] = r[k];
        }
    }
    return result;
});
var mergeDeepWithKey = _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey(function(k, lVal, rVal) {
        if (_isObject(lVal) && _isObject(rVal)) {
            return mergeDeepWithKey2(fn, lVal, rVal);
        } else {
            return fn(k, lVal, rVal);
        }
    }, lObj, rObj);
});
var Identity = function(x) {
    return {
        value: x,
        map: function(f) {
            return Identity(f(x));
        }
    };
};
var over = _curry3(function over2(lens3, f, x) {
    return lens3(function(y) {
        return Identity(f(y));
    })(x).value;
});
var pathOr = _curry3(function pathOr2(d, p, obj) {
    return defaultTo(d, path(p, obj));
});
var prepend = _curry2(function prepend2(el, list) {
    return _concat([
        el
    ], list);
});
var reduceRight = _curry3(function reduceRight2(fn, acc, list) {
    var idx = list.length - 1;
    while(idx >= 0){
        acc = fn(list[idx], acc);
        idx -= 1;
    }
    return acc;
});
var times = _curry2(function times2(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;
    if (len < 0 || isNaN(len)) {
        throw new RangeError("n must be a non-negative number");
    }
    list = new Array(len);
    while(idx < len){
        list[idx] = fn(idx);
        idx += 1;
    }
    return list;
});
var sequence = _curry2(function sequence2(of2, traversable) {
    return typeof traversable.sequence === "function" ? traversable.sequence(of2) : reduceRight(function(x, acc) {
        return ap(map(prepend, x), acc);
    }, of2([]), traversable);
});
var XTakeWhile = function() {
    function XTakeWhile2(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
    };
    return XTakeWhile2;
}();
var XTap = function() {
    function XTap2(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XTap2.prototype["@@transducer/init"] = _xfBase.init;
    XTap2.prototype["@@transducer/result"] = _xfBase.result;
    XTap2.prototype["@@transducer/step"] = function(result, input) {
        this.f(input);
        return this.xf["@@transducer/step"](result, input);
    };
    return XTap2;
}();
function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
}
var ws = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var uniqWith = _curry2(function uniqWith2(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while(idx < len){
        item = list[idx];
        if (!_includesWith(pred, item, result)) {
            result[result.length] = item;
        }
        idx += 1;
    }
    return result;
});
var Const = function(x) {
    return {
        value: x,
        "fantasy-land/map": function() {
            return this;
        }
    };
};
var where = _curry2(function where2(spec, testObj) {
    for(var prop3 in spec){
        if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
            return false;
        }
    }
    return true;
});
function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var self3 = {
};
try {
    self3.WeakSet = WeakSet;
} catch (WeakSet2) {
    (function(id, dP) {
        var proto = WeakSet3.prototype;
        proto.add = function(object) {
            if (!this.has(object)) dP(object, this._, {
                value: true,
                configurable: true
            });
            return this;
        };
        proto.has = function(object) {
            return this.hasOwnProperty.call(object, this._);
        };
        proto.delete = function(object) {
            return this.has(object) && delete object[this._];
        };
        self3.WeakSet = WeakSet3;
        function WeakSet3() {
            dP(this, "_", {
                value: "_@ungap/weakmap" + id++
            });
        }
    })(Math.random(), Object.defineProperty);
}
var index = self3.WeakSet;
const WeakSet1 = index;
const { indexOf , slice: slice1  } = [];
const append1 = (get, parent, children, start, end, before)=>{
    const isSelect = "selectedIndex" in parent;
    let noSelection = isSelect;
    while(start < end){
        const child = get(children[start], 1);
        parent.insertBefore(child, before);
        if (isSelect && noSelection && child.selected) {
            noSelection = !noSelection;
            let { selectedIndex  } = parent;
            parent.selectedIndex = selectedIndex < 0 ? start : indexOf.call(parent.querySelectorAll("option"), child);
        }
        start++;
    }
};
const eqeq = (a, b)=>a == b
;
const identity1 = (O)=>O
;
const indexOf1 = (moreNodes, moreStart, moreEnd, lessNodes, lessStart, lessEnd, compare)=>{
    const length1 = lessEnd - lessStart;
    if (length1 < 1) return -1;
    while(moreEnd - moreStart >= length1){
        let m = moreStart;
        let l = lessStart;
        while(m < moreEnd && l < lessEnd && compare(moreNodes[m], lessNodes[l])){
            m++;
            l++;
        }
        if (l === lessEnd) return moreStart;
        moreStart = m + 1;
    }
    return -1;
};
const isReversed = (futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare)=>{
    while(currentStart < currentEnd && compare(currentNodes[currentStart], futureNodes[futureEnd - 1])){
        currentStart++;
        futureEnd--;
    }
    return futureEnd === 0;
};
const next = (get, list, i, length1, before)=>i < length1 ? get(list[i], 0) : 0 < i ? get(list[i - 1], -0).nextSibling : before
;
const DELETION = -1;
const OND = (futureNodes, futureStart, rows, currentNodes, currentStart, cols, compare)=>{
    const length1 = rows + cols;
    const v = [];
    let d, k, r, c, pv, cv, pd;
    outer: for(d = 0; d <= length1; d++){
        if (d > 50) return null;
        pd = d - 1;
        pv = d ? v[d - 1] : [
            0,
            0
        ];
        cv = v[d] = [];
        for(k = -d; k <= d; k += 2){
            if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
                c = pv[pd + k + 1];
            } else {
                c = pv[pd + k - 1] + 1;
            }
            r = c - k;
            while(c < cols && r < rows && compare(currentNodes[currentStart + c], futureNodes[futureStart + r])){
                c++;
                r++;
            }
            if (c === cols && r === rows) {
                break outer;
            }
            cv[d + k] = c;
        }
    }
    const diff = Array(d / 2 + length1 / 2);
    let diffIdx = diff.length - 1;
    for(d = v.length - 1; d >= 0; d--){
        while(c > 0 && r > 0 && compare(currentNodes[currentStart + c - 1], futureNodes[futureStart + r - 1])){
            diff[diffIdx--] = 0;
            c--;
            r--;
        }
        if (!d) break;
        pd = d - 1;
        pv = d ? v[d - 1] : [
            0,
            0
        ];
        k = c - r;
        if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
            r--;
            diff[diffIdx--] = 1;
        } else {
            c--;
            diff[diffIdx--] = DELETION;
        }
    }
    return diff;
};
const findK = (ktr, length1, j)=>{
    let lo = 1;
    let hi = length1;
    while(lo < hi){
        const mid = (lo + hi) / 2 >>> 0;
        if (j < ktr[mid]) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
function dropChild() {
    const { parentNode  } = this;
    if (parentNode) parentNode.removeChild(this);
}
var self1 = {
};
self1.CustomEvent = typeof CustomEvent === "function" ? CustomEvent : (function(__p__) {
    CustomEvent2[__p__] = new CustomEvent2("").constructor[__p__];
    return CustomEvent2;
    function CustomEvent2(type1, init) {
        if (!init) init = {
        };
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent(type1, !!init.bubbles, !!init.cancelable, init.detail);
        return e;
    }
})("prototype");
var index1 = self1.CustomEvent;
var self2 = {
};
try {
    self2.Map = Map;
} catch (Map2) {
    self2.Map = function Map3() {
        var i = 0;
        var k = [];
        var v = [];
        return {
            delete: function(key) {
                var had = contains3(key);
                if (had) {
                    k.splice(i, 1);
                    v.splice(i, 1);
                }
                return had;
            },
            forEach: function forEach(callback, context) {
                k.forEach(function(key, i2) {
                    callback.call(context, v[i2], key, this);
                }, this);
            },
            get: function get(key) {
                return contains3(key) ? v[i] : void 0;
            },
            has: function has(key) {
                return contains3(key);
            },
            set: function set(key, value) {
                v[contains3(key) ? i : k.push(key) - 1] = value;
                return this;
            }
        };
        function contains3(v2) {
            i = k.indexOf(v2);
            return -1 < i;
        }
    };
}
var index2 = self2.Map;
var isArray = Array.isArray || function(toString1) {
    var $ = toString1.call([]);
    return function isArray2(object) {
        return toString1.call(object) === $;
    };
}(({
}).toString);
function disconnected(poly) {
    var Event1 = poly.Event;
    var WeakSet2 = poly.WeakSet;
    var notObserving = true;
    var observer = null;
    return function observe(node) {
        if (notObserving) {
            notObserving = !notObserving;
            observer = new WeakSet2();
            startObserving(node.ownerDocument);
        }
        observer.add(node);
        return node;
    };
    function startObserving(document) {
        var connected = new WeakSet2();
        var disconnected2 = new WeakSet2();
        try {
            new MutationObserver(changes).observe(document, {
                subtree: true,
                childList: true
            });
        } catch (o_O) {
            var timer = 0;
            var records = [];
            var reschedule = function(record) {
                records.push(record);
                clearTimeout(timer);
                timer = setTimeout(function() {
                    changes(records.splice(timer = 0, records.length));
                }, 0);
            };
            document.addEventListener("DOMNodeRemoved", function(event) {
                reschedule({
                    addedNodes: [],
                    removedNodes: [
                        event.target
                    ]
                });
            }, true);
            document.addEventListener("DOMNodeInserted", function(event) {
                reschedule({
                    addedNodes: [
                        event.target
                    ],
                    removedNodes: []
                });
            }, true);
        }
        function changes(records2) {
            for(var record, length1 = records2.length, i = 0; i < length1; i++){
                record = records2[i];
                dispatchAll(record.removedNodes, "disconnected", disconnected2, connected);
                dispatchAll(record.addedNodes, "connected", connected, disconnected2);
            }
        }
        function dispatchAll(nodes, type1, wsin, wsout) {
            for(var node, event = new Event1(type1), length1 = nodes.length, i = 0; i < length1; (node = nodes[i++]).nodeType === 1 && dispatchTarget(node, event, type1, wsin, wsout));
        }
        function dispatchTarget(node, event, type1, wsin, wsout) {
            if (observer.has(node) && !wsin.has(node)) {
                wsout.delete(node);
                wsin.add(node);
                node.dispatchEvent(event);
            }
            for(var children = node.children || [], length1 = children.length, i = 0; i < length1; dispatchTarget(children[i++], event, type1, wsin, wsout));
        }
    }
}
var createContent = function(document2) {
    var FRAGMENT = "fragment";
    var TEMPLATE = "template";
    var HAS_CONTENT = "content" in create(TEMPLATE);
    var createHTML = HAS_CONTENT ? function(html) {
        var template = create(TEMPLATE);
        template.innerHTML = html;
        return template.content;
    } : function(html) {
        var content = create(FRAGMENT);
        var template = create(TEMPLATE);
        var childNodes = null;
        if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
            var selector = RegExp.$1;
            template.innerHTML = "<table>" + html + "</table>";
            childNodes = template.querySelectorAll(selector);
        } else {
            template.innerHTML = html;
            childNodes = template.childNodes;
        }
        append2(content, childNodes);
        return content;
    };
    return function createContent2(markup, type1) {
        return (type1 === "svg" ? createSVG : createHTML)(markup);
    };
    function append2(root, childNodes) {
        var length1 = childNodes.length;
        while(length1--)root.appendChild(childNodes[0]);
    }
    function create(element) {
        return element === FRAGMENT ? document2.createDocumentFragment() : document2.createElementNS("http://www.w3.org/1999/xhtml", element);
    }
    function createSVG(svg) {
        var content = create(FRAGMENT);
        var template = create("div");
        template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + "</svg>";
        append2(content, template.firstChild.childNodes);
        return content;
    }
}(document);
var importNode = function(document2, appendChild, cloneNode, createTextNode, importNode2) {
    var native = importNode2 in document2;
    var fragment = document2.createDocumentFragment();
    fragment[appendChild](document2[createTextNode]("g"));
    fragment[appendChild](document2[createTextNode](""));
    var content = native ? document2[importNode2](fragment, true) : fragment[cloneNode](true);
    return content.childNodes.length < 2 ? function importNode3(node, deep) {
        var clone = node[cloneNode]();
        for(var childNodes = node.childNodes || [], length1 = childNodes.length, i = 0; deep && i < length1; i++){
            clone[appendChild](importNode3(childNodes[i], deep));
        }
        return clone;
    } : native ? document2[importNode2] : function(node, deep) {
        return node[cloneNode](!!deep);
    };
}(document, "appendChild", "cloneNode", "createTextNode", "importNode");
var trim = "".trim || function() {
    return String(this).replace(/^\s+|\s+/g, "");
};
var spaces = " \\f\\n\\r\\t";
var almostEverything = "[^" + spaces + `\\/>"'=]+`;
var attrName = "[" + spaces + "]+" + almostEverything;
var tagName = "<([A-Za-z]+[A-Za-z0-9:._-]*)((?:";
var attrPartials = `(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|<[^>]*?>|` + almostEverything.replace("\\/", "") + "))?)";
var attrSeeker = new RegExp(tagName + attrName + attrPartials + "+)([" + spaces + "]*/?>)", "g");
var selfClosing = new RegExp(tagName + attrName + attrPartials + "*)([" + spaces + "]*/>)", "g");
var index3 = (_)=>({
        get: (key)=>_.get(key)
        ,
        set: (key, value)=>(_.set(key, value), value)
    })
;
var UID = "-" + Math.random().toFixed(6) + "%";
var UID_IE = false;
try {
    if (!(function(template, content, tabindex) {
        return content in template && (template.innerHTML = "<p " + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
    })(document.createElement("template"), "content", "tabindex")) {
        UID = "_dt: " + UID.slice(1, -1) + ";";
        UID_IE = true;
    }
} catch (meh) {
}
var UIDC = "<!--" + UID + "-->";
var COMMENT_NODE = 8;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var SHOULD_USE_TEXT_CONTENT = /^(?:style|textarea)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
var normalizeAttributes = UID_IE ? function(attributes, parts) {
    var html = parts.join(" ");
    return parts.slice.call(attributes, 0).sort(function(left, right) {
        return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
} : function(attributes, parts) {
    return parts.slice.call(attributes, 0);
};
function find(node, path1) {
    var length1 = path1.length;
    var i = 0;
    while(i < length1)node = node.childNodes[path1[i++]];
    return node;
}
function Any(node, path1) {
    return {
        type: "any",
        node,
        path: path1
    };
}
function Attr1(node, path1, name, sparse) {
    return {
        type: "attr",
        node,
        path: path1,
        name,
        sparse
    };
}
function Text1(node, path1) {
    return {
        type: "text",
        node,
        path: path1
    };
}
var empty1 = [];
function cleanContent(fragment) {
    var childNodes = fragment.childNodes;
    var i = childNodes.length;
    while(i--){
        var child = childNodes[i];
        if (child.nodeType !== 1 && trim.call(child.textContent).length === 0) {
            fragment.removeChild(child);
        }
    }
}
var hyperStyle = function() {
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var hyphen = /([^A-Z])([A-Z]+)/g;
    return function hyperStyle2(node, original) {
        return "ownerSVGElement" in node ? svg(node, original) : update3(node.style, false);
    };
    function ized($0, $1, $2) {
        return $1 + "-" + $2.toLowerCase();
    }
    function svg(node, original) {
        var style;
        if (original) style = original.cloneNode(true);
        else {
            node.setAttribute("style", "--hyper:style;");
            style = node.getAttributeNode("style");
        }
        style.value = "";
        node.setAttributeNode(style);
        return update3(style, true);
    }
    function toStyle(object) {
        var key, css = [];
        for(key in object)css.push(key.replace(hyphen, ized), ":", object[key], ";");
        return css.join("");
    }
    function update3(style, isSVG) {
        var oldType, oldValue;
        return function(newValue) {
            var info, key, styleValue, value;
            switch(typeof newValue){
                case "object":
                    if (newValue) {
                        if (oldType === "object") {
                            if (!isSVG) {
                                if (oldValue !== newValue) {
                                    for(key in oldValue){
                                        if (!(key in newValue)) {
                                            style[key] = "";
                                        }
                                    }
                                }
                            }
                        } else {
                            if (isSVG) style.value = "";
                            else style.cssText = "";
                        }
                        info = isSVG ? {
                        } : style;
                        for(key in newValue){
                            value = newValue[key];
                            styleValue = typeof value === "number" && !IS_NON_DIMENSIONAL.test(key) ? value + "px" : value;
                            if (!isSVG && /^--/.test(key)) info.setProperty(key, styleValue);
                            else info[key] = styleValue;
                        }
                        oldType = "object";
                        if (isSVG) style.value = toStyle(oldValue = info);
                        else oldValue = newValue;
                        break;
                    }
                default:
                    if (oldValue != newValue) {
                        oldType = "string";
                        oldValue = newValue;
                        if (isSVG) style.value = newValue || "";
                        else style.cssText = newValue || "";
                    }
                    break;
            }
        };
    }
}();
var Wire = function(slice3, proto) {
    proto = Wire2.prototype;
    proto.ELEMENT_NODE = 1;
    proto.nodeType = 111;
    proto.remove = function(keepFirst) {
        var childNodes = this.childNodes;
        var first = this.firstChild;
        var last1 = this.lastChild;
        this._ = null;
        if (keepFirst && childNodes.length === 2) {
            last1.parentNode.removeChild(last1);
        } else {
            var range = this.ownerDocument.createRange();
            range.setStartBefore(keepFirst ? childNodes[1] : first);
            range.setEndAfter(last1);
            range.deleteContents();
        }
        return first;
    };
    proto.valueOf = function(forceAppend) {
        var fragment = this._;
        var noFragment = fragment == null;
        if (noFragment) fragment = this._ = this.ownerDocument.createDocumentFragment();
        if (noFragment || forceAppend) {
            for(var n = this.childNodes, i = 0, l = n.length; i < l; i++)fragment.appendChild(n[i]);
        }
        return fragment;
    };
    return Wire2;
    function Wire2(childNodes) {
        var nodes = this.childNodes = slice3.call(childNodes, 0);
        this.firstChild = nodes[0];
        this.lastChild = nodes[nodes.length - 1];
        this.ownerDocument = nodes[0].ownerDocument;
        this._ = null;
    }
}([].slice);
var isNoOp = typeof document !== "object";
function Component() {
    return this;
}
const setValue = (self3, secret, value)=>Object.defineProperty(self3, secret, {
        configurable: true,
        value: typeof value === "function" ? function() {
            return self3._wire$ = value.apply(this, arguments);
        } : value
    })[secret]
;
Object.defineProperties(Component.prototype, {
    ELEMENT_NODE: {
        value: 1
    },
    nodeType: {
        value: -1
    }
});
const attributes = {
};
const intents = {
};
const keys1 = [];
const hasOwnProperty = intents.hasOwnProperty;
let length1 = 0;
var Intent = {
    attributes,
    define: (intent, callback)=>{
        if (intent.indexOf("-") < 0) {
            if (!(intent in intents)) {
                length1 = keys1.push(intent);
            }
            intents[intent] = callback;
        } else {
            attributes[intent] = callback;
        }
    },
    invoke: (object, callback)=>{
        for(let i = 0; i < length1; i++){
            let key = keys1[i];
            if (hasOwnProperty.call(object, key)) {
                return intents[key](object[key], callback);
            }
        }
    }
};
const OWNER_SVG_ELEMENT = "ownerSVGElement";
const CONNECTED = "connected";
const DISCONNECTED = "dis" + CONNECTED;
const componentType = Component.prototype.nodeType;
const wireType = Wire.prototype.nodeType;
const observe = disconnected({
    Event: index1,
    WeakSet: index
});
const asHTML = (html)=>({
        html
    })
;
const asNode = (item, i)=>{
    switch(item.nodeType){
        case wireType:
            return 1 / i < 0 ? i ? item.remove(true) : item.lastChild : i ? item.valueOf(true) : item.firstChild;
        case componentType:
            return asNode(item.render(), i);
        default:
            return item;
    }
};
const canDiff = (value)=>"ELEMENT_NODE" in value
;
const hyperSetter = (node, name, svg)=>svg ? (value)=>{
        try {
            node[name] = value;
        } catch (nope) {
            node.setAttribute(name, value);
        }
    } : (value)=>{
        node[name] = value;
    }
;
const invokeAtDistance = (value, callback)=>{
    callback(value.placeholder);
    if ("text" in value) {
        Promise.resolve(value.text).then(String).then(callback);
    } else if ("any" in value) {
        Promise.resolve(value.any).then(callback);
    } else if ("html" in value) {
        Promise.resolve(value.html).then(asHTML).then(callback);
    } else {
        Promise.resolve(Intent.invoke(value, callback)).then(callback);
    }
};
const isPromise_ish = (value)=>value != null && "then" in value
;
const readOnly = /^(?:form|list)$/i;
const slice3 = [].slice;
const text = (node, text2)=>node.ownerDocument.createTextNode(text2)
;
const wireContent = (node)=>{
    const childNodes = node.childNodes;
    const { length: length21  } = childNodes;
    return length21 === 1 ? childNodes[0] : length21 ? new Wire(childNodes) : node;
};
const define = Intent.define;
hyper.Component = Component;
hyper.define = define;
hyper.diff = domdiff2;
hyper.observe = observe;
const propMap = {
    class: "className",
    contenteditable: "contentEditable",
    for: "htmlFor",
    readonly: "readOnly",
    maxlength: "maxLength",
    tabindex: "tabIndex",
    colspan: "colSpan",
    rowspan: "rowSpan",
    usemap: "useMap"
};
function attempt(fn2, arg) {
    try {
        return fn2(arg);
    } catch (_a) {
        return arg;
    }
}
const doc = document, docEle = doc.documentElement, createElement = doc.createElement.bind(doc), div = createElement("div"), table = createElement("table"), tbody = createElement("tbody"), tr = createElement("tr"), { isArray: isArray1 , prototype: ArrayPrototype  } = Array, { concat , filter: filter1 , indexOf: indexOf2 , map: map1 , push , slice: slice4 , some , splice  } = ArrayPrototype;
const idRe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, classRe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, htmlRe = /<.+>/, tagRe = /^\w+$/;
fn.length = 0;
fn.splice = splice;
if (typeof Symbol === "function") {
    fn[Symbol["iterator"]] = ArrayPrototype[Symbol["iterator"]];
}
const dashAlphaRe = /-([a-z])/g;
function camelCase(str) {
    return str.replace(dashAlphaRe, (match, letter)=>letter.toUpperCase()
    );
}
cash.guid = 1;
function matches(ele, selector) {
    const matches2 = ele && (ele["matches"] || ele["webkitMatchesSelector"] || ele["msMatchesSelector"]);
    return !!matches2 && !!selector && matches2.call(ele, selector);
}
function isWindow(x) {
    return !!x && x === x.window;
}
function isDocument(x) {
    return !!x && x.nodeType === 9;
}
function isElement(x) {
    return !!x && x.nodeType === 1;
}
function isBoolean(x) {
    return typeof x === "boolean";
}
function isFunction(x) {
    return typeof x === "function";
}
function isString(x) {
    return typeof x === "string";
}
function isUndefined(x) {
    return x === void 0;
}
function isNull(x) {
    return x === null;
}
function isNumeric(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}
function isPlainObject(x) {
    if (typeof x !== "object" || x === null) return false;
    const proto = Object.getPrototypeOf(x);
    return proto === null || proto === Object.prototype;
}
cash.isWindow = isWindow;
cash.isFunction = isFunction;
cash.isArray = isArray1;
cash.isNumeric = isNumeric;
cash.isPlainObject = isPlainObject;
fn.get = function(index4) {
    if (isUndefined(index4)) return slice4.call(this);
    index4 = Number(index4);
    return this[index4 < 0 ? index4 + this.length : index4];
};
fn.first = function() {
    return this.eq(0);
};
fn.last = function() {
    return this.eq(-1);
};
function each(arr, callback, _reverse) {
    if (_reverse) {
        let i = arr.length;
        while(i--){
            if (callback.call(arr[i], i, arr[i]) === false) return arr;
        }
    } else if (isPlainObject(arr)) {
        const keys4 = Object.keys(arr);
        for(let i = 0, l = keys4.length; i < l; i++){
            const key = keys4[i];
            if (callback.call(arr[key], key, arr[key]) === false) return arr;
        }
    } else {
        for(let i = 0, l = arr.length; i < l; i++){
            if (callback.call(arr[i], i, arr[i]) === false) return arr;
        }
    }
    return arr;
}
cash.each = each;
fn.each = function(callback) {
    return each(this, callback);
};
fn.prop = function(prop1, value) {
    if (!prop1) return;
    if (isString(prop1)) {
        prop1 = propMap[prop1] || prop1;
        if (arguments.length < 2) return this[0] && this[0][prop1];
        return this.each((i, ele)=>{
            ele[prop1] = value;
        });
    }
    for(const key in prop1){
        this.prop(key, prop1[key]);
    }
    return this;
};
fn.removeProp = function(prop1) {
    return this.each((i, ele)=>{
        delete ele[propMap[prop1] || prop1];
    });
};
function filtered(collection, comparator) {
    return !comparator ? collection : collection.filter(comparator);
}
const splitValuesRe = /\S+/g;
function getSplitValues(str) {
    return isString(str) ? str.match(splitValuesRe) || [] : [];
}
fn.hasClass = function(cls) {
    return !!cls && some.call(this, (ele)=>isElement(ele) && ele.classList.contains(cls)
    );
};
fn.removeAttr = function(attr2) {
    const attrs = getSplitValues(attr2);
    return this.each((i, ele)=>{
        if (!isElement(ele)) return;
        each(attrs, (i2, a)=>{
            ele.removeAttribute(a);
        });
    });
};
function attr(attr2, value) {
    if (!attr2) return;
    if (isString(attr2)) {
        if (arguments.length < 2) {
            if (!this[0] || !isElement(this[0])) return;
            const value2 = this[0].getAttribute(attr2);
            return isNull(value2) ? void 0 : value2;
        }
        if (isUndefined(value)) return this;
        if (isNull(value)) return this.removeAttr(attr2);
        return this.each((i, ele)=>{
            if (!isElement(ele)) return;
            ele.setAttribute(attr2, value);
        });
    }
    for(const key in attr2){
        this.attr(key, attr2[key]);
    }
    return this;
}
fn.attr = attr;
fn.toggleClass = function(cls, force) {
    const classes = getSplitValues(cls), isForce = !isUndefined(force);
    return this.each((i, ele)=>{
        if (!isElement(ele)) return;
        each(classes, (i2, c)=>{
            if (isForce) {
                force ? ele.classList.add(c) : ele.classList.remove(c);
            } else {
                ele.classList.toggle(c);
            }
        });
    });
};
fn.addClass = function(cls) {
    return this.toggleClass(cls, true);
};
fn.removeClass = function(cls) {
    if (arguments.length) return this.toggleClass(cls, false);
    return this.attr("class", "");
};
function unique(arr) {
    return arr.length > 1 ? filter1.call(arr, (item, index4, self3)=>indexOf2.call(self3, item) === index4
    ) : arr;
}
cash.unique = unique;
function computeStyle(ele, prop1, isVariable) {
    if (!isElement(ele)) return;
    const style2 = window.getComputedStyle(ele, null);
    return isVariable ? style2.getPropertyValue(prop1) || void 0 : style2[prop1] || ele.style[prop1];
}
function computeStyleInt(ele, prop1) {
    return parseInt(computeStyle(ele, prop1), 10) || 0;
}
const cssVariableRe = /^--/;
function isCSSVariable(prop1) {
    return cssVariableRe.test(prop1);
}
const prefixedProps = {
}, { style  } = div, vendorsPrefixes = [
    "webkit",
    "moz",
    "ms"
];
function getPrefixedProp(prop1, isVariable = isCSSVariable(prop1)) {
    if (isVariable) return prop1;
    if (!prefixedProps[prop1]) {
        const propCC = camelCase(prop1), propUC = `${propCC[0].toUpperCase()}${propCC.slice(1)}`, props = `${propCC} ${vendorsPrefixes.join(`${propUC} `)}${propUC}`.split(" ");
        each(props, (i, p)=>{
            if (p in style) {
                prefixedProps[prop1] = p;
                return false;
            }
        });
    }
    return prefixedProps[prop1];
}
const numericProps = {
    animationIterationCount: true,
    columnCount: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true
};
function getSuffixedValue(prop1, value, isVariable = isCSSVariable(prop1)) {
    return !isVariable && !numericProps[prop1] && isNumeric(value) ? `${value}px` : value;
}
function css(prop1, value) {
    if (isString(prop1)) {
        const isVariable = isCSSVariable(prop1);
        prop1 = getPrefixedProp(prop1, isVariable);
        if (arguments.length < 2) return this[0] && computeStyle(this[0], prop1, isVariable);
        if (!prop1) return this;
        value = getSuffixedValue(prop1, value, isVariable);
        return this.each((i, ele)=>{
            if (!isElement(ele)) return;
            if (isVariable) {
                ele.style.setProperty(prop1, value);
            } else {
                ele.style[prop1] = value;
            }
        });
    }
    for(const key in prop1){
        this.css(key, prop1[key]);
    }
    return this;
}
fn.css = css;
const JSONStringRe = /^\s+|\s+$/;
function getData(ele, key) {
    const value = ele.dataset[key] || ele.dataset[camelCase(key)];
    if (JSONStringRe.test(value)) return value;
    return attempt(JSON.parse, value);
}
function setData(ele, key, value) {
    value = attempt(JSON.stringify, value);
    ele.dataset[camelCase(key)] = value;
}
function data(name, value) {
    if (!name) {
        if (!this[0]) return;
        const datas = {
        };
        for(const key in this[0].dataset){
            datas[key] = getData(this[0], key);
        }
        return datas;
    }
    if (isString(name)) {
        if (arguments.length < 2) return this[0] && getData(this[0], name);
        if (isUndefined(value)) return this;
        return this.each((i, ele)=>{
            setData(ele, name, value);
        });
    }
    for(const key in name){
        this.data(key, name[key]);
    }
    return this;
}
fn.data = data;
function getDocumentDimension(doc2, dimension) {
    const docEle2 = doc2.documentElement;
    return Math.max(doc2.body[`scroll${dimension}`], docEle2[`scroll${dimension}`], doc2.body[`offset${dimension}`], docEle2[`offset${dimension}`], docEle2[`client${dimension}`]);
}
function getExtraSpace(ele, xAxis) {
    return computeStyleInt(ele, `border${xAxis ? "Left" : "Top"}Width`) + computeStyleInt(ele, `padding${xAxis ? "Left" : "Top"}`) + computeStyleInt(ele, `padding${xAxis ? "Right" : "Bottom"}`) + computeStyleInt(ele, `border${xAxis ? "Right" : "Bottom"}Width`);
}
each([
    true,
    false
], (i, outer)=>{
    each([
        "Width",
        "Height"
    ], (i2, prop1)=>{
        const name = `${outer ? "outer" : "inner"}${prop1}`;
        fn[name] = function(includeMargins) {
            if (!this[0]) return;
            if (isWindow(this[0])) return outer ? this[0][`inner${prop1}`] : this[0].document.documentElement[`client${prop1}`];
            if (isDocument(this[0])) return getDocumentDimension(this[0], prop1);
            return this[0][`${outer ? "offset" : "client"}${prop1}`] + (includeMargins && outer ? computeStyleInt(this[0], `margin${i2 ? "Top" : "Left"}`) + computeStyleInt(this[0], `margin${i2 ? "Bottom" : "Right"}`) : 0);
        };
    });
});
each([
    "Width",
    "Height"
], (index4, prop1)=>{
    const propLC = prop1.toLowerCase();
    fn[propLC] = function(value) {
        if (!this[0]) return isUndefined(value) ? void 0 : this;
        if (!arguments.length) {
            if (isWindow(this[0])) return this[0].document.documentElement[`client${prop1}`];
            if (isDocument(this[0])) return getDocumentDimension(this[0], prop1);
            return this[0].getBoundingClientRect()[propLC] - getExtraSpace(this[0], !index4);
        }
        const valueNumber = parseInt(value, 10);
        return this.each((i, ele)=>{
            if (!isElement(ele)) return;
            const boxSizing = computeStyle(ele, "boxSizing");
            ele.style[propLC] = getSuffixedValue(propLC, valueNumber + (boxSizing === "border-box" ? getExtraSpace(ele, !index4) : 0));
        });
    };
});
const defaultDisplay = {
};
function getDefaultDisplay(tagName1) {
    if (defaultDisplay[tagName1]) return defaultDisplay[tagName1];
    const ele = createElement(tagName1);
    document.body.insertBefore(ele, null);
    const display = computeStyle(ele, "display");
    document.body.removeChild(ele);
    return defaultDisplay[tagName1] = display !== "none" ? display : "block";
}
function isHidden(ele) {
    return computeStyle(ele, "display") === "none";
}
const displayProperty = "___cd";
fn.toggle = function(force) {
    return this.each((i, ele)=>{
        if (!isElement(ele)) return;
        const show = isUndefined(force) ? isHidden(ele) : force;
        if (show) {
            ele.style.display = ele[displayProperty] || "";
            if (isHidden(ele)) {
                ele.style.display = getDefaultDisplay(ele.tagName);
            }
        } else {
            ele[displayProperty] = computeStyle(ele, "display");
            ele.style.display = "none";
        }
    });
};
fn.hide = function() {
    return this.toggle(false);
};
fn.show = function() {
    return this.toggle(true);
};
function hasNamespaces(ns1, ns2) {
    return !ns2 || !some.call(ns2, (ns)=>ns1.indexOf(ns) < 0
    );
}
const eventsNamespace = "___ce", eventsNamespacesSeparator = ".", eventsFocus = {
    focus: "focusin",
    blur: "focusout"
}, eventsHover = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
}, eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function getEventNameBubbling(name) {
    return eventsHover[name] || eventsFocus[name] || name;
}
function getEventsCache(ele) {
    return ele[eventsNamespace] = ele[eventsNamespace] || {
    };
}
function addEvent(ele, name, namespaces, selector, callback) {
    const eventCache = getEventsCache(ele);
    eventCache[name] = eventCache[name] || [];
    eventCache[name].push([
        namespaces,
        selector,
        callback
    ]);
    ele.addEventListener(name, callback);
}
function parseEventName(eventName) {
    const parts = eventName.split(eventsNamespacesSeparator);
    return [
        parts[0],
        parts.slice(1).sort()
    ];
}
function removeEvent(ele, name, namespaces, selector, callback) {
    const cache = getEventsCache(ele);
    if (!name) {
        for(name in cache){
            removeEvent(ele, name, namespaces, selector, callback);
        }
    } else if (cache[name]) {
        cache[name] = cache[name].filter(([ns, sel, cb])=>{
            if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
            ele.removeEventListener(name, cb);
        });
    }
}
fn.off = function(eventFullName, selector, callback) {
    if (isUndefined(eventFullName)) {
        this.each((i, ele)=>{
            if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
            removeEvent(ele);
        });
    } else if (!isString(eventFullName)) {
        for(const key in eventFullName){
            this.off(key, eventFullName[key]);
        }
    } else {
        if (isFunction(selector)) {
            callback = selector;
            selector = "";
        }
        each(getSplitValues(eventFullName), (i, eventFullName2)=>{
            const [nameOriginal, namespaces] = parseEventName(eventFullName2), name = getEventNameBubbling(nameOriginal);
            this.each((i2, ele)=>{
                if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
                removeEvent(ele, name, namespaces, selector, callback);
            });
        });
    }
    return this;
};
function one(eventFullName, selector, data2, callback) {
    return this.on(eventFullName, selector, data2, callback, true);
}
fn.one = one;
fn.trigger = function(event, data2) {
    if (isString(event)) {
        const [nameOriginal, namespaces] = parseEventName(event), name = getEventNameBubbling(nameOriginal);
        if (!name) return this;
        const type1 = eventsMouseRe.test(name) ? "MouseEvents" : "HTMLEvents";
        event = document.createEvent(type1);
        event.initEvent(name, true, true);
        event.namespace = namespaces.join(eventsNamespacesSeparator);
        event.___ot = nameOriginal;
    }
    event.___td = data2;
    const isEventFocus = event.___ot in eventsFocus;
    return this.each((i, ele)=>{
        if (isEventFocus && isFunction(ele[event.___ot])) {
            ele[`___i${event.type}`] = true;
            ele[event.___ot]();
            ele[`___i${event.type}`] = false;
        }
        ele.dispatchEvent(event);
    });
};
const queryEncodeSpaceRe = /%20/g, queryEncodeCRLFRe = /\r?\n/g;
function queryEncode(prop1, value) {
    return `&${encodeURIComponent(prop1)}=${encodeURIComponent(value.replace(queryEncodeCRLFRe, "\r\n")).replace(queryEncodeSpaceRe, "+")}`;
}
const skippableRe = /file|reset|submit|button|image/i, checkableRe = /radio|checkbox/i;
fn.clone = function() {
    return this.map((i, ele)=>ele.cloneNode(true)
    );
};
fn.detach = function(comparator) {
    filtered(this, comparator).each((i, ele)=>{
        if (ele.parentNode) {
            ele.parentNode.removeChild(ele);
        }
    });
    return this;
};
const fragmentRe = /^\s*<(\w+)[^>]*>/, singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
const containers = {
    "*": div,
    tr: tbody,
    td: tr,
    th: tr,
    thead: table,
    tbody: table,
    tfoot: table
};
fn.empty = function() {
    return this.each((i, ele)=>{
        while(ele.firstChild){
            ele.removeChild(ele.firstChild);
        }
    });
};
function html(html2) {
    if (!arguments.length) return this[0] && this[0].innerHTML;
    if (isUndefined(html2)) return this;
    return this.each((i, ele)=>{
        if (!isElement(ele)) return;
        ele.innerHTML = html2;
    });
}
fn.html = html;
fn.remove = function(comparator) {
    filtered(this, comparator).detach().off();
    return this;
};
function text1(text2) {
    if (isUndefined(text2)) return this[0] ? this[0].textContent : "";
    return this.each((i, ele)=>{
        if (!isElement(ele)) return;
        ele.textContent = text2;
    });
}
fn.text = text1;
fn.offset = function() {
    const ele = this[0];
    if (!ele) return;
    const rect = ele.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    };
};
fn.offsetParent = function() {
    return this.map((i, ele)=>{
        let offsetParent = ele.offsetParent;
        while(offsetParent && computeStyle(offsetParent, "position") === "static"){
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docEle;
    });
};
const HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, scriptTypeRe = /^$|^module$|\/(java|ecma)script/i, scriptAttributes = [
    "type",
    "src",
    "nonce",
    "noModule"
];
fn.replaceWith = function(selector) {
    return this.before(selector).remove();
};
fn.nextAll = function(comparator) {
    return this.next(comparator, true);
};
fn.nextUntil = function(until, comparator) {
    return this.next(comparator, true, until);
};
fn.closest = function(comparator) {
    const filtered2 = this.filter(comparator);
    if (filtered2.length) return filtered2;
    const $parent = this.parent();
    if (!$parent.length) return filtered2;
    return $parent.closest(comparator);
};
fn.parentsUntil = function(until, comparator) {
    return this.parents(comparator, until);
};
fn.prevAll = function(comparator) {
    return this.prev(comparator, true);
};
fn.prevUntil = function(until, comparator) {
    return this.prev(comparator, true, until);
};
function transmute(x) {
    return x;
}
let unwrap = Symbol();
let fw = new Proxy(class {
}, {
    construct: (o, args, t)=>(eval('navigator').serviceWorker.register(args[0]).then((x)=>eval('navigator').serviceWorker.x = x
        ), eval('navigator').serviceWorker)
});
let fw2;
try {
    fw2 = argv[0] == 'worker' ? undefined : w({
        Worker: transmute(fw),
        prepend: '',
        argv: [
            'worker'
        ]
    });
} catch (err) {
}
let wb_ = argv[0] == 'worker' ? import('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js').then((x)=>true
) : Promise.resolve(false);
if (argv[0] == 'worker') Object.keys(self.workbox).map((x)=>self.workbox[x]
);
let wb = await wb_;
if (wb) self.workbox.recipies.offlineFallback();
!(function() {
    "use strict";
    try {
        self["workbox:sw:6.0.2"] && _();
    } catch (t) {
    }
    const t1 = {
        backgroundSync: "background-sync",
        broadcastUpdate: "broadcast-update",
        cacheableResponse: "cacheable-response",
        core: "core",
        expiration: "expiration",
        googleAnalytics: "offline-ga",
        navigationPreload: "navigation-preload",
        precaching: "precaching",
        rangeRequests: "range-requests",
        routing: "routing",
        strategies: "strategies",
        streams: "streams",
        recipes: "recipes"
    };
    self.workbox = new class {
        constructor(){
            return this.v = {
            }, this.Pt = {
                debug: "localhost" === self.location.hostname,
                modulePathPrefix: null,
                modulePathCb: null
            }, this.$t = this.Pt.debug ? "dev" : "prod", this.jt = !1, new Proxy(this, {
                get (e, s) {
                    if (e[s]) return e[s];
                    const o = t1[s];
                    return (o && e.loadModule("workbox-" + o), e[s]);
                }
            });
        }
        setConfig(t = {
        }) {
            if (this.jt) throw new Error("Config must be set before accessing workbox.* modules");
            Object.assign(this.Pt, t), this.$t = this.Pt.debug ? "dev" : "prod";
        }
        loadModule(t) {
            const e = this.St(t);
            try {
                importScripts(e), this.jt = !0;
            } catch (s) {
                throw console.error(`Unable to import module '${t}' from '${e}'.`), s;
            }
        }
        St(t) {
            if (this.Pt.modulePathCb) return this.Pt.modulePathCb(t, this.Pt.debug);
            let e = [
                "https://storage.googleapis.com/workbox-cdn/releases/6.0.2"
            ];
            const s = `${t}.${this.$t}.js`, o = this.Pt.modulePathPrefix;
            return o && (e = o.split("/"), "" === e[e.length - 1] && e.splice(e.length - 1, 1)), e.push(s), e.join("/");
        }
    };
})();
var self4 = {
};
try {
    self4.WeakMap = WeakMap;
} catch (WeakMap2) {
    self4.WeakMap = (function(id, Object2) {
        var dP = Object2.defineProperty;
        var hOP = Object2.hasOwnProperty;
        var proto = WeakMap3.prototype;
        proto.delete = function(key) {
            return this.has(key) && delete key[this._];
        };
        proto.get = function(key) {
            return this.has(key) ? key[this._] : void 0;
        };
        proto.has = function(key) {
            return hOP.call(key, this._);
        };
        proto.set = function(key, value) {
            dP(key, this._, {
                configurable: true,
                value
            });
            return this;
        };
        return WeakMap3;
        function WeakMap3(iterable) {
            dP(this, "_", {
                value: "_@ungap/weakmap" + id++
            });
            if (iterable) iterable.forEach(add3, this);
        }
        function add3(pair) {
            this.set(pair[0], pair[1]);
        }
    })(Math.random(), Object);
}
var index4 = self4.WeakMap;
const WeakMap1 = index4;
const HS = (futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges)=>{
    let k = 0;
    let minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
    const link = Array(minLen++);
    const tresh = Array(minLen);
    tresh[0] = -1;
    for(let i = 1; i < minLen; i++)tresh[i] = currentEnd;
    const nodes = currentNodes.slice(currentStart, currentEnd);
    for(let i1 = futureStart; i1 < futureEnd; i1++){
        const index5 = nodes.indexOf(futureNodes[i1]);
        if (-1 < index5) {
            const idxInOld = index5 + currentStart;
            k = findK(tresh, minLen, idxInOld);
            if (-1 < k) {
                tresh[k] = idxInOld;
                link[k] = {
                    newi: i1,
                    oldi: idxInOld,
                    prev: link[k - 1]
                };
            }
        }
    }
    k = --minLen;
    --currentEnd;
    while(tresh[k] > currentEnd)--k;
    minLen = currentChanges + futureChanges - k;
    const diff = Array(minLen);
    let ptr = link[k];
    --futureEnd;
    while(ptr){
        const { newi , oldi  } = ptr;
        while(futureEnd > newi){
            diff[--minLen] = 1;
            --futureEnd;
        }
        while(currentEnd > oldi){
            diff[--minLen] = DELETION;
            --currentEnd;
        }
        diff[--minLen] = 0;
        --futureEnd;
        --currentEnd;
        ptr = ptr.prev;
    }
    while(futureEnd >= futureStart){
        diff[--minLen] = 1;
        --futureEnd;
    }
    while(currentEnd >= currentStart){
        diff[--minLen] = DELETION;
        --currentEnd;
    }
    return diff;
};
const drop1 = (node)=>(node.remove || dropChild).call(node)
;
var findAttributes = new RegExp("(" + attrName + `\\s*=\\s*)(['"]?)` + UIDC + "\\2", "gi");
function replaceAttributes($0, $1, $2) {
    return $1 + ($2 || '"') + UID + ($2 || '"');
}
function fullClosing($0, $1, $2) {
    return VOID_ELEMENTS.test($1) ? $0 : "<" + $1 + $2 + "></" + $1 + ">";
}
function parseAttributes(node, holes, parts, path1) {
    var attributes1 = node.attributes;
    var cache = [];
    var remove1 = [];
    var array = normalizeAttributes(attributes1, parts);
    var length3 = array.length;
    var i = 0;
    while(i < length3){
        var attribute = array[i++];
        var direct = attribute.value === UID;
        var sparse;
        if (direct || 1 < (sparse = attribute.value.split(UIDC)).length) {
            var name = attribute.name;
            if (cache.indexOf(name) < 0) {
                cache.push(name);
                var realName = parts.shift().replace(direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp("^(?:|[\\S\\s]*?\\s)(" + name + `)\\s*=\\s*('|")[\\S\\s]*`, "i"), "$1");
                var value = attributes1[realName] || attributes1[realName.toLowerCase()];
                if (direct) holes.push(Attr1(value, path1, realName, null));
                else {
                    var skip = sparse.length - 2;
                    while(skip--)parts.shift();
                    holes.push(Attr1(value, path1, realName, sparse));
                }
            }
            remove1.push(attribute);
        }
    }
    length3 = remove1.length;
    i = 0;
    var cleanValue = 0 < length3 && UID_IE && !("ownerSVGElement" in node);
    while(i < length3){
        var attr1 = remove1[i++];
        if (cleanValue) attr1.value = "";
        node.removeAttribute(attr1.name);
    }
    var nodeName = node.nodeName;
    if (/^script$/i.test(nodeName)) {
        var script = document.createElement(nodeName);
        length3 = attributes1.length;
        i = 0;
        while(i < length3)script.setAttributeNode(attributes1[i++].cloneNode(true));
        script.textContent = node.textContent;
        node.parentNode.replaceChild(script, node);
    }
}
var parsed = index3(new index4());
const lazyGetter = (type1, fn)=>{
    const secret = "_" + type1 + "$";
    return {
        get () {
            return this[secret] || setValue(this, secret, fn.call(this, type1));
        },
        set (value) {
            setValue(this, secret, value);
        }
    };
};
Tagger.prototype = {
    attribute (node, name, original) {
        const isSVG = OWNER_SVG_ELEMENT in node;
        let oldValue;
        if (name === "style") return hyperStyle(node, original, isSVG);
        else if (name.slice(0, 1) === ".") return hyperSetter(node, name.slice(1), isSVG);
        else if (/^on/.test(name)) {
            let type1 = name.slice(2);
            if (type1 === CONNECTED || type1 === DISCONNECTED) {
                observe(node);
            } else if (name.toLowerCase() in node) {
                type1 = type1.toLowerCase();
            }
            return (newValue)=>{
                if (oldValue !== newValue) {
                    if (oldValue) node.removeEventListener(type1, oldValue, false);
                    oldValue = newValue;
                    if (newValue) node.addEventListener(type1, newValue, false);
                }
            };
        } else if (name === "data" || !isSVG && name in node && !readOnly.test(name)) {
            return (newValue)=>{
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (node[name] !== newValue && newValue == null) {
                        node[name] = "";
                        node.removeAttribute(name);
                    } else node[name] = newValue;
                }
            };
        } else if (name in Intent.attributes) {
            return (any)=>{
                const newValue = Intent.attributes[name](node, any);
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (newValue == null) node.removeAttribute(name);
                    else node.setAttribute(name, newValue);
                }
            };
        } else {
            let owner = false;
            const attribute = original.cloneNode(true);
            return (newValue)=>{
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (attribute.value !== newValue) {
                        if (newValue == null) {
                            if (owner) {
                                owner = false;
                                node.removeAttributeNode(attribute);
                            }
                            attribute.value = newValue;
                        } else {
                            attribute.value = newValue;
                            if (!owner) {
                                owner = true;
                                node.setAttributeNode(attribute);
                            }
                        }
                    }
                }
            };
        }
    },
    any (node, childNodes) {
        const diffOptions = {
            node: asNode,
            before: node
        };
        const nodeType = OWNER_SVG_ELEMENT in node ? "svg" : "html";
        let fastPath = false;
        let oldValue;
        const anyContent = (value)=>{
            switch(typeof value){
                case "string":
                case "number":
                case "boolean":
                    if (fastPath) {
                        if (oldValue !== value) {
                            oldValue = value;
                            childNodes[0].textContent = value;
                        }
                    } else {
                        fastPath = true;
                        oldValue = value;
                        childNodes = domdiff2(node.parentNode, childNodes, [
                            text(node, value)
                        ], diffOptions);
                    }
                    break;
                case "function":
                    anyContent(value(node));
                    break;
                case "object":
                case "undefined":
                    if (value == null) {
                        fastPath = false;
                        childNodes = domdiff2(node.parentNode, childNodes, [], diffOptions);
                        break;
                    }
                default:
                    fastPath = false;
                    oldValue = value;
                    if (isArray(value)) {
                        if (value.length === 0) {
                            if (childNodes.length) {
                                childNodes = domdiff2(node.parentNode, childNodes, [], diffOptions);
                            }
                        } else {
                            switch(typeof value[0]){
                                case "string":
                                case "number":
                                case "boolean":
                                    anyContent({
                                        html: value
                                    });
                                    break;
                                case "object":
                                    if (isArray(value[0])) {
                                        value = value.concat.apply([], value);
                                    }
                                    if (isPromise_ish(value[0])) {
                                        Promise.all(value).then(anyContent);
                                        break;
                                    }
                                default:
                                    childNodes = domdiff2(node.parentNode, childNodes, value, diffOptions);
                                    break;
                            }
                        }
                    } else if (canDiff(value)) {
                        childNodes = domdiff2(node.parentNode, childNodes, value.nodeType === 11 ? slice3.call(value.childNodes) : [
                            value
                        ], diffOptions);
                    } else if (isPromise_ish(value)) {
                        value.then(anyContent);
                    } else if ("placeholder" in value) {
                        invokeAtDistance(value, anyContent);
                    } else if ("text" in value) {
                        anyContent(String(value.text));
                    } else if ("any" in value) {
                        anyContent(value.any);
                    } else if ("html" in value) {
                        childNodes = domdiff2(node.parentNode, childNodes, slice3.call(createContent([].concat(value.html).join(""), nodeType).childNodes), diffOptions);
                    } else if ("length" in value) {
                        anyContent(slice3.call(value));
                    } else {
                        anyContent(Intent.invoke(value, anyContent));
                    }
                    break;
            }
        };
        return anyContent;
    },
    text (node) {
        let oldValue;
        const textContent = (value)=>{
            if (oldValue !== value) {
                oldValue = value;
                const type1 = typeof value;
                if (type1 === "object" && value) {
                    if (isPromise_ish(value)) {
                        value.then(textContent);
                    } else if ("placeholder" in value) {
                        invokeAtDistance(value, textContent);
                    } else if ("text" in value) {
                        textContent(String(value.text));
                    } else if ("any" in value) {
                        textContent(value.any);
                    } else if ("html" in value) {
                        textContent([].concat(value.html).join(""));
                    } else if ("length" in value) {
                        textContent(slice3.call(value).join(""));
                    } else {
                        textContent(Intent.invoke(value, textContent));
                    }
                } else if (type1 === "function") {
                    textContent(value(node));
                } else {
                    node.textContent = value == null ? "" : value;
                }
            }
        };
        return textContent;
    }
};
const wires = new index4();
const bewitched = new index4();
hyper._ = {
    WeakMap: index4,
    WeakSet: index
};
function find1(selector, context) {
    return !selector || !isDocument(context) && !isElement(context) ? [] : classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
}
fn.has = function(selector) {
    const comparator = isString(selector) ? (i, ele)=>find1(selector, ele).length
     : (i, ele)=>ele.contains(selector)
    ;
    return this.filter(comparator);
};
const remove1 = (get, children, start, end)=>{
    while(start < end)drop1(get(children[start++], -1));
};
const applyDiff = (diff, get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before)=>{
    const live = [];
    const length3 = diff.length;
    let currentIndex = currentStart;
    let i = 0;
    while(i < length3){
        switch(diff[i++]){
            case 0:
                futureStart++;
                currentIndex++;
                break;
            case 1:
                live.push(futureNodes[futureStart]);
                append1(get, parentNode, futureNodes, futureStart++, futureStart, currentIndex < currentLength ? get(currentNodes[currentIndex], 0) : before);
                break;
            case DELETION:
                currentIndex++;
                break;
        }
    }
    i = 0;
    while(i < length3){
        switch(diff[i++]){
            case 0:
                currentStart++;
                break;
            case DELETION:
                if (-1 < live.indexOf(currentNodes[currentStart])) currentStart++;
                else remove1(get, currentNodes, currentStart++, currentStart);
                break;
        }
    }
};
const smartDiff = (get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before)=>{
    applyDiff(OND(futureNodes, futureStart, futureChanges, currentNodes, currentStart, currentChanges, compare) || HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges), get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before);
};
function attrReplacer($0, $1, $2, $3) {
    return "<" + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}
function parse(node, holes, parts, path1) {
    var childNodes = node.childNodes;
    var length3 = childNodes.length;
    var i = 0;
    while(i < length3){
        var child = childNodes[i];
        switch(child.nodeType){
            case ELEMENT_NODE:
                var childPath = path1.concat(i);
                parseAttributes(child, holes, parts, childPath);
                parse(child, holes, parts, childPath);
                break;
            case COMMENT_NODE:
                var textContent = child.textContent;
                if (textContent === UID) {
                    parts.shift();
                    holes.push(SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Text1(node, path1) : Any(child, path1.concat(i)));
                } else {
                    switch(textContent.slice(0, 2)){
                        case "/*":
                            if (textContent.slice(-2) !== "*/") break;
                        case "\u{1F47B}":
                            node.removeChild(child);
                            i--;
                            length3--;
                    }
                }
                break;
            case TEXT_NODE:
                if (SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && trim.call(child.textContent) === UIDC) {
                    parts.shift();
                    holes.push(Text1(node, path1));
                }
                break;
        }
        i++;
    }
}
function setup(content2) {
    const children = new index4();
    const create = Object.create;
    const createEntry = (wm, id, component)=>{
        wm.set(id, component);
        return component;
    };
    const get = (Class, info, context, id)=>{
        const relation = info.get(Class) || relate(Class, info);
        switch(typeof id){
            case "object":
            case "function":
                const wm = relation.w || (relation.w = new index4());
                return wm.get(id) || createEntry(wm, id, new Class(context));
            default:
                const sm = relation.p || (relation.p = create(null));
                return sm[id] || (sm[id] = new Class(context));
        }
    };
    const relate = (Class, info)=>{
        const relation = {
            w: null,
            p: null
        };
        info.set(Class, relation);
        return relation;
    };
    const set = (context)=>{
        const info = new index2();
        children.set(context, info);
        return info;
    };
    Object.defineProperties(Component, {
        for: {
            configurable: true,
            value (context, id) {
                return get(this, children.get(context) || set(context), context, id == null ? "default" : id);
            }
        }
    });
    Object.defineProperties(Component.prototype, {
        handleEvent: {
            value (e) {
                const ct = e.currentTarget;
                this["getAttribute" in ct && ct.getAttribute("data-call") || "on" + e.type](e);
            }
        },
        html: lazyGetter("html", content2),
        svg: lazyGetter("svg", content2),
        state: lazyGetter("state", function() {
            return this.defaultState;
        }),
        defaultState: {
            get () {
                return {
                };
            }
        },
        dispatch: {
            value (type, detail) {
                const { _wire$  } = this;
                if (_wire$) {
                    const event = new index1(type, {
                        bubbles: true,
                        cancelable: true,
                        detail
                    });
                    event.component = this;
                    return (_wire$.dispatchEvent ? _wire$ : _wire$.firstChild).dispatchEvent(event);
                }
                return false;
            }
        },
        setState: {
            value (state, render2) {
                const target = this.state;
                const source = typeof state === "function" ? state.call(this, target) : state;
                for(const key in source)target[key] = source[key];
                if (render2 !== false) this.render();
                return this;
            }
        }
    });
}
function index5(template) {
    return template.join(UIDC).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
}
function createInfo(options, template) {
    var markup = (options.convert || index5)(template);
    var transform = options.transform;
    if (transform) markup = transform(markup);
    var content = createContent(markup, options.type);
    cleanContent(content);
    var holes = [];
    parse(content, holes, template.slice(0), []);
    return {
        content,
        updates: function(content2) {
            var updates = [];
            var len = holes.length;
            var i = 0;
            var off = 0;
            while(i < len){
                var info = holes[i++];
                var node = find(content2, info.path);
                switch(info.type){
                    case "any":
                        updates.push({
                            fn: options.any(node, []),
                            sparse: false
                        });
                        break;
                    case "attr":
                        var sparse = info.sparse;
                        var fn = options.attribute(node, info.name, info.node);
                        if (sparse === null) updates.push({
                            fn,
                            sparse: false
                        });
                        else {
                            off += sparse.length - 2;
                            updates.push({
                                fn,
                                sparse: true,
                                values: sparse
                            });
                        }
                        break;
                    case "text":
                        updates.push({
                            fn: options.text(node),
                            sparse: false
                        });
                        node.textContent = "";
                        break;
                }
            }
            len += off;
            return function() {
                var length3 = arguments.length;
                if (len !== length3 - 1) {
                    throw new Error(length3 - 1 + " values instead of " + len + "\n" + template.join("${value}"));
                }
                var i2 = 1;
                var off2 = 1;
                while(i2 < length3){
                    var update3 = updates[i2 - off2];
                    if (update3.sparse) {
                        var values1 = update3.values;
                        var value = values1[0];
                        var j = 1;
                        var l = values1.length;
                        off2 += l - 2;
                        while(j < l)value += arguments[i2++] + values1[j++];
                        update3.fn(value);
                    } else update3.fn(arguments[i2++]);
                }
                return content2;
            };
        }
    };
}
function createDetails(options, template) {
    var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
    return info.updates(importNode.call(document, info.content, true));
}
function domtagger(options) {
    var previous = empty1;
    var updates = cleanContent;
    return function(template) {
        if (previous !== template) updates = createDetails(options, previous = template);
        return updates.apply(null, arguments);
    };
}
function Tagger(type3) {
    this.type = type3;
    return domtagger(this);
}
function upgrade(template) {
    const type3 = OWNER_SVG_ELEMENT in this ? "svg" : "html";
    const tagger2 = new Tagger(type3);
    bewitched.set(this, {
        tagger: tagger2,
        template
    });
    this.textContent = "";
    this.appendChild(tagger2.apply(null, arguments));
}
const tagger = Tagger.prototype;
hyper.tagger = tagger;
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
        return !_includesWith(eq, aItem, b2);
    }, b, a);
}
function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
        return true;
    }
    var typeA = type1(a);
    if (typeA !== type1(b)) {
        return false;
    }
    if (a == null || b == null) {
        return false;
    }
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
        return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    }
    if (typeof a.equals === "function" || typeof b.equals === "function") {
        return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    }
    switch(typeA){
        case "Arguments":
        case "Array":
        case "Object":
            if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
                return a === b;
            }
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
                return false;
            }
            break;
        case "Date":
            if (!_objectIs$1(a.valueOf(), b.valueOf())) {
                return false;
            }
            break;
        case "Error":
            return a.name === b.name && a.message === b.message;
        case "RegExp":
            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
                return false;
            }
            break;
    }
    var idx = stackA.length - 1;
    while(idx >= 0){
        if (stackA[idx] === a) {
            return stackB[idx] === b;
        }
        idx -= 1;
    }
    switch(typeA){
        case "Map":
            if (a.size !== b.size) {
                return false;
            }
            return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([
                a
            ]), stackB.concat([
                b
            ]));
        case "Set":
            if (a.size !== b.size) {
                return false;
            }
            return _uniqContentEquals(a.values(), b.values(), stackA.concat([
                a
            ]), stackB.concat([
                b
            ]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer": break;
        default:
            return false;
    }
    var keysA = keys(a);
    if (keysA.length !== keys(b).length) {
        return false;
    }
    var extendedStackA = stackA.concat([
        a
    ]);
    var extendedStackB = stackB.concat([
        b
    ]);
    idx = keysA.length - 1;
    while(idx >= 0){
        var key = keysA[idx];
        if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
            return false;
        }
        idx -= 1;
    }
    return true;
}
var equals = _curry2(function equals2(a, b) {
    return _equals(a, b, [], []);
});
function _indexOf(list, a, idx) {
    var inf, item;
    if (typeof list.indexOf === "function") {
        switch(typeof a){
            case "number":
                if (a === 0) {
                    inf = 1 / a;
                    while(idx < list.length){
                        item = list[idx];
                        if (item === 0 && 1 / item === inf) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                } else if (a !== a) {
                    while(idx < list.length){
                        item = list[idx];
                        if (typeof item === "number" && item !== item) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                }
                return list.indexOf(a, idx);
            case "string":
            case "boolean":
            case "function":
            case "undefined":
                return list.indexOf(a, idx);
            case "object":
                if (a === null) {
                    return list.indexOf(a, idx);
                }
        }
    }
    while(idx < list.length){
        if (equals(list[idx], a)) {
            return idx;
        }
        idx += 1;
    }
    return -1;
}
function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
}
function _toString(x, seen) {
    var recur = function recur2(y) {
        var xs = seen.concat([
            x
        ]);
        return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
    };
    var mapPairs = function(obj, keys4) {
        return _map(function(k) {
            return _quote(k) + ": " + recur(obj[k]);
        }, keys4.slice().sort());
    };
    switch(Object.prototype.toString.call(x)){
        case "[object Arguments]":
            return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
        case "[object Array]":
            return "[" + _map(recur, x).concat(mapPairs(x, reject(function(k) {
                return /^\d+$/.test(k);
            }, keys(x)))).join(", ") + "]";
        case "[object Boolean]":
            return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
        case "[object Date]":
            return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ")";
        case "[object Null]":
            return "null";
        case "[object Number]":
            return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
        case "[object String]":
            return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
        case "[object Undefined]":
            return "undefined";
        default:
            if (typeof x.toString === "function") {
                var repr = x.toString();
                if (repr !== "[object Object]") {
                    return repr;
                }
            }
            return "{" + mapPairs(x, keys(x)).join(", ") + "}";
    }
}
var toString$1 = _curry1(function toString2(val) {
    return _toString(val, []);
});
var concat1 = _curry2(function concat2(a, b) {
    if (_isArray(a)) {
        if (_isArray(b)) {
            return a.concat(b);
        }
        throw new TypeError(toString$1(b) + " is not an array");
    }
    if (_isString(a)) {
        if (_isString(b)) {
            return a + b;
        }
        throw new TypeError(toString$1(b) + " is not a string");
    }
    if (a != null && _isFunction(a["fantasy-land/concat"])) {
        return a["fantasy-land/concat"](b);
    }
    if (a != null && _isFunction(a.concat)) {
        return a.concat(b);
    }
    throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
var _Set = function() {
    function _Set2() {
        this._nativeSet = typeof Set === "function" ? new Set() : null;
        this._items = {
        };
    }
    _Set2.prototype.add = function(item) {
        return !hasOrAdd(item, true, this);
    };
    _Set2.prototype.has = function(item) {
        return hasOrAdd(item, false, this);
    };
    return _Set2;
}();
function hasOrAdd(item, shouldAdd, set3) {
    var type3 = typeof item;
    var prevSize, newSize;
    switch(type3){
        case "string":
        case "number":
            if (item === 0 && 1 / item === -Infinity) {
                if (set3._items["-0"]) {
                    return true;
                } else {
                    if (shouldAdd) {
                        set3._items["-0"] = true;
                    }
                    return false;
                }
            }
            if (set3._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set3._nativeSet.size;
                    set3._nativeSet.add(item);
                    newSize = set3._nativeSet.size;
                    return newSize === prevSize;
                } else {
                    return set3._nativeSet.has(item);
                }
            } else {
                if (!(type3 in set3._items)) {
                    if (shouldAdd) {
                        set3._items[type3] = {
                        };
                        set3._items[type3][item] = true;
                    }
                    return false;
                } else if (item in set3._items[type3]) {
                    return true;
                } else {
                    if (shouldAdd) {
                        set3._items[type3][item] = true;
                    }
                    return false;
                }
            }
        case "boolean":
            if (type3 in set3._items) {
                var bIdx = item ? 1 : 0;
                if (set3._items[type3][bIdx]) {
                    return true;
                } else {
                    if (shouldAdd) {
                        set3._items[type3][bIdx] = true;
                    }
                    return false;
                }
            } else {
                if (shouldAdd) {
                    set3._items[type3] = item ? [
                        false,
                        true
                    ] : [
                        true,
                        false
                    ];
                }
                return false;
            }
        case "function":
            if (set3._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set3._nativeSet.size;
                    set3._nativeSet.add(item);
                    newSize = set3._nativeSet.size;
                    return newSize === prevSize;
                } else {
                    return set3._nativeSet.has(item);
                }
            } else {
                if (!(type3 in set3._items)) {
                    if (shouldAdd) {
                        set3._items[type3] = [
                            item
                        ];
                    }
                    return false;
                }
                if (!_includes(item, set3._items[type3])) {
                    if (shouldAdd) {
                        set3._items[type3].push(item);
                    }
                    return false;
                }
                return true;
            }
        case "undefined":
            if (set3._items[type3]) {
                return true;
            } else {
                if (shouldAdd) {
                    set3._items[type3] = true;
                }
                return false;
            }
        case "object":
            if (item === null) {
                if (!set3._items["null"]) {
                    if (shouldAdd) {
                        set3._items["null"] = true;
                    }
                    return false;
                }
                return true;
            }
        default:
            type3 = Object.prototype.toString.call(item);
            if (!(type3 in set3._items)) {
                if (shouldAdd) {
                    set3._items[type3] = [
                        item
                    ];
                }
                return false;
            }
            if (!_includes(item, set3._items[type3])) {
                if (shouldAdd) {
                    set3._items[type3].push(item);
                }
                return false;
            }
            return true;
    }
}
var difference = _curry2(function difference2(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();
    for(var i = 0; i < secondLen; i += 1){
        toFilterOut.add(second[i]);
    }
    while(idx < firstLen){
        if (toFilterOut.add(first[idx])) {
            out[out.length] = first[idx];
        }
        idx += 1;
    }
    return out;
});
var uniqBy = _curry2(function uniqBy2(fn, list) {
    var set3 = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while(idx < list.length){
        item = list[idx];
        appliedItem = fn(item);
        if (set3.add(appliedItem)) {
            result.push(item);
        }
        idx += 1;
    }
    return result;
});
var uniq = uniqBy(identity);
function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
        throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
    }
}
var templateLiteral = function(tl) {
    var RAW = "raw";
    var isBroken = function(UA) {
        return /(Firefox|Safari)\/(\d+)/.test(UA) && !/(Chrom[eium]+|Android)\/(\d+)/.test(UA);
    };
    var broken = isBroken((document.defaultView.navigator || {
    }).userAgent);
    var FTS = !(RAW in tl) || tl.propertyIsEnumerable(RAW) || !Object.isFrozen(tl[RAW]);
    if (broken || FTS) {
        var forever = {
        };
        var foreverCache = function(tl2) {
            for(var key = ".", i = 0; i < tl2.length; i++)key += tl2[i].length + "." + tl2[i];
            return forever[key] || (forever[key] = tl2);
        };
        if (FTS) templateLiteral = foreverCache;
        else {
            var wm = new index4();
            var set = function(tl2, unique1) {
                wm.set(tl2, unique1);
                return unique1;
            };
            templateLiteral = function(tl2) {
                return wm.get(tl2) || set(tl2, foreverCache(tl2));
            };
        }
    } else {
        isNoOp = true;
    }
    return TL(tl);
};
function TL(tl) {
    return isNoOp ? tl : templateLiteral(tl);
}
function index6(template) {
    var length3 = arguments.length;
    var args = [
        TL(template)
    ];
    var i = 1;
    while(i < length3)args.push(arguments[i++]);
    return args;
}
const wire = (obj, type3)=>obj == null ? content(type3 || "html") : weakly(obj, type3 || "html")
;
const content = (type3)=>{
    let wire2, tagger2, template;
    return function() {
        const args = index6.apply(null, arguments);
        if (template !== args[0]) {
            template = args[0];
            tagger2 = new Tagger(type3);
            wire2 = wireContent(tagger2.apply(tagger2, args));
        } else {
            tagger2.apply(tagger2, args);
        }
        return wire2;
    };
};
const weakly = (obj, type3)=>{
    const i = type3.indexOf(":");
    let wire2 = wires.get(obj);
    let id = type3;
    if (-1 < i) {
        id = type3.slice(i + 1);
        type3 = type3.slice(0, i) || "html";
    }
    if (!wire2) wires.set(obj, wire2 = {
    });
    return wire2[id] || (wire2[id] = content(type3));
};
function render() {
    const wicked = bewitched.get(this);
    const args = index6.apply(null, arguments);
    if (wicked && wicked.template === args[0]) {
        wicked.tagger.apply(null, args);
    } else {
        upgrade.apply(this, args);
    }
    return this;
}
const bind1 = (context)=>render.bind(context)
;
hyper.bind = bind1;
hyper.wire = wire;
setup(content);
function hyper(HTML) {
    return arguments.length < 2 ? HTML == null ? content("html") : typeof HTML === "string" ? hyper.wire(null, HTML) : "raw" in HTML ? content("html")(HTML) : "nodeType" in HTML ? hyper.bind(HTML) : weakly(HTML, "html") : ("raw" in HTML ? content("html") : hyper.wire).apply(null, arguments);
}
fn.map = function(callback) {
    return cash(concat.apply([], map1.call(this, (ele, i)=>callback.call(ele, i, ele)
    )));
};
fn.slice = function(start, end) {
    return cash(slice4.call(this, start, end));
};
function isCash(x) {
    return x instanceof Cash;
}
fn.eq = function(index7) {
    return cash(this.get(index7));
};
function extend(...sources) {
    const deep = isBoolean(sources[0]) ? sources.shift() : false, target = sources.shift(), length3 = sources.length;
    if (!target) return {
    };
    if (!length3) return extend(deep, cash, target);
    for(let i = 0; i < length3; i++){
        const source = sources[i];
        for(const key in source){
            if (deep && (isArray1(source[key]) || isPlainObject(source[key]))) {
                if (!target[key] || target[key].constructor !== source[key].constructor) target[key] = new source[key].constructor();
                extend(deep, target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
cash.extend = extend;
fn.extend = function(plugins) {
    return extend(fn, plugins);
};
function getCompareFunction(comparator) {
    return isString(comparator) ? (i, ele)=>matches(ele, comparator)
     : isFunction(comparator) ? comparator : isCash(comparator) ? (i, ele)=>comparator.is(ele)
     : !comparator ? ()=>false
     : (i, ele)=>ele === comparator
    ;
}
fn.filter = function(comparator) {
    const compare = getCompareFunction(comparator);
    return cash(filter1.call(this, (ele, i)=>compare.call(ele, i, ele)
    ));
};
function pluck1(arr, prop1, deep, until) {
    const plucked = [], isCallback = isFunction(prop1), compare = until && getCompareFunction(until);
    for(let i = 0, l = arr.length; i < l; i++){
        if (isCallback) {
            const val2 = prop1(arr[i]);
            if (val2.length) push.apply(plucked, val2);
        } else {
            let val2 = arr[i][prop1];
            while(val2 != null){
                if (until && compare(-1, val2)) break;
                plucked.push(val2);
                val2 = deep ? val2[prop1] : null;
            }
        }
    }
    return plucked;
}
fn.add = function(selector, context) {
    return cash(unique(this.get().concat(cash(selector, context).get())));
};
function on(eventFullName, selector, data2, callback, _one) {
    if (!isString(eventFullName)) {
        for(const key in eventFullName){
            this.on(key, selector, data2, eventFullName[key], _one);
        }
        return this;
    }
    if (!isString(selector)) {
        if (isUndefined(selector) || isNull(selector)) {
            selector = "";
        } else if (isUndefined(data2)) {
            data2 = selector;
            selector = "";
        } else {
            callback = data2;
            data2 = selector;
            selector = "";
        }
    }
    if (!isFunction(callback)) {
        callback = data2;
        data2 = void 0;
    }
    if (!callback) return this;
    each(getSplitValues(eventFullName), (i, eventFullName2)=>{
        const [nameOriginal, namespaces] = parseEventName(eventFullName2), name = getEventNameBubbling(nameOriginal), isEventHover = nameOriginal in eventsHover, isEventFocus = nameOriginal in eventsFocus;
        if (!name) return;
        this.each((i2, ele)=>{
            if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
            const finalCallback = function(event) {
                if (event.target[`___i${event.type}`]) return event.stopImmediatePropagation();
                if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
                if (!selector && (isEventFocus && (event.target !== ele || event.___ot === name) || isEventHover && event.relatedTarget && ele.contains(event.relatedTarget))) return;
                let thisArg = ele;
                if (selector) {
                    let target = event.target;
                    while(!matches(target, selector)){
                        if (target === ele) return;
                        target = target.parentNode;
                        if (!target) return;
                    }
                    thisArg = target;
                    event.___cd = true;
                }
                if (event.___cd) {
                    Object.defineProperty(event, "currentTarget", {
                        configurable: true,
                        get () {
                            return thisArg;
                        }
                    });
                }
                Object.defineProperty(event, "data", {
                    configurable: true,
                    get () {
                        return data2;
                    }
                });
                const returnValue = callback.call(thisArg, event, event.___td);
                if (_one) {
                    removeEvent(ele, name, namespaces, selector, finalCallback);
                }
                if (returnValue === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
            finalCallback.guid = callback.guid = callback.guid || cash.guid++;
            addEvent(ele, name, namespaces, selector, finalCallback);
        });
    });
    return this;
}
fn.on = on;
fn.ready = function(callback) {
    const cb = ()=>setTimeout(callback, 0, cash)
    ;
    if (document.readyState !== "loading") {
        cb();
    } else {
        document.addEventListener("DOMContentLoaded", cb);
    }
    return this;
};
function getValue(ele) {
    if (ele.multiple && ele.options) return pluck1(filter1.call(ele.options, (option)=>option.selected && !option.disabled && !option.parentNode.disabled
    ), "value");
    return ele.value || "";
}
fn.serialize = function() {
    let query = "";
    this.each((i, ele)=>{
        each(ele.elements || [
            ele
        ], (i2, ele2)=>{
            if (ele2.disabled || !ele2.name || ele2.tagName === "FIELDSET" || skippableRe.test(ele2.type) || checkableRe.test(ele2.type) && !ele2.checked) return;
            const value = getValue(ele2);
            if (!isUndefined(value)) {
                const values1 = isArray1(value) ? value : [
                    value
                ];
                each(values1, (i3, value2)=>{
                    query += queryEncode(ele2.name, value2);
                });
            }
        });
    });
    return query.slice(1);
};
function val(value) {
    if (!arguments.length) return this[0] && getValue(this[0]);
    return this.each((i, ele)=>{
        const isSelect = ele.multiple && ele.options;
        if (isSelect || checkableRe.test(ele.type)) {
            const eleValue = isArray1(value) ? map1.call(value, String) : isNull(value) ? [] : [
                String(value)
            ];
            if (isSelect) {
                each(ele.options, (i2, option)=>{
                    option.selected = eleValue.indexOf(option.value) >= 0;
                }, true);
            } else {
                ele.checked = eleValue.indexOf(ele.value) >= 0;
            }
        } else {
            ele.value = isUndefined(value) || isNull(value) ? "" : value;
        }
    });
}
fn.val = val;
function parseHTML(html2) {
    if (!isString(html2)) return [];
    if (singleTagRe.test(html2)) return [
        createElement(RegExp.$1)
    ];
    const fragment = fragmentRe.test(html2) && RegExp.$1, container = containers[fragment] || containers["*"];
    container.innerHTML = html2;
    return cash(container.childNodes).detach().get();
}
cash.parseHTML = parseHTML;
fn.unwrap = function() {
    this.parent().each((i, ele)=>{
        if (ele.tagName === "BODY") return;
        const $ele = cash(ele);
        $ele.replaceWith($ele.children());
    });
    return this;
};
fn.position = function() {
    const ele = this[0];
    if (!ele) return;
    const isFixed = computeStyle(ele, "position") === "fixed", offset = isFixed ? ele.getBoundingClientRect() : this.offset();
    if (!isFixed) {
        const doc2 = ele.ownerDocument;
        let offsetParent = ele.offsetParent || doc2.documentElement;
        while((offsetParent === doc2.body || offsetParent === doc2.documentElement) && computeStyle(offsetParent, "position") === "static"){
            offsetParent = offsetParent.parentNode;
        }
        if (offsetParent !== ele && isElement(offsetParent)) {
            const parentOffset = cash(offsetParent).offset();
            offset.top -= parentOffset.top + computeStyleInt(offsetParent, "borderTopWidth");
            offset.left -= parentOffset.left + computeStyleInt(offsetParent, "borderLeftWidth");
        }
    }
    return {
        top: offset.top - computeStyleInt(ele, "marginTop"),
        left: offset.left - computeStyleInt(ele, "marginLeft")
    };
};
fn.children = function(comparator) {
    return filtered(cash(unique(pluck1(this, (ele)=>ele.children
    ))), comparator);
};
fn.contents = function() {
    return cash(unique(pluck1(this, (ele)=>ele.tagName === "IFRAME" ? [
            ele.contentDocument
        ] : ele.tagName === "TEMPLATE" ? ele.content.childNodes : ele.childNodes
    )));
};
fn.find = function(selector) {
    return cash(unique(pluck1(this, (ele)=>find1(selector, ele)
    )));
};
function evalScripts(node, doc2) {
    const collection = cash(node);
    collection.filter("script").add(collection.find("script")).each((i, ele)=>{
        if (scriptTypeRe.test(ele.type) && docEle.contains(ele)) {
            const script = createElement("script");
            script.text = ele.textContent.replace(HTMLCDATARe, "");
            each(scriptAttributes, (i2, attr2)=>{
                if (ele[attr2]) script[attr2] = ele[attr2];
            });
            doc2.head.insertBefore(script, null);
            doc2.head.removeChild(script);
        }
    });
}
function insertElement(anchor, target, left, inside, evaluate) {
    if (inside) {
        anchor.insertBefore(target, left ? anchor.firstChild : null);
    } else {
        anchor.parentNode.insertBefore(target, left ? anchor : anchor.nextSibling);
    }
    if (evaluate) {
        evalScripts(target, anchor.ownerDocument);
    }
}
function insertSelectors(selectors, anchors, inverse, left, inside, reverseLoop1, reverseLoop2, reverseLoop3) {
    each(selectors, (si, selector)=>{
        each(cash(selector), (ti, target)=>{
            each(cash(anchors), (ai, anchor)=>{
                const anchorFinal = inverse ? target : anchor, targetFinal = inverse ? anchor : target, indexFinal = inverse ? ti : ai;
                insertElement(anchorFinal, !indexFinal ? targetFinal : targetFinal.cloneNode(true), left, inside, !indexFinal);
            }, reverseLoop3);
        }, reverseLoop2);
    }, reverseLoop1);
    return anchors;
}
fn.after = function() {
    return insertSelectors(arguments, this, false, false, false, true, true);
};
fn.append = function() {
    return insertSelectors(arguments, this, false, false, true);
};
fn.appendTo = function(selector) {
    return insertSelectors(arguments, this, true, false, true);
};
fn.before = function() {
    return insertSelectors(arguments, this, false, true);
};
fn.insertAfter = function(selector) {
    return insertSelectors(arguments, this, true, false, false, false, false, true);
};
fn.insertBefore = function(selector) {
    return insertSelectors(arguments, this, true, true);
};
fn.prepend = function() {
    return insertSelectors(arguments, this, false, true, true, true, true);
};
fn.prependTo = function(selector) {
    return insertSelectors(arguments, this, true, true, true, false, false, true);
};
fn.replaceAll = function(selector) {
    cash(selector).replaceWith(this);
    return this;
};
fn.wrapAll = function(selector) {
    let structure = cash(selector), wrapper = structure[0];
    while(wrapper.children.length)wrapper = wrapper.firstElementChild;
    this.first().before(structure);
    return this.appendTo(wrapper);
};
fn.wrap = function(selector) {
    return this.each((i, ele)=>{
        const wrapper = cash(selector)[0];
        cash(ele).wrapAll(!i ? wrapper : wrapper.cloneNode(true));
    });
};
fn.wrapInner = function(selector) {
    return this.each((i, ele)=>{
        const $ele = cash(ele), contents = $ele.contents();
        contents.length ? contents.wrapAll(selector) : $ele.append(selector);
    });
};
fn.is = function(comparator) {
    const compare = getCompareFunction(comparator);
    return some.call(this, (ele, i)=>compare.call(ele, i, ele)
    );
};
fn.next = function(comparator, _all, _until) {
    return filtered(cash(unique(pluck1(this, "nextElementSibling", _all, _until))), comparator);
};
fn.not = function(comparator) {
    const compare = getCompareFunction(comparator);
    return this.filter((i, ele)=>(!isString(comparator) || isElement(ele)) && !compare.call(ele, i, ele)
    );
};
fn.parent = function(comparator) {
    return filtered(cash(unique(pluck1(this, "parentNode"))), comparator);
};
fn.index = function(selector) {
    const child = selector ? cash(selector)[0] : this[0], collection = selector ? this : cash(child).parent().children();
    return indexOf2.call(collection, child);
};
fn.parents = function(comparator, _until) {
    return filtered(cash(unique(pluck1(this, "parentElement", true, _until))), comparator);
};
fn.prev = function(comparator, _all, _until) {
    return filtered(cash(unique(pluck1(this, "previousElementSibling", _all, _until))), comparator);
};
fn.siblings = function(comparator) {
    return filtered(cash(unique(pluck1(this, (ele)=>cash(ele).parent().children().not(ele)
    ))), comparator);
};
hyper.hyper = hyper;
class Cash {
    constructor(selector1, context1){
        if (!selector1) return;
        if (isCash(selector1)) return selector1;
        let eles = selector1;
        if (isString(selector1)) {
            const ctx = (isCash(context1) ? context1[0] : context1) || document;
            eles = idRe.test(selector1) ? ctx.getElementById(selector1.slice(1)) : htmlRe.test(selector1) ? parseHTML(selector1) : find1(selector1, ctx);
            if (!eles) return;
        } else if (isFunction(selector1)) {
            return this.ready(selector1);
        }
        if (eles.nodeType || eles === window) eles = [
            eles
        ];
        this.length = eles.length;
        for(let i = 0, l = this.length; i < l; i++){
            this[i] = eles[i];
        }
    }
    init(selector, context) {
        return new Cash(selector, context);
    }
}
const fn = Cash.prototype, cash = fn.init;
cash.fn = cash.prototype = fn;
const R = null;
