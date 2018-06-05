function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function showElem(elemID) {
    var elem = document.getElementById(elemID);
    var className = 'hidden';

    if (elem.classList)
        elem.classList.remove(className);
    else
        elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function showOrderBefore(showDate) {
    var todaysDate = new Date();
    var availDate = new Date(showDate);

    if (todaysDate < availDate) {
        showElem('order06jun18');
    }
}

ready(showOrderBefore('06/06/2018'));