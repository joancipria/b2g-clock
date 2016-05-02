// FUNCTIONS TO INTERACT AMONG THE LAYERS (EXECUTED FROM BAR BUTTONS)
function viewStopWatch() {
	document.getElementById('all-stop-watch').style.display="block";
	document.getElementById('clock').style.display="none";
	document.getElementById('all-timer').style.display="none";
	document.getElementById('all-alarms').style.display="none";
	document.getElementById('b4').className="selected-button";
	document.getElementById('b1').className="";
	document.getElementById('b2').className="";
	document.getElementById('b3').className="";
	show();
}
function viewWatch() {
	document.getElementById('clock').style.display="block";
	document.getElementById('all-stop-watch').style.display="none";
	document.getElementById('all-timer').style.display="none";
	document.getElementById('all-alarms').style.display="none";
	document.getElementById('b2').className="selected-button";
	document.getElementById('b1').className="";
	document.getElementById('b3').className="";
	document.getElementById('b4').className="";
}
function viewTimer() {
	document.getElementById('all-timer').style.display="block";
	document.getElementById('clock').style.display="none";
	document.getElementById('all-stop-watch').style.display="none";
	document.getElementById('all-alarms').style.display="none";
	document.getElementById('b3').className="selected-button";
	document.getElementById('b1').className="";
	document.getElementById('b2').className="";
	document.getElementById('b4').className="";
	startTime();
}
function viewAlarms() {
	document.getElementById('all-alarms').style.display="block";
	document.getElementById('clock').style.display="none";
	document.getElementById('all-stop-watch').style.display="none";
	document.getElementById('all-timer').style.display="none";
	document.getElementById('b1').className="selected-button";
	document.getElementById('b3').className="";
	document.getElementById('b2').className="";
	document.getElementById('b4').className="";
	startTime();
}