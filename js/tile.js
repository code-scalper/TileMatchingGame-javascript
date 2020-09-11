export default class Tile {
  constructor(images) {
    this.images = images;
  }
  makeTileNodes() {
    const tiles = this.images.map((image) => {
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
    return this.shuffle(tiles);
  }
  shuffle(array) {
    let index = array.length - 1;
    while (index > 0) {
      let randomIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      index--;
    }
    return array;
  }
}
