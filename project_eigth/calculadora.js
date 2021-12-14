//Dados

let tela_inicial = document.querySelector('.display');
let reset_tela = '0';
let numeros_na_tela = true
let qnt_numeros_na_tela;


//Eventos
document.querySelectorAll('.btn').forEach(item =>{
    item.addEventListener('click', display)
});

document.getElementById('reset').addEventListener('click', reset);

document.querySelectorAll('.opr').forEach((item) => {
    item.addEventListener('click', opr);
});

//Funções 
function reset(){
    tela_inicial.innerHTML = reset_tela;
    numeros_na_tela = true;
}

function display(){
    n = document.querySelector('.display').textContent;
    if(n === "Hello Word"){
        tela_inicial.innerHTML = '';
    }

   if(numeros_na_tela){
    switch (Number(this.id)) {
        case 1:
            document.querySelector('.display').innerHTML += `${1}`;
            click()
            break;
        case 2:
            document.querySelector('.display').innerHTML += `${2}`;
            click()
            break;
        case 3:
            document.querySelector('.display').innerHTML += `${3}`;
            click()
            break;
        case 4:
            document.querySelector('.display').innerHTML += `${4}`;
            click()
            break;
        case 5:
            document.querySelector('.display').innerHTML += `${4}`;
            click()
            break;
        case 6:
            document.querySelector('.display').innerHTML += `${6}`;
            click()
            break;
        case 7:
            document.querySelector('.display').innerHTML += `${7}`;
            click()
            break;
        case 8:
            document.querySelector('.display').innerHTML += `${8}`;
            click()
            break;
        case 9:
            document.querySelector('.display').innerHTML += `${9}`;
            click()
            break;
        case 10:
            document.querySelector('.display').innerHTML += `${0}`;
            click()
            break;
        case 11:
            document.querySelector('.display').innerHTML = `${parseFloat(qnt_numeros_na_tela/100).toFixed(5)}`
        default:

            break;
    }
   }
}

function click(){
    qnt_numeros_na_tela = document.querySelector('.display').textContent;

    if(qnt_numeros_na_tela.length ==9){
        numeros_na_tela = false
    }
}

function opr(){
    console.log(this.id);
}

