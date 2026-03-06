let numeroSorteado = parseInt(Math.random()*100);
console.log(numeroSorteado);
document.getElementById('numeroSorteado').textContent = `Número sorteado = ${numeroSorteado}`;

if (numeroSorteado % 2 === 0) {
    let numeroPar = numeroSorteado ** 2;
    console.log('O número é par', numeroPar);
    document.getElementById('parImpar').textContent = `Número par ou ímpar = par`;
    document.getElementById('numeroFinal').textContent = `Número ao quadrado = ${numeroPar}`;
} 
else {
    let numeroImpar = numeroSorteado ** 3;
    console.log('O número é ímpar', numeroImpar);
    document.getElementById('parImpar').textContent = `Número par ou ímpar = ímpar`;
    document.getElementById('numeroFinal').textContent = `Número ao cubo = ${numeroImpar}`;
}