let menuBurger = document.querySelector(".menu_burger");
let menuList = document.querySelector(".menu_list");


export function openMenu(event) {
   menuBurger.classList.toggle("menu_open");
   menuList.classList.toggle("menu_list_hidden")
}

export function scrolltoAbout(event) {
   document.getElementById('AboutUs').scrollIntoView();
}

export function scrolltoCheckout(event) {
   Checkout.scrollIntoView();
}

export function scrolltoReviews(event) {
   Reviews.scrollIntoView();
}