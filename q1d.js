//1.)Do the below programs in anonymous function & IIFE
//d.Return all the prime numbers in an array
(function(){
    var a1=[10,20,30,2,5];
    var sum=0;
    var a2;
    for(var k of a1){
    for(i=2;i<k;i++){
        if(k%i==0){
            break;
        }else{
            console.log(k);
            break;
        }
    }
    }
    
})();

//const modStr = str[0].toUpperCase() + str.slice(1);
