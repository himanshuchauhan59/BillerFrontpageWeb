let toggleBol = false;
let open_toggle = document.getElementById("open-toggle");
let close_btn = document.getElementById("close_btn");
let nav_item = document.querySelectorAll("li.nav-item");
let card = document.querySelectorAll(".card");

card.forEach((ele) => {
    ele.childNodes[3].childNodes[1].addEventListener("click" , () => {
        if(ele.childNodes[3].childNodes[1].style.transform == "") {
            ele.childNodes[3].childNodes[1].style.transform = "rotate(180deg)";
        }
        else {
            ele.childNodes[3].childNodes[1].style.transform = "";
        }
        
        $(`#${ele.childNodes[5].childNodes[3].id}`).slideToggle();
    })
})


nav_item.forEach((ele) => {
    ele.addEventListener("click" , () => {
        console.log("clicked");
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

