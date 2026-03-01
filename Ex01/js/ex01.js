let numeroSorteado = parseInt(Math.random()*100);
let sucessor = numeroSorteado + 1;
let antecessor = numeroSorteado - 1;
let dobro = numeroSorteado * 2;
let metade = numeroSorteado / 2;
console.log(numeroSorteado, sucessor, antecessor, dobro, metade);

document.getElementById('numeroSorteado').textContent = `Número sorteado: ${numeroSorteado}`;
document.getElementById('numeroSucessor').textContent = `Seu sucessor: ${sucessor}`;
document.getElementById('numeroAntecessor').textContent = `Seu antecessor: ${antecessor}`;
document.getElementById('numeroDobrado').textContent = `O dobro: ${dobro}`;
document.getElementById('numeroDividido').textContent = `A metade: ${metade}`;