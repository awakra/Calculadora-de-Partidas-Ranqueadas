let test = 0;
while (test <= 110) {
  rankCalc(test);
  console.log(`Esta verificação foi feita com o valor de wins = ${test}`);
  test += 10;
}
function rankCalc(wins, losses = 0) {
  let balance = wins - losses;
  let rank;
  if (balance <= 10) {
    rank = "Ferro";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  } else if (balance >= 11 && balance <= 20) {
    rank = "Bronze";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  } else if (balance >= 21 && balance <= 50) {
    rank = "Prata";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  } else if (balance >= 51 && balance <= 80) {
    rank = "Ouro";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  } else if (balance >= 81 && balance <= 90) {
    rank = "Diamante";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  } else if (balance >= 91 && balance <= 100) {
    rank = "Lendário";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  } else {
    rank = "Imortal";
    return console.log(
      `O Herói tem de saldo de ${balance} está no nível de ${rank}`
    );
  }
}
