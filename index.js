var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdice1="dice"+randomnumber1+".png";
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomnumber2+".png";
image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice1);
image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);
if(randomnumber1>randomnumber2)
{document.querySelector("h1").innerHTML="Player 1 is the winner🎉";}
else if(randomnumber1<randomnumber2)
{document.querySelector("h1").innerHTML="Player 2 is the winner✌";}
else
{document.querySelector("h1").innerHTML="Its a draw, let check again😜";}
