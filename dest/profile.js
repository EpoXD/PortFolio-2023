"use strict";
let linkPage1 = document.querySelector(`a[href="#page-1"]`);
linkPage1.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    let page2Top = ((_a = document.getElementById(`page-1`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top) || 0;
    window.scrollBy({
        top: page2Top - 80,
        left: 0,
        behavior: `smooth`
    });
});
let linkPage2 = document.querySelector(`a[href="#page-2"]`);
linkPage2.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    let page2Top = ((_a = document.getElementById(`page-2`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top) || 0;
    window.scrollBy({
        top: page2Top - 80,
        left: 0,
        behavior: `smooth`
    });
});
let linkPage3 = document.querySelector(`a[href="#page-3"]`);
linkPage3.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    let page2Top = ((_a = document.getElementById(`page-3`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top) || 0;
    window.scrollBy({
        top: page2Top - 80,
        left: 0,
        behavior: `smooth`
    });
});
let linkPage4 = document.querySelector(`a[href="#page-4"]`);
linkPage4.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    let page2Top = ((_a = document.getElementById(`page-4`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top) || 0;
    window.scrollBy({
        top: page2Top - 80,
        left: 0,
        behavior: `smooth`
    });
});
