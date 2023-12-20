// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function changeOpacity(element, opacityValue) {
    element.style.opacity = opacityValue;
}

function fadeInOut(element, fadeInTime, fadeOutTime) {
    changeOpacity(element, '1'); // Установка opacity: 1

    setTimeout(() => {
        changeOpacity(element, '0'); // Установка opacity: 0
    }, fadeOutTime * 1000); // Ожидание времени для исчезновения
}

function handleOpacityAnimation() {
    const topElements = document.querySelectorAll('[data-image-top]');
    const botElements = document.querySelectorAll('[data-image-bot]');

    if (topElements.length > 0 && botElements.length > 0) {
        topElements.forEach((topElement) => {
            const fadeInTimeTop = Math.floor(Math.random() * 10) + 1; // Генерация случайного числа от 1 до 10 для появления data-image-top
            const fadeOutTimeTop = 2; // Время затухания для data-image-top

            const fadeInTimeBot = fadeInTimeTop - 1 >= 0 ? fadeInTimeTop - 1 : 0; // fadeInTime для data-image-bot

            setTimeout(() => {
                fadeInOut(topElement, fadeInTimeTop, fadeOutTimeTop);

                setTimeout(() => {
                    botElements.forEach((botElement) => {
                        setTimeout(() => {
                            fadeInOut(botElement, fadeInTimeBot, fadeOutTimeTop);
                        }, fadeInTimeBot * 1000); // Задержка для появления data-image-bot после появления data-image-top
                    });
                }, fadeInTimeBot * 1000); // Задержка для появления data-image-bot после появления data-image-top
            }, fadeInTimeTop * 1000); // Задержка для появления data-image-top
        });
    }
}

window.onload = function() {
    setInterval(handleOpacityAnimation, 1000); // Повторять анимацию каждые 15 секунд
    handleOpacityAnimation(); // Запуск первоначальной анимации
};
