# General


Processing always creates a canvas for us at start time with a predefined measures, but we can overwrite it in the `setup` function, setting our desired size.

### Structure
A processing program generaly is composed of two functions: `setup` and `draw`.

#### Setup structure example
```javascript
const setup = () => createCanvas(400, 300);
const draw = () => background(220, 0, 200);
```
