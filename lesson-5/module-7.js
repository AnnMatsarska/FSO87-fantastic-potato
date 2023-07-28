//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listRef = document.querySelector(".js-accordion-list");

function handleBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  event.target.nextElementSibling.classList.toggle("active");
}

listRef.addEventListener("click", handleBtnClick);
