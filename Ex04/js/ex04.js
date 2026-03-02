let salarioFixo = 1500;
let comissao = 35;
let calcasVendidas = parseInt(Math.random()*200);
let comissaoTotal = comissao * calcasVendidas;
let salarioTotal = salarioFixo + comissaoTotal;
console.log(salarioFixo, comissao, calcasVendidas, comissaoTotal, salarioTotal);

document.getElementById('salarioFixo').textContent = `Salário por mês: R$${salarioFixo}`;
document.getElementById('comissao').textContent = `Comissão para cada calça vendida: R$${comissao}`;
document.getElementById('calcasVendidas').textContent = `Quantidade de calças vendidas: ${calcasVendidas}`;
document.getElementById('comissaoTotal').textContent = `Comissão total: R$${comissaoTotal}`;
document.getElementById('salarioTotal').textContent = `Salário total: R$${salarioTotal}`;