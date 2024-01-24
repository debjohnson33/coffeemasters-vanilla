import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {};
app.Store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
  loadData();
});
