let cla = document.querySelectorAll('.class1');
let cont = document.querySelectorAll('.container');
let main = document.querySelector('#main');

cla.forEach(elem => {
    elem.addEventListener('dragstart', function () {
        elem.classList.add('class2');
        elem.style.opacity = 0.5;
    })
    elem.addEventListener('dragend', function () {
        elem.classList.remove('class2');
        elem.style.opacity = 1;
    })
})
cont.forEach(cont => {
    cont.addEventListener('dragover', e => {
        e.preventDefault();
        drag = document.querySelector('.class2');
        cont.appendChild(drag);
        cont.id == 'main' ? drag.classList.remove('divs') : drag.classList.add('divs');
    })
})
