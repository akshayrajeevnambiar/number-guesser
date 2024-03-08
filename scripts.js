function incrementNumber() {
  let currentNumber = parseInt(
    document.getElementById("user-number").innerHTML
  );

  document.getElementById("user-number").innerHTML = ++currentNumber;

  document.getElementById("btn1").innerHTML = "-";
  document.getElementById("btn1").style.cursor = "pointer";
  let guessBtns = document.getElementsByClassName("guess-btn");
  for (var i = 0; i < guessBtns.length; i++) {
    guessBtns[i].style.backgroundColor = "blue";
    guessBtns[i].style.cursor = "pointer";
  }
}

function decrementNumber() {
  let currentNumber = parseInt(
    document.getElementById("user-number").innerHTML
  );
  if (currentNumber > 0) {
    document.getElementById("user-number").innerHTML = --currentNumber;
  } else {
    document.getElementById("btn1").innerHTML = "";
    document.getElementById("btn1").style.cursor = "not-allowed";
    let guessBtns = document.getElementsByClassName("guess-btn");
    for (let i = 0; i < guessBtns.length; i++) {
      guessBtns[i].style.backgroundColor = "gray";
      guessBtns[i].style.cursor = "not-allowed";
    }
  }
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function makePrediction() {
  let currentNumber = parseInt(
    document.getElementById("user-number").innerHTML
  );

  if (currentNumber > 0) {
    document.getElementById("computer-number").innerHTML =
      getRandomNumber(currentNumber);

    let roundBtn = document.getElementsByClassName("round");

    for (let i = 0; i < roundBtn.length; i++) {
      roundBtn[i].style.backgroundColor = "blue";
      roundBtn[i].style.color = "white";
      roundBtn[i].style.cursor = "pointer";
    }
  }
}
