const slidingBar = document.querySelector(".slidingBar");
const icon = document.querySelector("i");
const login = document.querySelector(".login");
const loginBlock = document.querySelector(".loginForm");
const form=document.querySelector("form");
const icon2 = document.querySelector(".fa-times");

const show=() => {
 slidingBar.classList.toggle("show");
}

icon.addEventListener("click",show);

icon2.addEventListener("click", ()=> {
 form.classList.toggle("showtime");
})


form.addEventListener("submit", e=> {
 e.preventDefault(); 
 form.classList.toggle("showtime");
});

login.addEventListener("click", ()=>{
 form.classList.add("showtime");
})