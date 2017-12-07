function countchar(string,character){
    var count=0;
    for(var i=0; i<string.length; i++){
        if(string.charAt(i)==character)
           count+=1;
           
    }
    return count;
    
}
console.log(countchar("BaByBoy", "y"));


function countBs(string){
    return countchar(string, "B");

}
   
console.log(countBs("Bakery"));   


var journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break",
    "peanuts", "beer"],
    squirrel: true},
    /* and so on... */
    ];
console.log(journal[0].events.join(""));    
