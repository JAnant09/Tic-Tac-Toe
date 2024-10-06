let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turn = true;
let heading = document.querySelector(".heading");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () =>{
    turn = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }

    heading.innerText = "Tic-Tac-Toe";

};

resetBtn.addEventListener("click" , () =>{
    console.log("Game reset");
    resetGame();
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML.trim() === "") {
        console.log("Button clicked");
      if (turn) {
        box.innerHTML = '<img src="assets/images/cross.svg" alt="Cross">';
        turn = false;
      } else {
        box.innerHTML = '<img src="assets/images/circle.svg" alt="Circle">';
        turn = true;
      }

      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {

    let pos1 = boxes[pattern[0]].querySelector("img")?.src;
    let pos2 = boxes[pattern[1]].querySelector("img")?.src;
    let pos3 = boxes[pattern[2]].querySelector("img")?.src;

    if (pos1 && pos2 && pos3) {

      if (pos1 === pos2 && pos2 === pos3) {

        if (pos1.includes("cross.svg")) {
          console.log("Player X is winner");
          disableBoxes();
          heading.innerText = "Player X wins!";
        }else if (pos1.includes("circle.svg")) {
          console.log("Player O is winner");
          disableBoxes();
          heading.innerText = "Player O wins!";
        }   
        break;
      }
    }
  }
};


