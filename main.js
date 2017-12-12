
console.log("this is initializing the racer logic");
$(document).ready(function(){
	// dummy words for now.  Will populate with more words and ensure scalability for this purpose.
	let wordArray = ['Potato','New York', 'Egypt', 'Tree', 'Pen', 'Hat', 'Bubblegum', 'Glasses', 'Fish', 'Boat', 'Water', 'Fish', 'Shark', 'Table', 'Chair', 'Sweatshirt', 'Mug', 'Spoon', 'Laptop', 'Sandals', 'Jacket', 'Pants', 'Bees', 'Ears', 'Eyes', 'Nose', 'Mouth', 'Lips', 'Projector', 'Television', 'Watch', 'Trashcan', 'Rome', 'War', 'Knight', 'Ninja', 'Battle', 'Underwear', 'Australia', 'Kangaroo', 'Snake', 'Whale', 'Narwhal', 'Soda', 'Hair', 'Wig', 'Glasses', 'Pencil', 'Dragon', 'Cow', 'Milk', 'Sheep', 'Goat', 'Cheese', 'Mountain', 'Lake', 'River', 'Window', 'Door', 'Picture', 'Word', 'Frame', 'Girl','Boy', 'Chalkboard', 'Teacher', 'Mt Fuji', 'Skyscraper', 'Koala', 'Apple', 'Orange', 'Banana', 'Steak', 'Chicken', 'Green', 'Blue', 'Black', 'Red', 'Yellow', 'Orange', 'Purple', 'White'];
	// list of 24 of the 25 game tiles.  The 25th will be determined during the makeGameBoard Process
	let colorCodes = ['R','R','R','R','R','R','R','R','B','B','B','B','B','B','B','B','T','T','T','T','T','T','T','X'];
	let p1Win = 0;
	let p2Win = 0;
	let randomSeed = Math.floor(Math.random()*100000000);
	let boardArray = [];
	function Card(word, rank, secretColor){
		$(this).word = word;
		$(this).rank = rank;
		$(this).secretColor = secretColor;
	}

	Card.prototype.flipIt = function(){
		// do stuff to flip this element.  show secret value.  add animation
	};

	// making the array that will 'randomize' gameboard and colorcodeArray using a seed.  
	// this allows different devices to get the same gameboard if they type in the seed.
	// changed random logic to ensure we're not picking the same word twice.
	// shouldn't affect the 'randomness' of the colorCode logic
	function makeRandArray(mySeed){
		let myRandArray = [];
		let newRand;
		let iterator = 0;
		// for(let i = 0; i<50;++i){
		// 	newRand = Math.sin(mySeed + i) * 10000;
		// 	newRand = newRand - Math.floor(newRand);
		// 	myRandArray.push(newRand);
		// }
		while(myRandArray.length<50){
			newRand = Math.sin(mySeed + iterator) * 10000;
			newRand = Math.floor((newRand - Math.floor(newRand))*wordArray.length);
			console.log(newRand);
			if(!myRandArray.includes(newRand)){
				myRandArray.push(newRand);
			}
			iterator++;
		}
		return(myRandArray);
	}
	function getSecretKey(myArray, myCodes){
		for(let i = 25;i<myArray.length;++i){
			for(let j = i+1; j<myArray.length;++j){
				if(myArray[j]<myArray[i]){
					let holder = myArray[j];
					myArray[j] = myArray[i];
					myArray[i] = holder;
					holder = myCodes[j-25];
					myCodes[j-25] = myCodes[i-25];
					myCodes[i-25] = holder;
				}
			}
		}
		console.log(myCodes);
		console.log(myArray);
		return myCodes;
	}
// the first 25 numbers inthe array of 50 will determine the words on the gameboard.  The next 25 will determine the secret code;
// If the first number in the array is odd, team1(red) starts.  If even, team2(blue) does;
	function makeGameBoard(randArray){
		if(randArray[0]%2 ===1){
			console.log('red goes first');
			colorCodes.push('R');
		} else{
			console.log('blue goes first');
			colorCodes.push('B');
		}
		let myKey = getSecretKey(randArray, colorCodes);
		for(let i = 0; i<25; ++i){

		}
	}
});