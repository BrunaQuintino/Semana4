const num1 = parseInt(prompt("Digite o primeiro número:"))
console.log(num1)
const num2 = parseInt(prompt("Digite o segundo número:"))
console.log(num2)


function sum(x, y) {
    return x + y;

}

console.log(sum(num1, num2));

alert(`A soma é ${sum(num1, num2)}.`)