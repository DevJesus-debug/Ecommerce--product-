//Images
const imageCont = document.querySelectorAll(".img-slider img");
const imgSlider = document.querySelector(".img-slider");
const xsImageCont = document.querySelector(".xs-img-cont");
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




let counter = 0;
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

//Previous Image Function

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

//Image Carousel buttons

imageCont[0].style.display = "block";

nextBtn.addEventListener("click", ()=>{
    nextImg(imageCont)
});

prevBtn.addEventListener("click", ()=>{
   previousImg(imageCont)
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

//Desktop mini images Funtionality



xsImageCont.addEventListener("mouseover", (e)=>{
    if(e.target === xsImages[0]){
        imageCont[0].style.display = "block";
        imageCont[1].style.display = "none";
        imageCont[2].style.display = "none";
        imageCont[3].style.display = "none";
    }else if(e.target === xsImages[1]){
        imageCont[1].style.display ="block";
        imageCont[0].style.display = "none";
        imageCont[2].style.display = "none";
        imageCont[3].style.display = "none";
    }else if(e.target === xsImages[2]){
        imageCont[2].style.display ="block";
        imageCont[0].style.display = "none";
        imageCont[1].style.display = "none";
        imageCont[3].style.display = "none";
    }else if(e.target === xsImages[3]){
        imageCont[3].style.display ="block";
        imageCont[0].style.display = "none";
        imageCont[1].style.display = "none";
        imageCont[2].style.display = "none";
    }
})

//Modal Functionality
imgSlider.addEventListener("click", (e)=>{
    imgModal.style.display = "flex";
    console.log(e.target)
    if(e.target === imageCont[0]){
        imagesSliderModal[0].style.display = "block";
        imagesSliderModal[1].style.display = "none";
        imagesSliderModal[2].style.display = "none";
        imagesSliderModal[3].style.display = "none";
        counter = 0;
    }

    if(e.target === imageCont[1]){
        imagesSliderModal[1].style.display = "block";
        imagesSliderModal[2].style.display = "none";
        imagesSliderModal[3].style.display = "none";
        imagesSliderModal[0].style.display = "none";
        counter = 1;
    }

    if(e.target === imageCont[2]){
        imagesSliderModal[2].style.display = "block";
        imagesSliderModal[0].style.display = "none";
        imagesSliderModal[1].style.display = "none";
        imagesSliderModal[3].style.display = "none";
        counter = 2;
    }

    if(e.target === imageCont[3]){
        imagesSliderModal[3].style.display = "block";
        imagesSliderModal[0].style.display = "none";
        imagesSliderModal[1].style.display = "none";
        imagesSliderModal[2].style.display = "none";
        counter = 3;
    }

})

closeModal.addEventListener("click", ()=>{
    imgModal.style.display = "none";
})



//Modal images buttons


rightBtnModal.addEventListener("click", ()=>{
    nextImg(imagesSliderModal)
    console.log(counter)
});

leftBtnModal.addEventListener("click", ()=>{
   previousImg(imagesSliderModal)
   console.log(counter)
});