
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

// Word to type of word

let phrase="The character's popularity has seen him featured in numerous forms of other media. In the 2004 series Cable & Deadpool, he refers to his own scarred appearance as"

phrase=phrase.split(" ");
let typeOfWord=[];

for(var i=0;i<phrase.length;i++){
    word=phrase[i].toLowerCase().replace(/[^a-zA-Z]/gi,"").split("").join("");
    let flag=0;
    typeOfWord.push(word);
    for(var j=0;j<wordData.length;j++){
        if(wordData[j].word===word){
            if(typeOfWord.includes(wordData[j].type)==false){
                typeOfWord.push('('+wordData[j].type+')')
                console.log(wordData[j].type);
                flag=1;
            }     
        }
    }
    if(flag==0){
        typeOfWord.push("(unknown)");
    }
}
// console.log(phrase);
console.log(typeOfWord.join(" "));
