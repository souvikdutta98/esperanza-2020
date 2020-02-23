const droidBlitz = document.getElementById("pop");
const popUp = document.querySelector("#pop-up");
const back = document.querySelector("#go-back");

droidBlitz.addEventListener("click", _ => {
    popUp.classList.toggle("hide");
})

back.addEventListener("click", _ => {
    popUp.classList.toggle("hide");
})
