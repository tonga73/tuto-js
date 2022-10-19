import Router from "./router/router.js";
import Header from "./components/header/header.js";

import { Outlet } from "./router/router.js";

const app = document.getElementById("app");

app.innerHTML = [Header() + Outlet()];

Router();
