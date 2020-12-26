export {default as R} from 'https://cdn.skypack.dev/ramda'
let hyper_ = (async () => await (import('./hyper.ts').catch(err => ({}))))();
export let hyper = hyper_;
export let $ = import('https://cdn.skypack.dev/cash-dom').catch(err => ({}))
export {default as LzString} from 'https://cdn.skypack.dev/lz-string'