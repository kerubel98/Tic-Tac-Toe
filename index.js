function getpleyername(){
    const name = prompt("give me caps 'X' or 'O'");
    return {name};
}

function getIndex(row, col) {
    this.row = row;
    this.col = col
    const newarry = []
    const arry1 = ()=>{
        newarry[0] = this.row;
        newarry[1] = this.col
        return newarry
    }
    return {arry1}
    //actual HTML table or other elemnt with index
    //get turn of the pleyer X or o
}

function player(){
    const ch = getpleyername();
    const n = ch.name
    return {n}
};

function gameBord(){
    //this.ch = ch//is
    const row = []
    const col = ' '
    const creatBord =()=>{
        for(i=0; i<3; i++){
            row[i] = [];
            for(j=0; j<3; j++){
                //colmun is value holder
                row[i][j] = col;
            }
        };
        return row
    };

    return {row, creatBord}
};


function game(x, y){
    const pl = player()
    let indx = getIndex(x, y)
    let plname = pl.n;
    let turnx = false;
    let bord = gameBord();
    const bordspots = bord.creatBord();
    const turnv = ()=>{

        if(pl.n === 'X'){
            turnx = true;
        }
        if(turnx){
            if (pl.n === 'X' || plname === "X"){
                plname = 'O'
                return 'X';
            } else {
                plname = 'X';
                return 'O';
            }
        } else {
            turnx = true
            return 'O';

        };
    };
    function pleyrSpot(){
        const index = indx.arry1()
        if(turnv()){
           bordspots[index[0]][index[1]]= turnv();
           return bordspots
        };
        return bordspots
    };
    return {pleyrSpot}
};
const lv = game(0, 0);
console.table(lv.pleyrSpot());