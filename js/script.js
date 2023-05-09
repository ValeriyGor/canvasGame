const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

// // fillRect()
// ctx.fillStyle = 'red';
// ctx.fillRect(50, 20, 150, 50);
// ctx.fillStyle = 'black';
// ctx.fillRect(50, 150, 150, 50);

// ctx.lineWidth = 3;
// ctx.strokeStyle = '#fff';
// ctx.strokeRect(220, 20, 150, 50);

// // // fillText()
// ctx.font = '24px Arial';
// ctx.fillStyle = '#fff';
// ctx.fillText('Hello World', 400, 50);

// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.lineTo(350, 400);
// ctx.lineTo(250, 400);
// ctx.lineTo(300, 300);
// ctx.fillStyle = 'orange';
// ctx.fill();


// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.lineTo(350, 350);
// ctx.lineTo(350, 400);
// ctx.lineTo(300, 425);
// ctx.lineTo(250, 400);
// ctx.lineTo(250, 350);
// ctx.lineTo(300, 300);
// ctx.fillStyle = 'orange';
// ctx.fill();
// // ctx.stroke();

// // Arc (circles)
// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// // Move to mouth
// ctx.moveTo(centerX + 100, centerY);

// // Draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // Move left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// // Draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// // Move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);

// // Draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// ctx.stroke();

// // Quadratic curve
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);

// ctx.stroke();

const imageStop = document.getElementById('marioStop');
const imageJump = document.getElementById('marioJump');
const imageRun = document.getElementById('marioGoRight');

const circle = {
	w: 170,
	h: 212,
	x: 400,
	y: 50,
	dx: 0,
	dy: 0,
	image: imageStop,
}

// function drawCircle() {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = '#fff';
//   ctx.fill();
// }

function drawImage() {
	ctx.drawImage(circle.image, circle.x, circle.y, circle.w, circle.h);
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	
	drawImage();

	circle.x += circle.dx;
	circle.y += circle.dy;

	if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0 ) {
		circle.dx = 0;
	}

	if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0 ) {
		circle.dy = 0;
	}



	requestAnimationFrame(update);
}

update();

function keyDown(e) {
	if (e.key === 'ArrowDown') {
		circle.dy = 3;
	} else if (e.key === 'ArrowUp') {
		circle.image = imageJump;
		circle.dy = -3;
	} else if (e.key === 'ArrowLeft') {
		circle.dx = -3;
	} else if (e.key === 'ArrowRight') {
		circle.image = imageRun;
		circle.dx = 3;
	}
}

function keyUp(e) {
	circle.image = imageStop;
	circle.dy = 0;
	circle.dx = 0;
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
