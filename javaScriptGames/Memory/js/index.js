const cardArray = [
  {
    name: "fries",
    img: "images/fries.png"
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png"
  },
  {
    name: "hotdog",
    img: "images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "images/milkshake.png"
  },
  {
    name: "pizza",
    img: "images/pizza.png"
  },
  {
    name: "fries",
    img: "images/fries.png"
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png"
  },
  {
    name: "hotdog",
    img: "images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "images/milkshake.png"
  },
  {
    name: "pizza",
    img: "images/pizza.png"
  }
]

cardArray.sort(() => 0.5 - Math.random()) //Trick: sort array random - shuffle array random each time

const gridDispaly = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {

  for (let i = 0; i < cardArray.length; i++) {
    
    const card = document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDispaly.append(card)
  }
}

createBoard()

function checkMatch() {
  
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  console.log(cards)
  console.log('check for match !!!')
  if(optionOneId == optionTwoId) {
    alert('You have clicked the same image')
  }


  if(cardsChosen[0] == cardsChosen[1]){
    alert("You found a match")
    cards[optionOneId].setAttribute('src', 'images/white.png') //when we find a match we put a white background on first card
    cards[optionTwoId].setAttribute('src', 'images/white.png') //when we find a match we put a white background on second card
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }

  hideCardsWhenFail()
  
  resultDisplay.textContent = cardsWon.length

  if(cardsWon.length === cardArray.length/2){
    resultDisplay.innerHTML = 'Cogratulations you found them all !'
  }

}

function flipCard() {

  //console.log(cardArray) // checking the entire array
  let cardId = this.getAttribute('data-id')
  //console.log(cardArray[cardId].name) //now we can see with console log which card we have
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen) // saving chosen card
  console.log(cardsChosenIds) // saving id of chosen cards
  //console.log('clicked', cardId) //we are listening for clicks and it tells the card id
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500 )
  }
}

function hideCardsWhenFail() {

  cardsChosen = []
  cardsChosenIds = []
}