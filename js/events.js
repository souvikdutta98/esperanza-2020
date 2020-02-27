const popUp = document.querySelector("#pop-up");

/*-----------------Pop Up configuration Starts-----------------*/

const contestName = document.getElementById("contest-name");
const contestBody = document.getElementById("contest-body-container");
const contestDescription = document.getElementById("contest-description");
const structure = document.getElementById("structure");
const videoContainer = document.getElementById("video");
const prizeMoney = document.getElementById("moneyPrize");
const pm = document.getElementById("prize-money");
const rules = document.getElementById("rules");
const registerButton = document.querySelector(".register-button");

/*-----------------Pop Up configuration Ends-----------------*/

var toBeRemovedLaterElement = null;

const showPopUp = (e) => {
    data.forEach(elem => {
        console.log(elem.eventName);
        if (e.target.innerHTML == elem.eventName) {
            pm.classList.remove("hide");
            contestBody.classList.remove("hide");
            fillPopUp(elem);
            toBeRemovedLaterElement = elem;
        }
    })
    document.body.style.overflowY = "hidden";
    popUp.classList.toggle("hide");
}

const hidePopUp = () => {
    popUp.classList.toggle("hide");
    prizeMoney.removeChild(prizeMoney.firstChild);
    contestName.removeChild(contestName.firstChild);
    contestDescription.removeChild(contestDescription.firstChild);
    structure.removeChild(structure.lastChild);
    rules.removeChild(rules.lastChild);
    if (toBeRemovedLaterElement.eventStructure != undefined) {
        toBeRemovedLaterElement.eventStructure.forEach(elem => {
            structure.removeChild(structure.lastChild);
        })
    }
    toBeRemovedLaterElement.rules.forEach(elem => {
        rules.removeChild(rules.lastChild);
    })

    /*################# Removing Video Element ################*/

    let a = document.getElementById("video-player");
    a.parentNode.removeChild(a);
    structure.classList.remove("hide");

    /*################# Hiding Unnecessary ################*/

    pm.classList.add("hide");
    contestBody.classList.add("hide");
    document.body.style.overflowY = "scroll";

}



function fillPopUp(elem) {
    contestName.appendChild(document.createTextNode(elem.eventName));
    contestDescription.appendChild(document.createTextNode(elem.description));
    prizeMoney.appendChild(document.createTextNode(elem.prizeMoney));


    /*################# Adding Video Element ################*/

    var video = document.createElement("video");
    video.setAttribute("class", "video-js");
    video.setAttribute("id", "video-player");
    video.setAttribute("preload", "auto");
    video.setAttribute("width", "50%");
    video.setAttribute("height", "auto");
    video.controls = true;
    video.setAttribute("controlsList", "nodownload");
    var source = document.createElement("source");
    source.src = elem.videoURL;
    source.type = "video/mp4";
    source.setAttribute("id", "demo-video");
    video.appendChild(source);
    videoContainer.appendChild(video);



    /*################# Forming the structure element ################*/

    if (elem.eventStructure != undefined) {
        var node = document.createElement('li');
        var textNode = document.createTextNode(`Number of Rounds : ${elem.eventStructure.length}`);
        node.appendChild(textNode);
        node.style.fontWeight = 600;
        node.style.listStyleType = "none";
        node.style.color = "red";
        structure.appendChild(node);
        elem.eventStructure.forEach(element => {
            var node = document.createElement('li');
            var textNode = document.createTextNode(element);
            node.appendChild(textNode);
            structure.appendChild(node);
        });
        structure.classList.remove("hide");
    }
    else{
        structure.classList.add("hide");
    }

    /*################# Forming the Rules and Regulation element ################*/

    elem.rules.forEach(element => {
        var node = document.createElement('li');
        var textNode = document.createTextNode(element);
        node.appendChild(textNode);
        rules.appendChild(node);
    });

}

