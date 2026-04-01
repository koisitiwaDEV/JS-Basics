function timerPlus(input){
    let hours = Number(input[0]);
    let mins = Number(input[1]);

    if ( (mins + 15) % 60 < mins){
         hours += 1;
         mins = (mins + 15) % 60;
    }
    else{
        mins = (mins + 15) % 60;
    }
    if (hours > 23) {
        hours = 0;
    }
    if (mins < 10) {
        console.log(`The time after 15 mins will be: ${hours}:0${mins}`);
    }
    else{
        console.log(`The time after 15 mins will be: ${hours}:${mins}`);
    }      
}
timerPlus(["12","49"])