import Header from "./components/header/header.js";
import Navigation from "./components/navigation/navigation.js";

const app = document.getElementById("app");

const links = [
  {
    url: "/home",
    name: "Inicio",
  },
  {
    url: "/",
    name: "Contacto",
  },
];

app.innerHTML = [Header(Navigation(links))];
