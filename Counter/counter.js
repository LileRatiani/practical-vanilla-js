// ცვლადების შექმნა.
let decreaseButton = document.querySelector("#decrease");
let resetButton = document.querySelector("#reset");
let increaseButton = document.querySelector("#increase");
let number = document.querySelector("h2");


// increase ღილაკზე დაჭერის შემთხვევაში...
increaseButton.addEventListener("click", increaseFunction);

// იზრდება ერთით და ეცვლება ფერი რიცხვის ნიშნის შესაბამისად.
function increaseFunction(){
   let current = parseInt(number.innerHTML);
   number.innerHTML = current+1;
   if (parseInt(number.innerHTML)>0){
    number.style.color = "green";
 }
 else if (parseInt(number.innerHTML)=0){
    number.style.color = "black";
 }
}

// reset ღილაკზე დაჭერის შემთხვევაში...
resetButton.addEventListener("click", resetFunction);

//მნიშვნელობა ხდება 0 და ენიჭება შავი ფერი.
function resetFunction(){
    number.innerHTML = 0;
    number.style.color = "black";
 }


// decrease ღილაკზე დაჭერის შემთხვევაში...
 decreaseButton.addEventListener("click", decreaseFunction);

 // მცირდება ერთით და ეცვლება ფერი რიცხვის ნიშნის შესაბამისად.
function decreaseFunction(){
    let current = parseInt(number.innerHTML);
   number.innerHTML = current-1;
   if (parseInt(number.innerHTML)<0){
    number.style.color = "red";
 }
 else if (parseInt(number.innerHTML)=0){
    number.style.color = "black";
 }
 }


