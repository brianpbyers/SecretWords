// This is the logic for the gameBoard
console.log("this is initializing game logic.  main.js should be loaded prior to this.");
$(document).ready(function(){
	// cards left until win
	let redWin = 8;
	let blueWin = 8;
	let guesses = 0;
	// let randomSeed = Math.floor(Math.random()*100000000);
	let randomSeed = Number(localStorage.getItem("seed"));
	// console.log('random seed' + randomSeed);
	let $boardArray = [];

	function whosTurn(){
		if($('#code').hasClass('redTurn')){
			return 'Red Team';
		}else if($('#code').hasClass('blueTurn')){
			return 'Blue Team';
		}else {
			return 'Nobody';
		}
	}

	function flip($thisCard){
		$($thisCard).addClass('flipped');
		$($thisCard).empty();
		if($('.R.flipped').length===redWin) {
			alert("Red Team Wins!");
		} else if($('.B.flipped').length===blueWin) {
			alert("Blue Team Wins!");
		}else if($('.X').hasClass('flipped')) {
			let whosUp = whosTurn();
			alert(whosUp + "flipped the Black Card!  They Lose!");
		}

	}

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
			blueWin++
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
	}
	makeGameBoard(makeRandArray(randomSeed));
});