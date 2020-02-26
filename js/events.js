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
            console.log(`Sorry something went wrong`);
        }
    })
}

const hidePopUp = () => {
    popUp.classList.toggle("hide");
}



const data = [
    {
        "eventName": "Droidblitz",
        "description": "ESPERANZA, in association with the CGEC Student  presents Sandrover for the participants of ESPERANZA CHAPTER 3.Droid Blitz is a double-elimination event that requires participants to build wireless-remote controlled electric-powered robots that can be used to complete broken pathways and transfer packages by running on land as well as water terrains. Build an amphibious robot that can be used to perform tasks on land and water and traverse across uneven terrains.It’s the time to wake up “guess” in you.​",
        "videoURL": "https://youtube.com/randomURL",
        "prizeMoney": 5000,
        "rules": [1, 2, 3, 5, 6, 4]
    }
]
