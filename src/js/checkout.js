let allTotalTeg = document.querySelector(".checkout_total-h1")

export function formSubmit(target) {
   target.preventDefault()
   alert("Спасибо за ваш заказ. Мы скоро с вами свяжемся")

   document.querySelector(".checkout_form").reset()
   allTotalTeg.innerHTML = 'С вас <span>0</span> грн'
}

export function calculateTheCost(target) {
   if (from.value == 0 || where.value == 0 || way.value == 0 || !Number(weight.value)) {
      allTotalTeg.innerHTML = 'Заполните все поля правильно'
      return
   }
   if (from.value == where.value) {
      allTotalTeg.innerHTML = 'У вас выбраны одинаковые города доставки'
      return
   }
   let cost = +from.value + +where.value + +way.value + +weight.value
   allTotalTeg.innerHTML = `С вас <span>${cost}</span> грн`

}