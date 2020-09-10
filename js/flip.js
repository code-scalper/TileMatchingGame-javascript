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
