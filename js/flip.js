// import Tile from "./tile.js";

const images = [
  "circle",
  "close",
  "facebook",
  "foursquare-check-in",
  "geometry",
  "gift",
  "google-play",
  "heart",
  "two",
  "ui",
];

// game
let selectedCard = null;
let selectedIndex = null;
let completedItems = [];
let time = 0;
let timeInterval = null;

// const tiles = new Tile(images);
const container = document.querySelector(".card-ul");
const startButton = document.querySelector(".start-button");
const history = document.querySelector(".history");
const timeDisplay = document.querySelector(".timeDisplay");



startButton.addEventListener("click",()=>{
  container.innerHTML = ""
  completedItems = [];
  selectedCard = null;
  selectedIndex = null;
  makeTiles()
  gameService()
})
// 타일만들기
function makeTiles(){
  const doubledImages = shuffle([...images,...images]);
  const list = makeList(doubledImages)
  list.forEach( li => container.appendChild(li))
}

// 배열 섞기
function shuffle(array) {
  let index = array.length - 1;
  while (index > 0) {
      let randomIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      index--;
  }
  return array;
}

// li node 만들기
function makeList(imageArray){
  const listItem = imageArray.map((image) => {
      const li = document.createElement("li");
      li.classList.add("card-li");
      li.setAttribute("data-type", image);

      const flipContainer = document.createElement("div");
      flipContainer.classList.add("flip-container");

      const coverSpan = document.createElement("span");
      coverSpan.classList.add("cover");

      const flippingSpan = document.createElement("span");
      flippingSpan.classList.add("cover-flipped");

      const img = document.createElement("img");
      img.setAttribute("src", `images/${image}.png`);
      img.setAttribute("alt", image);
      flippingSpan.appendChild(img);

      flipContainer.appendChild(coverSpan);
      flipContainer.appendChild(flippingSpan);

      li.appendChild(flipContainer);
      return li;
    });

    return listItem;
}



function gameService(){
  const cards = document.querySelectorAll(".card-li")
  cards.forEach((card ,index) => {
    card.addEventListener("click", (e) => {
      if(completedItems.includes(index)) return;
      card.classList.add("selected-li");
      const name = card.getAttribute("data-type") 
      if(selectedCard === name && selectedIndex !== index ){
        completedItems = [...completedItems, selectedIndex, index];
        cards[index].classList.add("done-li")
        cards[selectedIndex].classList.add("done-li")
        selectedCard = null;
        selectedIndex = null;

        const isCompleted = completedItems.length === cards.length;
        if(isCompleted){
          clearInterval(timeInterval);
          const historyLi = document.createElement("li");
          historyLi.innerText = time.toFixed(1);
          history.appendChild(historyLi)
        }

      } else {
        // 카드 뒤집기 초기화
        if(selectedIndex){
          cards[index].classList.remove("selected-li")
          cards[selectedIndex].classList.remove("selected-li")
        }
        
        const isSelected = selectedCard === null;
        if(isSelected){
          selectedCard = name
          selectedIndex = index
        } else {
          selectedCard = null
          selectedIndex = null
        }
      }
    });
  });
  // interval 
  timeInterval = setInterval(()=>{
    time = time + 0.1;
    timeDisplay.innerText = time.toFixed(1);
  },100)
}


