console.log("this is initializing game logic");
$(document).ready(function(){
	// HOLY WORD LIST!
	let wordArray = ['FACE', 'BERLIN', 'POUND', 'SUB', 'WATCH', 'LEAD', 'RABBIT', 'ICE CREAM', 'CAT', 'SHOT', 'EGYPT', 'THEATER', 'LUCK', 'AMAZON', 'BERMUDA', 'ARM', 
	'PIRATE', 'HORSE', 'BELT', 'LIGHT', 'CAP', 'TRIANGLE', 'AUSTRALIA', 'LIMOUSINE', 'MARBLE', 'STAFF', 'LEMON', 'BELL', 'MISSILE', 'PASTE', 'EMBASSY', 'ROBOT', 'WIND', 
	'KID', 'FALL', 'SCALE', 'RAY', 'POST', 'MARCH', 'CONTRACT', 'CHANGE', 'ROSE', 'COVER', 'CELL', 'SEAL', 'CROSS', 'GIANT', 'NAIL', 'GREECE', 'SQUARE', 'TIE', 'TABLE', 
	'PARK', 'FIGURE', 'GREEN', 'PASS', 'POINT', 'TUBE', 'MAIL', 'RING', 'DUCK', 'MOON', 'NET', 'DEGREE', 'BOW', 'TABLET', 'SLIP', 'FISH', 'COTTON', 'WAKE', 
	'FIGHTER', 'LINK', 'DANCE', 'DRILL', 'DATE', 'SPRING', 'COURT', 'CROWN', 'HIMALAYAS', 'WHALE', 'DIAMOND', 'PISTOL', 'ROW', 'KIWI', 'CODE', 'HORN', 'CARD', 'STAR', 
	'POOL', 'SOUND', 'PAPER', 'BANK', 'BOOM', 'BLOCK', 'FRANCE', 'DINOSAUR', 'BILL', 'TAP', 'MOUTH', 'GAME', 'WASHER', 'YARD', 'CHEST', 'LIFE', 'LAP', 'HOLE', 'BEAT', 
	'PIN', 'WAR', 'MOUSE', 'KNIFE', 'CHURCH', 'PLATE', 'LINE', 'SATELLITE', 'LAWYER', 'MODEL', 'TOKYO', 'ROCK', 'LONDON', 'POLICE', 'LION', 'SCREEN', 'FAIR', 
	'COLD', 'CRICKET', 'CHECK', 'QUEEN', 'HOLLYWOOD', 'WELL', 'STADIUM', 'DRAGON', 'PITCH', 'KING', 'ORGAN', 'JAM', 'BAR', 'FILE', 'AGENT', 'BUCK', 'WITCH', 'KETCHUP', 
	 'BRUSH', 'LOCK', 'SUPERHERO', 'OIL', 'DROP', 'PHOENIX', 'CASINO', 'PILOT', 'DOG', 'CONDUCTOR', 'CHARGE', 'BEACH', 'HAM', 'DRAFT', 'BOMB', 'RULER', 
	'SPACE', 'HOOK', 'BOARD', 'CLOAK', 'CENTER', 'CHICK', 'BUFFALO', 'DECK', 'TORCH', 'STATE', 'TRACK', 'FORCE', 'BAT', 'MASS', 'SCIENTIST', 'STOCK', 'DEATH', 'AMERICA', 
	'IVORY', 'APPLE', 'POLE', 'AMBULANCE', 'DRESS', 'BUG', 'MINT', 'CHAIR', 'WATER', 'MATCH', 'IRON', 'BALL', 'DOCTOR', 'EYE', 'MEXICO', 'AIR', 'CALF', 'SPINE', 'DRESS', 
	'TRIP', 'CRANE', 'COPPER', 'JACK', 'SOUL', 'EUROPE', 'CAR', 'WAVE', 'PYRAMID', 'OPERA', 'PLATYPUS', 'STICK', 'SMUGGLER', 'ENGLAND', 'TRAIN', 'FIELD', 'LOCH NESS', 'LOG', 
	'PARACHUTE', 'HOTEL', 'UNICORN', 'SPY', 'BOX', 'MOUNT', 'PANTS', 'WALL', 'PIPE', 'NOVEL', 'INDIA', 'ROUND', 'AFRICA', 'SERVER', 'SCHOOL', 'BEIJING', 
	'RACKET', 'TOOTH', 'PLAY', 'PLANE', 'ROME', 'PUPIL', 'PLOT', 'SHOE', 'MOLE', 'CLUB', 'SINK', 'SWING', 'HAND', 'PORT', 'DISEASE', 'EAGLE', 'GENIUS', 'FORK', 'GERMANY', 
	'PIANO', 'SPOT', 'TIME', 'PRINCESS', 'COMIC', 'MAMMOTH', 'ANTARCTICA', 'THUMB', 'STRIKE', 'KANGAROO', 'SNOWMAN', 'HELICOPTER', 'VACUUM', 'ATLANTIS', 'VET', 'VAN', 'BOND', 
	'PAN', 'POISON', 'TOWER', 'FILM', 'BUTTON', 'STRING', 'NIGHT', 'CLIFF', 'LAB', 'TEMPLE', 'ORANGE', 'SATURN', 'HOSPITAL', 'ALPS', 'WORM', 'CANADA', 'SCORPION', 'CHINA', 
	'BOLT', 'AZTEC', 'MAPLE', 'BATTERY', 'HAWK', 'JUPITER', 'SHARK', 'OLYMPUS', 'NINJA', 'BOOT', 'GHOST', 'SLUG', 'COMPOUND', 'SWITCH', 'STRAW', 'DICE', 'SHIP', 'CRASH', 
	'TAIL', 'BACK', 'CZECH', 'TELESCOPE', 'CYCLE', 'NUT', 'SOCK', 'PART', 'BUGLE', 'SUIT', 'CHOCOLATE', 'FENCE', 'CAPITAL', 'WEB', 'FAN', 'KEY', 'ALIEN', 'OCTOPUS', 'WHIP', 
	'SPELL', 'GRASS', 'SOLDIER', 'BERRY', 'ICE', 'TAG', 'NOTE', 'GROUND', 'FIRE', 'BAND', 'BRIDGE', 'ROBIN', 'GRACE', 'OLIVE', 'ROULETTE', 'MERCURY', 'PIE', 'KNIGHT', 'GOLD', 
	'TICK', 'BED', 'CIRCLE', 'TRUNK', 'SNOW', 'HONEY', 'HORSESHOE', 'REVOLUTION', 'COOK', 'FOOT', 'NEW YORK', 'GAS', 'CAST', 'THIEF', 'BARK', 'CARROT', 'FLUTE', 'HOOD', 'HEART', 
	'SHOP', 'NEEDLE', 'NURSE', 'BEAR', 'GLASS', 'FLY', 'PIT', 'PENGUIN', 'ROOT', 'ANGEL', 'SPIDER', 'MINE', 'TURKEY', 'MOSCOW', 'PALM', 'CONCERT', 'MUG', 
	 'ENGINE', 'JET', 'HEAD', 'LITTER', 'SHADOW', 'CENTAUR', 'GLOVE', 'STREAM', 'PUMPKIN', 'TEACHER', 'FEATHER', 'BOTTLE', 'DWARF', 'PLASTIC', 
	'DAY'];
	// list of 24 of the 25 game tiles.  The 25th will be determined during the makeGameBoard Process
	let colorCodes = ['R','R','R','R','R','R','R','R','B','B','B','B','B','B','B','B','T','T','T','T','T','T','T','X'];
	let p1Win = 0;
	let p2Win = 0;
	let randomSeed = Math.floor(Math.random()*100000000);
	console.log('random seed' + randomSeed);
	let $boardArray = [];
	// function Card(word, secretColor){
	// 	this.word = word;
	// 	this.secretColor = secretColor;
	// }

	// Card.prototype.flipIt = function(){
	// 	// do stuff to flip this element.  show secret value.  add animation
	// };

	// making the array that will 'randomize' gameboard and colorcodeArray using a seed.  
	// this allows different devices to get the same gameboard if they type in the seed.
	// changed random logic to ensure we're not picking the same word twice.
	// shouldn't affect the 'randomness' of the colorCode logic
	function makeRandArray(mySeed){
		console.log('making Random Array');
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
			if(!myRandArray.includes(newRand)){
				myRandArray.push(newRand);
			}
			iterator++;
		}
		console.log('Random Array: ' + myRandArray);
		return(myRandArray);
	}
	// generating a secret key by taking the back 25 of the random array and sorting them (and the color array) based on their values
	function getSecretKey(myArray, myColors){
		console.log('making Secret Key');
		for(let i = 25;i<myArray.length;++i){
			for(let j = i+1; j<myArray.length;++j){
				if(myArray[j]<myArray[i]){
					let holder = myArray[j];
					myArray[j] = myArray[i];
					myArray[i] = holder;
					holder = myColors[j-25];
					myColors[j-25] = myColors[i-25];
					myColors[i-25] = holder;
				}
			}
		}
		console.log('my Colors ' + myColors);
		console.log('my Array ' + myArray);
		return myColors;
	}
// the first 25 numbers inthe array of 50 will determine the words on the gameboard.  The next 25 will determine the secret code;
// If the first number in the array is odd, team1(red) starts.  If even, team2(blue) does;
	function makeGameBoard(randArray){
		console.log('making Game Board');
		if(randArray[0]%2 ===1){
			console.log('red goes first');
			colorCodes.push('R');
		} else{
			console.log('blue goes first');
			colorCodes.push('B');
		}
		let myCodeKey = getSecretKey(randArray, colorCodes);
		for(let i = 0; i<25; ++i){
			$boardArray[i] = $('<div/>');
			$($boardArray[i]).html('<span>' + wordArray[randArray[i]] + '</span>').addClass(myCodeKey[i] + ' card');
			$('#gameBoard').append($($boardArray[i]));
			$($boardArray[i]).click(function(){
				console.log('clicked ' + $($boardArray[i]).text() + ' B?: ' + $($boardArray[i]).hasClass('B') +' R?: ' + $($boardArray[i]).hasClass('R'));
				// do other stuff here!
			});
		}
	}
	makeGameBoard(makeRandArray(randomSeed));
});