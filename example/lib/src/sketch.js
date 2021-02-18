import * as p5 from 'p5';

let s = (sk) => {    
	sk.setup = () =>{
		sk.createCanvas(window.innerWidth,window.innerHeight);
		sk.background(40);
		sk.stroke(200);
		sk.strokeWeight(3);
	}
}

const P5 = new p5(s);