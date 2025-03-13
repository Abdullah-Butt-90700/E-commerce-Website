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

const products = [
  {
    title: "Breed Dry Dog Food",
    currentPrice: "$100",
    heartImg: "../images/heart.png",
    controllerImg: "assests/images/dogfood.png",
    rating: 3.7,
    reviews: 88,
  },
  {
    title: "CANON EOS DSLR Camera",
    currentPrice: "$360",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/blackcamera.png",
    rating: 5,
    reviews: 88,
  },
  {
    title: "ASUS FHD Gaming Laptop",
    currentPrice: "$700",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/reallaptop.png",
    rating: 4.5,
    reviews: 145,
  },
  {
    title: "Curology Product Set ",
    currentPrice: "$500",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/pnikhoodie.png",

    rating: 4.5,
    reviews: 325,
  },
  {
    title: "Kids Electric Car ",
    currentPrice: "$960",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/redcar.png",
    rating: 5,
    reviews: 65,
  },
  {
    title: "Jr. Zoom Spccpr cleaner",
    currentPrice: "$660",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/yellowshoes.png",
    rating: 3.5,
    reviews: 55,
  },
  {
    title: "GP11 Shooter USB Gamepad",
    currentPrice: "$660",
    heartImg: "assests/images/heart.png",
    controllerImg: "assests/images/jacket.png",
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
  },
];
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
  .map(
    (product) => `
      <div class="slide">
                    <div class="slide_container">

                        <div class="like_obj">
                            <div class="like_obj_img"><img src="assests/images/heart.png" alt=""> </div>
                        </div>
                        <div class="obj_img"><img src="${
                          product.controllerImg
                        }" alt=""></div>
                    </div>
                    <div class="obj_discription">
                        <h1>${product.title}</h1>
                        <div class="obj_price_ratings" style="gap: 10px;">
                            <div class="obj_price">
                                <p class="obj_current_price">${
                                  product.currentPrice
                                }</p>
                            </div>
                            <div class="five_stars" style="padding-top: 0px;">
                                ${generateStars(product.rating)}
                                <p> ( 88 )</p>

                            </div>
                        </div>
                    </div>
                </div>`
  )
  .join("");
document.querySelector(".products_slide_container").innerHTML = slidesHTML;
