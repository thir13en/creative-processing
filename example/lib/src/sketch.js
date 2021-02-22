import * as P5 from 'p5';
import styles from './style.scss';

let sketch = (sk) => {
	sk.setup = () =>{
		const canvas = {
			width: window.innerWidth - 4,
			height: window.innerHeight - 4,
		};
		sk.createCanvas(canvas.width, canvas.height);
		sk.background(40);
		sk.stroke(200);
		sk.strokeWeight(3);
	}
}

const p5 = new P5(sketch);
