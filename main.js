var fs = require('fs');

var data= fs.readFileSync('./dataBase/wordData.json');
var wordData=JSON.parse(data);

var adjdata= fs.readFileSync('./parsed/adjData.json');
var adj=JSON.parse(adjdata);

var adverbdata= fs.readFileSync('./parsed/adverbData.json');
var adverb=JSON.parse(adverbdata);

var verbdata= fs.readFileSync('./parsed/verbData.json');
var verb=JSON.parse(verbdata);

var noundata= fs.readFileSync('./parsed/nounData.json');
var noun=JSON.parse(noundata);

console.log(noun.length);

// Random Word

// console.log("I "
// +verb[Math.floor(Math.random()*verb.length)].word
// +" "+adj[Math.floor(Math.random()*adj.length)].word
// +" "+noun[Math.floor(Math.random()*noun.length)].word
// +" "+adverb[Math.floor(Math.random()*adverb.length)].word);



