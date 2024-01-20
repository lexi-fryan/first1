const canvasPlot = document.getElementById('canvas_plot')
const ctx = canvasPlot.getContext('2d')
ctx.fillRect(0,0,100,100);
ctx.fillStyle='#0000ff';
ctx.fillRect(100,100,200,200);

ctx.lineWidth="5";
ctx.moveTo(300,300);
ctx.lineTo(400,400);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle='#ff0000'
ctx.moveTo(320,300);
ctx.lineTo(420,400);
ctx.stroke();

ctx.fillRect(300,400,2,2);
ctx.font='36px Arial';
ctx.textAlign='center';
ctx.textBaseline='top';
ctx.fillText('Text',300,400);
