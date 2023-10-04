// Code your solution in this file!
// function distanceFromHq InBlocks
let hq= 42
function distanceFromHqInBlocks(blok){
    //
    return Math.abs(hq-blok);
}

// distanceFromHqInFeet
function distanceFromHqInFeet(blok){
    //dist = 264*number of blocks
   let dist= distanceFromHqInBlocks(blok);
   return dist*264;

}
//distanceTravelledInFeet
function distanceTravelledInFeet(strt, dest){
    //akes in both the start and destination blocks, and returns the number of feet travelled.
    return Math.abs(dest-strt)*264;
}
function calculatesFarePrice(strt,dest){

    //
    let distac = distanceTravelledInFeet(strt,dest);
    if (distac<=400) {
        return 0;
    } 
    else if (distac>400 && distac<=2000) {
        return Math.abs(distac-400)*0.02;
    }
    else if (distac>2000 && distac<=2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }

}
//let dist= distanceFromHqInBlocks(50);
