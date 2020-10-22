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

// const tiles = new Tile(images);
const container = document.querySelector(".card-ul");


makeTiles()

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

// game
let selectedCard;
let selectedIndex;

const cards = document.querySelectorAll(".card-li");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const flipContainer = card.children[0];
    console.log(flipContainer)
    flipContainer.classList.add("clicked-container");
    console.log(card.getAttribute("data-type"));
  });
});
