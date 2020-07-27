

var p1btn= document.querySelector("#p1");
var p2btn= document.querySelector("#p2");
var p1display= document.querySelector("#p1display");
var p2display= document.querySelector("#p2display");
var num= document.querySelector("input");
var win= document.querySelector("#ws");
var resetbtn= document.querySelector("#reset");


var color=false;
var changep1=0;
var changep2=0;
var gameover=false;
var winningScore=0;

p1btn.addEventListener("click",function(){
	if(!gameover ){
		if(winningScore==0){
		alert("Set your winning score then proceed!!");
		reset();
		}
		changep1++;
		if(changep1===winningScore)
		{	gameover=true;
			p1display.classList.add("winner");
		 }
		p1display.textContent=changep1;
	}
});
p2btn.addEventListener("click",function(){
	if(!gameover){
		if(winningScore==0){
		alert("Set your maximun winning score then proceed!!");
		reset();
		}
		changep2++;
		if(changep2===winningScore)
		{	gameover=true;    
			p2display.classList.add("winner"); 
		}
		p2display.textContent=changep2;
	}
});


function resetbutton()
{
	changep1=0;
	changep2=0;
	gameover=false;
	p1display.textContent="0";
	p2display.textContent="0";
	p1display.classList.remove("winner"); 
	p2display.classList.remove("winner"); 
}

num.addEventListener("change", function(){
	var inputNum=num.value;
	winningScore=Number(inputNum);
	win.textContent=winningScore;
	resetbutton();
});


resetbtn.addEventListener("click",function(){
	resetbutton();
});


	