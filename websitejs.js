function textChanger() {
    let elem = document.getElementById("firstButton");
    if(elem.innerHTML === "Click to change what this button says! (Click Twice)") elem.innerHTML = "Hello!";
    else elem.innerHTML = "Goodbye!";
}

function imageChanger() {
    document.getElementById("image1")
        .src = "images/anya_heh_thumbnail.jpg";
        document.getElementById("")
}

function blankRedirect(){
    window.location.href = "subPageBlank";
}


function changeStyle() {
        document.getElementById("styleChangeButton").style.color = "blue";
        document.getElementById("styleChangeButton").style.backgroundColor = "red";
}

// function backgroundChanger
function incrementValue() {
    let firstVal = 0;
    localStorage.setItem('item', JSON.stringify(firstVal++));
}

function saveData() {
    localStorage.getItem('item');
}

function showData() {
    const data = JSON.parse('item')
}

//function textChanger() {
//     let elem = document.getElementById("showDataId");
//     if(elem.innerHTML == "Click to change what this button says!") elem.innerHTML = "Hello!";
//     else elem.innerHTML = "Goodbye!";
// }
