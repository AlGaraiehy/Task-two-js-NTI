function randomInteger(min, max) {
    let randNum = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("onclickbtn").innerHTML = randNum;
    
}