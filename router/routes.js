import HomeView from "../views/home-view.js";

export const routes = {
  home: {
    url: "/home",
    name: "Inicio",
    template: HomeView(),
  },
  contact: {
    url: "/contact",
    name: "Contacto",
    template: "<div>CONTACTO</div>",
  },
};

export const socialLinks = [
  {
    url: "www.facebook.com",
    name: "Facebook",
  },
  {
    url: "www.instagram.com",
    name: "Instagram",
  },
];
