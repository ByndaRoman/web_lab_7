$(function(){
//Завдання 2
$('.slide-text span:last').css('fontSize', function(index, value){
	var newSize=value.replace('px', '')*4;
	return newSize;
});
});