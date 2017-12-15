let wordArray = ['FACE', 'BERLIN', 'POUND', 'SUB', 'WATCH', 'LEAD', 'RABBIT', 'CAT', 'SHOT', 'EGYPT', 'THEATER', 'LUCK', 'AMAZON', 'BERMUDA', 'ARM', 'PIRATE', 
'HORSE', 'BELT', 'LIGHT', 'CAP', 'TRIANGLE', 'MARBLE', 'STAFF', 'LEMON', 'BELL', 'MISSILE', 'PASTE', 'EMBASSY', 'ROBOT', 'WIND', 'KID', 
'FALL', 'SCALE', 'RAY', 'POST', 'MARCH', 'CONTRACT', 'CHANGE', 'ROSE', 'COVER', 'CELL', 'SEAL', 'CROSS', 'GIANT', 'NAIL', 'GREECE', 'SQUARE', 
'TIE', 'TABLE', 'PARK', 'FIGURE', 'GREEN', 'PASS', 'POINT', 'TUBE', 'MAIL', 'RING', 'DUCK', 'MOON', 'NET', 'DEGREE', 'BOW', 'TABLET', 'SLIP', 
'FISH', 'COTTON', 'WAKE', 'FIGHTER', 'LINK', 'DANCE', 'DRILL', 'DATE', 'SPRING', 'COURT', 'CROWN', 'WHALE', 'DIAMOND', 'PISTOL', 'ROW', 'KIWI', 
'CODE', 'HORN', 'CARD', 'STAR', 'POOL', 'SOUND', 'PAPER', 'BANK', 'BOOM', 'BLOCK', 'FRANCE', 'DINOSAUR', 'BILL', 'TAP', 'MOUTH', 'GAME', 'WASHER', 'YARD', 
'CHEST', 'LIFE', 'LAP', 'HOLE', 'BEAT', 'PIN', 'WAR', 'MOUSE', 'KNIFE', 'CHURCH', 'PLATE', 'LINE', 'LAWYER', 'MODEL', 'TOKYO', 'ROCK', 'LONDON', 
'POLICE', 'LION', 'SCREEN', 'FAIR', 'COLD', 'CRICKET', 'CHECK', 'QUEEN', 'WELL', 'STADIUM', 'DRAGON', 'PITCH', 'KING', 'ORGAN', 'JAM', 'BAR', 
'FILE', 'AGENT', 'BUCK', 'WITCH', 'KETCHUP', 'BRUSH', 'LOCK', 'OIL', 'DROP', 'PHOENIX', 'CASINO', 'PILOT', 'DOG', 'CHARGE', 'BEACH', 'HAM', 'DRAFT', 
'BOMB', 'RULER', 'SPACE', 'HOOK', 'BOARD', 'CLOAK', 'CENTER', 'CHICK', 'BUFFALO', 'DECK', 'TORCH', 'STATE', 'TRACK', 'FORCE', 'BAT', 'MASS', 
'STOCK', 'DEATH', 'AMERICA', 'IVORY', 'APPLE', 'POLE', 'DRESS', 'BUG', 'MINT', 'CHAIR', 'WATER', 'MATCH', 'IRON', 'BALL', 'DOCTOR', 'EYE', 'MEXICO', 
'AIR', 'CALF', 'SPINE', 'DRESS', 'TRIP', 'CRANE', 'COPPER', 'JACK', 'SOUL', 'EUROPE', 'CAR', 'WAVE', 'PYRAMID', 'OPERA', 'PLATYPUS', 'STICK', 'SMUGGLER', 
'ENGLAND', 'TRAIN', 'FIELD', 'LOG', 'HOTEL', 'UNICORN', 'SPY', 'BOX', 'MOUNT', 'PANTS', 'WALL', 'PIPE', 'NOVEL', 'INDIA', 'ROUND', 'AFRICA', 'SERVER', 
'SCHOOL', 'BEIJING', 'RACKET', 'TOOTH', 'PLAY', 'PLANE', 'ROME', 'PUPIL', 'PLOT', 'SHOE', 'MOLE', 'CLUB', 'SINK', 'SWING', 'HAND', 'PORT', 'DISEASE', 
'EAGLE', 'GENIUS', 'FORK', 'GERMANY', 'PIANO', 'SPOT', 'TIME', 'PRINCESS', 'COMIC', 'MAMMOTH', 'THUMB', 'STRIKE', 'KANGAROO', 'SNOWMAN',  'VACUUM', 
'ATLANTIS', 'VET', 'VAN', 'BOND', 'PAN', 'POISON', 'TOWER', 'FILM', 'BUTTON', 'STRING', 'NIGHT', 'CLIFF', 'LAB', 'TEMPLE', 'ORANGE', 'SATURN', 'HOSPITAL', 
'ALPS', 'WORM', 'CANADA', 'SCORPION', 'CHINA', 'BOLT', 'AZTEC', 'MAPLE', 'BATTERY', 'HAWK', 'JUPITER', 'SHARK', 'OLYMPUS', 'NINJA', 'BOOT', 'GHOST', 
'SLUG', 'COMPOUND', 'SWITCH', 'STRAW', 'DICE', 'SHIP', 'CRASH', 'TAIL', 'BACK', 'CZECH',  'CYCLE', 'NUT', 'SOCK', 'PART', 'BUGLE', 'SUIT', 'FENCE', 'CAPITAL', 
'WEB', 'FAN', 'KEY', 'ALIEN', 'OCTOPUS', 'WHIP', 'SPELL', 'GRASS', 'SOLDIER', 'BERRY', 'ICE', 'TAG', 'NOTE', 'GROUND', 'FIRE', 'BAND', 'BRIDGE', 'ROBIN', 
'GRACE', 'OLIVE', 'ROULETTE', 'MERCURY', 'PIE', 'KNIGHT', 'GOLD', 'TICK', 'BED', 'CIRCLE', 'TRUNK', 'SNOW', 'HONEY', 'COOK', 'FOOT', 'NEW YORK', 'GAS', 'CAST', 
'THIEF', 'BARK', 'CARROT', 'FLUTE', 'HOOD', 'HEART', 'SHOP', 'NEEDLE', 'NURSE', 'BEAR', 'GLASS', 'FLY', 'PIT', 'PENGUIN', 'ROOT', 'ANGEL', 'SPIDER', 'MINE', 
'TURKEY', 'MOSCOW', 'PALM', 'CONCERT', 'MUG', 'ENGINE', 'JET', 'HEAD', 'LITTER', 'SHADOW', 'CENTAUR', 'GLOVE', 'STREAM', 'PUMPKIN', 'TEACHER', 'FEATHER', 
'BOTTLE', 'DWARF', 'PLASTIC', 'DAY'];

let colorCodes = ['R','R','R','R','R','R','R','R','B','B','B','B','B','B','B','B','T','T','T','T','T','T','T','X'];

	// making the array that will 'randomize' gameboard and colorcodeArray using a seed.  
	// this allows different devices to get the same gameboard if they type in the seed.
	// changed random logic to ensure we're not picking the same word twice.
	// shouldn't affect the 'randomness' of the colorCode logic
	function makeRandArray(mySeed){
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
		return(myRandArray);
	}

	// generating a secret key by taking the back 25 of the random array and sorting them (and the color array) based on their values
	function getSecretKey(myArray, myColors){
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
		return myColors;
	}

// commenting these words out.  These are long words that don't show up correctly on the game page josh had a good idea for putting them on.  *stretchgoal
// ICE CREAM', 'AUSTRALIA', 'LIMOUSINE', 'UNDERTAKER', 'HIMALAYAS', 'WASHINGTON', 'SATTELITE', 'HOLLYWOOD', 
// 'SKYSCRAPER', 'SUPERHERO', 'CONDUCTOR', 'SCIENTIST', 'AMBULANCE', 'LOCH NESS', 'PARACHUTE', 'SCUBA DIVER', 
// 'ANARCTICA', 'HELICOPTER', 'TELESCOPE', 'CHOCOLATE', 'HORSESHOE', 'REVOLUTION', 'LEPRECHAUN', 
// 'SHAKESPEARE', 'MICROSCOPE', 'MILLIONAIRE