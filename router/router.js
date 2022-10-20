import { routes } from "./routes.js";

export function Outlet() {
  return `<div id="outlet">OUTLETEANDO</div>`;
}
export default function Router() {
  const nav = document.getElementById("navigation");

  const {
    location: { pathname = "/" },
  } = window;

  const URL = pathname === "/index.html" ? "home" : pathname.replace("/", "");

  // CARGA LA VISTA POR DEFECTO
  load(URL);

  function load(page = "home") {
    const { name, url, template } = routes[page] || routes.error;

    const $CONTAINER = document.querySelector("#outlet");
    $CONTAINER.innerHTML = template;
  }

  !!Object.values(routes) &&
    Object.values(routes).forEach((route) => {
      const outlet = document.getElementById("outlet");
      const button = document.createElement("button");
      button.innerText = route.name;
      button.id = route.name.toLowerCase();
      button.addEventListener("click", (event) => {
        outlet.innerHTML = route.template;
      });
      nav.appendChild(button);
    });
}
