

var timer = 100;




var myLoopFunction = function(i){

	var rotation = Math.round((i/10) * 360);	
	var positionLeft = Math.floor(Math.random()*document.body.clientWidth);
	var positionRight = Math.floor(Math.random()*document.body.clientHeight);
	var changingColor = (217 - (i))
	var changingColorTwo = (144 - (i/2))

	document.getElementById("root_6_settimeout").insertAdjacentHTML("beforeend", `
		<div class="square" style="transform:rotate(${rotation}deg); position:relative; left:${positionLeft}px; top:${positionRight}px;border-color: rgb(255,${changingColor},${changingColorTwo});"></div>
	 `);
}

for (var i = 0; i < 100; i++) {
	setTimeout(myLoopFunction, i*100, i)

}

	var myButton = document.getElementsByClassName("square")

	myButton[0].addEventListener("mouseover", function(){
	document.getElementsByClassName("square").remove();
})





