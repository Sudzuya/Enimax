// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import { gsap } from "gsap";

const items = gsap.utils.toArray('.wrapper-image__image');
items.forEach(item => {
    const delay = Math.floor(gsap.utils.random(1, 10))

    const topImage = item.querySelector('[data-image-top]');
    const bottomImage = item.querySelector('[data-image-bot]');

    gsap.set(bottomImage, {opacity: 0});

    gsap.timeline({delay: delay, repeat: -1})
        .to(topImage, {duration: 0, opacity: 1, delay: 0.1})
        .to(bottomImage, {duration: 0, opacity: 1, delay: 0})
        .to(topImage, {duration: 2, opacity: 0, delay: 0})
        .to(bottomImage, {duration: 3, opacity: 0, delay: 2});
});


const weDealsListItem = document.querySelectorAll('.we-deals-list-item')
weDealsListItem.forEach((item)=> {
    const itemDataAttribute = item.getAttribute('data-rotate')

    item.style.rotate = `${itemDataAttribute}deg`
})