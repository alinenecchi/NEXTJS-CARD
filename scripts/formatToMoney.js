export const formatToMoney = (number) => {
    const decimal = number / 100;
  
    const strString = decimal.toFixed(2).toString();
  
    //substitui separador decimal ponto por virgula
    const valueChanged = strString.replace(".", ",");
    //a regex abaixo coloca um ponto a esquerda de cada grupo de 3 dígitos desde que não seja no inicio do numero
    const formatado = valueChanged.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return "R$ " + formatado;
  };