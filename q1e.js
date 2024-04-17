//1.)Do the below programs in anonymous function & IIFE
//Return all Plandrome in an array

let arr=["Mom","vijay","LOl","IMI"];

(function(){
let pal=arr.filter((val,ind,ar)=>{
    var a="";
    for(i=val.length-1;i>=0;i--){
        a=a+val.charAt(i);
    }
    if(val.toUpperCase()===a.toUpperCase()){
        return val;
    }
})
console.log(pal);
})();