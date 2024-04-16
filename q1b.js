//1.)Do the below programs in anonymous function & IIFE
//b. Convert all the strings to title caps in a string array

(function(){
    var a1=['nithish','kumar','mani'];
    
    for(var i in a1){
        a1[i]=a1[i].toUpperCase()+a1[i].slice(1);
    }
    console.log(a1)
})();