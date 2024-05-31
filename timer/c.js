let countdownFunction;

function startCountdown() {
    // Clear any previous interval
    if (countdownFunction) {
        clearInterval(countdownFunction);
    }

    // Get the user input date and time
    const userInput = document.getElementById('dateInput').value;
    const countDownDate = new Date(userInput).getTime();

    if (isNaN(countDownDate)) {
        alert("Please enter a valid date and time.");
        return;
    }

    // Update the count down every 1 second
    countdownFunction = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

