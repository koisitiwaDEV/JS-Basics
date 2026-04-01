function FoodDelivery(input){
    let ChickenMenu = 10.35;
    let FishMenu = 12.40;
    let VeganMenu = 8.15;

    let NumChickM = Number(input[0]);
    let NumFishM = Number(input[1]);
    let NumVegM = Number(input[2]);
    
    let Sum = (NumChickM * ChickenMenu) + (NumFishM * FishMenu) + (NumVegM * VeganMenu);
    let Desert = Sum * 0.2;
    let Delivery = 2.50;

    let TotalSum = Sum + Desert + Delivery;

    console.log(`The price of your order is ${TotalSum.toFixed(2)}EUR.`);
    
}
FoodDelivery(["9","2","6"]);