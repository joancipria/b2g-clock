// VIRTUAL KEYBOARD FUNCTIONS FOR THE TIMER/COUNT DOWN

function get1() {
var campo = document.getElementById('input-time').value;var campo2 = 1;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get2() {
var campo = document.getElementById('input-time').value;var campo2 = 2;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get3() {
var campo = document.getElementById('input-time').value;var campo2 = 3;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get4() {
var campo = document.getElementById('input-time').value;var campo2 = 4;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get5() {
var campo = document.getElementById('input-time').value;var campo2 = 5;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get6() {
var campo = document.getElementById('input-time').value;var campo2 = 6;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get7() {
var campo = document.getElementById('input-time').value;var campo2 = 7;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get8() {
var campo = document.getElementById('input-time').value;var campo2 = 8;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get9() {
var campo = document.getElementById('input-time').value;var campo2 = 9;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function get0() {
var campo = document.getElementById('input-time').value;var campo2 = 0;var resultado = campo.concat(campo2);document.getElementById('input-time').value=resultado;	
check();check2();
}
function clearX() {   
     $('.input-form input').each(function () {
   $(this).val("");
         x=1;
    });  
}


function check () {
var str = document.getElementById('input-time').value;
var n = str.length;


	if (n >= 3) {
		var res = str.substring(1);
		document.getElementById('input-time').value=res;
		
		var input2Now = document.getElementById('input-time-2').value;
		var res2 = str.substring(0, 1);
		
		var finalInput2 = input2Now.concat(res2);
		document.getElementById('input-time-2').value = finalInput2;
		

};

}

function check2() {
var str2 = document.getElementById('input-time-2').value;
var n2 = str2.length;
 if (n2 >= 3) {
 
		var res2 = str2.substring(1);
		document.getElementById('input-time-2').value=res2;
		
		var input3Now = document.getElementById('input-time-3').value;
		var res3 = str2.substring(0, 1);
		
		var finalInput3 = input3Now.concat(res3);
		document.getElementById('input-time-3').value = finalInput3;
		 
 		
 };
 

}