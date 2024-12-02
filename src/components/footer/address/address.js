const locations = ["Энергодар"];

const location = locations.map((el) => `<p>г. ${el}</p>`).join("");

const contactMail = document.createElement("a");
contactMail.setAttribute("href", "tel:+79902457795");
contactMail.innerText = "+7(990)245-77-95";

const contactTel = document.createElement("a");
contactTel.setAttribute("href", "mailto:alena.mudarisovna@yandex.ru");
contactTel.innerText = "alena.mudarisovna@yandex.ru";

export const address = document.createElement("address");

address.insertAdjacentHTML("beforeend", location);
address.append(contactMail, contactTel);
