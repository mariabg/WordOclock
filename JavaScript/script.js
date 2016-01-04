//EASTER EGG, Konami Code
var easter_egg = new Konami();
//Once the Konami Code is entered, we swap the StyleSheet, stop the Default Clock and start running the Konami Clock instead (code at the bottom)
easter_egg.code = function() {
	document.getElementById("pageStyle").setAttribute("href", "Style/KonamiStyle.css");
	function stopDefaultClock() {
		clearInterval(clock);
	}
	stopDefaultClock()
	var konamiClock = setInterval(function(){progKonami()},2000); //Runs every 2segs due to the animations. Will be fixed in folling versions.
}
easter_egg.load();

//DefaultPrograme
var clock = setInterval(function(){prog()},1000);
var prog = function() { 
	$(".light").removeClass("light").addClass("dark"); //sets all the characters light characters to dark 
    var date = new Date(); //Updates the time
	var time = {
		hour: date.getHours(),
		minute: date.getMinutes()
	};
	//console.log(time);
	//Splits up time by minutes
	switch (time.minute){
		case 58: case 59:
			var showMin = "oclock";
			var showHour = parseInt(time.hour) + 1;
			break;
		case 0: case 1: case 2:
			var showMin = "oclock";
			var showHour = time.hour;
			break;
		case 3: case 4: case 5: case 6: case 7:
			var showMin = "five1";
			var befORaft = "past";
			var showHour = time.hour;
			break;
		case 8: case 9: case 10: case 11: case 12:
			var showMin = "ten1";
			var befORaft = "past";
			var showHour = time.hour;
			break;
		case 13: case 14: case 15: case 16: case 17:
			var showMin = "quarter";
			var befORaft = "past";
			var showHour = time.hour;
			break;
		case 18: case 19: case 20: case 21: case 22:
			var showMin = "twenty";
			var befORaft = "past";
			var showHour = time.hour;
			break;
		case 23: case 24: case 25: case 26: case 27:
			var showMin = "twentyfive";
			var befORaft = "past";
			var showHour = time.hour;
			break;
		case 28: case 29: case 30: case 31: case 32:
			var showMin = "half";
			var befORaft = "past";
			var showHour = time.hour;
			break;
		case 33: case 34: case 35: case 36: case 37:
			var showMin = "twentyfive";
			var befORaft = "to";
			var showHour = parseInt(time.hour) + 1;
			break;
		case 38: case 39: case 40: case 41: case 42:
			var showMin = "twenty";
			var befORaft = "to";
			var showHour = parseInt(time.hour) + 1;
			break;
		case 43: case 44: case 45: case 46: case 47:
			var showMin = "quarter";
			var befORaft = "to";
			var showHour = parseInt(time.hour) + 1;
			break;
		case 48: case 49: case 50: case 51:case 52:
			var showMin = "ten1";
			var befORaft = "to";
			var showHour = parseInt(time.hour) + 1;
			break;
		case 53: case 54: case 55: case 56: case 57:
			var showMin = "five1";
			var befORaft = "to";
			var showHour = parseInt(time.hour) + 1;
			break;
	}
	if (showHour == 24 ) {
		showHour = 0;
	}
	//console.log (showHour);
	//Splits up time by hours
	switch (showHour){
		case 0: case 12:
			var showHour = "twelve";
			break;
		case 23: case 11:
			var showHour =  "eleven";
			break;
		case 22: case 10:
			var showHour = "ten2";
			break;
		case 21: case 9:
			var showHour = "nine";
			break;
		case 20: case 8:
			var showHour = "eight";
			break;
		case 19: case 7:
			var showHour = "seven";
			break;
		case 18: case 6:
			var showHour = "six";
			break;
		case 17: case 5:
			var showHour = "five2";
			break;
		case 16: case 4:
			var showHour = "four";
			break;
		case 15: case 3:
			var showHour = "three";
			break;
		case 14: case 2:
			var showHour = "two";
			break;
		case 13: case 1:
			var showHour = "one";
			break;
	}
	//"Turns on" the characters
	$("#it").removeClass("dark").addClass("light");
	$("#is").removeClass("dark").addClass("light");
	$("#" + befORaft).removeClass("dark").addClass("light");
	$("#" + showHour).removeClass("dark").addClass("light");
	if (showMin == "twentyfive"){
		$("#twenty").removeClass("dark").addClass("light");
		$("#five1").removeClass("dark").addClass("light");
	}
	else {
		$(document).ready(function() {
			$("#" + showMin).removeClass("dark").addClass("light");
		});
	}
  }

//Code called after de konami code (see top)
progKonami = function(){
	prog();
		$(".light").css('color', '#ac5639')
		$(".light").css('text-shadow', '4px 5px 3px black');
		$("#konami, #code1, #code2, #code3, #code4").css('color', '#d278cb');
		$("#konami, #code1, #code2, #code3, #code4").css('text-shadow', 'none');
	setTimeout(function(){
		$(".light").css('color', '#287951');
		$(".light").css('text-shadow', 'none');
		$("#konami, #code1, #code2, #code3, #code4").css('color', '#ac5639 ');
		$("#konami, #code1, #code2, #code3, #code4").css('text-shadow', '4px 5px 3px black');
	},500);
	setTimeout(function(){
		$(".light").css('color', '#c6cc66');
		$(".light").css('text-shadow', '4px 5px 3px black');
		$("#konami, #code1, #code2, #code3, #code4").css('color', '#287951');
		$("#konami, #code1, #code2, #code3, #code4").css('text-shadow', 'none');
	},1000);
	setTimeout(function(){
		$(".light").css('color', '#d278cb');
		$(".light").css('text-shadow', 'none');
		$("#konami, #code1, #code2, #code3, #code4").css('color', '#c6cc66');
		$("#konami, #code1, #code2, #code3, #code4").css('text-shadow', '4px 5px 3px black');
	},1500);
};
