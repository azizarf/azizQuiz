// each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}


// map
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}


// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}


//reduce
 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }

var questions = [
    {
        question: 'who was the ancient Greek God of the sun?',
        answers:[{ text : 'Zeus', correct : false },
        { text : 'Apollo', correct : true },
        { text : 'Poseidon', correct : false},
        { text :'hades' , correct : false}
    ]
},
{
        question:' What artist has the most streams on Spotify?',
        answers:[{ text : 'Eminem', correct : false },
        { text : 'Rihanna', correct : false},
        { text : 'Shakira' , correct : false},
        { text : 'Drake', correct : true }
    ]   
},
{
        question: 'What car manufacturer had the highest revenue in 2020?',
        answers:[{ text : 'Skoda', correct : false },
        { text : 'Kia', correct : false},
        { text : 'Volkswagen', correct : true },
        { text : 'Porsche' , correct : false}
    ]   
},
{
        question: 'What city is known as The Eternal City',
        answers:[{ text : 'London', correct : false },
        { text : 'Rome', correct : true },
        { text : 'Paris', correct : false},
        { text : 'Carthage' , correct : false}
    ]   
}
];
var i = 0
var currentClick=0
var score=0
var j = 0
$('#btn1').click(function(){
    $('#btn1').css({"background": "yellowgreen",'color': 'white'})
    $('#btn2').css({"background": "white",'color': 'black'})
    $('#btn3').css({"background": "white",'color': 'black'})
    $('#btn4').css({"background": "white",'color': 'black'})
    currentClick=0  
})
$('#btn2').click(function(){
    $('#btn2').css({"background": "yellowgreen",'color': 'white'})
    $('#btn1').css({"background": "white",'color': 'black'})
    $('#btn3').css({"background": "white",'color': 'black'})
    $('#btn4').css({"background": "white",'color': 'black'})
    currentClick=1
})
$('#btn3').click(function(){
$('#btn3').css({"background": "yellowgreen",'color': 'white'})
$('#btn2').css({"background": "white",'color': 'black'})
$('#btn1').css({"background": "white",'color': 'black'})
$('#btn4').css({"background": "white",'color': 'black'})
currentClick=2
})
$('#btn4').click(function(){
    $('#btn4').css({"background": "yellowgreen",'color': 'white'})
    $('#btn2').css({"background": "white",'color': 'black'})
    $('#btn3').css({"background": "white",'color': 'black'})
    $('#btn1').css({"background": "white",'color': 'black'})
    currentClick=3
})


function clicked(i,currentClick){
    if(questions[i].answers[currentClick].correct===true){
        score++    
    }
    return score
}
$('#start').click(function(){
    $('#start').hide()
    $('#nexButton').show()
    $("#questions").text(questions[0].question)
    $("#btn1").text(questions[0].answers[j].text)
    j++
    $("#btn2").text(questions[0].answers[j].text)
    j++
    $("#btn3").text(questions[0].answers[j].text)
    j++
    $("#btn4").text(questions[0].answers[j].text)
    j=0
   
})


$('#nextButton').click(function(){
 
if (i<=3) {
    console.log(questions[i].answers[currentClick]);
   clicked(i,currentClick)
    
    $("#questions").text(questions[i].question)
    $("#btn1").text(questions[i].answers[j].text)
    j++
    $("#btn2").text(questions[i].answers[j].text)
    j++
    $("#btn3").text(questions[i].answers[j].text)
    j++
    $("#btn4").text(questions[i].answers[j].text)
    j=0
   i++

}else{
    
    $("#score").text("Your Score Is "+(score))

}
    
})


$("document").ready(function(){
    clicked(i,currentClick)
})



