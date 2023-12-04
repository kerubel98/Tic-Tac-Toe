function pleyer(token){
    this.token = token;
    let pleyerch = 

    const getpleyertoken = (pltoken)=>{
        if(pltoken === X){
            token1 = 'X'
        }
    }


    return [token1, token2]
}

function cell(index, pleyer){
    //this object change its value bassed on the pleyer preses that cell
    //pushed trough all the game board arrey and expect the pleyer  to push
    //give its value to the sale
    //gate value from pleyer
    const indx = [0, 0]
    let value = 0;

    const addvalue = (pleyer) =>{
        value = pleyer;
    };
    const addindex = (index)=> {
        indx[0] = index[0];
        indx[1] = index[1]
    }
    const getvalue = ()=>value;
    const getindex = ()=>indx;

    return{addvalue, getvalue, addindex, getindex}

}
function btoa(cell){
    let avelbelcells = []
    let value = 0;
    const nonpleyertoken = pleyer();
    const updatavelbelcell = (cell)=>{
        avelbelcells = cell;
    }
    const addvalue = ()=>{
        value = (Math.floor(Math.random()))*avelbelcells.length;
    }
    const
}

function GameBoard(){
    const board = []
    const value = cell()
    const celllist = [];
    for(i=0; i<3; i++){
        board[i] = [];
        for(j=0; j<3; j++){
            board[i].push(cell());
        }
    }
    board.forEach(function(row, i){
        celllist[i] = []
        row.forEach(function(col, j){
            const cell = document.createElement('div');
            cell.className = 'cell';
            col.addindex([i, j])
            celllist[i].push(cell)
        });
    })
    const getBoard = ()=>board;
    const getcellist = ()=>celllist;

    const avelbelcell = ()=>{
        board.filter(function(row){
            row.filter(function(col){
                col.getvalue() === 0;
            })
        })
    };




    return {getBoard, avelbelcell, getcellist}

};
function Gamecontroler(){
    const wboard = GameBoard()
    const board = wboard.getcellist()
    const pboard = wboard.getBoard()
    let cells = document.querySelector(".game")
    const [pleyer1, pleyer2] = pleyer();
    let activePleyr = pleyer1;

    const pleyerTurn = ()=>{
        activePleyr = activePleyr === pleyer1 ? pleyer2 : pleyer1;
    }
    const pleyeraction = (i, j, ev)=>{
        ev.addEventListener('click', (e)=>{
            pleyerTurn()
            pboard[i][j].addvalue(activePleyr)
            board[i][j].innerHTML = pboard[i][j].getvalue()
            board[i][j].style.pointerEvents = 'none';
        })
    }
    const displeybox = ()=>{
       wboard.getcellist().forEach(function(row, i){
        row.forEach(function(col, j){
            pleyeraction(i, j, col)
            cells.appendChild(col)
        })
       })
    }


return {displeybox}

}
let b = Gamecontroler()
b.displeybox()
