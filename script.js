var sfx_active = new Audio('sfx/active.wav');
var sfx_hover = new Audio('sfx/hover.wav');
function play_active(){
	sfx_active.currentTime = 0;
	sfx_active.play();
}
function play_hover(){
	sfx_hover.currentTime = 0;
	sfx_hover.play();
}
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
	    btn.addEventListener('click', play_active);
	    btn.addEventListener('mouseover', play_hover);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') show('home');
    });

    show('home');
})();
//for the sake of fixing the build task
