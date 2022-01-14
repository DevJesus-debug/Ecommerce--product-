//Images
const imageCont = document.querySelectorAll(".img-slider img");
const imgOne = document.querySelector(".image-1");
const imgTwo = document.querySelector(".image-2");
const imgThree = document.querySelector(".image-3");
const imgFour = document.querySelector(".image-4");
//Buttons
const nextBtn = document.querySelector(".right-btn");
const prevBtn = document.querySelector(".left-btn");
const quantity = document.querySelector(".number");
const minus = document.querySelector(".minus-btn");
const plus = document.querySelector(".plus-btn");
//Navigation,Hamburger
const menu = document.querySelector(".open-btn");
const nav = document.querySelector(".nav-wraper");
const navLinks = document.querySelector(".nav-wraper ul");
const xBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");



//Working with hamburger

menu.addEventListener("click",()=>{
    nav.classList.add("open");
    xBtn.classList.add("close");
    menu.classList.add("close");
});


xBtn.addEventListener("click",()=>{
    nav.classList.remove("open")
    xBtn.classList.remove("close")
    menu.classList.remove("close")
});












//Image Carousel
let counter = 0;

imageCont[0].style.display = "block";

nextBtn.addEventListener("click", ()=>{
    counter++
    if(counter === imageCont.length){
        imageCont[counter - 1].style.display = "none";
        counter = 0;  
    }else if(counter !== 0){
        imageCont[counter -1].style.display = "none";
    }else{
        false
    }

    imageCont[counter].style.display = "block";
});

prevBtn.addEventListener("click", ()=>{
    counter--
    if(counter === -1){
        counter = imageCont.length - 1;
        imageCont[0].style.display ="none";
    }else if(counter !== imageCont.length -1){
        imageCont[counter + 1].style.display = "none"; 
    }else{
        false
    }

    imageCont[counter].style.display = "block";
});