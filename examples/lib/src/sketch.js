import * as P5 from 'p5';
import styles from './style.scss';

const sketch = (sk) => {
	sk.setup = () =>{
		const canvas = {
			width: window.innerWidth - 6,
			height: window.innerHeight - 6,
		};
		sk.createCanvas(canvas.width, canvas.height);
		sk.background(40);
		sk.stroke(200);
		sk.strokeWeight(3);
		sk.line(10, 10, 555, 555);

		const gfx = sk.createGraphics(window.innerWidth, window.innerHeight);
		// TODO fix this
		gfx.point(10, 10);

		// for(let i=0; i<1000; i++) {
		// 	const randomPoint = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };

		// 	gfx.point(randomPoint.x, randomPoint.y);
		// }
	}
}

const p5 = new P5(sketch);
