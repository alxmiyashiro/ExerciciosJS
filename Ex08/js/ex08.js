let primeiroNumero = parseInt(Math.random()*10);
let segundoNumero = parseInt(Math.random()*10);
let terceiroNumero = parseInt(Math.random()*10);
let delta = (segundoNumero ** 2) - (4 * primeiroNumero * terceiroNumero);
let resultado1 = (-segundoNumero + Math.sqrt(delta)) / (2 * primeiroNumero);
let resultado2 = (-segundoNumero - Math.sqrt(delta)) / (2 * primeiroNumero);
console.log(primeiroNumero, segundoNumero, terceiroNumero, delta, resultado1, resultado2);

document.getElementById('primeiroNumero').textContent = `A = ${primeiroNumero}`;
document.getElementById('segundoNumero').textContent = `B = ${segundoNumero}`;
document.getElementById('terceiroNumero').textContent = `C = ${terceiroNumero}`;
document.getElementById('resultado1').textContent = `X1 = ${resultado1.toFixed(4)}`;
document.getElementById('resultado2').textContent = `X2 = ${resultado2.toFixed(4)}`;