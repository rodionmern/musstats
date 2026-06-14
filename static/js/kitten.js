document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio('/static/sounds/cat.mp3');

    const trigger = document.querySelector('.kitten-img');
    const target = document.querySelector('.top-albums');
    
    if (trigger) {
        trigger.onmouseover = function() {
            target.style.opacity = 0;
        };
        trigger.onmouseout = function() {
            audio.load();
            audio.play();
            target.style.opacity = 1;
        };
    }
});