// =============================
// КАРТОЧКИ ТОВАРОВ
// =============================

class Product{

    constructor(name, descr, price, image){

        this.name = name;
        this.descr = descr;
        this.price = price;
        this.image = image;

    }


    create_card(){

        return `
        <div class="cards_rows_card">

            <img 
                class="cards_rows_card_image" 
                src="${this.image}"
            >

            <div class="cards_rows_card_text">

                <h2 class="cards_rows_card_name">
                    ${this.name}
                </h2>

                <p class="cards_rows_card_description">
                    ${this.descr}
                </p>

                <p class="cards_rows_card_price">
                    ${this.price}
                </p>

                <button class="cards_rows_card_btn btn">
                    Заказать
                </button>

            </div>

        </div>
        `

    }

}



let products = [

    new Product(
        "Название1",
        "Описание1 фы в цф ывц фв ыцф",
        2001,
        "src/bg.png"
    ),

    new Product(
        "Название2",
        "Описание2 фы в цф ывц фв ыцф",
        2002,
        "src/bg.png"
    ),

    new Product(
        "Название3",
        "Описание3 фы в цф ывц фв ыцф",
        2003,
        "src/bg.png"
    ),

    new Product(
        "Название4",
        "Описание4",
        2004,
        "src/bg.png"
    ),

    new Product(
        "Название5",
        "Описание5",
        2005,
        "src/bg.png"
    ),

    new Product(
        "Название6",
        "Описание6",
        2006,
        "src/bg.png"
    )

];



let catalog = document.querySelector(".cards");

let button_see_more = document.querySelector(".button_see_more");

let is_visible = false;



function render_card(){

    let count = is_visible 
        ? products.length 
        : 6;


    catalog.innerHTML = "";


    for(let i = 0; i < count; i++){

        catalog.innerHTML += 
            products[i].create_card();

    }


    button_see_more.textContent =
        is_visible 
        ? "Скрыть"
        : "Показать ещё";

}



button_see_more.addEventListener(
    "click",
    ()=>{

        is_visible = !is_visible;

        render_card();

    }
);


render_card();





// =============================
// КАРУСЕЛЬ ОТЗЫВОВ
// =============================



const reviewsTrack =
    document.querySelector(".reviews_track");


const leftButton =
    document.querySelector(".left_scroll_button");


const rightButton =
    document.querySelector(".right_scroll_button");



const cardWidth = 450;
const gap = 40;



// сохраняем оригиналы

const reviews = Array.from(
    reviewsTrack.children
);



const reviewsCount = reviews.length;



// =============================
// КЛОНЫ
// =============================


// слева добавляем копии в обратном порядке

reviews
    .slice()
    .reverse()
    .forEach(card => {

        reviewsTrack.prepend(
            card.cloneNode(true)
        );

    });


// справа добавляем копии

reviews.forEach(card => {

    reviewsTrack.append(
        card.cloneNode(true)
    );

});





const allReviews =
    document.querySelectorAll(".review_card");




// оригинальная первая карточка находится после клонов

let currentIndex = reviewsCount;





function getCenter(){


    const slider =
        document.querySelector(".reviews_slider");


    return (
        slider.offsetWidth / 2 -
        cardWidth / 2
    );

}




function updateSlider(animation = true){


    reviewsTrack.style.transition =
        animation
        ? "transform .5s ease"
        : "none";



    const position =
        getCenter() -
        currentIndex *
        (cardWidth + gap);



    reviewsTrack.style.transform =
        `translateX(${position}px)`;



    allReviews.forEach(card => {

        card.classList.remove("active");

    });



    allReviews[currentIndex]
        .classList.add("active");

}




function nextReview(){


    currentIndex++;


    updateSlider();

}



function prevReview(){


    currentIndex--;


    updateSlider();

}





// =============================
// БЕСКОНЕЧНЫЙ ПЕРЕХОД
// =============================


reviewsTrack.addEventListener(
    "transitionend",
    ()=>{


        // ушли вправо на копии

        if(
            currentIndex >= reviewsCount * 2
        ){

            currentIndex -= reviewsCount;

            updateSlider(false);

        }



        // ушли влево на копии

        if(
            currentIndex < reviewsCount
        ){

            currentIndex += reviewsCount;

            updateSlider(false);

        }


    }
);





rightButton.addEventListener(
    "click",
    nextReview
);



leftButton.addEventListener(
    "click",
    prevReview
);





window.addEventListener(
    "resize",
    ()=>{

        updateSlider(false);

    }
);





// старт

requestAnimationFrame(()=>{

    updateSlider(false);

});


// =============================
// EMAILJS
// =============================
