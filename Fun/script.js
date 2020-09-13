document.querySelector("button").addEventListener("click",function(event){

    var H1 = document.querySelector("h1");

    //1. generate random number for 1-6 

    var num1 = Math.random() *6  + 1 ;
    var num2 = Math.random() *6  + 1 ;
    num1 = Math.floor(num1);
    num2 = Math.floor(num2);

    // check for greater and manuplate dom H1
    if(num1>num2){
        H1.textContent="Player 1 wins!"
    }else if( num1 < num2  ){
        H1.textContent="Player 2 wins!"
    }else{
        H1.textContent="Its a Draw!"
    }

    var dice1 = document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png")
    var dice2 = document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png")



});