let test = 0;
while (test <= 110) {
  rankCalc(test);
  console.log(`This check was made with wins = ${test}`);
  test += 10;
}

function rankCalc(wins, losses = 0) {
  const balance = wins - losses;
  let rank;

  if (balance <= 10) {
    rank = "Iron";
  } else if (balance <= 20) {
    rank = "Bronze";
  } else if (balance <= 50) {
    rank = "Silver";
  } else if (balance <= 80) {
    rank = "Gold";
  } else if (balance <= 90) {
    rank = "Diamond";
  } else if (balance <= 100) {
    rank = "Legendary";
  } else {
    rank = "Immortal";
  }

  console.log(`The Hero with a balance of ${balance} is at the ${rank} level`);
}
