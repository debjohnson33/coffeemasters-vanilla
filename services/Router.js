const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const route = a.getAttribute("href");
        Router.go(route);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");

        break;

      case "/order":
        pageElement = document.createElement("order-page");

        break;

      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");

          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.productId = paramId;
        }
        break;
    }
    if (pageElement) {
      // Can also use children to remove the element(s) before appending
      // document.querySelector("main").children[0].remove();
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
