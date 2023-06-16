//! Object and function
//TODO:==========Task-1=============
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

//TODO:=========task-2=================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

const obj = {
  name: "Igor",
  car: "Mercedes",
  carColor: "black",
};

// const getBool = function (object, key) {
//   const keys = Object.keys(object);

//   return keys.includes(key);
// };

// console.log(getBool(obj, "carrr")); // true

// const getBool = function (object, key) {
//   return key in object;
// };

// console.log(getBool(obj, "car"));

// const getBool = (object, key) => key in object;

// console.log(getBool(obj, "carr"));

//TODO:==========task-3=============
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// for (const value of Object.values(salaries)) {
//   sum += value;
// }

// console.log(sum);

//TODO:==========task-4=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// const updateObject = function (obj, ...removeKeys) {
//   const newObject = { ...obj };
//   for (const key of removeKeys) {
//     delete newObject[key];
//   }
//   return newObject;
// };

// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a")); // {c: 3}

//TODO:=========task-5=================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// console.log(Object.entries(user));

//TODO:============task-6================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNumeric = function (object) {
//   const newObject = { ...object };
//   for (const key in newObject) {
//     if (newObject.hasOwnProperty(key)) {
//       if (typeof newObject[key] === "number") {
//         newObject[key] *= 2;
//       }
//     }
//   }
//   return newObject;
// };

// console.log(menu);
// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
// width: 400,
// height: 600,
// title: "My menu"
// };

//TODO:=========task-7==============
// Потрібно перебрати об'єкти та вивести ім'я кращого співробітника

/*
 * Виклики функції для перевірки працездатності твоєї реалізації.
 */

//? Answer

// //?

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
