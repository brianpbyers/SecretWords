console.log("this is initializing codeGiver logic.  main.js should be loaded prior to using this.");
$(document).ready(function(){
	$('#clicker').click(function(event){
		// didn't realize this wasn't returning a number.  Number corrected this.
		let randSeed = Number($('#seedEntry').val());
		randArray = makeRandArray(randSeed);
		// console.log(randArray);
		mySecretKey = getSecretKey(randArray, colorCodes);
		firstWord = wordArray[randArray[0]];
		alert(firstWord + ' should be the first word on the gameBoard.  If not, refresh this page and re-enter the secret key!');

	});
});