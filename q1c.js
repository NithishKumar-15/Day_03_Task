//1.)Do the below programs in anonymous function & IIFE
//c. Sum of all numbers in an array

(function(){
    var a1=[10,20,30];
    var sum=0;
    for(var i in a1){
        sum=sum+i;
    }
    console.log(sum);
})();