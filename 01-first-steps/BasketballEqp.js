function basketballEqp(input){
    let yearPrice = Number(input[0]);
    let shoePrice = yearPrice - (yearPrice * 0.4);
    let outfitPrice = shoePrice - (shoePrice * 0.2);
    let ballPrice = outfitPrice / 4;
    let accessoryPrice = ballPrice / 5;
    let totalPrice = yearPrice + shoePrice + outfitPrice + ballPrice + accessoryPrice;
    console.log(`The total price of all the basketball equipment needed is ${totalPrice.toFixed(2)} EUR.`);
    
}
basketballEqp(["550"]);