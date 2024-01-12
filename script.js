function GameBoard(){
    let board = [];
    const boardRow = 3;
    const boardCol = 3;
    
    let squareNum = 0;
    for(let i=0;i<boardRow; i++){
        
        for(let j=0; j<boardCol; j++){
            board.push(Square(squareNum));
            squareNum++;
        }
    }

    function showBoard(){ 
        let boardArr = [];
        board.forEach((square)=>{
            boardArr.push(square.showContent());
        });
        return boardArr;
    }

    function editBoard(token,position){
        if(checkBoard(position)) {
            return console.log('cannot make move');
        }
        board.map((cell)=>{
            if(cell.position == position){
                cell.changeContent(token);
                return cell.showContent();
            }
            else return cell.showContent();
        });
    }

    function checkBoard(position){
        if(board[position].showContent()!=''){return true;}
        else {return false;}
    }


    return {showBoard,editBoard}
}


function Square(position){
    let content = '';
    function changeContent(token){
        content = token;
    }
    function showContent(){
        return content;
    }
    return{changeContent,showContent,position}
}

const player = (function(){
    let token = '';
    function showToken(){return token;}
    function setToken(choice){token = choice;}
    return {showToken,setToken};
})();

const computerPlayer = (function(){
    let token = '';
    function makeMove(){
            let rando = Math.floor(Math.random() * 9);
            return rando;
    }
    function showToken(){return token;}
    function setToken(choice){token = choice;}
    return{showToken,makeMove,setToken}
})();

// function PlayRound(){
//     // show current board
//     let position = 0;
//     const game=GameBoard();
//     console.log(game.showBoard());

//     // player choose token
//     let playerOne = Player('O');
//     let comp;
//     if(playerOne.token == 'X') {comp = ComputerPlayer('O');}
//     else {comp = ComputerPlayer('X');}

//     // choose position to place token
//     game.editBoard(playerOne.token,position);
//     console.log(game.showBoard());

//     // computer respond
//     game.editBoard(comp.showToken(),comp.makeMove());
//     console.log(game.showBoard());

// }

//const startGame = PlayRound();


const editDOM = (function (){
    const squares = Array.from(document.querySelectorAll('.cell'));
    const newGameButton = document.querySelector('.control #newGame');
    const playerChoice = Array.from(document.querySelectorAll(".choice"))
    let playerMove = {};
    
    const domSetup =()=>{
        
        squares.forEach((square)=>{
            square.addEventListener('click',positionClicked);
        });

        newGameButton.addEventListener('click',newGame);
        playerChoice.forEach((btn)=>btn.addEventListener('click',playerEmblem));
    }


    const readScreenBoard = ()=>{
        let current = []
        squares.forEach((square)=>{
            current.push(square.innerText);
        });
        return current;
    };

    const updateScreenBoard = (token,position)=>{
        squares.map((square)=>{
            if(square.id == position){
                square.innerText = token;
            }
        });
    };

    const positionClicked =(e)=>{
        if(e.target.innerText!=''){
            return alert('Cannot place token here !');
        }
        e.target.innerText = player.showToken();
        playerMove = {'token':e.target.innerText, 'position':e.target.id};
    }

    const newGame = ()=>{
        player.setToken('');
        computerPlayer.setToken('');
        clearBoard();
    };

    const playerEmblem = (e)=>{
        if(player.showToken()!='')return;
        player.setToken(e.target.innerText);
        computerPlayer.setToken((player.showToken()=='X')?'O':'X');
    };
    
    const clearBoard = ()=>{squares.map((square)=>{
            square.innerText = '';
    });}

    return{readScreenBoard,updateScreenBoard,domSetup,clearBoard}
})();

// const userInput = (function(){

// })();


const gameFlow = (function(){
    editDOM.domSetup();

})();








