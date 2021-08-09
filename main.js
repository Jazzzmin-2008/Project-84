canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_img = "Bg-1";
key_img = "main.png";

function add(){
    background_imgtag = new Image()
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_img;

    key_imgtag = new Image()
    key_imgtag.onload = uploadkey;
    key_imgtag.src = key_img;
}

window.addEventListener("keydown",my_keydown);

 function my_keydown(e){
    keyPressed = e.keycode
    console.log(keyPressed)

    if((keyPressed >=97 && keyPressed <=122)(keyPressed >=65 && keyPressed <=90)){
        alphabet();
        document.getElementById("d1").innerHTML="You pressed an alphabet key";
        console.log("alphabet");
    }
    if(keyPressed >=48 && keyPressed <=57){
        number();
        document.getElementById("d1").innerHTML="You pressed a number key";
        console.log("number");
    }
    if(keyPressed >=37 && keyPressed <=40){
        arrow();
        document.getElementById("d1").innerHTML="You pressed an arrow key";
        console.log("arrow");
    }
    if(keyPressed = 17/18/27){
        special();
        document.getElementById("d1").innerHTML="You pressed an special key(alt,ctrl,esc)";
        console.log("arrow");
    }
} 


function alphabet(){
    key_img="Alphabet.png";
}
function number(){
    key_img="Number.png";
}
function special(){
    key_img="Special.png";
}
function arrow(){
    key_img="Arrow.png";
}