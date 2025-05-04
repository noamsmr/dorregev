var contactOpen = false;
const bodyMarginBottomREM = 8;
const contactDeltaHeight = 160;

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function onClickHeader(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function onClickContact() {
    var footerEl = document.getElementById('footer');
    var bodyEl = document.getElementById('body');
    
    console.log(bodyEl.style.marginBottom);
    
    if (contactOpen) {
        footerEl.style.height = (footerEl.clientHeight - contactDeltaHeight) + "px";
        bodyEl.style.marginBottom = convertRemToPixels(bodyMarginBottomREM) + "px";
    } else {
        footerEl.style.height = (footerEl.clientHeight + contactDeltaHeight) + "px";
        bodyEl.style.marginBottom = convertRemToPixels(bodyMarginBottomREM) + contactDeltaHeight + "px";
    }

    contactOpen = !contactOpen;

    var element = document.getElementById('contact');
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}