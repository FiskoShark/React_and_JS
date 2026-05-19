
//-----------------------модуль-------------------------------//
console.log("введіть число яке буде приведене до модуля: ")
let modulNum = Number(prompt());
if (modulNum <= 0) {
    if (modulNum === 0) {
        console.log("число = 0")
    }
    else if (modulNum < 0) {
        let trueModulNum = modulNum * -1;
        console.log(`число = ${trueModulNum}`)
    }
}

else {
    console.log(`число = ${modulNum}`);
}
//------------------------час------------------------------//
console.log("введіть будь ласка час починаючи з години: ")
let hour = Number(prompt());
console.log("хвилини: ")
let minute = Number(prompt());
console.log("секунди: ")
let second1 = Number(prompt());

if (hour >= 0 && hour <= 23) {
    if (minute >= 0 && minute <= 59) {
        if (second1 >= 0 && second1 <= 59) {
            let time = (`${hour} : ${minute} : ${second1}`);
            console.log(time);

        }
        else {
            console.log("невірно введено секунди");
        }
    }
    else {
        console.log("невірно введено хвилини");
    }
}
else {
    console.log("невірно введена година або виникла інша помилка");
}
//------------------------координати x, y------------------------------//

//         |        |// чверть	x	y
//      2  |    1   |// 1	    +	+
// --------|------- |// 2	    -	+
//      3  |    4   |// 3	    -	-
//         |        |// 4	    +	-

console.log("введіть координату x: ");
let x = Number(prompt());

console.log("введіть координату y: ");
let y = Number(prompt())

if (x === 0 && y === 0) {
    console.log("початок координат");
}


else if (x === 0) {
    console.log("на осі y");
}
else if (y === 0) {
    console.log("на осі x");
}


else if (x > 0 && y > 0) {
    console.log("1 чверть");
}
else if (x < 0 && y > 0) {
    console.log("2 чверть");
}
else if (x < 0 && y < 0) {
    console.log("3 чверть");
}
else {
    console.log("4 чверть");
}

//------------------------for кратнє------------------------------//

let userNum;
console.log("введіть число для кратності: ")
userNum = Number(prompt());

for (let i = 1; i <= 100; i++) {
    if (i % userNum === 0) {
        console.log(i);
    }
}

//------------------------діапазон та крок 4------------------------------//

console.log("введіть мінімальне число діапазону: ");
let firstNumber = Number(prompt());

console.log("введіть максимальне число діапазону: ");
let secondNumber = Number(prompt());

for (let i = firstNumber; i <= secondNumber; i += 4) {
    console.log([i]);
}

//------------------------просте число------------------------------//



console.log("введіть просте число: ");
let ifNaturalNum = Number(prompt());

let isPrime = true;
if (ifNaturalNum <= 1) {
    console.log("це не просте число");
}

else {
    for (let i = 2; i < ifNaturalNum; i++) {
        if (ifNaturalNum % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("просте число");
    }
    else {
        console.log("це не просте число");
    }

}

// ------------------------більше-менше------------------------------//

console.log("Введіть перше число");
let first = Number(prompt());

console.log("Введіть друге число");
let second = Number(prompt());


function moreOrLess(first, second) {
    console.log(`ви ввели: ${first} та ${second}`);

    return (first < second)
        ? `${first} менше`
        : (first > second)
            ? `${second} менше`
            : "числа рівні";
}

console.log(moreOrLess(first, second));

//------------------------степінь------------------------------//

console.log("Введіть число");
let number = Number(prompt());

console.log("Введіть степінь");
let degree = Number(prompt());

function degreFunc(number, degree) {
    let result = 1;
    for (let i = 0; i < degree; i++) {
        result = result * number;
    }
    return result;
}
console.log(degreFunc(number, degree));

//------------------------calculate------------------------------//

console.log("Введіть перше число: ");
let firstNumberr = Number(prompt());

console.log("Введіть друге число: ");
let secondNumberr = Number(prompt());

console.log("Введіть дію: ");
let action = prompt();


function calculate(firstNumberr, secondNumberr, action) {
    if (!(action === "+" || action === "-" || action === "/" || action === "*")) {
        return "дія була не коректною";
    }

    else {
        if (action === "+") {
            let calculateResult = firstNumberr + secondNumberr;
            return calculateResult;
        }
        else if (action === "-") {
            let calculateResult = firstNumberr - secondNumberr;
            return calculateResult;
        }
        else if (action === "/") {
            let calculateResult = firstNumberr / secondNumberr;
            return calculateResult;
        }
        else if (action === "*") {
            let calculateResult = firstNumberr * secondNumberr;
            return calculateResult;
        }
    }
}
console.log(calculate(firstNumberr, secondNumberr, action));

