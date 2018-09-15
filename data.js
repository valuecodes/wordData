var fs = require('fs');


// // Adjectives

// var data= fs.readFileSync('./raw/rawAdjData.json');
// var adjData=JSON.parse(data);

// let word=[];

// let objData=[
//     {
//     'word':"example"
//     }
// ];

// for(var i=0;i<adjData.length;i++){
//     if(adjData[i]!==null){
//         word[i]=adjData[i].toLowerCase();
//         // console.log(word[i]);
//         objData[i]={
//             "word":word[i],
//             "type":"adj",
//             "value":0
//         };
//     }
// }   

// objData.sort(dynamicSort("word"));

// console.log(objData);

// var vdata=JSON.stringify(objData);
//     fs.writeFile('./parsed/adjData.json',vdata,finished);
//     function finished(err){
//         console.log('all set');
//     }

// Verbs

// var data= fs.readFileSync('./raw/rawVerbData.json');
// var verbData=JSON.parse(data);


// let word=[];

// let objData=[
//     {
//     'word':"example"
//     }
// ];

// for(var i=0;i<verbData.length;i++){

//     if(verbData[i]!==null){
//         word[i]=verbData[i].toLowerCase();
//         // console.log(word);
//         objData[i]={
//             "word":word[i],
//             "type":"verb",
//             "value":0
//         };  
//     }
      
// }   

// objData.sort(dynamicSort("word"));

// var vdata=JSON.stringify(objData);
//     fs.writeFile('./parsed/verbData.json',vdata,finished);
//     function finished(err){
//         console.log('all set');
//     }


// Nouns

// var data= fs.readFileSync('./raw/rawNounData.json');
// var nounData=JSON.parse(data);

// let word=[];

// let objData=[
//     {
//     'word':"example"
//     }
// ];

// for(var i=0;i<nounData.length;i++){
//     if(nounData[i]!==null){
//         word[i]=nounData[i].toLowerCase();
//         // console.log(word[i]);
//         objData[i]={
//             "word":word[i],
//             "type":"noun",
//             "value":0
//         };  
//     }
      

// }   
// console.log(objData);

// objData.sort(dynamicSort("word"));

// var vdata=JSON.stringify(objData);
// fs.writeFile('./parsed/nounData.json',vdata,finished);
// function finished(err){
//     console.log('all set');
// }

// Adverb

// var data= fs.readFileSync('./raw/rawAdverbData.json');
// var adverbData=JSON.parse(data);

// let word=[];

// let objData=[
//     {
//     'word':"example"
//     }
// ];

// for(var i=0;i<adverbData.length;i++){
//     if(adverbData[i]!==null){
//         word[i]=adverbData[i].toLowerCase();;
//         // console.log(word[i]);
//         objData[i]={
//             "word":word[i],
//             "type":"adverb",
//             "value":0
//         };  
//     }
      

// }   
// console.log(objData);

// objData.sort(dynamicSort("word"));

// var vdata=JSON.stringify(objData);
// fs.writeFile('./parsed/adverbData.json',vdata,finished);
// function finished(err){
//     console.log('all set');
// }


// dataBase

// var data1= fs.readFileSync('./parsed/verbData.json');
// var verbData=JSON.parse(data1);

// var data2= fs.readFileSync('./parsed/adjData.json');
// var adjData=JSON.parse(data2);

// var data3= fs.readFileSync('./parsed/adverbData.json');
// var adverbData=JSON.parse(data3);

// var data4= fs.readFileSync('./parsed/nounData.json');
// var nounData=JSON.parse(data4);

// console.log(verbData);

// let word=[];

// let wordData=[];

// for(var i=0;i<verbData.length;i++){
//     if(verbData[i]!==null){
//         wordData.push(verbData[i]);  
//     } 
// }

// for(var i=0;i<adjData.length;i++){
//     if(verbData[i]!==null){
//         wordData.push(adjData[i]); 
//     } 
// }

// for(var i=0;i<adverbData.length;i++){
//     if(verbData[i]!==null){
//         wordData.push(adverbData[i]); 
//     } 
// }

// for(var i=0;i<nounData.length;i++){
//     if(verbData[i]!==null){
//         wordData.push(nounData[i]);
//     } 
// }

// wordData.sort(dynamicSort("word"));

// var vdata=JSON.stringify(wordData);
// fs.writeFile('./dataBase/wordData.json',vdata,finished);
// function finished(err){
//     console.log('all set');
// }


// Sorting Function
// function dynamicSort(property) {
//     var sortOrder = 1;
    
//     if(property[0] === "-") {
//         sortOrder = -1;
//         property = property.substr(1);
//     }
//     return function (a,b) {
//         var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//         return result * sortOrder;
//     }
// }


// get wordData

// var data1= fs.readFileSync('./dataBase/wordData.json');
// var data=JSON.parse(data1);

// Pronoun Data

// var data= fs.readFileSync('./raw/rawPronounData.json');
// var pronounData=JSON.parse(data);

// let word=[];

// let objData=[
//     {
//     'word':"example"
//     }
// ];

// let type="";

// for(var i=0;i<pronounData.length;i++){
//     if(pronounData[i]==""){
//         type=pronounData[i+1]
//         continue;
//     }
//     if(pronounData[i-1]=="" ){
//         continue;
//     }
//         word[i]=pronounData[i];
//         // console.log(word[i]);
//         objData.push({
//             "word":word[i],
//             "type":type,
//             "value":0
//         });  
// }
// console.log(objData);

// objData.sort(dynamicSort("word"));

// var vdata=JSON.stringify(objData);
// fs.writeFile('./parsed/pronounData.json',vdata,finished);
// function finished(err){
//     console.log('all set');
// }

