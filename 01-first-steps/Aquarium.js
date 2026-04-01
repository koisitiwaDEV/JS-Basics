function aquarium(input){
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let percentFilled = Number(input[3]) / 100;
    let aquariumVolumeL = (lenght * widht * height) / 1000;
    let neededWaterL = aquariumVolumeL - (aquariumVolumeL * percentFilled);
    console.log(`The aquarium needs ${neededWaterL.toFixed(2)}L of water to be full!`);
    
}
aquarium(["105","77","89","18.5"]);