import * as P5 from 'p5';
import styles from './style.scss';

let sketch = (sk) => {
	sk.setup = () =>{
		sk.createCanvas(window.innerWidth,window.innerHeight);
		sk.background(40);
		sk.stroke(200);
		sk.strokeWeight(3);
	}
}

const p5 = new P5(sketch);
