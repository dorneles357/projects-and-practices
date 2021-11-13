let relogioDigital = document.querySelector('.digital');
let segundos = document.querySelector('.p_s');
let minutos = document.querySelector('.p_m');
let horas = document.querySelector('.p_h');


function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    relogioDigital.innerHTML = `${corretor(hour)}:${corretor(minute)}:${corretor(second)}`;

    let segundosDeg = ((360/60)*second) - 90;
    let minutosDeg = ((360/60)*minute) - 90;
    let horasDeg = ((360/12)*hour) - 90;

    segundos.style.transform = `rotate(${segundosDeg}deg)`;
    minutos.style.transform = `rotate(${minutosDeg}deg)`;
    horas.style.transform = `rotate(${horasDeg}deg)`;
}


function corretor(time){
    return time < 10 ? `0${time}` : time;
}


setInterval(updateClock, 1000)
updateClock();