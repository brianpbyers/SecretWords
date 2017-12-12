// This is the logic for the gameBoard
console.log("this is initializing game logic.  main.js should be loaded prior to this.");
$(document).ready(function(){
	let p1Win = 0;
	let p2Win = 0;
	// let randomSeed = Math.floor(Math.random()*100000000);
	let randomSeed = Number(localStorage.getItem("seed"));
	// console.log('random seed' + randomSeed);
	let $boardArray = [];

	function makeGameBoard(randArray){
		// console.log('making Game Board');
		if(randomSeed%2 ===1){
			// console.log('red goes first');
			colorCodes.push('R');
		} else{
			// console.log('blue goes first');
			colorCodes.push('B');
		}
		let myCodeKey = getSecretKey(randArray, colorCodes);
		for(let i = 0; i<25; ++i){
			$boardArray[i] = $('<div/>');
			$($boardArray[i]).html('<span>' + wordArray[randArray[i]] + '</span>').addClass(myCodeKey[i] + ' card');
			$('#gameBoard').append($($boardArray[i]));
			$($boardArray[i]).click(function(){
				console.log('clicked ' + $($boardArray[i]).text() + ' B?: ' + $($boardArray[i]).hasClass('B') +' R?: ' + $($boardArray[i]).hasClass('R'));
				flip($boardArray[i]);
				setTimeout(checkForWin(),1500);
			});
		}
	}
	console.log(makeRandArray(randomSeed));
	makeGameBoard(makeRandArray(randomSeed));
});