import { defineCustomElements } from '/se/web-ui/core/loader/index.js';
defineCustomElements(window);

const myApp = {};
window.myApp = myApp;

// Load HTML content
function fetch_text(url) {
    return fetch(url).then((response) => (response.text()));
}

function load(element, view) {
    return (event) => {
        const _tmp = (event || window.event);
        if (_tmp) {
            _tmp.preventDefault();
        }
        fetch_text(view).then((html) => {
            document.getElementById(element).innerHTML = html;
        }).catch((error) => {
            console.warn(error);
        });
    }
}
myApp.load_app = load("app", "/src/view/app.html");
myApp.load_icons = load("content", "/src/view/icons.html");
myApp.load_dashboard = load("content", "/src/view/dashboard.html");
myApp.load_home = load("content", "/src/view/home.html");

document.addEventListener('DOMContentLoaded', function () {
    myApp.load_app();

    document.addEventListener('readystatechange', function () {
        myApp.load_home();
    }, false);
}, false);
