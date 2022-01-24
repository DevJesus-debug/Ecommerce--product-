//Images
const imageCont = document.querySelectorAll(".img-slider img");
const xsImageCont = document.querySelector(".xs-img-cont");
const xsImages = document.querySelectorAll(".xs-img-cont img");
const imgModal = document.querySelector(".image-modal");
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
const xBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");
const cartCount = document.querySelector(".cart-counter");
const cartCont = document.querySelector(".cart-items-cont");
const cartMessage = document.querySelector(".items-cont p");
const cartAmount = document.querySelector(".amount");
const quantMultiplier = document.querySelector(".quant-multiplier");
const totalAmount = document.querySelector(".total");
const cartEmptyMessage = document.querySelector(".cart-message");
const itemCont = document.querySelector(".items-cart-cont");

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
        counter = imageCont.length - 1;
        imageCont[0].style.display ="none";
    }else if(counter !== imageCont.length -1){
        imageCont[counter + 1].style.display = "none"; 
    }else{
        false
    }

    imageCont[counter].style.display = "block";
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

xsImageCont.addEventListener("click", (e)=>{
    if(e.target === xsImages[0]){
      imgModal.style.display = "flex";
    }else if(e.target === xsImages[1]){
      imgModal.style.display = "flex";
    }else if(e.target === xsImages[2]){
      imgModal.style.display = "flex";
    }else if(e.target === xsImages[3]){
      imgModal.style.display = "flex";
    }
})



//Modal Functionality


