
const toggleCheckbox = document.getElementById("toggle");
const toggleLabel = document.getElementById("toggleLabel");
const modalWrapper = document.getElementById("modalWrapper");


toggleCheckbox.onchange = function(event) {
    if (toggleCheckbox.checked) {
        const modalMenu = document.getElementById("myModal");
        toggleLabel.style.position = "fixed";
        modalMenu.style.display = "flex";
        modalWrapper.style.display = "flex";
    } else {
        toggleLabel.style.position = "absolute";
        const modalMenu = document.getElementById("myModal");
        modalMenu.classList.add("slideOut"); 
        setTimeout(() => {
            modalMenu.classList.remove("slideOut"); 
            modalMenu.style.display = "none";
            modalWrapper.style.display = "none";
        }, 500); 
    }
};



modalWrapper.addEventListener("click", (event) => {
    toggleCheckbox.checked = false;
    toggleCheckbox.onchange(event);
})



let logo = document.getElementById("logo");
logo.addEventListener("click", function() {
    window.location.href = "/";
})