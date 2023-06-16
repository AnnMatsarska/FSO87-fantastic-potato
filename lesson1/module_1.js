//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;

// a === 10 ? console.log("Вірно") : console.log("Невірно");

// console.log(a === 10 ? "Вірно" : "Невірно");

// if (a === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = "dd";

// if (min >= 0 && min < 15) {
//   console.log("Перша частина");
// } else if (min >= 15 && min < 30) {
//   console.log("Друга частина");
// } else if (min >= 30 && min < 45) {
//   console.log("Третя частина");
// } else if (min >= 45 && min < 60) {
//   console.log("Четверта частина");
// } else console.log("Невірна кількість хвилин");

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 4;
// let result;

// switch(num){

//     case 1:
//         result = "зима";
//         break;

//     case 2:
//         result = "весна";
//         break;

//     case 3:
//         result = "літо";
//         break;

//     case 4:
//         result = "осінь";
//         break;

//         default:
//         result = "Такої пори року немає";
// }

// console.log(result);

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let value = 0;

// while (value <= 50) {
//     console.log(value);
//     value += 1;
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();

// const CORRECT_VALUE = "ECMAScript";

// question === CORRECT_VALUE.toLowerCase() ? alert("Вірно!") : alert("Не знаєте? ECMAScript!");

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const globalMinutes = 69;

// const hours = Math.floor(globalMinutes / 60)
//   .toString()
//   .padStart(2, 0);
// console.log(hours);

// const minutes = (globalMinutes % 60).toString().padStart(2, 0);
// console.log(minutes);

// const time = `${hours}:${minutes}`;
// console.log(time);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 1;
// const max = 20;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);

//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log("парні:", i);
//   total += i;
// }

// console.log(`сума усіх парних: ${total}`);

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const login = prompt("Enter your login");
// if (login === "Admin") {
//   const password = prompt("Enter your password");
//   if (password) {
//     if (password === "Im boss") {
//       alert("Hello");
//     } else {
//       alert("Wrong password");
//     }
//   } else {
//     alert("Cancel");
//   }
// } else {
//   alert("I dont know you");
// }

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// First way

// const number = 30;

// for (let i = 1; i <= number; i += 1) {
//   console.log(i);
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz", i);
//   } else if (i % 3 === 0) {
//     console.log("fizz", i);
//   } else if (i % 5 === 0) {
//     console.log("buzz", i);
//   }
// }

// Second way

// const number = 30;

// for (let i = 1; i <= number; i += 1) {
//   let str = "";
//   if (i % 3 === 0) {
//     str += "fizz";
//   }
//   if (i % 5 === 0) {
//     str += "buzz";
//   }
//   console.log(str || i);
// }

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera";

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }
