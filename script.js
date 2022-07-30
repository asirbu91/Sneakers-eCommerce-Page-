
var mainMenu = document.getElementById('main-menu');
var lightbox = document.getElementById('lightbox');
var cart = document.getElementById('cart');
var unitsDisplayed = document.getElementById('units-selected');


//===========================================
// Element Visibility
//===========================================

// Cart Visibility

function toggleCart() {
    if (cart.style.display === "none")   {
    cart.style.display = "block";
        if (parseInt(document.getElementById('units-in-cart').innerHTML)>0) {
            document.getElementById('cart-contents').style.display = 'block';
            document.getElementById('cart-empty').style.display = 'none';    
        } else {
            document.getElementById('cart-contents').style.display = 'none';
            document.getElementById('cart-empty').style.display = 'block';   
        }
    } else {
    cart.style.display = "none";
    }
}

function closeCart() {
    cart.style.display = "none";
}

// Open and close menu on mobile
function openMenu() {
    
    mainMenu.style.display = 'block';
}

function closeMenu() {
    mainMenu.style.display = 'none';
}



// Open and close Gallery Lightbox
function openLightbox() {
    var vpWidth = window.innerWidth;

    // Only open lightbox if client is not on mobile
    if (vpWidth > 600) {
        lightbox.style.display = 'block';
    } else {
        lightbox.style.display = 'none'; 
    }
    
}

function closeLightbox() {
        lightbox.style.display = 'none';
}


//===========================================
// Gallery
//===========================================


function imgChange(num) {
    source = 'img/image-product-' + num + '.jpg';
    
    document.getElementById('img-large').src = source;
    document.getElementById('lb-img-large').src = source;
    
    const thumbnails = Array.from(document.getElementsByClassName('thumb'));
        
    thumbnails.forEach(thumb => {
        // Remove thumbnail-selected class from all thumbnails
        thumb.classList.remove('thumbnail-selected');
    });

    //add the thumbnail-selected class to the clicked thumbnail
    for (const thumb of thumbnails) {
        thumb.addEventListener('click', function handleClick() {
          thumb.classList.add('thumbnail-selected');
        });
    };       
}

function imgNext() {
    var srcImg = document.getElementById('img-large').src;
    var imgNum = parseInt(srcImg.substr(srcImg.length-5,1)); 

    if (imgNum < 4) {
        imgNum ++;

        source = 'img/image-product-' + imgNum + '.jpg';
        document.getElementById('img-large').src = source;
        document.getElementById('lb-img-large').src = source;
    }
}

function imgPrevious() {
    var srcImg = document.getElementById('img-large').src;
    var imgNum = parseInt(srcImg.substr(srcImg.length-5,1)); 

    if (imgNum > 1) {
        imgNum --;

        source = 'img/image-product-' + imgNum + '.jpg';
        document.getElementById('img-large').src = source;
        document.getElementById('lb-img-large').src = source;
    }
}

function lbNext() {
    var srcImg = document.getElementById('lb-img-large').src;
    var imgNum = parseInt(srcImg.substr(srcImg.length-5,1)); 

    if (imgNum < 4) {
        imgNum ++;

        source = 'img/image-product-' + imgNum + '.jpg';
        document.getElementById('lb-img-large').src = source;
    }

    const thumbnails = Array.from(document.getElementsByClassName('thumb'));
        
    thumbnails.forEach(thumb => {
        // Remove thumbnail-selected class from all thumbnails
        thumb.classList.remove('thumbnail-selected');
    });

   // Next thumbnail becomes selected
   var newID = 'lb' + imgNum;
   document.getElementById(newID).classList.add('thumbnail-selected');
}


function lbPrevious() {
    var srcImg = document.getElementById('lb-img-large').src;
    var imgNum = parseInt(srcImg.substr(srcImg.length-5,1)); 

    if (imgNum > 1) {
        imgNum --;

        source = 'img/image-product-' + imgNum + '.jpg';
        document.getElementById('lb-img-large').src = source;
    }

    const thumbnails = Array.from(document.getElementsByClassName('thumb'));
        
    thumbnails.forEach(thumb => {
        // Remove thumbnail-selected class from all thumbnails
        thumb.classList.remove('thumbnail-selected');
    });

    // Previous thumbnail becomes selected
    var newID = 'lb' + imgNum;
    document.getElementById(newID).classList.add('thumbnail-selected');
}



//===========================================
// Number of Units Selector
//===========================================

function addUnit() {
    var numberUnits = parseInt(unitsDisplayed.innerHTML);
    numberUnits ++;
    unitsDisplayed.innerHTML = numberUnits;
}

function removeUnit() {
    var numberUnits = parseInt(unitsDisplayed.innerHTML);
    if (numberUnits>0) {
        numberUnits --;
        unitsDisplayed.innerHTML = numberUnits;
    }    
}

function addToCart() {
    document.getElementById('cart-empty').style.display = 'none';
    document.getElementById('cart-contents').style.display = 'block';
   
    
    var numberUnits = parseInt(unitsDisplayed.innerHTML);
    var cartUnits = parseInt(document.getElementById('units-in-cart').innerHTML);
    var calculatedUnits = parseInt(numberUnits + cartUnits);
    document.getElementById('units-in-cart').innerHTML = calculatedUnits;
    unitsDisplayed.innerHTML = 0;
    var calculatedTotal = calculatedUnits * 125
    document.getElementById('cart-total').innerHTML = '= $' + calculatedTotal + '.00';

    //Update Cart-Units
    document.getElementById('cart-count').innerHTML = calculatedUnits; 

    console.log(parseInt(document.getElementById('cart-count').innerHTML));

    if (parseInt(document.getElementById('cart-count').innerHTML) < 1) {
        document.getElementById('cart-count').style.display = 'none';    
    } else {
        document.getElementById('cart-count').style.display = 'block';
    }
}

function removeCartItem() {
   
    if (parseInt(document.getElementById('units-in-cart').innerHTML)>1) {
        var cartUnits = parseInt(document.getElementById('units-in-cart').innerHTML); 
        var cartTotal = parseInt(document.getElementById('cart-total').innerHTML);
        cartUnits --;
        cartTotal = cartUnits * 125;
    
        document.getElementById('units-in-cart').innerHTML = cartUnits; 
        document.getElementById('cart-total').innerHTML = '= $' + cartTotal + '.00'; 
     } else { //Cart is empty
        var cartUnits = parseInt(document.getElementById('units-in-cart').innerHTML); 
        var cartTotal = parseInt(document.getElementById('cart-total').innerHTML);
        cartUnits --;
        cartTotal = cartUnits * 125;
    
        document.getElementById('units-in-cart').innerHTML = cartUnits; 
        document.getElementById('cart-total').innerHTML = '= $' + cartTotal + '.00'; 
        
        document.getElementById('cart-contents').style.display = 'none';
        document.getElementById('cart-empty').style.display = 'block';
     }
    
    //Update Cart-Units
    document.getElementById('cart-count').innerHTML = cartUnits 

    console.log(cartUnits);

    if (parseInt(document.getElementById('cart-count').innerHTML) < 1) {
        document.getElementById('cart-count').style.display = 'none';    
    } else {
        document.getElementById('cart-count').style.display = 'block';
    }
}
   