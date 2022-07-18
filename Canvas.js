var canvas = document.querySelector('canvas')

var c = canvas.getContext('2d');

c.fillStyle = 'blue';
c.fillRect(110, 75, 500, 50)
c.fillStyle = 'cyan';
c.fillRect(110, 275, 500, 50)
console.log('canvas');

// Line
c.strokeStyle ='red'
c.beginPath();
c.moveTo(50, 100);
c.lineTo(50, 300);
c.stroke()
// Line
c.beginPath();
c.moveTo(50, 100);
c.lineTo(100, 200);
c.stroke()
// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(100, 200);
c.stroke()


// Arc / Circle
c.strokeStyle ='black'
c.beginPath();
c.arc(50, 100, 50, 0, Math.PI * 2, false);
c.stroke();
// Arc / Circle
c.beginPath();
c.arc(50, 300, 50, 0, Math.PI * 2, false);
c.stroke();

