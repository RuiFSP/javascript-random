
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')//look for grid
const blockWidth = 100
const blockHeight = 20
const ballDiameter = 20
const boardWidth = 560
const boardHeight = 300
let xDirection = -2
let yDirection = 2

const userStart = [230,10]
let currentPosition = userStart

const ballstart = [270,40]
let ballCurrentPosition = ballstart

let timerId
let score = 0

//create Block passing two values
class Block {
  constructor(xAxis, yAxis){
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
  }
}

//make all my blocks
const blocks = [

  //top five blocks
  new Block(10,270),
  new Block(120,270),
  new Block(230,270),
  new Block(340,270),
  new Block(450,270),
  //middle five blocks
  new Block(10,240),
  new Block(120,240),
  new Block(230,240),
  new Block(340,240),
  new Block(450,240),
  //bottom five blocks
  new Block(10,210),
  new Block(120,210),
  new Block(230,210),
  new Block(340,210),
  new Block(450,210),
]

// console.log(blocks[0]) //

//draw a block function
function addBlocks(){
  
  for (let i = 0; i < blocks.length; i++) {

    const block = document.createElement('div') //create a block
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block) //block is a child of grid
    //console.log(blocks[i].bottomLeft)
  }
}

addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()


//draw the user
function drawUser(){
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}

//draw the ball
function drawBall(){
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}


//move user
function moveUser(event){
  switch(event.key) {
    case 'ArrowLeft':
      if(currentPosition[0] > 0) {
        currentPosition[0] -= 10
        //console.log(currentPosition[0] > 0)
        drawUser()
      }
      break;

    case 'ArrowRight':
      if(currentPosition[0] < boardWidth - blockWidth){
        currentPosition[0] +=10
        //console.log(currentPosition[0])
        drawUser()
      }
      break;
  }
}

document.addEventListener('keydown', moveUser)

//create a ball
const ball = document.createElement('ball')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//move ball
function moveball(){
  ballCurrentPosition[0] += xDirection
  ballCurrentPosition[1] += yDirection
  drawBall()
  checkForCollisions()
}

timerId = setInterval(moveball, 25 ) //speed of ball

//check for collisions
function checkForCollisions() {
  
  //check for block collision
  for (let i = 0; i < blocks.length; i++) {
    if(
        (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
        ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] <  blocks[i].topLeft[1])
      ) {
        const allBlocks = Array.from(document.querySelectorAll('.block')) //detect all blocks
        //console.log(allBlocks) //checking for blocks detection
        allBlocks[i].classList.remove('block') //remove block from display
        blocks.splice(i,1) //remove block from array
        changeDirection()
        score++
        scoreDisplay.innerHTML = score

        //check for win when all blocks are gone
        if (blocks.length === 0) {
          scoreDisplay.innerHTML = "YOU WIN"
          clearInterval(timerId) //stop ball
          document.removeEventListener('keydown', moveUser) //stop 
        }
    }
    
  }
  //check for wall collisions
  if (
      ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
      ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
      ballCurrentPosition[0] <= 0
      ) {
      changeDirection()
  }

  //check for user collisions
  if (
      (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
      (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
      ){
      changeDirection()
  }


  //check for game over
  if(ballCurrentPosition[1] <= 0) {
      scoreDisplay.innerHTML = "YOU LOSE"
      clearInterval(timerId) //stop ball
      document.removeEventListener('keydown', moveUser) //stop user
  }

}

function changeDirection() {
  if(xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if(xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if(xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if(xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}



