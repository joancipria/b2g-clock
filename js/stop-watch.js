var	clsStopwatch = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};

		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		// Reset
		this.reset = function() {
				lapTime = startAt = 0;
			};

		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}

function show() {
	$time = document.getElementById('time');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
	document.getElementById('start-button').value="Pause";
	document.getElementById('start-button').className="redButton";
	document.getElementById('start-button').setAttribute('onclick','stop();')
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
	document.getElementById('start-button').value="Resume";
	document.getElementById('start-button').className="greenButton";
	document.getElementById('start-button').setAttribute('onclick','start();')
}

function reset() {
	stop();
	x.reset();
	update();
	document.getElementById('start-button').value="Start";
	document.getElementById('start-button').className="greenButton";
	document.getElementById('start-button').setAttribute('onclick','start();')
	document.getElementById('laps').innerHTML = "";
	contador = 0;
}

var contador = 0;
function lap() {

contador++;
var now = document.getElementById('crono').innerHTML;
var element = document.getElementById('laps');
var campo = document.getElementById('laps').innerHTML;
var campo2 = element.innerHTML = "<div id='lap"+contador+"'>"+"Lap "+contador+"    "+now+"</div><hr class='small-h'>";
document.getElementById('laps').innerHTML = campo.concat(campo2);
}
