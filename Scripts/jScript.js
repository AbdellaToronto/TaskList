$(document).ready(function(){

var list = $('#myList');
var listRows =$('#myList li');

//check for keypresses//


list.sortable();
list.on('mouseover','li', hovered);
list.on('mouseout','li', hoveredOff);
list.on('click','li',clicked);


$('#addNew').click(addNewRow);

enterTask(checkIfTextSelected);




//functions//
function enterTask(checks) {

var enterPressed = $(document).keypress(function(e) {
if(e.which == 13) {
console.log(checks);

}
});



}

function checkIfTextSelected(){ //checks if cursor is in text area
if($('.newTaskText').is(":focus")){
return $('.newTaskText');
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
$('#myList li:last').after('<li><input type="text" class="newTaskText" name"newTaskText"></input></li>');
$('.newTaskText').focus();
}

});