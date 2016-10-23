// VIRTUAL KEYBOARD FUNCTIONS FOR THE TIMER/COUNT DOWN
function getNum(element) {
num = element.value;
var campo = document.getElementById('input-time').value;
var resultado = campo.concat(num);
document.getElementById('input-time').value=resultado;
check();
check2();
document.getElementById('numberZero').onclick = function() { getNum(this); };
}

function clearX() {
     $('.input-form input').each(function () {
   $(this).val("");
    });
    document.getElementById('numberZero').onclick = function() {};
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
