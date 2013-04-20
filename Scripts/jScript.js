$(document).ready(function() {
	//variables
	var focusValue = 'default';
	var list = $('#myList');
	var listRows = $('#myList li');
	


	//click and hover events, as well as jqUI sortable functionality
	list.sortable();
	list.on('mouseover', 'li', hovered);
	list.on('mouseout', 'li', hoveredOff);
	list.on('click', 'li', clicked);


	$('#addNew').click(addNewRow); //add new rows if add button is clicked

	enterTask();


	


	//functions//
	function enterTask(checks) {
		var enterPressed = $(document).keypress(function(e) {
			if (e.which == 13) {
				 checkIfTextSelected()
				console.log(focusValue); //test
				parseToList();

			}
		});
	}

	function checkIfTextSelected() { //checks if cursor is in text area
		if ($('.newTaskText').is(":focus")) {
			focusValue =  $('.newTaskText:focus').val();
		}
	}

	function parseToList(){
		 $('.newTaskText:focus').after(focusValue);
		 $('.newTaskText:focus').remove();

	}

	function hovered() {
		$(this).filter(':not(:animated)').toggleClass('hoverStyle', 300);
	}

	function hoveredOff() {
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