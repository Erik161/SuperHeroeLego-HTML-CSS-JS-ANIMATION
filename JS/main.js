const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');

    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');
    const closeb = document.querySelector('.modal__close')
    const closec = document.querySelector('.modal2__close')
    const closed = document.querySelector('.modal3__close')

    button1.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });

    button2.addEventListener('click', () => {
        modal2.classList.remove('hidden');
        modal2.classList.add('visible');
    });

    button3.addEventListener('click', () => {
        modal3.classList.remove('hidden');
        modal3.classList.add('visible');
    });


    closeb.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    });

    closec.addEventListener('click', () => {
        modal2.classList.add('hidden');
        modal2.classList.remove('visible');
    });

    closed.addEventListener('click', () => {
        modal3.classList.add('hidden');
        modal3.classList.remove('visible');
    });
