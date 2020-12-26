import {hyper as hyper_,R} from './deps.ts'
import {arrayEquals} from './utils.ts'
export let iframe = (async () => (hyper => ({src,sandbox,child}) => hyper.wire()`<iframe src = ${src} sandbox = ${sandbox} onload = ${evt => hyper.bind(evt.target.contentWindow.document.body)`${child}`}></iframe>`)(await hyper_))();
export let window = (async () => ((hyper,iframe) => ({content,onClose}) => iframe({src: URL.createObjectURL(`<script>delete self.top;delete self.parent;</script>`),sandbox: null,child: hyper.wire()`<div><span onclick = ${evt => onClose(evt)}>X</span></div>`}))(await hyper_,await iframe))();
export let watch = hyper_.then(hyper => class extends hyper.Component{
    get defaultState() { this.x=[R.repeat("enter passcode",10).concat([])];Object.defineProperty(this.x[0],10,{get: () => new Date().toDateString()});return {date: new Date(),num: 0,mode: 0,passcode: [],cp: [1,1,1,1]}; }
    get onA() {return evt => {
        this.setState(Prev => ({...Prev,num: Prev.num + 1}));
    }}
    get str(){return this.x[this.state.mode][this.state.num]}
    get act(){return num => {
        if(this.state.passcode && num == 10){
            this.state.passcode.pop();
            let p = this.state.passcode;
            if(arrayEquals(this.state.cp,p)){
                this.setState(o => ({...o,passcode: null,num: 10}));
            };
        }else{
            
        }
    }}
    get onB(){return evt => {
        let n = this.state.num;
        if(this.state.passcode)this.state.passcode.push(n);
        this.setState(prev => ({...prev,num: 0}));
        this.act(n);
    }}
    render(){
        let buttn = hyper.wire()`<div>${this.str}<span onclick=${this.onA}>A</span><span nclick=${this.onB}>B</span></div>`;
        switch (this.state.mode) {
            case 0:
                return this.html`${buttn}${this.state.date.toString()}`
                break;
        
            default:
                break;
        }
    }
})
