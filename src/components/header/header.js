import "./header.css";

export const header = document.createElement("header");

header.innerHTML = `<div class="container">
        <nav class="navigation">
          <a href="" class="logo link">Beauty-lab</a>
          <ul class="nav-list list">
            <li class="nav-list-item">
              <a href="#services" class="nav-link link">Услуги</a>
            </li>
            <li class="nav-list-item">
              <a href="#about" class="nav-link link">Разрешите представиться</a>
            </li>
            <li class="nav-list-item">
              <a href="#description" class="nav-link link">А поконкретнее</a>
            </li>
            <li class="nav-list-item">
              <a href="#portfolio" class="nav-link link">Примеры работ</a>
            </li>
            <li class="nav-list-item">
              <a href="#contacts" class="nav-link link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>`;
