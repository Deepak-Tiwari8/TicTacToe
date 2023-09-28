
flag = 1;
function myfunc1() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc2() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc3() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc4() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc5() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc6() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc7() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc8() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc9() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}

function win() {
	var a = document.getElementById("b1").value
	var b = document.getElementById("b2").value
	var c = document.getElementById("b3").value

	var d = document.getElementById("b4").value
	var e = document.getElementById("b5").value
	var f = document.getElementById("b6").value

	var g = document.getElementById("b7").value
	var h = document.getElementById("b8").value
	var i = document.getElementById("b9").value

	if (a == b && b == c && a != "" && b != "" && c != "") {
		document.getElementById('win').innerHTML = "Congrats " + a;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b4').disabled = true
		document.getElementById('b5').disabled = true
		document.getElementById('b6').disabled = true
		document.getElementById('b7').disabled = true
		document.getElementById('b8').disabled = true
		document.getElementById('b9').disabled = true
	}

	else if (d == e && e == f && d != "" && e != "" && f != "") {
		document.getElementById('win').innerHTML = "Congrats " + e;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b1').disabled = true
		document.getElementById('b2').disabled = true
		document.getElementById('b3').disabled = true
		document.getElementById('b7').disabled = true
		document.getElementById('b8').disabled = true
		document.getElementById('b9').disabled = true
	}

	else if (g == h && h == i && g != "" && h != "" && i != "") {
		document.getElementById('win').innerHTML = "Congrats " + i;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b1').disabled = true
		document.getElementById('b2').disabled = true
		document.getElementById('b3').disabled = true
		document.getElementById('b4').disabled = true
		document.getElementById('b5').disabled = true
		document.getElementById('b6').disabled = true
	}

	else if (a == d && d == g && a != "" && d != "" && g != "") {
		document.getElementById('win').innerHTML = "Congrats " + g;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b2').disabled = true
		document.getElementById('b5').disabled = true
		document.getElementById('b7').disabled = true
		document.getElementById('b3').disabled = true
		document.getElementById('b6').disabled = true
		document.getElementById('b9').disabled = true
	}

	else if (b == e && e == h && b != "" && e != "" && h != "") {
		document.getElementById('win').innerHTML = "Congrats " + h;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b1').disabled = true
		document.getElementById('b4').disabled = true
		document.getElementById('b7').disabled = true
		document.getElementById('b3').disabled = true
		document.getElementById('b6').disabled = true
		document.getElementById('b9').disabled = true
	}

	else if (c == f && f == i && c != "" && f != "" && i != "") {
		document.getElementById('win').innerHTML = "Congrats " + f;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b1').disabled = true
		document.getElementById('b4').disabled = true
		document.getElementById('b7').disabled = true
		document.getElementById('b2').disabled = true
		document.getElementById('b5').disabled = true
		document.getElementById('b7').disabled = true
	}

	else if (a == e && e == i && a != "" && e != "" && i != "") {
		document.getElementById('win').innerHTML = "Congrats " + i;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b2').disabled = true
		document.getElementById('b3').disabled = true
		document.getElementById('b4').disabled = true
		document.getElementById('b6').disabled = true
		document.getElementById('b7').disabled = true
		document.getElementById('b8').disabled = true
	}

	else if (c == e && e == g && c != "" && e != "" && c != "") {
		document.getElementById('win').innerHTML = "Congrats " + c;
		document.getElementById("win").style.fontSize = "35px";
		document.getElementById("win").style.color="red";
		document.getElementById('b1').disabled = true
		document.getElementById('b2').disabled = true
		document.getElementById('b4').disabled = true
		document.getElementById('b6').disabled = true
		document.getElementById('b8').disabled = true
		document.getElementById('b9').disabled = true
	}

	else if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" && i != "") {
		document.getElementById("win").innerHTML = "Tie"
		document.getElementById("win").style.fontSize = "35px";
	}
}

function reset() {
	location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = ''; 
}


