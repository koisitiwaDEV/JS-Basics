function UsdToBgn(input){
    let usd = Number(input[0]);
    let conv = 1.7954;
    let bgn = usd * conv;
    console.log(`After conversion you have ${bgn.toFixed(2)} bgn!`);
}
UsdToBgn([20])

function RadToDeg(input){
    let rad = Number(input[0]);
    let deg = rad * 180 / Math.PI;
    console.log(`${rad} rads are ${deg.toFixed(2)} deggres!`);
}
RadToDeg([10])