(function () {
    var content = document.getElementById('content');
    var items = document.querySelectorAll('.gb-menu-item');
    var pages = document.querySelectorAll('.page');

    function show(target) {
        content.classList.toggle('started', target !== 'home');

        items.forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.target === target);
        });
        pages.forEach(function (page) {
            page.classList.toggle('active', page.id === 'page-' + target);
        });
    }

    items.forEach(function (btn) {
        btn.addEventListener('click', function () {
            show(btn.dataset.target);
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') show('home');
    });

    show('home');
})();
