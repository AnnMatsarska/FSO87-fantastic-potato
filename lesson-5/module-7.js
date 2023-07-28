//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

// const listRef = document.querySelector(".js-accordion-list");

// function handleBtnClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   event.target.nextElementSibling.classList.toggle("active");
// }

// listRef.addEventListener("click", handleBtnClick);

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[pagination.html]
 * (./pagination.html) для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку.
 * Створи допоміжну функцію`updateActivePage`,
 * яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися
 * коли відбувається клік на елементі`pagination`.
 */

const pagesListRef = document.querySelector(".js-pagination");

pagesListRef.addEventListener("click", updateActivePage);

function updateActivePage(evt) {
  const clickEl = evt.target;

  if (clickEl.nodeName !== "LI") {
    return;
  }

  const activeBtn = pagesListRef.querySelector(".active");

  if (clickEl.dataset.type === "page") {
    activeBtn.classList.remove("active");
    clickEl.classList.add("active");
  }

  if (clickEl.dataset.type === "prev") {
    const prevBtnPage = activeBtn.dataset.page - 1;
    const prevBtn = pagesListRef.querySelector(`[data-page='${prevBtnPage}']`);

    // if (!prevBtn) {
    //   return;
    // }

    if (activeBtn.dataset.page <= "1") {
      return;
    }

    activeBtn.classList.remove("active");
    prevBtn.classList.add("active");
  }

  if (clickEl.dataset.type === "next") {
    const nextBtnPage = Number(activeBtn.dataset.page) + 1;
    const nextBtn = pagesListRef.querySelector(`[data-page='${nextBtnPage}']`);

    if (!nextBtn) {
      return;
    }

    activeBtn.classList.remove("active");
    nextBtn.classList.add("active");
  }
}

//TODO:=========task-02======Modal window===========
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================
*/

const openModalBtn = document.querySelector(".js-modal-open");
const body = document.body;

openModalBtn.addEventListener("click", onOpenModalBtnClick);

const modal = basicLightbox.create(
  `
	<div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
`,
  {
    onShow: () => {
      body.style.overflow = "hidden";
      document.addEventListener("keydown", onEscClick);
    },
    onClose: () => {
      body.style.overflow = "visible";
      document.removeEventListener("keydown", onEscClick);
    },
  }
);

function onEscClick(event) {
  if (event.code !== "Escape") return;

  closeModalWindow();
}

function onOpenModalBtnClick() {
  modal.show();
  document
    .querySelector(".js-modal-close")
    .addEventListener("click", closeModalWindow);
}

function closeModalWindow() {
  modal.close();
}
/**
  |============Розмітка для модального вікна================
  
  |============================
*/
