document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelector('.kitten-img');
    const target = document.querySelector('.top-albums');
    
    if (trigger) {
        trigger.onmouseover = function() {
            target.style.opacity = 0;
            console.log('hover!');
        };
        trigger.onmouseout = function() {
            target.style.opacity = 1;
            console.log('out!');
        };
    }
});