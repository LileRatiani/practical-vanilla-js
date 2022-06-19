// ცვლადების შექმნა.
let colorName = document.querySelector("#name");
let generateColor = document.querySelector("#button");
let body = document.querySelector("body");
let simpleColors = document.querySelector("#simple");
let hexColors = document.querySelector("#hex");


// მარტივი ფერების მასივი.
const colors = ["red", "green", "blue"];

// მარტივი ფერების არჩევის შემთხვევაში...
simpleColors.addEventListener("click", simpleFunc);
function simpleFunc(){
    generateColor.addEventListener("click", myfunc);

function myfunc(){

    // პროგრამა მასივიდან შემთხვევით ირჩევს ფერს.
    let color = colors[Math.floor(Math.random()*colors.length)];

    //იწერება რომელი ფერი აირჩა, არჩეულ ფერს ანიჭებს ფონსა და ფერის სახელს. 
    body.style.backgroundColor = color;
    colorName.innerHTML = color;
    colorName.style.color = color;
}

}

// hex ფერების შემადგენელი ასოები და ციფრები.
const letters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// hex ფერების არჩევის შემთხვევაში...
hexColors.addEventListener("click", hexFunc);
function hexFunc(){
    generateColor.addEventListener("click", mySecondfunc);
}

function mySecondfunc(){
    let hex = "#";


    for (let i = 0; i < 6; i++) {

        // პროგრამა აგენერირებს 6 ციფრს/ასოს, რომელიც შეადგენს hex ფერს.
        hex += letters[Math.floor(Math.random()*letters.length)]

        //იწერება რომელი ფერი დაგენერირდა, ამ ფერს ანიჭებს ფონსა და ფერის სახელს. 
         body.style.backgroundColor = hex;
         colorName.innerHTML = hex;
         colorName.style.color = hex;
    }
}