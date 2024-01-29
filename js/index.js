const hidden_menu = document.querySelector(".hidden-menu");
const second_menu = document.querySelector(".second-menu");
const second_menuScroll = document.querySelector(".second-menuScroll");
const close_icon = document.querySelector(".close-icon");

const show = document.querySelector(".second-drop");
const show2 = document.querySelector(".third-drop");


const drop_list = document.querySelector(".dropd");
const drop_list2 = document.querySelector(".dropu");
const testi_list = document.querySelector(".testd");
const testi_list2 = document.querySelector(".testu");

const third_drop = document.querySelector(".third-drop");

const scroll_menu = document.querySelector(".scroll-menu");
const main_menu = document.querySelector(".main-menu");
const menu_color = document.querySelector(".menu-color");
const active_white = document.querySelector(".active-white");
const logo = document.querySelector(".logo");
const logo_scroll_two = document.querySelector(".logo-scroll-two");
const menu_items = document.querySelector(".menu-items");

// .....................scroll-menu items

const color_one = document.querySelector(".main-color-one");
const color_two = document.querySelector(".main-color-two");
const color_three = document.querySelector(".main-color-three");
const color_four = document.querySelector(".main-color-four");
const color_five = document.querySelector(".main-color-five");
const color_six = document.querySelector(".main-color-six");

// -------------show-hide sidebar menu

// ............conect-box
let name_box = document.querySelector(".name-box");
let email_box = document.querySelector(".email-box");
let text_box = document.querySelector(".text-box");
let last_name = document.querySelector(".last-name")

// .................... Modal

let img_one = document.querySelector(".ptf-link-one");
let img_two = document.querySelector(".ptf-link-two");
let modal = document.querySelector(".modal-img");
let modal_two = document.querySelector(".modal-img-two");

let img_modal = document.querySelector(".modal-content");
let close = document.querySelector(".close");
let close_two = document.querySelector(".close-two");


name_box.addEventListener('click', function () {
    name_box.classList.add("green-border");
    last_name.classList.remove("green-border");
    email_box.classList.remove("green-border");
    text_box.classList.remove("green-border");
})

last_name.addEventListener('click', function () {
    last_name.classList.add("green-border");
    name_box.classList.remove("green-border");
    email_box.classList.remove("green-border");
    text_box.classList.remove("green-border");
})

email_box.addEventListener('click', function () {
    email_box.classList.toggle("green-border");
    name_box.classList.remove("green-border");
    last_name.classList.remove("green-border");
    text_box.classList.remove("green-border");
})

text_box.addEventListener('click', function () {
    text_box.classList.add("green-border");
    name_box.classList.remove("green-border");
    last_name.classList.remove("green-border");
    email_box.classList.remove("green-border");

})




second_menu.addEventListener('click', function () {
    hidden_menu.classList.toggle("hidden");
    second_menu.classList.add("hidden");

})

second_menuScroll.addEventListener('click', function () {
    hidden_menu.classList.toggle("hidden");
    second_menu.classList.add("hidden");
})

close_icon.addEventListener('click', function () {
    hidden_menu.classList.add("hidden");
    second_menu.classList.remove("hidden");


})

// ------------dropdown menu
drop_list.addEventListener('click', function () {
    drop_list.classList.toggle("hidden");
    drop_list2.classList.toggle("hidden");
    show.classList.toggle("show-drop");
    show.classList.toggle("hidden");
})
drop_list2.addEventListener('click', function () {
    drop_list.classList.toggle("hidden");
    drop_list2.classList.toggle("hidden");
    show.classList.toggle("show-drop");
    show.classList.toggle("hidden");
})

testi_list.addEventListener('click', function () {
    testi_list.classList.toggle("hidden");
    testi_list2.classList.toggle("hidden");
    show2.classList.toggle("show-drop");
    show2.classList.toggle("hidden");
})
testi_list2.addEventListener('click', function () {
    testi_list.classList.toggle("hidden");
    testi_list2.classList.toggle("hidden");
    show2.classList.toggle("show-drop");
    show2.classList.toggle("hidden");
})

// ---------------------scroll-menu

window.addEventListener('scroll', function () {
    if (window.scrollY > 380) {
        scroll_menu.classList.remove("hidden");
        logo.classList.add("hidden");
        second_menu.classList.add("hidden");
        main_menu.classList.add("row-of-menu");
        logo.classList.add("row-of-menu-color")
        active_white.classList.add("row-of-menu-color");
        menu_color.classList.add("row-of-menu-color");
        menu_items.classList.add("row-of-menu-color");
        logo_scroll_two.classList.remove("hidden");

    }
    else if (window.scrollY < 380) {
        scroll_menu.classList.add("hidden");
        logo.classList.remove("hidden");
        second_menu.classList.remove("hidden");
        main_menu.classList.remove("row-of-menu");
        logo.classList.remove("row-of-menu-color")
        active_white.classList.remove("row-of-menu-color");
        menu_color.classList.remove("row-of-menu-color");
        menu_items.classList.remove("row-of-menu-color");
        logo_scroll_two.classList.add("hidden");

    }

})

window.addEventListener('scroll', function () {
    if ((window.scrollY > 590)) {
        color_one.classList.add("green-color");
    }
    if ((window.scrollY < 590)) {
        color_one.classList.remove("green-color");
    }
    if (window.scrollY > 1555) {
        color_one.classList.remove("green-color");
    }
    if ((window.scrollY > 1558)) {
        color_two.classList.add("green-color");
    }
    if ((window.scrollY < 1558)) {
        color_two.classList.remove("green-color");
    }
    if (window.scrollY > 2700) {
        color_two.classList.remove("green-color");
    }
    if ((window.scrollY > 2710)) {
        color_three.classList.add("green-color");
    }
    if ((window.scrollY < 2710)) {
        color_three.classList.remove("green-color");
    }
    if (window.scrollY > 3310) {
        color_three.classList.remove("green-color");
    }
    if ((window.scrollY > 3315)) {
        color_four.classList.add("green-color");
    }
    if ((window.scrollY < 3315)) {
        color_four.classList.remove("green-color");
    }
    if (window.scrollY > 4210) {
        color_four.classList.remove("green-color");
    }
    if ((window.scrollY > 5150)) {
        color_five.classList.add("green-color");
    }
    if ((window.scrollY < 5150)) {
        color_five.classList.remove("green-color");
    }
    if (window.scrollY > 5850) {
        color_five.classList.remove("green-color");
    }
    if ((window.scrollY > 5900)) {
        color_six.classList.add("green-color");
    }
    if (window.scrollY < 5900) {
        color_six.classList.remove("green-color");
    }
})

img_one.addEventListener('click', function () {
    modal.classList.remove("hidden");
})

img_two.addEventListener('click', function () {
    modal_two.classList.remove("hidden")
})

close_two.addEventListener('click', function () {
    modal_two.classList.add("hidden");
})

close.addEventListener('click', function () {
    modal.classList.add("hidden");
})




