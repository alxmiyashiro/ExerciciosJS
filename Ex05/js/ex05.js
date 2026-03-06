let base = parseInt(Math.random()*100);
let altura = parseInt(Math.random()*100);
let area = (base * altura) / 2;
console.log(base, altura, area);

document.getElementById('base').textContent = `Base do triângulo: ${base}`;
document.getElementById('altura').textContent = `Altura do triângulo: ${altura}`;
document.getElementById('area').textContent = `Área do triângulo: (${base} * ${altura}) / 2 = ${area}`;