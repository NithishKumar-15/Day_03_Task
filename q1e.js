//1.)Do the below programs in anonymous function & IIFE
//All prime number in an array

(function(){
    let arr=[3,4,5,10,45];
    let primeNum=arr.map((val,ind,ar)=>{
        for(i=2;i<val;i++){
            if(val%i==0){
                break;
            }
            else{
                return val;
            }
        }
    })
    console.log(primeNum);
})();


