const socials = ["Instagram", "Facebook"];

export const socialList = document.createElement("ul");

const socialListitems = socials
  .map((el) => `<li><a href="#">${el}</a></li>`)
  .join("");

socialList.insertAdjacentHTML("beforeend", socialListitems);
