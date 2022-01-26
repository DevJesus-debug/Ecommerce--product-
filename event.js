//Images
const imageCont = document.querySelectorAll(".img-slider img");
const imgSlider = document.querySelector(".img-slider");
const xsImageCont = document.querySelector(".xs-img-cont");
const xsImagesCont = document.querySelectorAll(".xs-img-cont .cont");
const xsImages = document.querySelectorAll(".xs-img-cont img");
//Buttons
const nextBtn = document.querySelector(".right-btn");
const prevBtn = document.querySelector(".left-btn");
const quantity = document.querySelector(".number");
const minus = document.querySelector(".minus-btn img");
const plus = document.querySelector(".plus-btn img");
const cartBtn = document.querySelector(".cart-logo img");
const addToCart = document.querySelector(".cart-btn");
const checkOutBtn = document.querySelector(".cart-btn-checkout");
const deleteBtn = document.querySelector(".delete-icon img");
//Navigation,Hamburger,Cart
const menu = document.querySelector(".open-btn");
const nav = document.querySelector(".nav-wraper");
const navLinks = document.querySelector(".nav-wraper ul");
const xBtn = document.querySelector(".close-icon");
const body = document.querySelector("body");
const cartCount = document.querySelector(".cart-counter");
const cartCont = document.querySelector(".cart-items-cont");
const cartMessage = document.querySelector(".items-cont p");
const cartAmount = document.querySelector(".amount");
const quantMultiplier = document.querySelector(".quant-multiplier");
const totalAmount = document.querySelector(".total");
const cartEmptyMessage = document.querySelector(".cart-message");
const itemCont = document.querySelector(".items-cart-cont");
//Modal variables
const closeModal = document.querySelector(".close-icon-modal");
const imgModal = document.querySelector(".image-modal");
const rightBtnModal = document.querySelector(".right-btn-modal");
const leftBtnModal = document.querySelector(".left-btn-modal");
const imgSliderModal = document.querySelector(".img-slider-modal");
const imagesSliderModal = document.querySelectorAll(".img-slider-modal img");
const xsImagesModal = document.querySelectorAll(".xs-img-modal img");
const xsImagesContModal = document.querySelectorAll(".xs-img-modal .cont")
const xsImgContModal = document.querySelector(".xs-img-modal")




let counter = 0;


//Event Listeners/////////////////////////////////////

//Working with hamburger

menu.addEventListener("click",()=>{
    nav.classList.add("open");
    xBtn.classList.add("close");
    menu.classList.add("close");
    body.classList.add("no-scroll");
});


xBtn.addEventListener("click",()=>{
    nav.classList.remove("open");
    xBtn.classList.remove("close");
    menu.classList.remove("close");
    body.classList.remove("no-scroll");
});

//Cart Item counter
let itemCounter = 0;

    
minus.addEventListener("click",()=>{
    if(itemCounter === 0){
        false
    }else{
        itemCounter--
        quantity.innerText = itemCounter;
    }
});

plus.addEventListener("click",()=>{
    itemCounter++
    if(itemCounter !== 0){
        quantity.innerText = itemCounter;
    }
});

//Image Carousel buttons

imageCont[0].style.display = "block";

nextBtn.addEventListener("click", ()=>{
    nextImg(imageCont)
});

prevBtn.addEventListener("click", ()=>{
   previousImg(imageCont)
});

//Cart functionality

cartBtn.addEventListener("click", ()=>{
    cartCont.classList.toggle("cart-open");
});

addToCart.addEventListener("click",()=>{
    if(itemCounter > 0){
        quantity.innerText = 0;
        cartMessage.classList.add("message-show");
        cartCount.classList.add("display-count");
        cartCount.innerText = itemCounter;
        quantMultiplier.innerText = itemCounter;
        let total = itemCounter * cartAmount.innerText;
        totalAmount.innerText = "$" + total + ".00";
        cartEmptyMessage.style.display="none";
        itemCont.style.display="flex";
        checkOutBtn.style.display ="block";
    }else{
        cartMessage.classList.remove("message-show");
    }
})

deleteBtn.addEventListener("click",()=>{
    itemCounter = 0;
    itemCont.style.display ="none";
    checkOutBtn.style.display ="none";
    cartEmptyMessage.style.display="block";
    cartCount.classList.remove("display-count");
})


//Desktop mini images
xsImageCont.addEventListener("mouseover", (e)=>{
    miniImagesHover(e,imageCont,xsImages)
    toggleImages(e,xsImagesCont,xsImages)
})

//Desktop modal mini images

xsImgContModal.addEventListener("mouseover", (e)=>{
    miniImagesHover(e,imagesSliderModal,xsImagesModal);
    toggleImages(e,xsImagesContModal,xsImagesModal);
    
})




//Modal Functionality
imgSlider.addEventListener("click", (e)=>{
    imgModal.style.display = "flex";
    if(e.target === imageCont[0]){
        imagesSliderModal[0].style.display = "block";
        imagesSliderModal[1].style.display = "none";
        imagesSliderModal[2].style.display = "none";
        imagesSliderModal[3].style.display = "none";
        //Active image Opacity and Border style 
        xsImagesModal[0].classList.add("active-opacity");
        xsImagesContModal[0].classList.add("active-border");
        xsImagesModal[1].classList.remove("active-opacity");
        xsImagesContModal[1].classList.remove("active-border");
        xsImagesModal[2].classList.remove("active-opacity");
        xsImagesContModal[2].classList.remove("active-border");
        xsImagesModal[3].classList.remove("active-opacity");
        xsImagesContModal[3].classList.remove("active-border");
        counter = 0;
    }

    if(e.target === imageCont[1]){
        imagesSliderModal[1].style.display = "block";
        imagesSliderModal[2].style.display = "none";
        imagesSliderModal[3].style.display = "none";
        imagesSliderModal[0].style.display = "none";
         //Active image Opacity and Border style 
        xsImagesModal[1].classList.add("active-opacity");
        xsImagesContModal[1].classList.add("active-border");
        xsImagesModal[0].classList.remove("active-opacity");
        xsImagesContModal[0].classList.remove("active-border");
        xsImagesModal[2].classList.remove("active-opacity");
        xsImagesContModal[2].classList.remove("active-border");
        xsImagesModal[3].classList.remove("active-opacity");
        xsImagesContModal[3].classList.remove("active-border");
        counter = 1;
    }

    if(e.target === imageCont[2]){
        imagesSliderModal[2].style.display = "block";
        imagesSliderModal[0].style.display = "none";
        imagesSliderModal[1].style.display = "none";
        imagesSliderModal[3].style.display = "none";
         //Active image Opacity and Border style 
         xsImagesModal[2].classList.add("active-opacity");
         xsImagesContModal[2].classList.add("active-border");
         xsImagesModal[1].classList.remove("active-opacity");
         xsImagesContModal[1].classList.remove("active-border");
         xsImagesModal[0].classList.remove("active-opacity");
         xsImagesContModal[0].classList.remove("active-border");
         xsImagesModal[3].classList.remove("active-opacity");
         xsImagesContModal[3].classList.remove("active-border");
        counter = 2;
    }

    if(e.target === imageCont[3]){
        imagesSliderModal[3].style.display = "block";
        imagesSliderModal[0].style.display = "none";
        imagesSliderModal[1].style.display = "none";
        imagesSliderModal[2].style.display = "none";
         //Active image Opacity and Border style 
         xsImagesModal[3].classList.add("active-opacity");
         xsImagesContModal[3].classList.add("active-border");
         xsImagesModal[1].classList.remove("active-opacity");
         xsImagesContModal[1].classList.remove("active-border");
         xsImagesModal[2].classList.remove("active-opacity");
         xsImagesContModal[2].classList.remove("active-border");
         xsImagesModal[0].classList.remove("active-opacity");
         xsImagesContModal[0].classList.remove("active-border");
        counter = 3;
    }

})

closeModal.addEventListener("click", ()=>{
    imgModal.style.display = "none";
})



//Modal images buttons

rightBtnModal.addEventListener("click", ()=>{
    nextImg(imagesSliderModal);
});

leftBtnModal.addEventListener("click", ()=>{
   previousImg(imagesSliderModal)
   
});

//Functions//////////////////////////////////////////////

//Modal carousel mini images functionality

//Toggle the mini images on hover 
function toggleImages(e,container,xsImages){
    if(e.target === xsImages[0]){
        counter = 0
        container[0].classList.add("active-border");
        xsImages[0].classList.add("active-opacity");
        container[1].classList.remove("active-border");
        xsImages[1].classList.remove("active-opacity");
        container[2].classList.remove("active-border");
        xsImages[2].classList.remove("active-opacity");
        container[3].classList.remove("active-border");
        xsImages[3].classList.remove("active-opacity");
    }
    if(e.target === xsImages[1]){
        counter = 1;
        container[1].classList.add("active-border");
        xsImages[1].classList.add("active-opacity");
        container[0].classList.remove("active-border");
        xsImages[0].classList.remove("active-opacity");
        container[2].classList.remove("active-border");
        xsImages[2].classList.remove("active-opacity");
        container[3].classList.remove("active-border");
        xsImages[3].classList.remove("active-opacity");
    }
    if(e.target === xsImages[2]){
        counter = 2;
        container[2].classList.add("active-border");
        xsImages[2].classList.add("active-opacity");
        container[0].classList.remove("active-border");
        xsImages[0].classList.remove("active-opacity");
        container[1].classList.remove("active-border");
        xsImages[1].classList.remove("active-opacity");
        container[3].classList.remove("active-border");
        xsImages[3].classList.remove("active-opacity");
    }
    if(e.target === xsImages[3]){
        counter = 3
        container[3].classList.add("active-border");
        xsImages[3].classList.add("active-opacity");
        container[1].classList.remove("active-border");
        xsImages[1].classList.remove("active-opacity");
        container[2].classList.remove("active-border");
        xsImages[2].classList.remove("active-opacity");
        container[0].classList.remove("active-border");
        xsImages[0].classList.remove("active-opacity");
    }
 }
 


//Carousel functionality

function previousImg(image){
    counter--
    if(counter === -1){
        counter = image.length - 1;
        image[0].style.display ="none";
    }else if(counter !== image.length -1){
        image[counter + 1].style.display = "none";
    }else{
        false
    }
    image[counter].style.display = "block";
    
}

//Next Image Function

function nextImg(image){
    counter++
    if(counter === image.length){
        image[counter - 1].style.display = "none";
        counter = 0;  
    }else if(counter !== 0){
        image[counter -1].style.display = "none";
    }else{
        false
    }
    image[counter].style.display = "block";
}



//Desktop mini images to display main images Funtionality

function miniImagesHover(e,mainImages,miniImages){
    if(e.target === miniImages[0]){
        counter = 0;
        mainImages[0].style.display = "block";
        mainImages[1].style.display = "none";
        mainImages[2].style.display = "none";
        mainImages[3].style.display = "none";
    }else if(e.target === miniImages[1]){
        counter = 1;
        mainImages[1].style.display ="block";
        mainImages[0].style.display = "none";
        mainImages[2].style.display = "none";
        mainImages[3].style.display = "none";
    }else if(e.target === miniImages[2]){
        counter = 2;
        mainImages[2].style.display ="block";
        mainImages[0].style.display = "none";
        mainImages[1].style.display = "none";
        mainImages[3].style.display = "none";
    }else if(e.target === miniImages[3]){
        counter = 3;
        mainImages[3].style.display ="block";
        mainImages[0].style.display = "none";
        mainImages[1].style.display = "none";
        mainImages[2].style.display = "none";
    }
}


