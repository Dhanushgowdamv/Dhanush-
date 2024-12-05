

const slider = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".navBottom");


const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
          {
            code: "black",
            img: "./img/air.png",
          },
          {
            code: "darkblue",
            img: "./img/air2.png",
          },
        ],
      },
      {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "./img/jordan.png",
          },
          {
            code: "green",
            img: "./img/jordan2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "./img/blazer.png",
          },
          {
            code: "green",
            img: "./img/blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./img/crater.png",
          },
          {
            code: "lightgray",
            img: "./img/crater2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "./img/hippie.png",
          },
          {
            code: "black",
            img: "./img/hippie2.png",
          },
        ],
      },
]

let chooseProducts = products[0];

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductColor = document.querySelector(".color")
const currentProductSize = document.querySelector(".product")
const currentProductPrice = document.querySelector(".ProductTitle")




 menuItem.forEach((items, index) =>{
  
   items.addEventListener("click",()=>{
    console.log("hello")
    slider.style.transform=`translateX($(-100 * index)vw)`;
    chooseProducts = products[index];
    currentProductImg.src = chooseProducts.colors[0].img;
    currentProductTitle.textContent = chooseProducts.title;
    currentProductPrice.textContent = chooseProducts.price;

    currentProductColor.forEach((color, index) => {
      color.style.backgroundColor = chooseProducts.colors[index].code;
    });
   });
});


currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chooseProducts.colors[index].img;
  });
});

currentProductSize.forEach((size, index)=>{
  size.addEventListener("click",()=>{
    currentProductSize.forEach((size)=>{
      size.style.backgroundColor = white,
      size.style.color = black
    });
    size.style.backgroundColor = "black",
    size.style.color = "white",
  })
})
