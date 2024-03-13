function textChanger() {
    let elem = document.getElementById("firstButton");
    if(elem.innerHTML == "Click to change what this button says!") elem.innerHTML = "Hello!";
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

}

function incrementValue() {
    const ageName = {name: "Aedan", age: "16"};
    const myJSON = JSON.stringify(ageName);
    localStorage.setItem("test", myJSON);
}

function saveData() {
    let text = localStorage.getItem("test");
    let ageName2 = JSON.parse(text)
    document.getElementById =("test1").innerHTML = ageName2.name;
}

function showData() {
    let elem2 = document.getElementById("otherButton");
    if(elem2.innerHTML === "Show Data") elem2.innerHTML = ageName2;
}


