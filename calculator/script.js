const text = document.querySelector('#text');

function appendToDisplay(input){
    text.value += input;
}

function calculate(){
    text.value = eval(text.value);
}
//eval is a kind of like calc thingy 

function cleartext(character) {
    text.value = "";
}