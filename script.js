let navbar=document.querySelector(".navbar")
let menu_btn=document.getElementById("menu-btn")
menu_btn.onclick=function(){
    navbar.classList.toggle("active")
    cart_item.classList.remove("active")
    search_form.classList.remove("active")
}
let cart_item=document.querySelector(".card-item-container")
let shoping_icon=document.getElementById("shoping_cart")
shoping_icon.onclick=function(){
    cart_item.classList.toggle("active")
    navbar.classList.remove("active")
    search_form.classList.remove("active")
}
let search_btn=document.getElementById("search_btn")
let search_form=document.querySelector(".search-form")
search_btn.onclick=function(){
    cart_item.classList.remove("active")
    navbar.classList.remove("active")
    search_form.classList.toggle("active")
}