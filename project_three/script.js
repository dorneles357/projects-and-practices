document.querySelector('.busca').addEventListener('submit', async (event) =>{
    event.preventDefault(); //previne o comporta,ento padrã

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        clearInfo();
        message('Carregando ...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=bba3f8d9872c495c0f91e64fab36f774&units=metric&lang=pt_br`;

        let reults = await fetch(url);
        let json = await reults.json();

        if(json.cod === 200){
            information({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                icone: json.weather[0].icon,
                wind: json.wind.speed,
                angle: json.wind.deg
            });
        }else{
            clearInfo();
            message('Não foi encontrada a localização')
        }
    } else{
        clearInfo();
    }
});

function information(json){
    message('');
    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>°C</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.wind} <spam>km/h</spam>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icone}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.angle - 90}deg)`;
}
function clearInfo(){
    message('');
    document.querySelector('.resultado').style.display = 'none';
}

function message(msg){
    document.querySelector('.aviso').innerHTML = msg
}