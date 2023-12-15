function Player(token) {
    this.token = token;
    this.score = 0;
  }


function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.value = null;

    this.setValue = function(player) {
      this.value = player.token;
    };

    this.isEmpty = function() {
      return this.value === null;
    };
  }

function GameBoard() {
    const board = [];
    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for (let j = 0; j < 3; j++) {
        board[i].push(new Cell(i, j));
      }
    }

    this.getBoard = function() {
      return board;
    };

    this.isEmptyCell = function(i, j) {
      return board[i][j].isEmpty();
    };

    this.makeMove = function(i, j, player) {
      if (this.isEmptyCell(i, j)) {
        board[i][j].setValue(player);
        return true;
      }
      return false;
    };
  }

function GameController() {
    this.board = new GameBoard();
    this.players = [new Player("X"), new Player("O")];
    this.currentPlayer = 0;

    this.switchPlayer = function() {
      this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    };

    this.isGameOver = function() {
      // Implement logic to check for winning conditions
      // and handle game over scenarios
    };

    this.handleClick = function(i, j) {
      if (this.isGameOver()) {
        // Handle game over state
        return;
      }

      if (this.board.makeMove(i, j, this.players[this.currentPlayer])) {
        // Update UI and check for win conditions
        this.switchPlayer();
      }
    };
  }
