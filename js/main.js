    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__burger span').classList.toggle('active');
        document.querySelector('.header__nav-list').classList.toggle('animate');
        document.querySelector('body').classList.toggle('vertical__hiden');
    })