function reverseAnArray(my_array){
    var an_array=[];
    for( var x=0; x<my_array.length; x=x+1){
        an_array.unshift(my_array[x]);
    

  }
  return an_array;

}
var number=[1,2,4,6];
console.log(reverseAnArray(number))