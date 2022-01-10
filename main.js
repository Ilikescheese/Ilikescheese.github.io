let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(50, 221, 255)";
ctx.strokeStyle = "rgb(235,235,235)";

class SnowFlake{
	constructor(x,y,size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}
	render(){
		ctx.beginPath();
		ctx.moveTo(this.x,this.y)
		ctx.lineTo(this.x + this.size,this.y + this.size)
		ctx.stroke();

		ctx.moveTo(this.x + this.size,this.y);
		ctx.lineTo(this.x, this.y + this.size);
		ctx.stroke();

		ctx.moveTo(this.x + this.size,this.y);
		ctx.lineTo(this.x, this.y + this.size);
		ctx.stroke();

		ctx.moveTo(this.x, this.y + this.size / 2);
		ctx.lineTo(this.x + this.size, this.y + this.size / 2);
		ctx.stroke();

		ctx.moveTo(this.x  + this.size / 2 , this.y);
		ctx.lineTo(this.x + this.size / 2, this.y + this.size);
		ctx.stroke();
	}
}

function randRange(min, max) {
	return Math.random() * (max - min) + min;
}

let flakes = [];

function animate(){
	ctx.fillRect(0,0,canvas.width,canvas.height);
	flakes.push(new SnowFlake(randRange(0,window.innerWidth),0,randRange(8,32)));

	let counter = 0;
	flakes.forEach(flake => {
		counter++;

		flake.x += 1 * randRange(-2,2);
		flake.y += 1 * randRange(0,3);
		if(flake.y >= window.innerWidth)
			flakes.splice(counter,1);

		flake.render();
	});
}

if(ctx){
	setInterval(animate,10);
}