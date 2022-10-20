import Router from "./router/router.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Card from "./components/card/card.js";

import { Outlet } from "./router/router.js";

const app = document.getElementById("app");

app.innerHTML = [Header() + Outlet() + Footer()];

Router();

const cardsContent = [
  {
    id: 1,
    title: "Widow",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/White_widow.jpg/1200px-White_widow.jpg",
  },
  {
    id: 2,
    title: "Purple Kush",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://rockymountainhigh.co/wp-content/uploads/2019/08/Purple-Romulan-1-1024x1024.jpg",
  },
  {
    id: 3,
    title: "AK-47",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://buymarijuanaonline247.com/wp-content/uploads/2018/03/AK-47-Weed.jpg",
  },
  {
    id: 1,
    title: "Widow",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/White_widow.jpg/1200px-White_widow.jpg",
  },
  {
    id: 2,
    title: "Purple Kush",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://rockymountainhigh.co/wp-content/uploads/2019/08/Purple-Romulan-1-1024x1024.jpg",
  },
  {
    id: 3,
    title: "AK-47",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://buymarijuanaonline247.com/wp-content/uploads/2018/03/AK-47-Weed.jpg",
  },
  {
    id: 1,
    title: "Widow",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/White_widow.jpg/1200px-White_widow.jpg",
  },
  {
    id: 2,
    title: "Purple Kush",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://rockymountainhigh.co/wp-content/uploads/2019/08/Purple-Romulan-1-1024x1024.jpg",
  },
  {
    id: 3,
    title: "AK-47",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus incidunt iste quo, quidem laudantium minus quos adipisci? Voluptatem odit quae illum in hic modi velit eius, id cumque corrupti!",
    image:
      "https://buymarijuanaonline247.com/wp-content/uploads/2018/03/AK-47-Weed.jpg",
  },
];

const setCardContent = () => {
  const homeView = document.querySelector(".home-view");

  homeView.innerHTML = cardsContent
    .map(() => {
      return Card();
    })
    .join("");

  const cardImages = document.querySelectorAll(".card-image");
  const cardTitle = document.querySelectorAll(".card-content-title");
  const cardDescription = document.querySelectorAll(
    ".card-content-description"
  );

  cardImages.forEach((e, index) => {
    e.id = "card-image-" + index;
  });

  cardTitle.forEach((e, index) => {
    e.id = "card-content-title-" + index;
  });

  cardDescription.forEach((e, index) => {
    e.id = "card-content-description-" + index;
  });
};

setCardContent();

const setCards = () => {
  for (let index = 0; index < cardsContent.length; index++) {
    const image = document.getElementById(`card-image-${index}`);
    const title = document.getElementById(`card-content-title-${index}`);
    const description = document.getElementById(
      `card-content-description-${index}`
    );
    image.style.backgroundImage = `url("${cardsContent[index].image}")`;
    title.innerHTML = cardsContent[index].title;
    description.innerHTML = cardsContent[index].description;
  }
};
setCards();

const inicioButton = document.getElementById("inicio");

inicioButton.addEventListener("click", () => {
  setCardContent();
  setCards();
});
