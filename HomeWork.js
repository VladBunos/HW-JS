// // Задание 1
// alert('Я JavaScript');

// // Задание 2 
// let admin;
// let name;
// name = 'John';
// admin = name;
// alert(admin);

// // Задание 3
// let planetEarth;
// let currentUser;

// // Задание 4, 5
// let userName = prompt(`what's your name`);
// alert(`Ok, ${userName}, nice to see you`);
// console.log(`Ok, ${userName}, nice to see you`);


//Просто тренировался
// let age = +prompt(`Укажите Ваш возраст`);
// console.log(typeof a);
// if (a >= 18) {
//     alert(`Доступ к сайту разрешен. Вам не менее 18 лет`);
//     let userName = prompt('Введите Ваше имя');
//     let userCity = prompt ('Укажите Ваш город');
//     alert (`Итак, Вас зовут ${userName}, Ваш возраст ${age}, Вы из города ${userCity}`);   
// } else {
//     alert(`You're under 18 !`);
// }


 //Просто тренировался
// year = +prompt(`сколько жизней у кошки?`);
// if (year > 9){
//     console.log(`Слишком много !`);
// } else if (year < 9){
//     console.log(`Слишком мало!`);
// } else {
//     console.log(`верно!`);
// }

//Просто тренировался
// year = +prompt(`Сколько жизней у кошки ?`);
// (year > 9) ? console.log(`Слишком много!`) : 
// (year < 9) ? console.log(`Слишком мало !`) :
// console.log(`Верно !`);



// Задание 6
// let jsName = prompt(`Какое официальное название JS ?`);
// if (jsName === `ECMAScript`) {
//     console.log(`Верно !`);
// } else { 
//     console.log(`Не знаете ? ECMAScript!`);
// }

//Задание 7
// let num = +prompt();
// (num === 0 ) ? console.log(0) : 
// (num < 0 ) ? console.log(-1) :
// console.log(1);

//Задание 8 
// let a, b;
// let result = (a + b < 4) ? `Мало` : `Много`;

// Задание 9
// let login = prompt();
// let message = (login == `Сотрудник`) ? `Привет` :
// (login === `Директор`) ? `Здравствуйте`:
// (login === ``) ? `Нет логина` : ``;
// alert(message);

//Задание 10
// let age = +prompt();
// if (age >= 14 && age<=90 ){
//     alert (`значение в диапазоне`);
// } else {
//     alert(`значение вне диапазона`);
// }

// Задание 11
// let age = +prompt();
// if (!(age >= 14 && age <= 90 )){
//     alert(`значение вне диапазона`)
// } else {
//     alert('значение в диапазоне')
// }

//Задание 12. Решено неправильно, просто тренировался
// let userName = prompt(`Кто там ? `)
// if ((userName !== null) && (userName !== `Админ`)){
//     alert(`Я вас не знаю!`)
// } else {
//     let password = prompt(`Введите пароль`);
//     if ((password !== null) && (password !== `Я главный`)){
//         alert(`Неверный пароль`);
//     } else {
//         alert(`Здравствуйте !`);
//     }
// }  


//Задание 12
// let userName = prompt(`Кто там ? `)
// if (userName === null){
//     alert(`Отмена`);
// } else if (userName !== `Админ`){
//     alert(`Я вас не знаю`);
// } else if (userName === `Админ`){
//     let password = prompt(`Пароль ?`)
//     if (password === null){
//         alert(`Отмена`);
//     }else if (password !== `Я главный`){
//         alert(`Неверный пароль`)
//     }else if (password === `Я главный`){
//         alert(`Здравствуйте!`);
//     }
// }