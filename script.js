// const texts = ['alt yazı', 'yazı 123', 'deneme 432'];
// var count = 0;
// var index = 0;
// var decrement = 0;
// var currentText = '';
// var letter = '';

// function sleep(delay) {
//     return new Promise(resolve => setTimeout(resolve, delay));
// }

// const typeWrite = async () => {
//     if (count == texts.length) {
//         count = 0;
//     }
//     currentWord = texts[count];
//     currentLetter = currentWord.slice(0, ++index);
//     document.querySelector(".job-bar").textContent = currentLetter;
//     if (index == currentWord.length) {
//         await sleep(1500);
//         while (index > 0) {
//             currentLetter = currentWord.slice(0, --index);
//             document.querySelector(".job-bar").textContent = currentLetter;
//             await sleep(50);
//         }
//         count++;
//         index = 0;
//         await sleep(500);
//     }
//     setTimeout(typeWrite, Math.random() * 200 + 50);
// }
// typeWrite();

// const downloadCv = document.querySelectorAll("#downloadCv");
// const downloadText = document.querySelectorAll(".download-text");
// const spinnerAnim = document.querySelector(".spinner-anim");

// downloadCv[0].addEventListener("click", () => {
//     downloadText[0].style.top = "-100px";
//     downloadCv[0].style.pointerEvents = "none";
//     setTimeout(() => {
//         downloadCv[0].innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
//     }, 250);

//     setTimeout(() => {
//         downloadCv[0].innerHTML = '<span class="download-text">Coming Soon</span>'
//     }, 2500);

//     setTimeout(() => {
//         downloadCv[0].innerHTML = '<span class="download-text">SHOP</span>'
//         downloadCv[0].style.pointerEvents = "auto";
//     }, 7000);
// })

// downloadCv[1].addEventListener("click", () => {
//     downloadText[1].style.top = "-100px";
//     downloadCv[1].style.pointerEvents = "none";
//     setTimeout(() => {
//         downloadCv[1].innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
//     }, 250);

//     setTimeout(() => {
//         downloadCv[1].innerHTML = '<span class="download-text">Coming Soon</span>'
//     }, 2500);

//     setTimeout(() => {
//         downloadCv[1].innerHTML = '<span class="download-text">CONNECT</span>'
//         downloadCv[1].style.pointerEvents = "auto";
//     }, 7000);
// })






const nthAll = document.querySelectorAll("#nth a");
const dotLinkEffect = document.querySelector(".dot-link-effect");

function removeAllClass_fromNth() {
    const nthAll = document.querySelectorAll("#nth a");
    for (let i = 0; i < nthAll.length; i++) {
        dotLinkEffect.classList.remove("active" + i)
    }
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("click", () => {
        removeAllClass_fromNth()
        dotLinkEffect.classList.add("active" + i)
    })
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("mouseover", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = ".50"
        }
        nthAll[i].style.opacity = "1"
    })

    nthAll[i].addEventListener("mouseout", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = "1"
        }
    })
}

const menuBtn = document.querySelector(".menu-btn");
const navbarLinksM = document.querySelector(".nav-links");
const navLinkContainer = document.querySelector(".nav-link-container");
const downloadBtn = document.querySelector(".download-cv");
const overlay = document.querySelector(".overlay");



document.addEventListener("click", (e) => {
    target = e.target.parentNode;

    if (target === menuBtn) {
        navbarLinksM.classList.toggle("active-nav")
        overlay.style.display = "block";

        setTimeout(() => {
            navbarLinksM.classList.toggle("anim-navs")
        }, 100);
    }

    if (target != menuBtn && target != navLinkContainer && target != downloadBtn && target != navbarLinksM) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")
        overlay.style.display = "none";
    }

    if (e.target == overlay) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")
        overlay.style.display = "none";

    }
});


var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    initialSlide: 1,
    coverflowEffect: {
        rotate: 0,
        stretch: 70,
        depth: 250,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-nexts",
        prevEl: ".swiper-button-prevs",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
});