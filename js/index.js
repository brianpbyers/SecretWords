// Uses main.js for a lot of the logic.  Sets up the initial random seed for easy initialization
let seed = Math.floor(Math.random()*10000000000);
localStorage.setItem("seed", seed);
$('#secretSeed').text(seed);
$('#secretWord').text(wordArray[makeRandArray(seed)[0]]);