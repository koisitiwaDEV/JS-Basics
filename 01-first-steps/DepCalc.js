function DepCalc(input){
 let DepSum = Number(input[0]);
 let Months = Number(input[1]);
 let YearInt = Number(input[2]) /100;
 let Sum = DepSum + Months * ((DepSum * YearInt)/12);
 console.log(`Your sum is ${Sum.toFixed(2)} after the ${Months} months with interest rate of ${(YearInt*100).toFixed(2)}% !`);
}
DepCalc(["2350","6","7"]);