function PaintJob(input){
   let NylonSqm = Number(input[0]);
   let PaintL = Number(input[1]);
   let PaintThinerL = Number(input[2]);
   let JobHours = Number(input[3]);

   let TotalPaint = (PaintL + PaintL * 0.10) * 14.50;
   let TotalNylon = (NylonSqm + 2) * 1.50;
   let TotalThiner = PaintThinerL * 5;
   let PlasticBags = 0.40;

   let PaintJobSum = TotalPaint + TotalNylon + TotalThiner + PlasticBags;
   let WorkPrice = (PaintJobSum * 0.3) * JobHours;

   console.log(`The price of the materials needed is ${PaintJobSum.toFixed(2)}EUR and the workers want ${WorkPrice.toFixed(2)}EUR to do the job. Making the total money needed for the paintjob ${PaintJobSum + WorkPrice}EUR`);
   
} 
PaintJob(["5","10","10","1"]);