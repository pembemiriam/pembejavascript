var myMonth=function(){
    var month=["janury","febuary","march","April","may","June","July","August","September","October","November","December"];
    return{
        name:function(number){return month[number];},
        number:function(name){return month.indexOf(name);}
    };
}();
console.log(myMonth.number(myMonth.name(1)));