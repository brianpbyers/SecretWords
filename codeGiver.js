console.log("this is initializing codeGiver logic");
$(document).ready(function(){


	function makeRandArray(mySeed){
		// console.log('making Random Array');
		let myRandArray = [];
		let newRand;
		let iterator = 0;
		while(myRandArray.length<50){
			newRand = Math.sin(mySeed + iterator) * 10000;
			newRand = Math.floor((newRand - Math.floor(newRand))*wordArray.length);
			if(!myRandArray.includes(newRand)){
				myRandArray.push(newRand);
			}
			iterator++;
		}
		// console.log('Random Array: ' + myRandArray);
		return(myRandArray);
	}
	$('clicker').click(function(event){
		let randSeed = $('seedEntry').val();
		console.log(randSeed);
	});
});