(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const t of l.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const o=document.createElement("header");o.innerHTML=`<div class="container">
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
      </div>`;const p={imagePath:"./src/images/"},c=document.createElement("main");c.innerHTML=`
<!-- HERO -->
      <section>
        <div class="container container-hero">
          <ul class="contacts-list list">
            <li>
              <a href="tel:+380662474248" class="contact-link link"
                >066-247-42-48</a
              >
            </li>
            <li>
              <a
                href="mailt:alena.mudarisovna@gmail.com"
                class="contact-link link"
                >alena.mudarisovna@gmail.com</a
              >
            </li>
          </ul>
          <h1>Beauty-lab</h1>
          <p>Красота - страшная сила</p>
        </div>
      </section>
      <!-- ABOUT ME -->
      <section id="about">
        <div class="container">
          <h2>Дарю тебе заботу и уход, которых ты достойна!</h2>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
          </ul>
          <h3>Процедуры по уходу за лицом на выбор</h3>
          <ul>
            <li>
              <p>пилинг</p>
            </li>
            <li>
              <p>чистка</p>
            </li>
            <li>
              <p>массаж</p>
            </li>
            <li>
              <p>маска</p>
            </li>
            <li>
              <p>дарсонвализация</p>
            </li>
          </ul>
        </div>
      </section>
      <!-- SERVICES -->
      <section id="services">
        <div class="container">
          <h2>Услуги и цены</h2>
          <ul>
            <li>Механическая чистка лица 250 грн</li>
            <li>Аппаратная (ультразвуковой пилинг) чистка лица 250 грн</li>
            <li>Комбинированная чистка лица 250 грн</li>
            <li>Пилинг лица 250 грн</li>
            <li>Пилинг век 150 грн</li>
            <li>Альгинатная маска 250 грн</li>
            <li>Лечение и профилактика кожи с проявлением купероза 250 грн</li>
            <li>Профессиональный уход за пигментированной кожей 250 грн</li>
            <li>Экспресс-уход красоты для всех типов кожи 250 грн</li>
            <li>Микротоковая терапия в 4 программы 300 грн</li>
            <li>Безигольная мезотерапия 300 грн</li>
            <li>Улиткотерапия 150 грн</li>
          </ul>
        </div>
      </section>
      <!-- DESCRIPTION -->
      <section id="description">
        <div class="container">
          <h2>Описание процедур</h2>
          <ul>
            <li>
              <h3>Комбинированная чистка лица</h3>
              <p>
                Предсталяет собой сочетание чисток двух видов: мануальной и
                ультразвуковой. Это одна из максимально эффективных и
                одновременно щадящих салонных процедур, направленных на очищение
                кожи лица.
              </p>
            </li>
            <li>
              <h3>Механическая чистка лица</h3>
              <p>
                Эффективный метод удаления комедонов ручным способом или при
                помощи инструментов.
              </p>
            </li>
            <li>
              <h3>Микротоки</h3>
              <p>
                Одна из основных базовых процедур в косметологии, которая
                направлена на омоложение клеток кожи и подкожножировой
                клетчатки, имеет хороший лифтинговый эффект, устраняет мелкие
                морщинки.
              </p>
            </li>
            <li>
              <h3>Показания для микротоковой терапии</h3>
              <ul>
                <li>
                  <p>лифтинг, корркция овала лица</p>
                </li>
                <li>
                  <p>лечение и профилактика морщин</p>
                </li>
                <li>
                  <p>лечение гиперпигментации</p>
                </li>
                <li>
                  <p>уход за гиперчувствительной кожей</p>
                </li>
                <li>
                  <p>лечение жирной и проблемной кожи</p>
                </li>
                <li>
                  <p>лечение дряблой атоничной кожи</p>
                </li>
                <li>
                  <p>лифтинг груди и ягодичной области</p>
                </li>
                <li>
                  <p>терапия отеков, лимфостаза</p>
                </li>
              </ul>
            </li>
            <li>
              <h3>Массаж лица</h3>
              <p>
                Подарит Вашей коже зоровый и ухоженный вид. Для хорошего
                результата массаж нужно проводить минимум два раза в неделю.
                Оптимально - через день. Курс массажа составляет 6-10 сеансов.
                При необходимости можно повторить курс через 1-2 месяца.
                Обладает комплексным действием: предотвращает появление морщин,
                повышает тонус кожи, улучшает кровоснабжение, снимает отеки и
                улучшает цвет лица. За счет стимуляции кровообращения в процессе
                массажа кожа насыщается кислородом, усиливаются регенеративные
                процесс. Результат - здоровый и ухоженный вид.
              </p>
            </li>
            <li>
              <h3>Улиткотерапия</h3>
              <p>
                Мягкий пилинг и очищение, регенерация клеток, а значит
                омоложение и улучшение тургора кожи, не только на лице, но и на
                всем теле.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <!-- PORTFOLIO -->
      <section id="portfolio">
        <div class="container">
          <ul>
            <li>
              <img
                src="./src/images/beauty-desktop1-opt.jpg"
                alt="Пример процедуры"
                width="290"
                height="290"
              />
            </li>
            <li>
              <img
                src="./src/images/beauty-desktop2-opt.jpg"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="./src/images/beauty-desktop3-opt.jpg"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="./src/images/beauty-desktop4-opt.jpg"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="./src/images/beauty-desktop5-opt.jpg"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="${p.imagePath}beauty-desktop6-opt.jpg"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
          </ul>
        </div>
      </section>
`;const a=document.createElement("footer");a.setAttribute("id","contacts");a.innerHTML=`
      <div class="container">
        <a href="">Beauty-lab</a>
        <h3>Алена Федоренко</h3>
        <p>Косметик</p>
        <address>
          <p>г. Энергодар</p>
          <p>г. Днепр</p>
          <p>г. Киев</p>
          <a href="tel:+380662474248">066-247-42-48</a>
          <a href="mailt:alena.mudarisovna@gmail.com"
            >alena.mudarisovna@gmail.com</a
          >
        </address>
        <ul>
          <li><a href="">Instagram</a></li>
          <li><a href="">Facebook</a></li>
        </ul>
      </div>
`;const s=document.querySelector("#app");s.append(o);s.append(c);s.append(a);
//# sourceMappingURL=index-CpKG2vdj.js.map
