a="false"
b="true"
function iseven(number){
    if (number==0)
       return b;
    else if (number==1)
       return a;
    else if(number<1)
        return iseven(-number)   
    else
         return iseven(number-2); 


}
console.log(iseven(-1));