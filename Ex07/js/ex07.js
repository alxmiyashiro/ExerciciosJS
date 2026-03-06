let peso = parseInt(Math.random()*200);
let emagrecer = peso - (0.2 * peso);
let engordar = peso + (0.2 * peso);
console.log(peso, emagrecer, engordar);

document.getElementById('peso').textContent = `Peso da pessoa = ${peso}`;
document.getElementById('emagrecer').textContent = `Ao emagrecer 20% do peso = ${emagrecer}`;
document.getElementById('engordar').textContent = `Ao engordar 20% do peso = ${engordar}`;