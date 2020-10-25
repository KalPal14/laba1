import React from 'react'
import ReactDOM from 'react-dom'
import { formSubmit, calculateTheCost } from './js/checkout'
import { openMenu, scrolltoAbout, scrolltoCheckout, scrolltoReviews } from './js/menu'
import AddReview from './components/addReview'



let menuBurger = document.querySelector(".menu_burger");
menuBurger.onclick = openMenu;
aboutUs.onclick = scrolltoAbout;
checkout.onclick = scrolltoCheckout;
reviews.onclick = scrolltoReviews;



document.querySelector(".checkout_form").addEventListener('submit', formSubmit)
document.querySelector(".checkout_form").addEventListener('change', calculateTheCost)

window.React = React

ReactDOM.render(
   <AddReview></AddReview>,
   reactContainer
)

