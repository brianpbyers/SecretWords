// This is the logic for the gameBoard
console.log("this is initializing game logic.  main.js should be loaded prior to this.");
$(document).ready(function(){
	// cards left until win
	let redWin = 8;
	let blueWin = 8;
	let guesses = 0;
	let canFlip = false;
	let keepGuessing = false;
	// let randomSeed = Math.floor(Math.random()*100000000);
	let randomSeed = Number(localStorage.getItem("seed"));
	// console.log('random seed' + randomSeed);
	let $boardArray = [];


// returns string-value of whos turn it is
	function whosTurn(){
		console.log('whosTurn Triggered');
		if($('#code').hasClass('redTurn')){
			return 'Red Team';
		}else if($('#code').hasClass('blueTurn')){
			return 'Blue Team';
		}else {
			return 'Nobody';
		}
	}

// determines if the correct team flipped the correct card. returns boolean
	function rightTeamFlipped($thisCard){
		console.log('rightTeamFlipped Triggered');
		if(($('#code').hasClass('redTurn') && $($thisCard).hasClass('R'))||($('#code').hasClass('blueTurn') && $($thisCard).hasClass('B'))){
			return true;
		}else {
			return false;
		}
	}

// changes whos turn it is.  changes the endTurn button back into a submit button
	function changeTurn(){
		canFlip = false;
		keepGuessing = false;
		console.log('changeTurn Triggered');
		$('#code').toggleClass('redTurn blueTurn');
		whosUp = whosTurn();
		$('#code').text(whosUp + 's Turn');
		alert(whosUp + ", it is your turn now!");
		submitSecrets();

	}

// creates the endTurnButton and functionality.  will only be called after submit.
	function endTurnButton(){
		console.log('endTurnButton Triggered');
		$('#submitSecrets').addClass('endTurn').text("STOP").off('click');;
		$('#submitSecrets').one('click', function(){
			console.log('endTurn Button Click Triggered');
			guesses = 0;
			canFlip = false;
			keepGuessing = false;
			changeTurn();
		});
	}

// flips the card if valid, checks for win, checks for correct card picked
	function flip($thisCard){
		console.log('flip triggered');
		if(canFlip){
			$($thisCard).addClass('flipped');
			$($thisCard).empty();
			if($('.R.flipped').length===redWin) {
				alert("Red Team Wins!");
				gameOver('redTeam');
				console.log('still in it');
				return;
			} else if($('.B.flipped').length===blueWin) {
				alert("Blue Team Wins!");
				gameOver('blueTeam');
				console.log('still in it');
				return;
			}else if($('.X').hasClass('flipped')) {
				let whosUp = whosTurn();
				setTimeout(function(){alert(whosUp + " flipped the Black Card!  They Lose!");},800);
				console.log(whosTurn() === 'Red Team' ? 'blueTeam' : 'redTeam');
				gameOver(whosTurn() === 'Red Team' ? 'blueTeam' : 'redTeam');
			}
			if(guesses !== 0 && rightTeamFlipped($thisCard)){
				console.log('guesses less than and guessed correctly');
				--guesses;
				if(!guesses){
					console.log('no more guesses');
					changeTurn();
				}
			} else if (!rightTeamFlipped($thisCard)){
				alert("You flipped an incorrect card!");
				setTimeout(function(){changeTurn();}, 800);
			}
		} else{
			alert("You've got to enter a Clue!");
		}

	}

// game requires a word and number to be given to the rest of the team by the code giver.  If number = 0, unlimited guesses until team decides to stop.  
// Team is not required to use all guesses
function submitSecrets(){
	$('#submitSecrets').removeClass('endTurn').text("Submit").off('click');
	$('#submitSecrets').one('click',function(){
			let secretWord = $('#secretWord').val().toUpperCase();
			console.log(secretWord + " secret Word");
			let secretNumber = Number($('#secretNumber').val());
			console.log(secretNumber + " secretNumber");
		if(secretWord && secretNumber){
			console.log("word and number detected");
			guesses = secretNumber + 1;
			canFlip = true;
			keepGuessing = true;
			$('#code').text(secretWord + ": " + secretNumber);
			endTurnButton();
		} else if(secretWord){
			console.log("Only word detected");
			guesses = -1;
			canFlip = true;
			keepGuessing = true;
			$('#code').text(secretWord + ": " + "0");
			endTurnButton();
		} else {
			console.log("nothing detected");
			alert("You need to enter a words and numbers!");
			submitSecrets();
		}
	});
}

// creates the game board and initializes the first game.
	function makeGameBoard(randArray){
		// console.log('making Game Board');
		if(randomSeed%2 ===1){
			// console.log('red goes first');
			colorCodes.push('R');
			redWin++;
			$('#code').addClass('redTurn').text("Red will go first");
		} else{
			// console.log('blue goes first');
			colorCodes.push('B');
			blueWin++;
			$('#code').addClass('blueTurn').text("Blue will go first");

		}
		let myCodeKey = getSecretKey(randArray, colorCodes);
		for(let i = 0; i<25; ++i){
			$boardArray[i] = $('<div/>');
			$($boardArray[i]).html('<span>' + wordArray[randArray[i]] + '</span>').addClass(myCodeKey[i] + ' card');
			$('#gameBoard').append($($boardArray[i]));
			$($boardArray[i]).click(function(){
				console.log('clicked ' + $($boardArray[i]).text() + ' B?: ' + $($boardArray[i]).hasClass('B') +' R?: ' + $($boardArray[i]).hasClass('R'));
				if(!$(this).hasClass('flipped')){
					flip($boardArray[i]);
				} else {
					alert("This card has already been flipped.  Please select another one");

				}
			});
		}
		submitSecrets();
	}
	makeGameBoard(makeRandArray(randomSeed));
});