var anArrayOfArray=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
console.log("the array of arrays",anArrayOfArray);


function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
       current = combine(current, array[i]);
    return current;
    }
    
    console.log("reduced",reduce(anArrayOfArray, function(a, b) {
        return a.concat(b);},[]));


var arrays=[[1],[2],[3]] 
console.log("another array",arrays);
arrays=arrays.reduce(function(a,b){
    return a.concat(b);},[])
console.log("reduced",arrays);       