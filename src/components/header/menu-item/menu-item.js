import menuItems from "../../../data/navigation.json";

export const menuElements = menuItems
  .map(
    ({ id, name }) => `<li class="nav-list-item">
              <a href="#${id}" class="nav-link link">${name}</a>
            </li>`
  )
  .join("");
