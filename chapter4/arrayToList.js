function arrayToList(array){
   var list=null;
    for(var x=array.length-1;x>=0;x--){
        list=  {value:array[x],rest:list};
    }
    return list;
        

}
console.log(arrayToList([10,20]));

function listToArray(list){
    var array=[];
    for(var i=list;i;i=i.rest)
       array.push(i.value)
    return array;   
}
console.log(listToArray(arrayToList([10,50])));