// < !--Initialize Swiper for carousel-- >
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// for controlling the video(the visibility of play button on video click event
const video = document.querySelector('video');
const controls = document.querySelector('.controls');
const play = document.querySelector('.play');

video.removeAttribute('controls');
controls.style.visibility = 'visible';

video.addEventListener('click', playPauseMedia);
controls.addEventListener('click', playPauseMedia);

function playPauseMedia() {
    if (video.paused) {
        controls.style.visibility = 'hidden';
        video.play();
    } else {
        controls.style.visibility = 'visible';
        video.pause();
    }
}







// when the page loads..12 cards are contructed using the code below
const load = () => {

    const cardsDiv = document.querySelector(".cards");
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    arr.forEach((ele) => {

        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const div5 = document.createElement('div');
        const div6 = document.createElement('div');
        const div7 = document.createElement('div');
        const div8 = document.createElement('div');
        const div9 = document.createElement('div');
        const div10 = document.createElement('div');
        const div11 = document.createElement('div');
        const p = document.createElement('p');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        const img3 = document.createElement('img');
        const span1 = document.createElement('span')
        const span2 = document.createElement('span');
        const h4 = document.createElement('h4');

        // parent div having image and card details both
        div1.className = "card";
        p.innerHTML = "50%";

        img1.className = "card_image";
        img1.src = "images/unsplash_MqT0asuoIcU.png";

        div2.className = "card__content";

        // div3 containing the header of the card details which are name of the item and amount in rupees
        div3.className = "card__header";
        h4.className = "card__title";
        h4.innerHTML = "Home made pizza";
        span1.className = "card_price";
        span1.innerHTML = "₹190";

        div3.appendChild(h4);
        div3.appendChild(span1);

        // div4 containing the footer which futher contains the item rating in stars , time required for the delivery and the plus button
        div4.className = "car__footer";
        div5.className = "rating__delivery";
        div6.className = "card__rating";

        img2.src = "icons/star.svg";
        img2.className = "rating__star";
        span2.className = "rating__value";
        span2.innerHTML = "4.7";
        // 
        div6.appendChild(img2)
        div6.appendChild(span2);

        // contains the delivery time in minutes
        div7.className = "delivery__time";

        // inner divs which have the values for the delivery time and the unit of delivery time i.e minutes
        div8.className = "main__delivery__time";
        div9.className = "delivery__time__duration";
        div9.innerHTML = "50-79";
        div10.className = "delivery__time__unit";
        div10.innerHTML = "min";

        div8.appendChild(div9);
        div8.appendChild(div10);

        div7.appendChild(div8);


        div5.appendChild(div6);
        div5.appendChild(div7);

        //    contains the plus/add icon 
        div11.className = "add__icon";
        img3.src = "icons/plus.svg";
        img3.className = "plus__icon";

        div11.appendChild(img3);


        div4.appendChild(div5);
        div4.appendChild(div11);

        div2.appendChild(div3);
        div2.appendChild(div4);


        div1.appendChild(p);
        div1.appendChild(img1);
        div1.appendChild(div2);

        cardsDiv.appendChild(div1);
    })
}
load();


//EVENT LISTENERS FOR CLICK ACTIONS

//function which runs whenever 'REQUEST ITEM' button is clicked
document.getElementById('btn-modal').addEventListener('click', function () {
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.position = "fixed"
});


//function which runs when 'CANCEL' button inside the 'REQUEST ITEM' modal is clicked
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
    document.body.style.position = ""
});

//function which runs when the 'SUBMIT REQUEST' button is clicked inside the 'REQUEST ITEM' modal
document.getElementById('close-btn1').addEventListener('click', function () {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
    document.body.style.position = ""
});


//function which runs when cart icon on the header is clicked
document.getElementById('cart').addEventListener('click', function () {
    document.getElementById('overlay_cart').classList.add('is-visible');
    document.getElementById('modal_cart').classList.add('is-visible');
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.position = "fixed"
});


//function which runs when 'CANCEL' button on the 'CART MODAL' is clicked
document.getElementById('close-btn_cart').addEventListener('click', function () {
    document.getElementById('overlay_cart').classList.remove('is-visible');
    document.getElementById('modal_cart').classList.remove('is-visible');
    document.body.style.position = ""
});