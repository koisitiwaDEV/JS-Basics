function bonusPoints(input) {
    let startingPoints = Number(input[0]);

    let baseBonus = 0;

    if (startingPoints <= 100) {
        baseBonus = 5;
    } else if (startingPoints <= 1000) {
        baseBonus = startingPoints * 0.2;
    } else {
        baseBonus = startingPoints * 0.1;
    }

    let extraBonus = 0;

    if (startingPoints % 2 === 0) {
        extraBonus += 1;
    }

    if (startingPoints % 10 === 5) {
        extraBonus += 2;
    }

    let totalBonus = baseBonus + extraBonus;
    let totalPoints = startingPoints + totalBonus;

    console.log(totalBonus.toFixed(1));
    console.log(totalPoints.toFixed(1));
}

bonusPoints(["2703"]);