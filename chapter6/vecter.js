function Vector(x,y){
   this.x=x;
   this.y=y;
    }

Vector.prototype.minus=function(other){
        return new Vector (this.x-other.x,this.y-other.y);
}
Vector.prototype.plus=function(other){
    return new Vector (this.x+other.x,this.y+other.y);
}
var object1=new Vector(3,1);
console.log(object1.plus(new Vector(4,2)));
console.log(object1.minus(new Vector(4,2)));

Object.defineProperty(Vector.prototype,"length",{get:function(){
    return Math.sqrt((this.x*this.x)+(this.y*this.y));
}})
console.log(object1.length);