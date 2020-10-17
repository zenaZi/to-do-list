let engine = slider.querySelector('.engine');

engine.onmousedown = function(event) {
    event.preventDefault();

    let shiftX = event.clientX - engine.getBoundingClientRect().left;


    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);

    function mouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;


        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - engine.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        engine.style.left = newLeft + 'px';
    }

    function mouseUp() {
        document.removeEventListener('mouseup', mouseUp);
        document.removeEventListener('mousemove', mouseMove);
    }

};

engine.dragstart = function() {
    return false;
};