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

function Player(token){
    return {token}
}

function ComputerPlayer(token){
    function makeMove(){
            let rando = Math.floor(Math.random() * 9);
            return rando;
    }
    function showToken(){return token;}
    return{showToken,makeMove}
}

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

//displayBridge() ------------------------
// - select all div square into js var
// - add eventhandler

const editDOM = (function (){
    const squares = Array.from(document.querySelectorAll('.cell'));

    let screenSquares = [];

    const readScreenBoard = ()=>{
        let current = []
        squares.forEach((square)=>{
            current.push(square.innerText);
        });
        return current;
    };

    const updateScreenBoard = (token,position)=>{
        squares.map((square)=>{
            if(square.id == `pos${position}`){
                square.innerText = token;
            }
        });
    };

    return{readScreenBoard,updateScreenBoard}
})();



console.log(editDOM.readScreenBoard());










