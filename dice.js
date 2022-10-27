var randomnumber1=Math.floor(Math.random()*6)+1;
var random1img = "images/dice"+randomnumber1+".png";
var img1 =document.querySelectorAll("img")[0].setAttribute("src",random1img);
var randomnumber2=Math.floor(Math.random()*6)+1;
var random2img="images/dice"+randomnumber2+".png";
var img2=document.querySelectorAll("img")[1].setAttribute("src",random2img);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Win";
}
else if (randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player2 Win";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}



