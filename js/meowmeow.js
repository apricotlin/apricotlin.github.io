// mouse
$(document).bind("mousedown", function(){
	$('#space2').text('');
	checkWhere();
	$("#space2").append('down');
});

$(document).bind("mouseup", function(){
	checkWhere();
	$("#space2").append('up');
});

// touch
$(document).bind("touchstart", function(){
	$('#space2').text('');
	checkTouchWhere();
	$("#space2").append('touch down');
});

$(document).bind("touchend", function(){
	$("#space2").append('</br>touchmove</br>');
	checkTouchWhere();
	$("#space2").append('touch up');
});

$(document).bind("touchmove", function(){
	$("#space2").append('</br>x: ' + event.changedTouches[0].pageX + ', y: ' + event.changedTouches[0].pageY);
});

function checkWhere() {
	var x = event.pageX,
		y = event.pageY;

		console.log('x: ' + x + ', y: ' + y);

		$("#space2").append('<div class="text">x: ' + x + ', y: ' + y + '</div>');
}

function checkTouchWhere() {
	var x = event.changedTouches[0].pageX,
		y = event.changedTouches[0].pageY;

		console.log('x: ' + x + ', y: ' + y);

		$("#space2").append('<div class="text">x: ' + x + ', y: ' + y + '</div>');
}

// 第一個if: 判斷y-end是否比y-start大來檢查往前或往後滑
// 第二個if: 判斷x-end跟x-start