// This is the logic for the gameBoard
// console.log("this is initializing game logic.  main.js should be loaded prior to this.");
$(document).ready(function(){
	let redWin = 8;
	let blueWin = 8;
	let guesses = 0;
	let canFlip = false;
	let keepGuessing = false;
	let randomSeed = Number(localStorage.getItem("seed"));
	let $boardArray = [];

// one-function game initialization and re-initialization
	function initializeGame(){
		// cards left until win
		redWin = 8;
		blueWin = 8;
		guesses = 0;
		canFlip = false;
		keepGuessing = false;
		randomSeed = Number(localStorage.getItem("seed"));
		$boardArray = [];
		console.log(makeRandArray(randomSeed));
		makeGameBoard(makeRandArray(randomSeed));
	}


// gets rid of alerts on gameboard
function popUpMsg(myString, myTime){
	$('#popUp').text(myString).show();
	$('#popUp').one('click',function(){
		$('#popUp').hide();
	});
	setTimeout(function(){
		$('#popUp').hide().off();
	}, myTime||1000);
}

// displays code on click to help codeGivers re-initialize
$('#code').click(function(){
	console.log('in click fx!');
	popUpMsg(("Code: " + randomSeed + ".   Word: " + wordArray[makeRandArray(randomSeed)[0]]), 10000);
});

// returns string-value of whos turn it is
	function whosTurn(){
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
		$('#code').toggleClass('redTurn blueTurn');
		whosUp = whosTurn();
		$('#code').text(whosUp + "'s Turn");
		popUpMsg((whosUp + ", it is your turn now!"), 2000);
		submitSecrets();

	}

// creates the endTurnButton and functionality.  will only be called after submit.
	function endTurnButton(){
		$('#submitSecrets').addClass('endTurn').text("STOP").off('click');
		$('#submitSecrets').one('click', function(){
			guesses = 0;
			canFlip = false;
			keepGuessing = false;
			changeTurn();
		});
	}

// ends the game.  puts a dialog box over the game with a button to restart the game (so people can take a last look at the game board), restarts game
	function gameOver(whoWon){
		score = Number($('#'+whoWon+'Score').text());
		score++;
		console.log(score);
		Number($('#'+whoWon+'Score').text(score));
		$('#gameOver').css('display','block').text("The Game is Over.  Please click anywhere to start a new game.").show();
		$('#gameOver').one('click', function(){
			randomSeed = Math.floor(Math.random()*10000000000);
			localStorage.setItem("seed", randomSeed);
			randArray = makeRandArray(randomSeed);
			console.log(randArray);
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
		if(canFlip){
			--guesses;
			$($thisCard).addClass('flipped');
			$($thisCard).empty();
			if($('.R.flipped').length===redWin) {
				popUpMsg("Red Team Wins!", 2000);
				gameOver('redTeam');
				return;
			} else if($('.B.flipped').length===blueWin) {
				popUpMsg("Blue Team Wins!", 2000);
				gameOver('blueTeam');
				return;
			}else if($('.X').hasClass('flipped')) {
				let whosUp = whosTurn();
				setTimeout(function(){popUpMsg((whosUp + " flipped the Black Card!  They Lose!"),3000);},400);
				gameOver(whosTurn() === 'Red Team' ? 'blueTeam' : 'redTeam');
			}
			if (!rightTeamFlipped($thisCard)){
				popUpMsg("You flipped an incorrect card!", 1000);
				setTimeout(function(){changeTurn();}, 1000);
			} else if(!guesses){
				changeTurn();
			}
		} else{
			popUpMsg("Enter a Clue!", 1000);
		}

	}

// game requires a word and number to be given to the rest of the team by the code giver.  If number = 0, unlimited guesses until team decides to stop.  
// Team is not required to use all guesses
// This function checks to make sure there's a valid word and then adds that word to the correct team's list and pops it up on the display
function submitSecrets(){
	$('#submitSecrets').removeClass('endTurn').text("Submit").off('click');
	$('#submitSecrets').one('click',function(){
		let secretWord = $('#secretWord').val().toUpperCase();
		let secretNumber = Number($('#secretNumber').val());
		$('#secretWord').val('');
		$('#secretNumber').val('');
		secretNumber = Math.abs(secretNumber);
		newLi = $('<li>').text(secretWord + ", " + secretNumber);
		if(secretWord.includes(' ')){
			canFlip = false;
			popUpMsg("You can only enter ONE word.  Please try again", 1500);
			submitSecrets();
		} else if (!secretWord){
			popUpMsg("You need to enter a word and number!", 1500);
			canFlip = false;
			submitSecrets();
		}else {
				if(whosTurn() === 'Red Team'){
					$('#redWords').prepend(newLi);
				}else {
					$('#blueWords').prepend(newLi);
				}
				if(secretWord && secretNumber){
					guesses = secretNumber + 1;
					canFlip = true;
					keepGuessing = true;
					$('#code').text(secretWord + ": " + secretNumber);
					endTurnButton();
				} else if(secretWord){
					guesses = -1;
					canFlip = true;
					keepGuessing = true;
					$('#code').text(secretWord + ": " + "0");
					endTurnButton();
				} 

			}
	});
}

// creates the game board and initializes the first game.  The slice() is to clone color codes, or else additional games would diverge from code board
	function makeGameBoard(randArray){
		let myColorCodes = colorCodes.slice();
		if(randomSeed%2 ===1){
			myColorCodes.push('R');
			redWin++;
			$('#code').addClass('redTurn').text("Red will go first");
		} else{
			myColorCodes.push('B');
			blueWin++;
			$('#code').addClass('blueTurn').text("Blue will go first");
		}
		let myCodeKey = getSecretKey(randArray, myColorCodes);
		for(let i = 0; i<25; ++i){
			$boardArray[i] = $('<div/>');
			$($boardArray[i]).html('<span>' + wordArray[randArray[i]] + '</span>').addClass(myCodeKey[i] + ' card');
			$('#gameBoard').append($($boardArray[i]));
			$($boardArray[i]).click(function(){
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