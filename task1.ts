/* Cоздадим функции для калькулятора: add(сложение), sub(вычитание), mul(умножение), div(деление).
Функция принимает два параметра (x,y) типа number и возвращает значение типа number,
тип number может работать с числами в десятичной, двоичной и шестнадцатеричной системах счисления. 
*/

function add (i: number, y: number): number {
	return i + y;
}

function sub(i: number, y: number): number {
	return i - y;
}

function mul(i: number, y: number): number {
	return i * y;
}

function div(i: number, y: number): number {
	return i / y;
}

/* имя переменной (let) называется result(результат),чтоб выбрать действие (сложение, вычитание и т.д) 
нужно после "result =" указать функцию (например add), в скобках поставить два числа (x,y). 
В console.log выводится информация об операции и ответ. 
*/

let result = add(5,3);
console.log("Результат сложения:" + " " + result);

result = sub(5,3);
console.log("Результат вычитания:" + " " + result);

result = mul(5,3);
console.log("Результат умножения:" + " " + result);

result = div(5,3);
console.log("Результат деления:" + " " + result);