//dados
let color_atual = "black";

let canvas = document.querySelector('#tela');
let context = canvas.getContext('2d');

let draw = false;
let mouseX = 0;
let mouseY = 0;



//eventos
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click',  colorClickEvent);
});

canvas.addEventListener('mousedown', mousedown);
canvas.addEventListener('mousemove', mousemove);
canvas.addEventListener('mouseup', mouseup);
document.querySelector('.clear').addEventListener('click', clearCanvas);


//funções
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    
    color_atual = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mousedown(e){
    draw = true;
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.oageY - canvas.offsetTop
}

function mousemove(e){
    if(draw){
     desenhar(e.pageX, e.pageY);
    }
}

function mouseup(){
    draw = false;
}

function desenhar(x, y){
    let pointX = x - canvas.offsetLeft;
    let pointY = y - canvas.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = 'round';
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = color_atual;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;

}

function clearCanvas(){
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

}