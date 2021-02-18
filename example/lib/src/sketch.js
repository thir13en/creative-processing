import * as p5 from 'p5';

let s = (sk) => {    
	sk.setup = () =>{
	    sk.createCanvas(window.innerWidth,window.innerHeight);
	    sk.background(40);
	}
}

const P5 = new p5(s);