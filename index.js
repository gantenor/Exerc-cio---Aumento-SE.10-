var salario, nsalario, aumento

salario = parseFloat(prompt("Digite o salário da pessoa: "));

if (salario <= 1000) {
  nsalario = (salario + salario * 0.20);
  alert('Novo salário R$:' + nsalario.toFixed(2));
}
  else if (salario <= 3000){
    nsalario = (salario + salario * 0.15);
    alert('Novo salário R$:' + nsalario.toFixed(2));
  }
    else if (salario <= 8000){
      nsalario = (salario + salario * 0.1);
      alert('Novo salário R$:' + nsalario.toFixed(2));
    }
      else if (salario > 8000){
        nsalario = (salario + salario * 0.05);
        alert('Novo salário R$' + nsalario.toFixed(2));
      }
        else{
          alert('Valor não identificado');
        }