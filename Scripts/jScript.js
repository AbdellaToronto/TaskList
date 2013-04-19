$(document).ready(function(){

var list = $('#myList');
var listRows =$('#myList li');

//checks for keypresses
var enterPressed = $(document).keypress(function(e) {
if(e.which == 13) {
console.log('Yay');
}
});



list.sortable();
list.on('mouseover','li', hovered);
list.on('mouseout','li', hoveredOff);
list.on('click','li',clicked);


$('#addNew').click(addNewRow);

//$('#newTaskText').on('keypress', 'input', enterTask(event));



//functions
function enterTask(event) {
console.log('something');
if(event.which == 13) {
alert("awesome, that was enter");
}

}

function hovered(){
$(this).filter(':not(:animated)').toggleClass('hoverStyle', 300);
}

function hoveredOff(){
$(this).removeClass('hoverStyle', 300);
}

function clicked() {
$(this).toggleClass('clickStyle', 100);
}

function addNewRow() {

$('#myList li:last').after('<li><input type="text" id="newTaskText" name"newTaskText"></input></li>');
}

});