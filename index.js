function burgerMenuClicked() {
    const burgerStatus = document.getElementById("icon-menu")
    const navMenuUl = document.getElementById("nav-menu-ul");

    if(burgerStatus.className.match("burger-open")) {
        burgerStatus.setAttribute("class", "burger-close")
        burgerStatus.setAttribute("src", "images/icon-close.svg")
        navMenuUl.style.setProperty("height", "auto")
        navMenuUl.style.setProperty("opacity", "1")
    } else {
        burgerStatus.setAttribute("class", "burger-open")
        burgerStatus.setAttribute("src", "images/icon_menu.svg")
        navMenuUl.style.setProperty("opacity", "0")
        navMenuUl.style.setProperty("height", "0")
    }
}