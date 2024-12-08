const countdownElement = document.getElementById("countdown");
const tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);
// tomorrow.setHours(15, 0, 0, 0);

// let countdown = setInterval(() => {
//   const now = new Date();
//   const timeLeft = tomorrow - now;

//   if (timeLeft < 0) {
//     clearInterval(countdown);
//     console.log("Countdown stopped");
//   } else {
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
//   }
// }, 1000);
countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;