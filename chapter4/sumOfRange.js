function range(start,end,step){
    var an_array=[];
    if (step == null){
        step=1;
       
       for(var x=start; x<=end; x=x+step){
        an_array.push(x);
       }
        
    }
        
    else if (step>0){
        
        for(var x=start; x<=end; x=x+step){
            an_array.push(x);
       
        }
    }
    else{
        
        for(var x=start; x>=end; x=x+Sstep){
            an_array.push(x);
    }
         
   
        
    }
    return an_array;
}
console.log(range(1,10,2))
 

function sum(an_array){
    var total=0;
    for(var i=0; i<an_array.length; i++){
        total+=an_array[i];

    }
    return total;

}
console.log(sum(range(1,10,2)))