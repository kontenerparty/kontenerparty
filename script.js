const target = new Date("2026-08-21T15:00:00");

function updateCountdown(){

    const now = new Date();

    let difference = target - now;

    if(difference < 0){
        difference = 0;
    }

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);

    const hours = Math.floor(
        difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        difference % (1000 * 60 * 60) / (1000 * 60)
    );

    const seconds = Math.floor(
        difference % (1000 * 60) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);