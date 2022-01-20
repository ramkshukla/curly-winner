//Age In  Days

function ageInDays(){
    var birthYear = prompt("what year were you born... good friend?");
    var ageInDays = (2022 - birthYear) * 365;
    //create a new h1 tag
    var h1 = document.createElement("h1");
    // add it to a some content
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' years old');
    //add attribute id and give it  a name ageInDays
    h1.setAttribute("id", "ageInDays");
    //add the textnode to the newly created h1 node
    h1.appendChild(textAnswer);
    document.getElementById('flex-result').appendChild(h1);

}

function reset(){
    document.getElementById("ageInDays").remove();
}



//Cat Generate
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://3.bp.blogspot.com/-IJIe0_bF9IM/V31dNNw7_dI/AAAAAAABosk/VP4AsfRr75wL0NTvBoXGrjcEopomgO41gCLcB/s1600/funny-cat-gifs-214-04.gif";
    div.appendChild(image);
}

//Rock Paper Scissor
//here yourChoice is taking this keyword one we choose from photo
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer Choice", botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result); //{'message': 'You won', 'color' : 'green'};
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissor':1, 'rock': 0.5, 'paper':0},
        'paper' : {'rock' : 1, 'paper': 0.5, 'scissor':0},
        'scissor' : {'paper':1, 'scissor':0.5, 'rock': 0},
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'You won!', 'color' : 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();


    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>"  + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 233, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}



// challenge 4: change the color of the button
var all_button = document.getElementsByTagName("button");
console.log(all_button);

var copyAllButton = [];
for(let i=0; i<all_button.length; i++){
    copyAllButton.push(all_button[i]);
}
console.log(copyAllButton);

function buttonColorChange(buttonthingy){
    if(buttonthingy.value === 'red'){
        buttonsRed();
    }
    else if (buttonthingy.value === 'green'){
        buttonsGreen();
    }
    else if (buttonthingy.value === 'reset'){
        buttonsReset();
    }
    else if(buttonthingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed(){
    for(let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function buttonsReset(){
    for(let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButton[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-sucess', 'bn-warning'];
    for(let i=0; i<all_button.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randomNumber]);

    }
}

