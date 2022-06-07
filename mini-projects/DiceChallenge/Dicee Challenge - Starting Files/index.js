let path1 = "";
let path2 = "";

document.querySelector("button").addEventListener("click",startGame);

function startGame() {
  document.querySelector(".img1").setAttribute("src",buildImagePath());
  document.querySelector(".img2").setAttribute("src",buildImagePath());
  path1 = document.querySelector(".img1").getAttribute("src");
  path2 = document.querySelector(".img2").getAttribute("src");
  document.querySelector("h1").innerHTML = checkWinner();
};

//get winner
function checkWinner(){

  //my random numbers extracted from path 
  let num1 = path1.slice(13,14); 
  let num2 = path2.slice(13,14);

  if (num1 > num2 ) {

    return "🏁 Player 1 Wins";

  } else if (num1 < num2){

    return "Player 2 Wins 🏁";

  } else {

    return "Draw";
  }
   

}

//build string path for picture
function buildImagePath() {

  return "./images/dice"+numberRandomizer()+".png";

}

//pick a random number form 1 to 6
function numberRandomizer() {

  return Math.ceil(Math.random() * 6);

}