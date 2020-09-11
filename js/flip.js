import Tile from "./tile.js";

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

const tiles = new Tile(images);
const container = document.querySelector(".card-ul");
const tilesNodes = tiles.makeTileNodes();
const tilesNodesClone = tiles.makeTileNodes();

tilesNodes.forEach((tile) => container.appendChild(tile));
tilesNodesClone.forEach((tile) => container.appendChild(tile));

// game
let selectedCard;
let selectedIndex;

const cards = document.querySelectorAll(".card-li");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const flipContainer = card.children;
    flipContainer[0].classList.add("clicked-container");
    console.log(card.getAttribute("data-type"));
  });
});
