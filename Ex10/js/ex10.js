let primeiroNumero = parseInt(Math.random()*100);
let segundoNumero = parseInt(Math.random()*100);
console.log(primeiroNumero, segundoNumero);
document.getElementById('primeiroNumero').textContent = `Primeiro número = ${primeiroNumero}`;
document.getElementById('segundoNumero').textContent = `Segundo número = ${segundoNumero}`;

if ((primeiroNumero + segundoNumero) <= 100) {
    let menorIgual = (primeiroNumero + segundoNumero) * 3;
    console.log(menorIgual);
    document.getElementById('resultado').textContent = `A soma dos números sorteados é menor ou igual a 100, então: (${primeiroNumero} + ${segundoNumero}) * 3 = ${menorIgual}`;
}
else {
    let maior = (primeiroNumero + segundoNumero) * 5;
    console.log(maior);
    document.getElementById('resultado').textContent = `A soma dos números sorteados é maior que 100, então: (${primeiroNumero} + ${segundoNumero}) * 5 = ${maior}`;
}