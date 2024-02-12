import p5 from 'p5';
import {
	BooleanController,
	ColorController,
	HiroApp,
	HiroAppOptions,
	NumberController,
	TextController,
} from '@hiro-sdk/core';



const options: HiroAppOptions = {
    	title: 'P5js Ex 1',
    	author: '#f57e56',
    	description: 'Some description or instructions about your artwork.',
};

const app = new HiroApp(options);
app.bootstrap();

const color = new ColorController('#ff00a6', 'color',{
	label: 'BG Color',
	onChange: (color: string) => {}
});

const sizeRange = new NumberController(100,'slider', {
	label: 'Size',
	max: 200,
	min: 5,
	step: 1,
	slider: true,
	onChange: (value: number) => {}
});

const transparent = new BooleanController(false, 'Transparent')

// Set up p5 sketch
const sketch = (p) => {
	p.setup = () => {
		p.createCanvas(400, 400);
	};

	p.draw = () => {
		const size = p.random(5, sizeRange.getValue());

		if(!transparent.getValue()){
			p.fill(color.getValue());
		}

		p.ellipse(p.mouseX, p.mouseY, size, size);
	};
};

// Create a new p5 instance with the sketch
new p5(sketch);
