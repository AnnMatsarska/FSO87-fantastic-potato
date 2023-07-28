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

const pagesListRef = document.querySelector('.js-pagination');

pagesListRef.addEventListener('click', updateActivePage);

function updateActivePage(evt) {
  const clickEl = evt.target;

  if (clickEl.nodeName !== 'LI') {
    return;
  }

  const activeBtn = pagesListRef.querySelector('.active');
  
  if (clickEl.dataset.type === 'page') {
    activeBtn.classList.remove('active');
    clickEl.classList.add('active');
  }

  if (clickEl.dataset.type === 'prev') {
    const prevBtnPage = activeBtn.dataset.page - 1;
    const prevBtn = pagesListRef.querySelector(`[data-page='${prevBtnPage}']`);

    // if (!prevBtn) {
    //   return;
    // }

    if (activeBtn.dataset.page <= '1') {
      return;
    }

    activeBtn.classList.remove('active');
    prevBtn.classList.add('active');
  }

  if (clickEl.dataset.type === 'next') {
    const nextBtnPage = Number(activeBtn.dataset.page) + 1;
    const nextBtn = pagesListRef.querySelector(`[data-page='${nextBtnPage}']`);

    if (!nextBtn) {
      return;
    }

    activeBtn.classList.remove('active');
    nextBtn.classList.add('active');
  }
}