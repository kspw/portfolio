    document.getElementById("rock").addEventListener("click", choiceRock);
    document.getElementById("paper").addEventListener("click", choicePaper);
    document.getElementById("scisors").addEventListener("click",choiceScisors);

    function choiceRock () {
      let c = computerPlay();
      gamePlay(c, 1)};
    function choicePaper () {
      let c = computerPlay();
      gamePlay(c, 2)};
    function choiceScisors () {
      let c = computerPlay();
      gamePlay(c, 3)};


    function computerPlay() {
      const x = 1*Math.floor(Math.random() * 3) + 1;
      return (x);
    } 

    function gamePlay (c ,p) {
      let compScore = document.querySelector("#compScore")
      let playerScore = document.querySelector("#playerScore")
      let totalScore = document.querySelector("#totalScore")
      console.log(compScore.clientWidth);
      switch (p)
      {
        case 1:
          switch (c) {
            case 1: 
            playerScore.innerHTML ++; console.log("draw");
            compScore.innerHTML ++;
            totalScore.innerHTML ++;
            break;
            case 2: 
            compScore.innerHTML ++;
            totalScore.innerHTML ++;
            break;
            case 3: 
            playerScore.innerHTML ++;
            totalScore.innerHTML++;
            break;
          } break;
        case 2:
          switch (c) {
            case 1: 
            playerScore.innerHTML++;
            totalScore.innerHTML++;
            break;
            case 2: 
            playerScore.innerHTML++; console.log("draw");
            compScore.innerHTML++;
            totalScore.innerHTML++;
            break;
            case 3: 
            compScore.innerHTML++;
            totalScore.innerHTML++;
            break;
          } break;
        case 3:
          switch (c) {
            case 1: 
            compScore.innerHTML++;
            totalScore.innerHTML++;
            break;
            case 2: 
            playerScore.innerHTML++;
            totalScore.innerHTML++;
            break;
            case 3: 
            playerScore.innerHTML++; console.log("draw");
            compScore.innerHTML++;
            totalScore.innerHTML++;
            break;
          } break;

      }
      if (totalScore.innerHTML >= 5 && (playerScore.innerHTML !=
      compScore.innerHTML)) {
      compScore.innerHTML > playerScore.innerHTML ? 
      alert("computer wins") : alert("player wins");
      compScore.innerHTML = 0;
      playerScore.innerHTML = 0;
      totalScore.innerHTML = 0;
      return; }

    }
