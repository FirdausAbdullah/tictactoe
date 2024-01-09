function GameBoard(){
    let board = [];
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
            boardArr.push(square.showContent());
        });
        return boardArr;
    }

    function editBoard(token,position){
        board.map((cell)=>{
            if(cell.position == position){
                cell.changeContent(token);
                return cell.showContent();
            }
            else return cell.showContent();
        });
    }

    return {showBoard,editBoard}
}


function Square(position){
    let content = '-';
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

function PlayRound(){
    // show current board
    let position = 7;
    const game=GameBoard();
    console.log(game.showBoard());

    // player choose token
    const playerOne = Player('X');

    // choose position to place token
    game.editBoard(playerOne.token,position);
    console.log(game.showBoard());
    // computer respond
    // 

}

const startGame = PlayRound();