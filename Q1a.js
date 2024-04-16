// 1.)Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array

(function(){
    var a1=[2,30,50,23];
    
    for(var i in a1){
        if(a1[i]%2!=0){
            console.log(a1[i],': is an odd number');
        }
    }
})();

