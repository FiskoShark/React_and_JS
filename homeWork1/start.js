
//-----------------second num from three-digit-------------//
console.log("Введіть тризначне число");
let number1 = Number(prompt());

if (number1 <= 99 || number1 >= 1000) {
    console.log("невірне число");
}

else {
    let numberT = Math.floor(number1 / 10);
    let result = numberT % 10;
    console.log(result);
}

//-----------------last to start from five-digit -------------//
console.log("Введіть пятизначне число");
let number2 = Number(prompt());

if (number2 <= 9999 || number2 >= 100000) {
    console.log("невірне число");
}

else {
    let lastNum = number2 % 10;
    let number1234 = Math.floor(number2 / 10);
    let result = (lastNum * 10000) + number1234;
    console.log(result);
}


//-----------------більше-менше-------------//
console.log("Введіть перше число");
let first = Number(prompt());

console.log("Введіть друге число");
let second = Number(prompt());

console.log(`ви ввели: ${first} та ${second}`);


let result = (first > second)
    ? `${first} більше`
    : (first < second)
        ? `${second} більше`
        : "числа рівні";

console.log(result);


//-----------------перевірка кратності-------------//
console.log("Введіть число на перевірку кратності на 5");
let fiveNum = Number(prompt());

if (fiveNum % 5 === 0) {
    console.log("Успіх! число кратне 5");
}

else {
    console.log("число не кратне 5");
}
//-----------------planet name-------------//
console.log("Введіть вашу планету: ");
let planet = prompt();

if (planet.toLowerCase() === "земля") {
    console.log("Привіт землянине!");
}

else {
    console.log("Привіт інопланетянине!");
}

//-----------------DO_WHILE-------------//
let youResult;

do {
    console.log("скільки буде 2 + 2 * 2 ?");
    youResult = Number(prompt());
    if (youResult !== 6) {
        console.log("невірно");
    }

}
while (youResult !== 6);
console.log("вірно");

//-----------------division by two-------------//
let oneThousan = 1000;
let count = 0;

do {
    let resultNum = oneThousan / 2;
    console.log(`${oneThousan} / 2 = ${resultNum}`);
    oneThousan = oneThousan / 2;
    //типу виводиться все і перше ділення проходить як є а далі зменшуємо//
    count++;


}

while (oneThousan >= 50);
console.log(`кількість спроб: ${count}`)

//-----------------ifPrime Num?-------------//
console.log("введіть просте число: ");
let ifNaturalNum = Number(prompt());


function primeNum(ifNaturalNum) {
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
}

primeNum(ifNaturalNum);
//-----------------multiplication-------------//
console.log("введіть число: ");
let tableNum = Number(prompt());


function multiplication(tableNum) {
    for (let i = 1; i <= 10; i++) {
        let resultNum2 = tableNum * i;
        console.log(`${tableNum} * ${i} = ${resultNum2}`)
    }
}

multiplication(tableNum);
///---------///
for (let i = 2; i <= 9; i++) {
    multiplication(i);
}

