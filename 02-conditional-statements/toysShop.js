function toysShop(input){

    let holidayPrice = Number(input[0])
    let puzzle = Number(input[1]) * 2.60;
    let talkingDoll = Number(input[2]) * 3;
    let teddyBear = Number(input[3]) * 4.10;
    let minion = Number(input[4]) * 8.20;
    let truck = Number(input[5]) * 2;

    let totalToysCount = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);
    let totalToysPrice = puzzle + talkingDoll + teddyBear + minion + truck;

    if (totalToysCount >= 50) {
       totalToysPrice = totalToysPrice - (totalToysPrice * 0.25);
    }
   let totalMoney= totalToysPrice - (totalToysPrice * 0.1);

   if (totalMoney >= holidayPrice) {
    console.log(`The money are enough for a holiday with ${(totalMoney - holidayPrice).toFixed(2)} EUR left over!`);
    
   }
   else{
    console.log(`The money arent enough for a holiday you are ${(holidayPrice - totalMoney).toFixed(2)} EUR short!!!`);
    
   }
}
toysShop(["320", "8", "2", "5", "5", "1"]);