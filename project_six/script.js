let question_atual = 0;
let correct_questions = 0;

showQuestion();

document.querySelector('.scoreArea button').addEventListener('click', reset);


//funções 

function showQuestion(){
    if(questions[question_atual]){
        let q = questions[question_atual];

        let percento = Math.floor((question_atual/questions.length)*100);

        document.querySelector('.progress--bar').style.width = `${percento}%`;

        document.querySelector('.scoreArea').style.display = "none";
        document.querySelector('.questionArea').style.display = "block";

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';

        for(let i in q.options){
            optionsHtml += `<div data-op= "${i}"class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(element => {
            element.addEventListener('click', optionClick);
        });
    } else {
        finish();
    }
}

function optionClick(event){
    let clickedQuestion = parseInt(event.target.getAttribute('data-op'));

    if(questions[question_atual].answer === clickedQuestion){
        correct_questions++;
    }

    question_atual++;
    showQuestion();
}

function finish(){
    result();
    document.querySelector('.scoreArea').style.display = "block";
    document.querySelector('.questionArea').style.display ="none";
    document.querySelector('.progress--bar').style.width = '100%';
}

function result(){
    let points = Math.floor((correct_questions/questions.length)*100);


    if(points < 30){
        document.querySelector('.scoreText1').innerHTML= `Ops!Parece que vc precisa estudar um pouquinho mais!`;
        document.querySelector('.scorePct').style.color = "red";
        
    } 
    else if (points <= 50){
        document.querySelector('.scoreText1').innerHTML= `Não desita, vc quase conseguiu!`;
        document.querySelector('.scorePct').style.color = "yellow";
    }
    else if(points < 70){
        document.querySelector('.scoreText1').innerHTML= `Opá! Acima da média! Continue assim!`;
        document.querySelector('.scorePct').style.color = "yellow";
    }
    else if(points > 70){
        document.querySelector('.scoreText1').innerHTML= `É isso ai! Campeão!`;
        document.querySelector('.scorePct').style.color = "green";
    }

    document.querySelector('.scorePct').innerHTML= `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu${questions.length} e acertou ${correct_questions} questões.`;


}

function reset(){
    question_atual = 0;
    correct_questions = 0;

    showQuestion();
}