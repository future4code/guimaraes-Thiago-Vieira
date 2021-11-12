// 1

let celsiusA = Number(prompt("Digite uma temperatura em graus Celsius:"));

const fahrenheitA = 77;
const celsiusB = 80;
const celsiusC = 30;

let fahrenheit;
let fahrenheitB;
let kelvinB
let kelvin;

kelvin = (fahrenheitA - 32) * (5/9) + 273.15;
fahrenheitB = celsiusB * (9 / 5) + 32;
fahrenheit = celsiusC * (9 / 5) + 32;
kelvinB = celsiusC + 273.15;

console.log("77° em K =", kelvin);
console.log("80°C em F =", fahrenheitB);
console.log("30°C em K =", kelvinB);
console.log("30°C em F =", fahrenheit)
console.log("A temperatura digitada, em Fahreinheit, é:", ((celsiusA *9/5) + 32));

// 2

let kwh = 0.05;
let khwDesconto = kwh * 0.85;

console.log("Uma residencia que consome 2800KWh, tem uma conta de R$", (kwh * 280));
console.log("O valor desta conta com desconto é:", khwDesconto);

// 3

// 1 lb = 0,454Kg -> 20lb = 9,08Kg
// 1 oz = 0,02835Kg -> 10,5oz = 0,297 
// 100 mi - 160935m
// 1 ft = 0,3048m -> 50ft = 15,48
// 1 gal = 3,785L -> 103,56gal = 391,97L
// 1 xíc = 0,24L = 450xic = 108L

console.log("20lb equivalem a")
console.log("10.5oz equivalem a")
console.log("100mi equivalem a")
console.log("50ft equivalem a")
console.log("103.56gal equivalem a")
console.log("450xic equivalem a")