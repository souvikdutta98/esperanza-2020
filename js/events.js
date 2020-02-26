const contestName = document.getElementById("contest-name");
const popUp = document.querySelector("#pop-up");
const contestDescription = document.getElementById("contest-description");
const showPopUp = (e) => {
    popUp.classList.toggle("hide");
    data.forEach(elem => {
        if (e.target.innerHTML == elem.eventName) {
            contestName.innerHTML = data[0].eventName;
            contestDescription.innerHTML = data[0].description;
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