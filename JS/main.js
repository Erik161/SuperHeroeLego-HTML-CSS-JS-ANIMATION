const modal = document.querySelector('.modal');
    const button1 = document.querySelector('#button1');
    const closeb = document.querySelector('.modal__close')

    button1.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });


    closeb.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    });
