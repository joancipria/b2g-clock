function StartCountDown() {
document.getElementById('count-down').style.display="block";
document.getElementById('input-layer').style.display="none";


var CountDown = (function ($) {
	

    // Length ms
    var TimeOut = 100000;
    // Interval ms
    var TimeGap = 1000;
    
    var CurrentTime = ( new Date() ).getTime();
    var EndTime = ( new Date() ).getTime() + TimeOut;
    
 
    var GuiTimer = $('#countdown');    
    var GuiPause = $('#pause');
    var GuiResume = $('#resume').hide();
    
    var wantReset = false;
    var Running = true;
    
    var UpdateTimer = function() {
        // Run till timeout
        if( CurrentTime + TimeGap < EndTime ) {
            setTimeout( UpdateTimer, TimeGap );
        }
        // Countdown if running
        if( Running ) {
            CurrentTime += TimeGap;
            if( CurrentTime >= EndTime && wantReset==true) {
    					 GuiPause.hide();
            }
            
			if( CurrentTime >= EndTime && wantReset==false) {
                GuiTimer.css('color','red');
                var audio = new Audio('sounds/ac_awake.opus.ogx');
					 audio.play();
					 GuiPause.hide();
            }            
            
        }
        // Update Gui
        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Hours = Time.getHours();
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();

        
if (document.getElementById('input-time-3').value=="" || document.getElementById('input-time-3').value=="1" && document.getElementById('input-time-2').value=="00" && document.getElementById('input-time').value=="00" || document.getElementById('input-time-3').value=="01" && document.getElementById('input-time-2').value=="00" && document.getElementById('input-time').value=="00" ) {
        
        GuiTimer.html( 
         (Minutes < 10 ? '0' : '') + Minutes 
            + ':'
            + (Seconds < 10 ? '0' : '') + Seconds)}
            
            
           else {
        
        GuiTimer.html( 
            (Hours < 10 ? '0' : '') + Hours 
            + ':' 
            + (Minutes < 10 ? '0' : '') + Minutes 
            + ':'
            + (Seconds < 10 ? '0' : '') + Seconds);
           }
            
    };
    
    var Pause = function() {
        Running = false;
        GuiPause.hide();
        GuiResume.show();
    };
      
   
    var Resume = function() {
        Running = true;
        GuiPause.show();
        GuiResume.hide();
    };
    
        var Reset = function() {
EndTime=0;
document.getElementById('count-down').style.display="none";
document.getElementById('input-layer').style.display="block";
wantReset=true;
    };
    
    var Start = function( Timeout ) {
        TimeOut = Timeout;
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        UpdateTimer();
        wantReset=false;

        
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start,
        Reset: Reset
    };


})(jQuery);

jQuery('#pause').on('click',CountDown.Pause);
jQuery('#resume').on('click',CountDown.Resume);
jQuery('#reset').on('click',CountDown.Reset);

var Input3 = (((document.getElementById('input-time-3').value)*60)*60)*1000;
var Input2 = ((document.getElementById('input-time-2').value)*60)*1000;
var Input1 = (document.getElementById('input-time').value)*1000;

if (document.getElementById('input-time-3').value=="" || document.getElementById('input-time-3').value=="1" && document.getElementById('input-time-2').value=="00" && document.getElementById('input-time').value=="00" || document.getElementById('input-time-3').value=="01" && document.getElementById('input-time-2').value=="00" && document.getElementById('input-time').value=="00" ) {
var finalTime = parseInt(Input1)+parseInt(Input2)+parseInt(Input3);
}else {
var finalTime = (parseInt(Input1)+parseInt(Input2)+parseInt(Input3)-3600000);
}
CountDown.Start(finalTime);
}