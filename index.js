// code your solution here

//create a function to check for a win to be passed to find function
//should return a year if record === W?
function theyWon(element, index){
    //console.log(year,result);
    if (element.result === "W"){
        return element.year;
    };
    }



    
function superbowlWin(record){
    if(record.find(theyWon) !== undefined){
        return record.find(theyWon).year;
    }
    else{
        return undefined;
    }
  
}