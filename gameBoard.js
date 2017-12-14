// This is the logic for the gameBoard
// console.log("this is initializing game logic.  main.js should be loaded prior to this.");
$(document).ready(function(){
	let redWin = 8;
	let blueWin = 8;
	let guesses = 0;
	let canFlip = false;
	let keepGuessing = false;
	// let randomSeed = Math.floor(Math.random()*100000000);
	let randomSeed = Number(localStorage.getItem("seed"));
	// console.log('random seed' + randomSeed);
	let $boardArray = [];

	function initializeGame(){
		// cards left until win
		redWin = 8;
		blueWin = 8;
		guesses = 0;
		canFlip = false;
		keepGuessing = false;
		// let randomSeed = Math.floor(Math.random()*100000000);
		randomSeed = Number(localStorage.getItem("seed"));
		// console.log('random seed' + randomSeed);
		$boardArray = [];
		makeGameBoard(makeRandArray(randomSeed));
	}


// gets rid of alerts
function popUpMsg(myString, myTime){
	// console.log('popUp initialized' + myString);
	$('#popUp').text(myString).show();
	$('#popUp').one('click',function(){
		$('#popUp').hide();
	});
	setTimeout(function(){
		$('#popUp').hide().off();
	}, myTime||1000);
}

// displays code on click
$('#code').click(function(){
	console.log('in click fx!');
	popUpMsg(("Code: " + randomSeed + ".   Word: " + wordArray[makeRandArray(randomSeed)[0]]), 10000);
});

// returns string-value of whos turn it is
	function whosTurn(){
		// console.log('whosTurn Triggered');
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
		// console.log('rightTeamFlipped Triggered');
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
		// console.log('changeTurn Triggered');
		$('#code').toggleClass('redTurn blueTurn');
		whosUp = whosTurn();
		$('#code').text(whosUp + "'s Turn");
		popUpMsg((whosUp + ", it is your turn now!"), 2000);
		submitSecrets();

	}

// creates the endTurnButton and functionality.  will only be called after submit.
	function endTurnButton(){
		// console.log('endTurnButton Triggered');
		$('#submitSecrets').addClass('endTurn').text("STOP").off('click');
		$('#submitSecrets').one('click', function(){
/*			console.log('endTurn Button Click Triggered');*/
			guesses = 0;
			canFlip = false;
			keepGuessing = false;
			changeTurn();
		});
	}
// ends the game.  puts a dialog box over the game with a button to restart the game (so people can take a last look at the game board)
	function gameOver(whoWon){
		score = Number($('#'+whoWon+'Score').text());
		// console.log(score);
		score++;
		Number($('#'+whoWon+'Score').text(score));
		$('#gameOver').css('display','block').show();
		$('#gameOver').one('click', function(){
			randomSeed = Math.floor(Math.random()*10000000000);
			localStorage.setItem("seed", randomSeed);
			randArray = makeRandArray(randomSeed);
			newWord = wordArray[randArray[0]];
			$('#gameOver').text("Teams:  Choose new Code Givers.  Your new code is: " + randomSeed + ".  The verification word should be: " + newWord);
			$('#gameOver').one('click', function(){
				$('#gameOver').empty().off().css('display','none').hide();
				$('#gameBoard').empty();
				$('#blueWords').empty();
				$('#redWords').empty();
				initializeGame();
			});
		});

	}

// flips the card if valid, checks for win, checks for correct card picked
	function flip($thisCard){
		// console.log('flip triggered');
		if(canFlip){
			$($thisCard).addClass('flipped');
			$($thisCard).empty();
			if($('.R.flipped').length===redWin) {
				popUpMsg("Red Team Wins!", 2000);
				gameOver('redTeam');
				// console.log('still in it');
				return;
			} else if($('.B.flipped').length===blueWin) {
				popUpMsg("Blue Team Wins!", 2000);
				gameOver('blueTeam');
				// console.log('still in it');
				return;
			}else if($('.X').hasClass('flipped')) {
				let whosUp = whosTurn();
				setTimeout(function(){popUpMsg((whosUp + " flipped the Black Card!  They Lose!"),3000);},400);
				// console.log(whosUp === 'Red Team]' ? 'blueTeam' : 'redTeam');
				gameOver(whosTurn() === 'Red Team' ? 'blueTeam' : 'redTeam');
			}
			if(guesses !== 0 && rightTeamFlipped($thisCard)){
				// console.log('guesses less than and guessed correctly');
				--guesses;
				if(!guesses){
					// console.log('no more guesses');
					changeTurn();
				}
			} else if (!rightTeamFlipped($thisCard)){
				popUpMsg("You flipped an incorrect card!", 1000);
				setTimeout(function(){changeTurn();}, 1000);
			}
		} else{
			popUpMsg("Enter a Clue!", 1000);
		}

	}

// game requires a word and number to be given to the rest of the team by the code giver.  If number = 0, unlimited guesses until team decides to stop.  
// Team is not required to use all guesses
function submitSecrets(){
	$('#submitSecrets').removeClass('endTurn').text("Submit").off('click');
	$('#submitSecrets').one('click',function(){
			let secretWord = $('#secretWord').val().toUpperCase();
			// console.log(secretWord + " secret Word");
			let secretNumber = Number($('#secretNumber').val());
			secretNumber = Math.abs(secretNumber);
			// console.log(secretNumber + " secretNumber");
			newLi = $('<li>').text(secretWord + ", " + secretNumber);
			if(whosTurn() === 'Red Team'){
				$('#redWords').prepend(newLi);
			}else {
				$('#blueWords').prepend(newLi);
			}
		if(secretWord && secretNumber){
			// console.log("word and number detected");
			guesses = secretNumber + 1;
			canFlip = true;
			keepGuessing = true;
			$('#code').text(secretWord + ": " + secretNumber);
			endTurnButton();
		} else if(secretWord){
			// console.log("Only word detected");
			guesses = -1;
			canFlip = true;
			keepGuessing = true;
			$('#code').text(secretWord + ": " + "0");
			endTurnButton();
		} else {
			// console.log("nothing detected");
			popUpMsg("You need to enter a word and number!", 1500);
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
				// console.log('clicked ' + $($boardArray[i]).text() + ' B?: ' + $($boardArray[i]).hasClass('B') +' R?: ' + $($boardArray[i]).hasClass('R'));
				if(!$(this).hasClass('flipped')){
					flip($boardArray[i]);
				} else {
					popUpMsg("This card has already been flipped.  Please select another one", 2000);

				}
			});
		}
		submitSecrets();
	}
	initializeGame();
});