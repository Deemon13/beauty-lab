import { menuElements } from "../../header";

export const menu = document.createElement("ul");
menu.classList.add("nav-list", "list");

menu.insertAdjacentHTML("beforeend", menuElements);
