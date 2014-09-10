var censor = require("./readwords/readwords.js");
console.log(censor.getcensoredWords());
console.log(censor.censor("some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getcensoredWords());
console.log(censor.censor("A very gloomy day."));