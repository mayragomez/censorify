var censorWords = ["sad", "bad", "mad"];
var customerCensorWords = [];

function censor (inStr) {
    for ( idx in censorWords) {
        inStr = inStr.replace(censorWords[idx], "****");
    }
    
    for (idx in customerCensorWords) {
        inStr = inStr.replace(customerCensorWords [idx], "****");
    }
    
    return inStr;
}

function addCensoredWord (word) {
    customerCensorWords.push(word);
}

function getCensoredWords () {
    return censorWords.concat(customerCensorWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;