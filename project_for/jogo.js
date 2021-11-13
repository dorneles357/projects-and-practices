const JogoDaVelha = {
    arr: [],
    board: ['','','','','','','','',''],
    simbols: {
        options:['X', 'O'],
        turnIndex: 0,
        change: function(){
            this.turnIndex = (this.turnIndex === 0 ? 1 : 0);
       }
    },
    container_element: null,
    gameOver: false,
    champions_sequences:[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    init: function(container){
    this.container_element = container;
    },

    MakePlay: function(position){
        if(this.gameOver) return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options[this.simbols.turnIndex];
            this.draw();
            this.msg(this.simbols.options[this.simbols.turnIndex]);
            let champions_sequences_index = this.checkChampions(this.simbols.options[this.simbols.turnIndex]);
            if(champions_sequences_index >= 0){
                this.gameisover();
            }else{
                this.simbols.change();  
                this.arr.length === 9 ? document.querySelector('.msg').innerHTML = `Ninguém ganhou 🥺` : false
            }
            return true;
        }else{
            return false;
        }
    },

    gameisover: function(){
        this.gameOver = true;
        if(this.simbols.options[this.simbols.turnIndex] === "O"){
            document.querySelector('.msg').innerHTML = `O "O" ganhou!!! 🥳`
        } else{
            document.querySelector('.msg').innerHTML = `O "X" ganhou!!! 🥳`
        };
    },
    start: function(){
        this.board.fill('');
        this.draw();
        this.gameOver = false;
    },
    checkChampions: function(simbols){
        this.arr.push(simbols);
        for(i in this.champions_sequences){
            if(this.board[this.champions_sequences[i][0]] == simbols &&
                this.board[this.champions_sequences[i][1]] == simbols &&
                this.board[this.champions_sequences[i][2]] == simbols){
                    console.log('champions: ' + i);
                    return i;
                }
        };
        return -1;
    },
    
    draw: function(){
        let content = '';

        for(i in this.board){
            content += '<div onclick="JogoDaVelha.MakePlay(' + i + ')">'+ this.board[i] +'</div>';
        }

        this.container_element.innerHTML = content;
    },

    msg: function(value){
        if(value !== "X")
            document.querySelector('.msg').innerHTML = `É a vez do "X"`;
        else
            document.querySelector('.msg').innerHTML = `É a vez do "O"`;
    },
};