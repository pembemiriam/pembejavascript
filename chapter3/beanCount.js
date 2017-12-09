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


