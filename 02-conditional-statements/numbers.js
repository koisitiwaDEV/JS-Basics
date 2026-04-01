function numbers(input){
    let num = Number(input[0]);
    if( num <= 100){
        console.log(`under`);
        
    }
    else if(num > 100 && num < 200){
        console.log(`between`);
        
    }
    else if (num > 200){
        console.log(`above`);
        
    }

}
numbers(["205"])