function StudyMats(input){
    let PenPacketPrice = 5.80;
    let MarkerPacketPrice = 7.20;
    let BCleanerPriceL = 1.20;
    let PenPackets = Number(input[0]);
    let MarkerPackets = Number(input[1]);
    let LCleaner = Number(input[2]);
    let Discount = Number(input[3]) / 100;
    let Price = (PenPackets * PenPacketPrice) + (MarkerPackets * MarkerPacketPrice) + (LCleaner * BCleanerPriceL);
    let Total = Price - (Price * Discount);
    console.log(`The price of all school materials is ${Total.toFixed(2)} after the ${Discount*100}% discount!`);
    
}
StudyMats([4,2,5,13])