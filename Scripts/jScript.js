$(document).ready(function() {
	//---------------------Variables----------------------------//
	var focusValue = null;
	var list = $('#myList');
	var listRows = $('#myList li');


	//click and hover events, as well as jqUI sortable functionality
	list.sortable();
	list.on('mouseover', 'li', hovered);
	list.on('mouseout', 'li', hoveredOff);
	list.on('click', 'li', clicked);


	$('#addNew').click(addNewRow); //add new rows if add button is clicked

	enterTask(); //enters 

	list.on('dblclick','li', editTask); //edit list item on doubleclick

	$(document).keyup(function(e) { //messy delete, refactor later
		if (e.which == 8 || e.which == 46) {
			$('.clickStyle').remove();
		}

	});


	//---------------------------Functions----------------------//


	function editTask() { //edits task on double click
		focusValue = $(this).text();
		//console.log(focusValue);
		$(this).html('<input type="text" class="newTaskText" name"newTaskText"></input>');
		$(this).find('.newTaskText').focus();
	}

	function enterTask() {
		var enterPressed = $(document).keypress(function(e) {
			checkIfTextSelected(); //checks and sets the value of focused field to focusValue

			if (e.which == 13 && focusValue != '') { //if enter is pressed and value isn't blank
				//console.log(focusValue); //test
				parseToList();
				

			} else if (e.which == 13 && focusValue == '') { //else if the value is blank
				$('.newTaskText:focus').parent().remove();
				alert("Don't leave me blank please!");
			}
		});
	}

	function checkIfTextSelected() { //checks if cursor is in text area and sets the value of text to focusValue
		if ($('.newTaskText').is(":focus")) {
			focusValue = $('.newTaskText:focus').val();
		}
	}

	function parseToList() {
		$('.newTaskText:focus').after(focusValue);
		$('.newTaskText:focus').remove();
	}

	function addNewRow() {
		var rowLength = $('#myList').children().length;
		if (rowLength > 0) {
			$('#myList li:last').after('<li><input type="text" class="newTaskText" name"newTaskText"></input></li>');
			$('.newTaskText').focus();
		} else {
			$('#myList').html('<li><input type="text" class="newTaskText" name"newTaskText"></input></li>');
			$('.newTaskText').focus();
		}
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

});