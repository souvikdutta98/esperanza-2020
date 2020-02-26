const contestName = document.getElementById("contest-name");
const popUp = document.querySelector("#pop-up");
const contestDescription = document.getElementById("contest-description");
const showPopUp = (e) => {
    popUp.classList.toggle("hide");
    data.forEach(elem => {
        console.log(elem.eventName);
        if (e.target.innerHTML == elem.eventName) {
            contestName.innerHTML = elem.eventName;
            contestDescription.innerHTML = elem.description;
        }
        else{
            contestName.innerHTML = "Something went wrong";
            console.log(`Sorry something went wrong`);
        }
    })
}

const hidePopUp = () => {
    popUp.classList.toggle("hide");
}