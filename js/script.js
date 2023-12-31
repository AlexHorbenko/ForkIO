'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const btnTrigger = document.querySelectorAll('[data-modal]')
    const timerPricing = document.querySelector('.hide');
    const hidenMenu = document.querySelector('.hiden-menu');
    const menu = document.querySelector('.menu__info');

    hidenMenu.addEventListener('click', () => {
        menu.classList.toggle('menu__info');
    })

    function openModal() {
        timerPricing.classList.remove('hide');
        clearInterval(modalTimerId);
    }

    const modalTimerId = setTimeout(openModal, 5000);

    btnTrigger.forEach(e => {
        e.addEventListener('click', () => {
            timerPricing.classList.add('hide');
        })
    });

    const deadLine = '2023-11-07';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.pricing__timer', deadLine);


})