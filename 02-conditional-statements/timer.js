function timer(input){
    let p1 = Number(input[0]);
    let p2 = Number(input[1]);
    let p3 = Number(input[2]);

    let totalSec = p1 + p2 + p3;
    let mins = (totalSec / 60).toFixed();
    let sec = (totalSec % 60).toFixed();

    if( mins < 10 && sec <10){
        console.log(`0${mins}:0${sec}`);   
    }
    else if(mins > 10 && sec < 10){
        console.log(`${mins}:0${sec}`);   
    }
     else if(mins > 10 && sec > 10){
        console.log(`${mins}:${sec}`);
     }
}
timer(["22","7","34"]);