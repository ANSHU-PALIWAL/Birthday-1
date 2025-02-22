function startCountdown(targetDate) {
    function updateTimer() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Time's up!";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);
}

// Set target date
const targetDate = new Date("2025-02-23T23:59:59").getTime();
startCountdown(targetDate);