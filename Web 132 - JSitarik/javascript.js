// JavaScript Document

function a_message() 
{ 
var theAnswer = prompt("Please enter your Username", "");

 if (theAnswer){
     alert("Enjoy!");
  }
	
 else{
    alert("Error! Please enter username!");
  }
}


function analyzeColor3(myColor) {
	if (myColor == "Yes") {
		alert("Good job, M8.");
		}
	else if (myColor == "No") {
		alert("What are you waiting for?");
	}
	else if (myColor == "Maybe") {
		alert("Do you even lift?");
	}
}


//jquery

$(document).ready(function(){
    $("img").hover(function(){
        $(this).css("background-color", "white");
        }, function(){
        $(this).css("background-color", "black");
    });
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


