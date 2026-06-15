// typing effect

let text = "Data Analyst | Web Developer";

let i = 0;


function type(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(type,100);

}

}


type();




// Navbar change on scroll

window.addEventListener("scroll",()=>{


let nav=document.querySelector(".navbar");


if(window.scrollY > 50){

nav.style.background="#0d6efd";

}

else{

nav.style.background="#111";

}


});





// Contact form

document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();


alert("Thank you for contacting me!");

this.reset();


});