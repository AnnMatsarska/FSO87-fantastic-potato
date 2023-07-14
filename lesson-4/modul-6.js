//TODO:====================01===========Модуль-6===============
// Натискання на кновку "SHOW ME" має виводити значення
// з поля введення в alert. Зробіть перевірку на пустий інпут

// const inputEl = document.querySelector(".js-alert-input");
// const showBtnEl = document.querySelector(".js-alert-button");

// console.log(inputEl);

// showBtnEl.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const answer = inputEl.value;
//   if (answer !== "") {
//     return alert(answer);
//   }
//   alert("Введіть текст");
// }
//TODO:====================02==========================
// Після натискання на кнопку "SWAP ME" здійснюється обмін вмістом між двома інпутами. Можете натискати на неї кілька разів або вручну змінити вміст інпутів.

// const ref = {
//     inputLeft: document.querySelector(".js-left-swap-input"),
//     inputRight: document.querySelector(".js-right-swap-input"),
//     showBtn: document.querySelector(".js-swap-button")
// }

// ref.showBtn.addEventListener("click", onBtnClick);

// function onBtnClick() {
//     const defaultValue = ref.inputLeft.value

//     ref.inputLeft.value = ref.inputRight.value
//     ref.inputRight.value = defaultValue
// }

//TODO:====================03==========================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

// const ref = {
//   input: document.querySelector('.js-password-input'),
//   btn: document.querySelector('.js-password-button'),
// };

// ref.btn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   if (ref.input.type === 'password') {
//     ref.input.type = 'text';
//     ref.btn.textContent = 'Приховати';

//     return;
//   }
//   ref.input.type = 'password';
//   ref.btn.textContent = 'Розкрити';
// }

//TODO:====================04==========================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const containerEl = document.querySelector('.eventThumb')

// document.addEventListener('keydown', onKeyClick)
// function onKeyClick ({code, key}) {
// const markup =    `
// <ul class="eventList">
//   <li class="eventKey"><b>Key</b>: ${key}</li>
//   <li class="eventCode"><b>Code</b>: ${code}</li>
// </ul>
// `;
// containerEl.insertAdjacentHTML('afterbegin', markup)

// const ulEl = document.createElement ('ul');
// const liEl = document.createElement ('li');
// const liEl1 = document.createElement ('li');
// ulEl.appendChild (liEl);
// ulEl.appendChild (liEl1);
// liEl.textContent = `key: ${key}`;
// liEl1.textContent = `code: ${code}`;

// containerEl.append(ulEl)

// }   

