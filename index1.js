function pleyer(token){
    let name = token
      if(token === 'X'){
        token = `<img src="./asset/medicine-icon-svgrepo-com.svg" alt="" id="X">`

      }else if (token === 'O'){
        token = `<img src="./asset/capsule-svgrepo-com.svg" alt="" id="O">`

      }
      return {token, name}

}

function cell(i, j){
    let value = null;
    let pleyername = null
    let winer = null;
    const elemenet = document.createElement('div');
    elemenet.dataset.index = `${i},${j}`;
    elemenet.className = 'square';


    const addvalue = (pleyer) =>{
        value = pleyer.token
        elemenet.innerHTML = value
    };

    const addname = (pleyer)=>{
        pleyername = pleyer.name
    }
    const displeycell = (parent)=>{
        parent.appendChild(elemenet)
    }
    const addwiner = (w)=>{
        if(winer === null){
            winer = pleyer(w).token
        }
    }
    const getwiner = ()=>winer;
    const getplayer = ()=>pleyername;
    const getvalue = ()=>value;
    const getelement = ()=>elemenet;
    return{addvalue, getvalue, displeycell, addname, getelement, getplayer, addwiner, getwiner}

}
function bot(cell){
    //pleyer bot that thek defrnt toke from the me
}

function GameBoard(){
    let cleswithvalue = []
    const board = [];
    for(i=0; i<3; i++){
        board[i] = [];
        for(j=0; j<3; j++){
            board[i].push(cell(i, j));
        }
    };
    const getBoard = ()=> board;

    function isBoardFull() {
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (board[row][col] === null) {
              return false;
            }
          }
        }
        return true;
      }


    const cellEmpty = (i, j)=>{
        if(board[i][j].getplayer() === null){
            return true
        }else{
            return false
        }
    }
    const indexlist = (i, j)=>{
        if(cellEmpty(i, j)){
            cleswithvalue.push([i, j])
        }

      }
    const allEqual = (arr)=>arr.every(elemenet=>elemenet ===arr[0])
    const iswiner = (col)=>{
        let name = [];
        for(j=0; j<3; j++){
            if(Boolean(col[j])){
                name.push(board[col[j][0]][col[j][1]].getplayer())
            }
        }
        if(name.length === 3){
            if(allEqual(name)){
                return name[0]
            }
        }
    }


    const colmnwon = (i)=>{
        col = cleswithvalue.filter((elemenet)=>elemenet[1] ===i)
       return iswiner(col)

    }
    const rowwon = (i)=>{
        col = cleswithvalue.filter((elemenet)=>elemenet[0] ===i)
        return iswiner(col)
    }
    const croswon = ()=>{
        col = cleswithvalue.filter((elemenet)=>elemenet[0] === elemenet[1])
        return iswiner(col)
    }
    const croswontwo = ()=>{
       col = cleswithvalue.filter((elemenet)=>((elemenet[0] - elemenet[1]) === 2) || ((elemenet[0] - elemenet[1]) === -2)
        || (elemenet.every(val=> val === '1')))
        return iswiner(col)
    }


    const gameover = (i, j)=>{
        let clo = colmnwon(j)
        let row = rowwon(i)
        let digX = croswon()
        let digY = croswontwo()
        let iswiner = false
        let win = [clo, row, digX, digY]
        if(clo || row || digX || digY){
            iswiner = true

        }
        if(iswiner){
        indx = win.findIndex((el)=> el)
        board[i][j].addwiner(win[indx])
        return iswiner
    }

    }

    const getclawithvalue = ()=>cleswithvalue;


    const vewer = (parent)=>{
        board.forEach(function(row){
            row.forEach(function(col){
                col.displeycell(parent)
            })
        });
    };


    return {getBoard, vewer, getclawithvalue, gameover, indexlist, cellEmpty, isBoardFull}
};
function Gamecontroler(){
    const board = GameBoard()
    let parent = document.querySelector(".game")
    const disply = board.vewer(parent);
    const pleyer1 = [pleyer('X'), pleyer('O')];
    let activePleyr = pleyer1[0];

    const pleyerTurn = ()=>{
        activePleyr = activePleyr === pleyer1[0] ? pleyer1[1] : pleyer1[0];
    }


    const pleyermove = ()=>{
        const parent = document.querySelector('.game')
        const winner = document.querySelector('.winer-bord')
        const notice = document.getElementById('notice')
        parent.addEventListener('click', (event)=>{
                const clickedElement = event.target;
                let index = clickedElement.dataset.index
                const [i, j] = index.split(',');
                let bd = board.getBoard()
                let win = bd[i][j].getwiner()
                if(win === null || board.isBoardFull() === false){
                    if(board.cellEmpty(i, j)){
                            let ht = bd[i][j]
                            board.indexlist(i, j)
                            ht.addname(activePleyr)
                            ht.addvalue(activePleyr)
                            pleyerTurn()
                            gameover = board.gameover(i, j)
                            if(gameover){
                                winner.innerHTML = bd[i][j].getwiner()
                                //notice.parentNode.replaceChild(winner, notice);
                                winner.classList.remove('view')
                                notice.innerHTML = "congerats";
                            }
                    }
                }else if(board.isBoardFull()){
                    winner.innerHTML = "Derow"
                }

            })
        }


return {pleyermove}
}


let pl = Gamecontroler()
pl.pleyermove()


