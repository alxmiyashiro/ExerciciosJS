let horasTrabalhadas = parseInt(Math.random()*250);
let quantidadeDependentes = parseInt(Math.random()*6);
let salarioFuncionario = (168 * horasTrabalhadas) + (80 * quantidadeDependentes);
let descontoINSS = 0.085 * salarioFuncionario;
let descontoIR = 0.05 * salarioFuncionario;
let salarioFinal = (salarioFuncionario - descontoIR - descontoINSS);
console.log(horasTrabalhadas, quantidadeDependentes, salarioFuncionario, descontoINSS, descontoIR, salarioFinal);

document.getElementById('salarioBruto').textContent = `Salário bruto = ${salarioFuncionario}`;
document.getElementById('descontoIR').textContent = `Desconto de IR = ${descontoIR.toFixed(2)}`;
document.getElementById('descontoINSS').textContent = `Desconto de INSS = ${descontoINSS.toFixed(2)}`;
document.getElementById('salarioFinal').textContent = `Salário final = ${salarioFinal.toFixed(2)}`;