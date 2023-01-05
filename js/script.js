// burger menu

const burgerMenuElement = document.querySelector(".burger");
const openButtonElement = document.querySelector(".js-burger-open");
const closeButtonElement = document.querySelector(".js-burger-close");

const handleMenuOpen = () => {
  document.body.style.overflow = "hidden";

  burgerMenuElement.style.cssText = `
        transform: translate(0);
        opacity: 1;
    `;
};

const handleMenuClose = () => {
  document.body.style.overflow = "visible";

  burgerMenuElement.style.cssText = `
  transform: translate(-100%);
  opacity: 0;
`;
};

openButtonElement.addEventListener("click", handleMenuOpen);
closeButtonElement.addEventListener("click", handleMenuClose);
