function every(array, predicate){
    for(var x=0;x<array.length;x++){
        if(!predicate(array[x])){
            return false;
        }
        
         
    }
    return true;
}

function some(an_array,predicate){
    for(var i=0; i<an_array.length;i++){
        if(predicate(an_array[i])){
            return true;
        }
    }
    return false
}

console.log(every([NaN,NaN,NaN],isNaN));
console.log(every([NaN,1,2],isNaN));
console.log(some([NaN,NaN,NaN],isNaN))
console.log(some([NaN,1,2],isNaN))