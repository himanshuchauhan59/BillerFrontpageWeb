let toggleBol = false;
let open_toggle = document.getElementById("open-toggle");
let close_btn = document.getElementById("close_btn");
let nav_item = document.querySelectorAll("li.nav-item");
nav_item.forEach((ele) => {
    ele.addEventListener("click" , () => {
        $(".slide-over").slideToggle();
        open_toggle.style.transform = "rotate(0deg)";
        toggleBol = !toggleBol
    })
})

let nav_toggle = () => {  
    $(".slide-over").slideToggle();
    toggleBol = !toggleBol
    if (toggleBol) {
        open_toggle.style.transform = "rotate(90deg)";
    }
    else {
        open_toggle.style.transform = "rotate(0deg)";
    }
}

close_btn.addEventListener("click" , () => {
    toggleBol = !toggleBol
    $(".slide-over").slideToggle();
    open_toggle.style.transform = "rotate(0deg)";
    if (toggleBol) {
        close_btn.style.transform = "scaleX(-1)";
    }
    else {
        close_btn.style.transform = "scaleX(1)";
    }
})

