'use strict';
// Запитати в користувача парне число в інтервалі від 10 до 50 і поділити його навпіл. Вивести в консоль результатю
let userNumb = prompt('Введіть парне число від 10 до 50');
let result = userNumb / 2;
console.log(alert(result));

//  let num = -124;
//  let x = 100 + (num *= 5);
// 100 + (-124 *= 5) = 100 + (-620) = -520;
let numb = -124;
let x = 100 + (numb *= 5);
console.log(x);

// 1) "" + 15 + 5;
//    0  + 15 + 5 = 155;
let sum = "" + 15 + 5;
console.log(sum);

// 2) "" - 10 + 5;
//    0  - 10 + 5 = -5;
let sum_2 = "" - 10 + 5;
console.log(sum_2);

// 3) false + true;
//     0    + 1 = 1;
let sum_3 = false + true;
console.log(sum_3);

// 4) 69 / "3";
//    69 /  3 = 23;
let sum_4 = 69 / "3";
console.log(sum_4);

// 5) "10" * "20";
//     10  *  20 = 200;
let sum_5 = "10" * "20";
console.log(sum_5);

// 6) 12+ 10 + "px"
//    12 + 10 + 1 = 22px;    
let sum_6 = 12 + 10 + "px";
console.log(sum_6);

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let sum_7 = (0.1 + 0.2).toFixed(1);
console.log(sum_7);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let numb_1 = "1";
let numb_2 = 2;
let sum_8 = +numb_1 + numb_2;
console.log(sum_8);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let gbFleshSize = prompt('Введіть обсяг вашої флешки в ГБ');
let mbFileSize = 820;
console.log(alert(`Ви можете зберегти ${((gbFleshSize / 1000) * mbFileSize).toFixed()} файлів розміром 820 МБ.`));

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let userSum = prompt('Скільки грошей Ви готові потратити на шоколадки?');
let itemPrice = prompt('Яка вартість однієї шоколадки?');
console.log(alert(`Ви можете купити ${(userSum / itemPrice).toFixed()} шоколадок. Ваш залишок : ${userSum % itemPrice} грн.`));

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let randomNumb = prompt('Введіть будь які три числа.');
let reverseNumb = Number([...randomNumb.toString()].reverse().join(''));
console.log(alert(reverseNumb));

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let depositeSum = prompt('Введіть суму депозиту.');
let twoMounthPers = 5 / 12 * 2;
console.log(alert(`Сума нарахованих відсотків за два місяці: ${(depositeSum * twoMounthPers / 100).toFixed(2)}`));

// Що повернуть вирази:
let ex_1 = 2 && 0 && 3;
console.log(ex_1);

let ex_2 = 2 || 0 || 3;
console.log(ex_2);

let ex_3 = 2 && 0 || 3;
console.log(ex_3);

