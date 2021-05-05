 player1= localStorage.getItem("username1");
 player2= localStorage.getItem("username2");
 player1score=0;
 player2score=0;
 console.log(player1);
 console.log(player2);
 document.getElementById("player1_name").innerHTML=player1;
 document.getElementById("player2_name").innerHTML=player2;
 document.getElementById("player1_score").innerHTML=player1score;
 document.getElementById("player2_score").innerHTML=player2score;
 document.getElementById("questionturn").innerHTML="Question turn:"+player1;
 document.getElementById("answerturn").innerHTML="Answer turn:"+player2;
 function send()
 {
    number1=document.getElementById("put").value; 
    number2=document.getElementById("in").value; 
    answer=parseInt(number1)*parseInt(number2);
    console.log(answer);
    question="<h4>Q."+number1+"X"+number2;
    input="<br><br>Answer:<input id='ans'>";
    sumbit="<br><br><button class='btn btn-info' onclick='check()'>sumbit</button>";
div=question+input+sumbit;
 document.getElementById("output").innerHTML=div;
 document.getElementById("put").value="";
 document.getElementById("in").value="";
}