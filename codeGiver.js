console.log("this is initializing codeGiver logic.  main.js should be loaded prior to using this.");
$(document).ready(function(){
	let $boardArray = [];
	$('#clicker').click(function(event){
		// didn't realize this wasn't returning a number.  Number corrected this.
		randSeed = Number($('#seedEntry').val());
		// storing it now.  Will figure out if necessary later
		localStorage.setItem("seed",randSeed);
		randArray = makeRandArray(randSeed);
		// console.log(randArray);
		if(randSeed%2 ===1){
			console.log('red goes first');
			colorCodes.push('R');
		} else{
			console.log('blue goes first');
			colorCodes.push('B');
		}
		mySecretKey = getSecretKey(randArray, colorCodes);
		firstWord = wordArray[randArray[0]];
		alert(firstWord + ' should be the word on the home page, or first word on the Game Board.  If not, refresh this page and re-enter the secret key!');
		$('#clicker').text(firstWord + " is correct").css("background-color","green").css("color","white").off();
		$('#clicker').click(function(){
				makeCodeBoard(mySecretKey);
			});
	});

// removes the entry area and gives a visual representation of the secretKey.  Should be identical to the gameBoard's underlying values
	function makeCodeBoard(mySecretKey){
		$('.before').hide();
		$('.after').show();
		console.log('making Code Board');
		for(let i = 0; i<25; ++i){
			$boardArray[i] = $('<div/>');
			$($boardArray[i]).html('<div/>').addClass(mySecretKey[i] + ' card');
			$('#codeBoard').append($($boardArray[i]));
			console.log(mySecretKey[i]);
		}
	}
});