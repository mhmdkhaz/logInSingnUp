let clickHideSign = document.getElementById("hide");
let clickShowSign = document.getElementById("show");
let login = document.getElementById("log")
let sign = document.getElementById("sign");
let hideSignDiv = document.getElementById("all div");


// hide sign up
clickHideSign.onclick = function (){
    sign.classList.remove("show");
    sign.classList.add("hide");
    clickHideSign.style.display = "none";
    clickShowSign.style.display = "block";
    login.style.display = "block";
}

// show sign up
clickShowSign.onclick = function(e){
    sign.classList.remove("hide");
    sign.classList.add("show");
    hideSignDiv.style.display = "block";
    clickShowSign.style.display = "none"
    clickHideSign.style.display = "block";
    login.style.display = "none";
    e.preventDefault();
}

// placeholder hide
let placeholder = document.querySelectorAll("input");

placeholder.forEach(function (element) {
    element.onfocus = function () {
        element.setAttribute("data-plac" ,  element.getAttribute("placeholder"));
        element.removeAttribute("placeholder");
    }

    element.onblur = function () {
        element.setAttribute("placeholder" , element.getAttribute("data-plac"));
    }
})