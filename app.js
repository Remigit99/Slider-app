const SliderMain = document.querySelector(".slider__main")
const rightArrow = document.querySelector(".right__arrow");
const leftArrow = document.querySelector(".left__arrow");
const pagBtns = document.querySelector(".pag__btns");
const slideImgs = document.querySelectorAll(".img");

let slideNum = 1;

let length = slideImgs.length;


// Create Pagination buttons
for (let i = 0; i < length; i++) {
    const btn = document.createElement("div")
    btn.className = "btn";
    pagBtns.appendChild(btn);
}

const btns = document.querySelectorAll(".btn")
btns[0].style.backgroundColor = "rgb(29, 29, 29)";

const removeBg = () => {
    btns.forEach(button => {
        button.style.backgroundColor = 'transparent'
    })
}
const addBg = () => btns[(slideNum - 1)].style.backgroundColor = "rgb(29, 29, 29)";

btns.forEach((button, i) => {
    button.addEventListener("click", () => {
        removeBg()
        SliderMain.style.transform = `translateX(-${i * 700}px)`;
        button.style.backgroundColor = "rgb(29, 29, 29)";
        slideNum = i + 1;
    })
});

const nextSlide = () => {
    SliderMain.style.transform = `translateX(-${slideNum * 700}px)`;
    removeBg()
    slideNum++;
}

const prevSlide = () => {
    SliderMain.style.transform = `translateX(-${(slideNum - 2) * 700}px)`;
    slideNum--;
}

const firstSlide = () => {
    SliderMain.style.transform = `translateX(0)`;
    slideNum = 1
}

const lastSlide = () => {
    SliderMain.style.transform = `translateX(-${(length - 1) * 700}px)`;
    slideNum = length;
}


rightArrow.addEventListener('click', () => {
    (slideNum < length) ? nextSlide() : firstSlide();
    removeBg()
    addBg();

})


leftArrow.addEventListener("click", () => {
    (slideNum > 1) ? prevSlide() : lastSlide();
    removeBg()
    addBg();
})




