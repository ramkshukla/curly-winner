function ageInDays(){
    var birthYear = prompt("what year were you born... good friend?");
    var ageInDays = (2022 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' years old');
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById('flex-result').appendChild(h1);

}

function reset(){
    document.getElementById("ageInDays").remove();
}


function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://3.bp.blogspot.com/-IJIe0_bF9IM/V31dNNw7_dI/AAAAAAABosk/VP4AsfRr75wL0NTvBoXGrjcEopomgO41gCLcB/s1600/funny-cat-gifs-214-04.gif";
    div.appendChild(image);
}