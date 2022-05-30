const openMenu = () => {
    document.getElementById("openMenu").classList.add("d-none");
    document.getElementById("openClose").classList.remove("d-none");
    document.getElementById("menu").classList.remove("sm-none");
}

const closeMenu = () => {
    document.getElementById("openMenu").classList.remove("d-none");
    document.getElementById("openClose").classList.add("d-none");
    document.getElementById("menu").classList.add("sm-none");
}