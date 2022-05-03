// Challenge 1: 


function ageInDayS(){
    let birthYear = prompt('Adja meg a születési évét: ');

    let ageInDays = (2022-birthYear) * 365;
    console.log(ageInDays);

    var h1 = document.createElement('h1');              // létrehozok egy h1 tag-et
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');   // létrehozom a textet
    h1.setAttribute('id', 'ageInDayS');     // a h1 tag-nek létrehoz egy ID-t 
    h1.appendChild(textAnswer)              // belerakja a szöveget 
    document.getElementById('flex-box-result').appendChild(h1); // be appendeli a div-be 
}



function reset(){
    var valami = document.getElementById('ageInDayS');
    if(valami == null){
        console.log("Nincs tobb");
    }else{
        document.getElementById('ageInDayS').remove();
    }
 
}

//

//Challenge 2: 
function generateCat(){
  
    var image = document.createElement('img');
    image.setAttribute('id','cats');
    var div = document.getElementById('flex-cat-gen');
    image.src = "images/cat.gif";
    div.appendChild(image);
}

function removalCat(){
    var valami = document.getElementById('cats');

    if(valami==null){
        console.log('nincs tobb elem')
    }else{
        document.getElementById('cats').remove();
    }
    
}

//
function getSum(a,b){

    let sum = 0;
    let array = new Array(a,b);
    array.sort();
    let counter = array[0];
    while(counter != array[1]+1){
        sum+= counter;
        counter++;
    }
    return sum;
}

function getSum2(a,b){
    var  array = new Array(a,b);
    array.sort();
    var sum = 0; 
    for(var i = array[0]; i< array[1]; i++){
        sum += i;
    }

    return sum;
}

console.log(getSum(-1,0))
console.log(getSum2(-1,0))


function validPin(pin){
    let copyPin = ''+pin;
    console.log(pin.length)

    let array = Array(1,2,3,4,5,6,7,8,9,0);
    let counter = 0;

    for(let i=0; i<copyPin.length; i++){

        for(let j = 0; j<array.length; j++){
            if(copyPin.charAt(i) == array[j]){
                counter++;
            }
        }

    }

    if(pin.length != 4 && pin.length != 6){
        return false;
    }

    if(counter != pin.length ){
        return false;
    }else{
        return true;
    }
    

}


console.log(validPin('123456'));


//Challenge 3:

function rpsGame(yourChoice){

/*
   if(document.getElementById('rock') == yourChoice){
       console.log('Rock');
    }
   if(document.getElementById('scissor') == yourChoice){
    console.log('Scissor');    
    }
    if(document.getElementById('paper') == yourChoice){
        console.log('Paper');
    }

    */
    // Lekérdezheted az ID ha azt mondod yourChoice.id pl:

    /*
    if('rock' == yourChoice.id){
        console.log('Rock');
     }
    if('scissor' == yourChoice.id){
     console.log('Scissor');    
     }
     if('paper' == yourChoice.id){
         console.log('Paper');
     }

    */


     function randTips(){
         return Math.floor(Math.random()*3);
     }

     function numberToChoice(number){
         return ['rock','paper','scissor'][number];
     }


     function decideWinner(human, bot){
        var rpsDataBase = {
            'rock': {'scissor' : 1, 'rock': 0.5, 'paper' : 0},
            'paper': {'rock' : 1, 'paper': 0.5, 'scissor' : 0},
            'scissor': {'paper' : 1, 'scissor': 0.5, 'rock' : 0}
        }

        var yourScore = rpsDataBase[human][bot];
        var computerScore = rpsDataBase[bot][human];
        return [yourScore,computerScore];
     }

     function finalMessage(result){
        if(result[0] === 0){
            return {'message': 'You lost!', 'color': 'red'};
        }else if(result[0] === 0.5){
            return {'message': 'You tied!', 'color': 'yellow'};
        }else if(result[0] === 1){
            return {'message': 'You won!', 'color': 'green'};
        }else{
            console.log('BUG');
        }
     }

     function rpsFrontEnd(yourChoice,botChoice,message){

        var imagesDateBase = {
            'rock' : document.getElementById('rock').src,
            'paper' : document.getElementById('paper').src,
            'scissor' : document.getElementById('scissor').src
        }
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();


        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');

        
        humanDiv.innerHTML = "<img src ='" + imagesDateBase[yourChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >";
        
        messageDiv.innerHTML= "<h1 style='color: "+ message['color'] + "; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>"
        
        botDiv.innerHTML = "<img src ='" + imagesDateBase[botChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 50, 24, 1);' >";
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);

            

     }


    var humanChoice, botChoice;
    humanChoice = yourChoice.id; // lekérjük az id-át a kattunknak

    botChoice = numberToChoice(randTips());
    console.log(botChoice);

    results = decideWinner(humanChoice,botChoice);
    console.log(results);

    message = finalMessage(results);        // Szótár: {'message': 'You Won', 'color': 'green'}
    console.log(message);   

    rpsFrontEnd(yourChoice.id, botChoice, message);

}


//Challenge 4: Change the color of all buttons: 

var all_buttons = document.getElementsByTagName('button'); // az összes button-ra vonatkozni fog az eredmény 
console.log(all_buttons);

var copyAllButtons = [];

for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}


function buttonRed(){
    for(let i = 0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i = 0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

    console.log(all_buttons[0].classList[1]);
}
function buttonReset(){ 
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1] );
        all_buttons[i].classList.add(copyAllButtons[i]);
        
    }

}
function buttonRandom(){
    var choice = ['btn-primary' , 'btn-danger' , 'btn-warning', 'btn-success' ];
    let randNum = Math.floor(Math.random() * 4);
    console.log(randNum);


    for(let i = 0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[randNum]);
    }
}



function buttonColorChange(bottonThingy){
    //console.log(bottonThingy.value)

    if(bottonThingy.value === 'red'){
        buttonRed();
    }else if(bottonThingy.value === 'green'){
        buttonGreen();
    }else if(bottonThingy.value === 'reset'){
        buttonReset();
    }else if(bottonThingy.value === 'random'){
        buttonRandom();
    }

}
