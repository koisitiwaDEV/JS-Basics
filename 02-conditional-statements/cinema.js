function cinema(input){
    let projectionType = input[0];
    let price;
    let rows = Number(input[1]);
    let coloms = Number(input[2]);

    switch (projectionType) {
        case "Premiere":
            price = 12.00;
            break;
        case "Normal":
            price = 7.50;
            break;
        case "Discount":
            price = 5.00;
            break;
        default:
            console.log(`Error`);
            
            break;
    }
    let totalPrice = (rows * coloms) * price;
    console.log(`The total price is ${totalPrice.toFixed(2)}`);
    
}
cinema(["Discount", "12", "30"]);