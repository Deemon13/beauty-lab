(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function L(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=L(e);fetch(e.href,t)}})();const n=document.createElement("a");n.setAttribute("href","#");n.classList.add("logo","link");n.innerText="Beauty-lab";const T=[{id:"services",name:"Услуги"},{id:"about",name:"Разрешите представиться"},{id:"description",name:"А поконкретнее"},{id:"portfolio",name:"Примеры работ"},{id:"contacts",name:"Контакты"}],j=T.map(({id:i,name:l})=>`<li class="nav-list-item">
              <a href="#${i}" class="nav-link link">${l}</a>
            </li>`).join(""),o=document.createElement("ul");o.classList.add("nav-list","list");o.insertAdjacentHTML("beforeend",j);const s=document.createElement("nav");s.className="navigation";s.append(n,o);const c=document.createElement("div");c.className="container";c.append(s);const g=document.createElement("header");g.append(c);const O="/beauty-lab/assets/beauty-desktop1-opt-Cfltr40y.jpg",k="/beauty-lab/assets/beauty-desktop2-opt-CrHvUm-m.jpg",A="/beauty-lab/assets/beauty-desktop3-opt-BXo46Hvg.jpg",$="/beauty-lab/assets/beauty-desktop4-opt-DtW67YKD.jpg",x="/beauty-lab/assets/beauty-desktop5-opt-Bvv-xz0A.jpg",I="/beauty-lab/assets/beauty-desktop6-opt-BYspke37.jpg",b=document.createElement("main");b.innerHTML=`
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
                src="${O}"
                alt="Пример процедуры"
                width="290"
                height="290"
              />
            </li>
            <li>
              <img
                src="${k}"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="${A}"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="${$}"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="${x}"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
            <li>
              <img
                src="${I}"
                alt="Пример процедуры"
                width="390"
                height="270"
              />
            </li>
          </ul>
        </div>
      </section>
`;const r=document.createElement("a");r.setAttribute("href","#");r.innerText="Beauty-lab";const v=document.createElement("h3");v.innerText="Алена Федоренко";const y=document.createElement("p");y.innerText="Косметик";const w=["Энергодар"],B=w.map(i=>`<p>г. ${i}</p>`).join(""),d=document.createElement("a");d.setAttribute("href","tel:+79902457795");d.innerText="+7(990)245-77-95";const p=document.createElement("a");p.setAttribute("href","mailto:alena.mudarisovna@yandex.ru");p.innerText="alena.mudarisovna@yandex.ru";const m=document.createElement("address");m.insertAdjacentHTML("beforeend",B);m.append(d,p);const H=["Instagram","Facebook"],E=document.createElement("ul"),M=H.map(i=>`<li><a href="#">${i}</a></li>`).join("");E.insertAdjacentHTML("beforeend",M);const u=document.createElement("div");u.className="container";u.append(r,v,y,m,E);const h=document.createElement("footer");h.setAttribute("id","contacts");h.append(u);const N=document.querySelector("#app");N.append(g,b,h);
//# sourceMappingURL=index-32bhT8mC.js.map
