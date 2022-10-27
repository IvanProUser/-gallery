const sliders = document.querySelectorAll('.slide');

for (const slide of sliders) {
    slide.addEventListener('click', ()=> {
        slideClassRemove();
        slide.classList.add('active')
    })
}

function slideClassRemove() {
    sliders.forEach((slider)=> {
        slider.classList.remove('active')
    })
}