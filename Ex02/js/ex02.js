let nota1 = parseInt(Math.random()*10);
let nota2 = parseInt(Math.random()*10);
let nota3 = parseInt(Math.random()*10);
let nota4 = parseInt(Math.random()*10);
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(nota1, nota2, nota3, nota4, media);

document.getElementById('nota1').textContent = `Primeira nota: ${nota1}`;
document.getElementById('nota2').textContent = `Segunda nota: ${nota2}`;
document.getElementById('nota3').textContent = `Terceira nota: ${nota3}`;
document.getElementById('nota4').textContent = `Quarta nota: ${nota4}`;
document.getElementById('media').textContent = `Média das notas: ${media}`;