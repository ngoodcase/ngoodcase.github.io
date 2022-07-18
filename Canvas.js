var canvas = document.querySelector('canvas')

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100)
c.fillRect(210,100,100,100)
console.log('canvas');

// Line
c.beginPath();
c.moveTo(50, 100);
c.lineTo(50, 300);
c.stroke()
// Line
c.beginPath();
c.moveTo(50, 100);
c.lineTo(100, 200);
c.stroke()

