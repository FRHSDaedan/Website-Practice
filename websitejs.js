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