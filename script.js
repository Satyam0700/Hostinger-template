
const show = document.querySelector(".show");
const showButton = document.querySelector(".show-more");

showButton.addEventListener('click', () => {
    show.classList.toggle('show-iteam');
    if(showButton.innerHTML === 'Show less'){
        showButton.innerHTML = "Show more"
    }else{
        showButton.innerHTML = "Show less"
    }
})

//setup offer expier time
let lunchDate = new Date("Sep 28, 2022 12:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick () {

    let now = new Date().getTime();

    let t = lunchDate - now;

    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) { days ="0" + days; }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours ="0" + hours; }

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins ="0" + mins; }

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs ="0" + secs; }

        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector(".countdown").innerHTML = time;
    }
}

// small screen js

let sidemeu = document.getElementById("sidemenu");


function  openmenu(){
    sidemeu.style.right ="0";
}
function closemenu(){
    sidemeu.style.right ="-200px";
}