function GameBoard(){
    const board = [];
    const boardRow = 3;
    const boardCol = 3;
    
    let squareNum = 0;
    for(let i=0;i<boardRow; i++){
        
        for(let j=0; j<boardCol; j++){
            squareNum++;
            board.push(Square(squareNum));
        }
    }

    function showBoard(){ 
        let boardArr = [];
        board.forEach((square)=>{
            boardArr.push(square.content);
        });
        return boardArr;
    }

    // function editBoard(token,position){
    //     board.filter();
    // }

    return {showBoard}
}


function Square(position){
    const content = '-';
    return{content,position}
}

function Player(name,token){
    // function makeMove(token,position){

    // };
}

const game=GameBoard();
console.log(game.showBoard());