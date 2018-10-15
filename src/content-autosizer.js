function autosizer(object){
    if (window.innerWidth < object.innerWidth) {
        document.body.style.zoom = window.innerWidth / object.innerWidth;
        document.body.style.MozTransform = 'scale(' + window.innerWidth / object.innerWidth + ')';
        document.body.style.WebkitTransform = 'scale(' + window.innerWidth / object.innerWidth + ')';
    }
};
