let cell0 = document.querySelector("#cell0");
let cell1 = document.querySelector("#cell1");
let cell2 = document.querySelector("#cell2");
let cell3 = document.querySelector("#cell3");
let cell4 = document.querySelector("#cell4");
let cell5 = document.querySelector("#cell5");
let cell6 = document.querySelector("#cell6");
let cell7 = document.querySelector("#cell7");
let cell8 = document.querySelector("#cell8");

let body = document.querySelector("body");
let winningMessageText = document.querySelector("#winningMessageText");
let restartButton = document.querySelector("#restartButton");

let playerTurnCount = 0;

const startGame = () => {
  console.log("Game is started");
  let choice = prompt(
    "Enter 1 to Start with Player 1, enter 2 to Start with Player 2"
  );
  if (choice == 1) {
    console.log("Starting the game with Player 1");
    clickCellPlayer1();
  } else if (choice == 2) {
    console.log("Starting the game with Player 2");
    clickCellPlayer2();
  }
};

const player1 = () => {
  if (
    (cell0.innerText === "x" &&
      cell1.innerText === "x" &&
      cell2.innerText === "x") ||
    (cell0.innerText === "x" &&
      cell3.innerText === "x" &&
      cell6.innerText === "x") ||
    (cell0.innerText === "x" &&
      cell4.innerText === "x" &&
      cell8.innerText === "x") ||
    (cell7.innerText === "x" &&
      cell4.innerText === "x" &&
      cell1.innerText === "x") ||
    (cell3.innerText === "x" &&
      cell4.innerText === "x" &&
      cell5.innerText === "x") ||
    (cell6.innerText === "x" &&
      cell7.innerText === "x" &&
      cell8.innerText === "x") ||
    (cell6.innerText === "x" &&
      cell4.innerText === "x" &&
      cell2.innerText === "x") ||
    (cell8.innerText === "x" &&
      cell5.innerText === "x" &&
      cell2.innerText === "x")
  ) {
    winMessagePlayer1();
  } else {
    playerTurnCount++;
    if (playerTurnCount == 1) {
      clickCellPlayer2();
    } else {
      clickCellPlayer1();
    }
  }
};

const clickCellPlayer1 = () => {
  //cell0 player1
  cell0.onclick = () => {
    if (cell0.innerText == "x" || cell0.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell0.innerText = "x";
      player1();
    }
  };

  //cell1 player1
  cell1.onclick = () => {
    if (cell1.innerText == "x" || cell1.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell1.innerText = "x";
      player1();
    }
  };

  //cell2 player1
  cell2.onclick = () => {
    if (cell2.innerText == "x" || cell2.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell2.innerText = "x";
      player1();
    }
  };

  //cell3 player1
  cell3.onclick = () => {
    if (cell3.innerText == "x" || cell3.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell3.innerText = "x";
      player1();
    }
  };

  //cell4 player1
  cell4.onclick = () => {
    if (cell4.innerText == "x" || cell4.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell4.innerText = "x";
      player1();
    }
  };

  //cell5 player1
  cell5.onclick = () => {
    if (cell5.innerText == "x" || cell5.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell5.innerText = "x";
      player1();
    }
  };

  //cell6 player1
  cell6.onclick = () => {
    if (cell6.innerText == "x" || cell6.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell6.innerText = "x";
      player1();
    }
  };

  //cell7 player1
  cell7.onclick = () => {
    if (cell7.innerText == "x" || cell7.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell7.innerText = "x";
      player1();
    }
  };

  //cell8 player1
  cell8.onclick = () => {
    if (cell8.innerText == "x" || cell8.innerText == "o") {
      clickCellPlayer1();
    } else {
      cell8.innerText = "x";
      player1();
    }
  };
};

const player2 = () => {
  if (
    (cell0.innerText === "o" &&
      cell1.innerText === "o" &&
      cell2.innerText === "o") ||
    (cell0.innerText === "o" &&
      cell3.innerText === "o" &&
      cell6.innerText === "o") ||
    (cell0.innerText === "o" &&
      cell4.innerText === "o" &&
      cell8.innerText === "o") ||
    (cell7.innerText === "o" &&
      cell4.innerText === "o" &&
      cell1.innerText === "o") ||
    (cell3.innerText === "o" &&
      cell4.innerText === "o" &&
      cell5.innerText === "o") ||
    (cell6.innerText === "o" &&
      cell7.innerText === "o" &&
      cell8.innerText === "o") ||
    (cell6.innerText === "o" &&
      cell4.innerText === "o" &&
      cell2.innerText === "o") ||
    (cell8.innerText === "o" &&
      cell5.innerText === "o" &&
      cell2.innerText === "o")
  ) {
    winMessagePlayer2();
  } else {
    playerTurnCount--;
    if (playerTurnCount == 0) {
      clickCellPlayer1();
    } else {
      clickCellPlayer2();
    }
  }
};

const clickCellPlayer2 = () => {
  //cell0 player2
  cell0.onclick = () => {
    if (cell0.innerText == "o" || cell0.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell0.innerText = "o";
      player2();
    }
  };

  //cell1 player2
  cell1.onclick = () => {
    if (cell1.innerText == "o" || cell1.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell1.innerText = "o";
      player2();
    }
  };

  //cell2 player2
  cell2.onclick = () => {
    if (cell2.innerText == "o" || cell2.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell2.innerText = "o";
      player2();
    }
  };

  //cell3 player2
  cell3.onclick = () => {
    if (cell3.innerText == "o" || cell3.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell3.innerText = "o";
      player2();
    }
  };

  //cell4 player2
  cell4.onclick = () => {
    if (cell4.innerText == "o" || cell4.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell4.innerText = "o";
      player2();
    }
  };

  //cell5 player2
  cell5.onclick = () => {
    if (cell5.innerText == "o" || cell5.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell5.innerText = "o";
      player2();
    }
  };

  //cell6 player2
  cell6.onclick = () => {
    if (cell6.innerText == "o" || cell6.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell6.innerText = "o";
      player2();
    }
  };

  //cell7 player2
  cell7.onclick = () => {
    if (cell7.innerText == "o" || cell7.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell7.innerText = "o";
      player2();
    }
  };

  //cell8 player2
  cell8.onclick = () => {
    if (cell8.innerText == "o" || cell8.innerText == "x") {
      clickCellPlayer2();
    } else {
      cell8.innerText = "o";
      player2();
    }
  };
};

const winMessagePlayer1 = () => {
  body.style.backgroundColor = "Green";
  winningMessageText.innerText = "Congratulations! Player 1 wins!";
  
};

const winMessagePlayer2 = () => {
  body.style.backgroundColor = "Green";
  winningMessageText.innerText = "Congratulations! Player 2 wins!";
  
};

startGame();
