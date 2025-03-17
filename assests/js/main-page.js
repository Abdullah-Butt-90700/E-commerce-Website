const slidesContainer = document.querySelector(".slider_container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".left_arrow");
const nextButton = document.querySelector(".right_arrow");

let currentIndex = 0;
const slideWidth = slides[0].clientWidth; // stores width of a single slide
const totalWidth = slideWidth * slides.length; //stores total width of the overall slides

slidesContainer.style.width = `${totalWidth}px`; //gives the overall width of all the slides

//used to move the slides right or left
function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

//increments currentIndex after lick
nextButton.addEventListener("click", function () {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
});
//decreaments currentIndex after click
prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSlidePosition();
});

//Our Products

const products = [
  {
    title: "Breed Dry Dog Food",
    currentPrice: "$100",
    heartImg: "../images/heart.png",
    controllerImg: "assests/images/dogfood.png",
    redImg: "assests/images/dogfood.png",
    yellowImg: "assests/images/reallaptop.png",
    rating: 3.7,
    reviews: 88,
  },
  {
    title: "CANON EOS DSLR Camera",
    currentPrice: "$360",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/blackcamera.png",
    redImg: "assests/images/blackcamera.png",
    yellowImg: "assests/images/reallaptop.png",
    rating: 5,
    reviews: 88,
  },
  {
    title: "ASUS FHD Gaming Laptop",
    currentPrice: "$700",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/reallaptop.png",
    redImg: "assests/images/reallaptop.png",
    yellowImg: "assests/images/redcar.png",
    rating: 4.5,
    reviews: 145,
  },
  {
    title: "Curology Product Set ",
    currentPrice: "$500",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/pnikhoodie.png",
    redImg: "assests/images/pnikhoodie.png",
    yellowImg: "assests/images/reallaptop.png",

    rating: 4.5,
    reviews: 325,
  },
  {
    title: "Kids Electric Car ",
    currentPrice: "$960",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/redcar.png",
    redImg: "assests/images/redcar.png",
    yellowImg: "assests/images/reallaptop.png",
    rating: 5,
    reviews: 65,
  },
  {
    title: "Jr. Zoom Spccpr cleaner",
    currentPrice: "$660",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/yellowshoes.png",
    redImg: "assests/images/yellowshoes.png",
    yellowImg: "assests/images/reallaptop.png",
    rating: 3.5,
    reviews: 55,
  },
  {
    title: "GP11 Shooter USB Gamepad",
    currentPrice: "$660",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/jacket.png",
    redImg: "assests/images/jacket.png",
    yellowImg: "assests/images/reallaptop.png",
    rating: 5,
    reviews: 55,
  },
  {
    title: "Quilted Satin Jacket",
    currentPrice: "$660",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/dogfood.png",
    rating: 3,
    reviews: 55,
    redImg: "assests/images/dogfood.png",
    yellowImg: "assests/images/reallaptop.png",
  },
];

//5 stars
function generateStars(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      starsHTML += `<div><img src="assests/images/star.png" alt=""></div>`;
    } else if (i - rating < 1) {
      starsHTML += `<div><img src="assests/images/star-half-filled.png" alt=""></div>`;
    } else {
      starsHTML += `<div><img src="assests/images/emptystar.png" alt=""></div>`;
    }
  }
  return starsHTML;
}

const slidesHTML = products
  .map((product, index) => {
    const colorRed = product.colors ? product.colors[0] : "";
    const colorYellow = product.colors ? product.colors[1] : "";

    return `
     <div class="slide">
        <div class="slide_container">
          <div class="like_obj">
            <div class="like_obj_img"><img src="assests/images/heart.png" alt=""></div>
            <div class="like_obj_img"><img src="assests/images/eyes.png" alt=""></div>
          </div>
<div class="obj_img"><img id="product-img-${index}" src="${
      product.controllerImg
    }" alt=""></div>

          <div class="add-to-cart"><h1>Add To Cart</h1></div>
        </div>
        <div class="obj_discription">
          <h1>${product.title}</h1>
          <div class="obj_price_ratings" style="gap: 10px;">
          <div class = "price_reviews_stars">
            <div class="obj_price">
              <p class="obj_current_price">${product.currentPrice}</p>
            </div>
            <div class="five_stars" style="padding-top: 0px;">
              ${generateStars(product.rating)}
              <p>(${product.reviews})</p>
            </div>
            </div>
             <div class = "style_change_colors" >

               <div class = "red_color" data-index="${index}" data-color="red" ></div>
                 <div class ="yellow_color" data-index="${index}" data-color="yellow"></div>
             </div>
          </div>
        </div>
      </div>
    `;
  })
  .join("");

document.querySelector(".products_slide_container").innerHTML = slidesHTML;
document.querySelectorAll(".red_color, .yellow_color").forEach((colorDiv) => {
  colorDiv.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    const color = this.getAttribute("data-color");

    const product = products[index];
    const imgElement = document.getElementById(`product-img-${index}`);

    //  Change image based on color selection
    if (color === "red") {
      imgElement.src = product.redImg || "assests/images/active-shop.png"; // Default red image
    } else if (color === "yellow") {
      imgElement.src = product.yellowImg || "assests/images/yellow-product.png"; // Default yellow image
    }
  });
});

//sales products

const salesProducts = [
  {
    percentOff: "-40%",
    productImg: "assests/images/controller.png",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: "$120",
    beforePrice: 160,
    rating: 3.5,
    reviews: 88,
  },
  {
    percentOff: "-35%",
    productImg: "assests/images/gamingkeeyboard.png",
    title: "AK-900 Wired Keyboard",
    currentPrice: "$360",
    beforePrice: 1120,
    rating: 4,
    reviews: 75,
  },
  {
    percentOff: "-30%",
    productImg: "assests/images/gammingLCD.png",
    title: "IPS LCD Gaming Monitor",
    currentPrice: "$375",
    beforePrice: 400,
    rating: 5,
    reviews: 120,
  },
  {
    percentOff: "-25%",
    productImg: "assests/images/gammingChair.png",
    title: "S-Series Comfort Chair ",
    currentPrice: "$120",
    beforePrice: 160,
    rating: 3.5,
    reviews: 88,
  },
  {
    percentOff: "-40%",
    productImg: "assests/images/controller.png",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: "$120",
    beforePrice: 160,
    rating: 3.5,
    reviews: 88,
  },
  {
    percentOff: "-40%",
    productImg: "assests/images/controller.png",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: "$120",
    beforePrice: 160,
    rating: 3.5,
    reviews: 88,
  },
];
const flashSalesSlider = salesProducts
  .map(
    (products) => `
<div class="slide">
                        <div class="slide_container">
                            <div class="discount_obj">
                                <p>${products.percentOff}</p>
                                
                            </div>
                            <div class="like_obj">
                                <div class="like_obj_img"><img src="assests/images/heart.png" alt=""> </div>
                                <div class="like_obj_img"><img src="assests/images/eyes.png" alt="">
                                </div>

                            </div>
                            <div class="obj_img"><img src= ${
                              products.productImg
                            } alt=""></div>
                             <div class = "add-to-cart"> <h1>Add To Cart </h1>
                        </div>

                           
                            
                        </div>
                        <div class="obj_discription">
                            <h1>${products.title}</h1>
                            <div class="obj_price">
                                <p class="obj_current_price">${
                                  products.currentPrice
                                }</p>
                                <p class="obj_discount_price">${
                                  products.beforePrice
                                }</p>
                            </div>
                            <div class="five_stars">
                                  ${generateStars(products.rating)}
                               
                                <p> ( ${products.reviews} )</p>

                            </div>
                        </div>
                    </div>
`
  )
  .join(" ");
document.querySelector(".slider_container").innerHTML = flashSalesSlider;

//best seeling procuts

const bestSellingProducts = [
  {
    productImg: "assests/images/pnikhoodie.png",
    title: "The north cote",
    currentPrice: "$120",
    beforePrice: 360,
    rating: 3.5,
    reviews: 88,
  },
  {
    productImg: "assests/images/guchibag.png",
    title: "Gucci duffle bag",
    currentPrice: "$960",
    beforePrice: 1160,
    rating: 5,
    reviews: 88,
  },
  {
    productImg: "assests/images/gammingcooler.png",
    title: "RGB liquid CPU Cooler",
    currentPrice: "$120",
    beforePrice: 160,
    rating: 3.5,
    reviews: 88,
  },
  {
    productImg: "assests/images/bookshelf.png",
    title: "Gucci duffle bag",
    currentPrice: "$120",
    beforePrice: 160,
    rating: 6,
    reviews: 88,
  },
];
const bestSelling = bestSellingProducts
  .map(
    (product) => `
<div class="slide">
                        <div class="slide_container">

                            <div class="like_obj">
                                <div class="like_obj_img"><img src="assests/images/heart.png" alt=""> </div>
                                <div class="like_obj_img"><img src="assests/images/eyes.png" alt="">
                                </div>


                            </div>
                            <div class="obj_img"><img src=${
                              product.productImg
                            } alt=""></div>
                            <div class = "add-to-cart"> <h1>Add To Cart </h1>
                        </div>
                        </div>
                        <div class="obj_discription">
                            <h1>The north coat</h1>
                            <div class="obj_price">
                                <p class="obj_current_price">${
                                  product.currentPrice
                                }</p>
                                <p class="obj_discount_price">${
                                  product.beforePrice
                                }</p>
                            </div>
                            <div class="five_stars">
                            ${generateStars(product.rating)}
                                <p> ( ${product.reviews} )</p>
                                
                                



                            </div>
                           
                        </div>
                    </div>
`
  )
  .join(" ");
document.querySelector(".used_for_input_slides").innerHTML = bestSelling;
