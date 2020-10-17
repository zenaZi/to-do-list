function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }

}


function viewItem(anchor, position, html) {

    let item = document.createElement('div');
    item.className = "item";
    item.innerHTML = html;
    document.body.append(item);

    positionAt(anchor, position, item);
}


let blockquote = document.querySelector('blockquote');

viewItem(blockquote, "top", "элемент наверху");
viewItem(blockquote, "right", "элемент справа");
viewItem(blockquote, "bottom", "элемент внизу");