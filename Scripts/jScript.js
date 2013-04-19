$(document).ready(function(){

var list = $('#myList');
var listRows =$('#myList li');

list.sortable();

list.on('mouseover','li', hovered);
list.on('mouseout','li', hoveredOff);
list.on('click','li',clicked);


$('#addNew').click(addNewRow);







//functions

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

$('#myList li:last').after('<li>Blank</li>');
}

});