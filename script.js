document.addEventListener('DOMContentLoaded', (event) => {
  
  const claim_btn = document.querySelector(".claimbtn");
  const show_countdown = document.querySelector(".countdown");
let earning_counter = document.querySelector(".earningcounter");
let earning = 0;

earning_counter.textContent = earning;

   // Set the countdown timer
   let countdownElement = document.getElementById('countdown');
   let countdownTime = 0o1 * 1 * 2 + 0o0 * 30 + 0; // initial countdown time in seconds

   function updateCountdown() {
     let hours = Math.floor(countdownTime / 3600);
     let minutes = Math.floor((countdownTime % 3600) / 60);
     let seconds = countdownTime % 60;

     countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

     if (countdownTime > 0) {
       countdownTime--;
     }
     else {
      clearInterval(intervalId);
      claim_btn.style.display = "inline-block";
    show_countdown.style.display = "none";

     }
   }

   let intervalId;
  
   claim_btn.addEventListener("click", ()=>{
    claim_btn.style.display = "none";
    show_countdown.style.display = "block";
    countdownTime = 0o1 * 1 * 2 + 0o0 * 30 + 0;
    // countdownTime = 0o1 * 60 * 60 + 0o0 * 60 + 0;
    intervalId = setInterval(updateCountdown, 1000);

    earning += 1000;
    earning_counter.textContent = earning;
    console.log(earning)
  })
  

//   const claim_btn = document.querySelector(".claimbtn");
// const show_countdown = document.querySelector(".countdown");

// // Set the countdown timer
// let countdownElement = document.getElementById('countdown');
// let countdownTime = 4; // initial countdown time in seconds

// function updateCountdown() {
//   let minutes = Math.floor(countdownTime / 60);
//   let seconds = countdownTime % 60;

//   countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//   if (countdownTime > 0) {
//     countdownTime--;
//   } else {
//     clearInterval(intervalId);
//     claim_btn.style.display = "inline-block";
//     show_countdown.style.display = "none";
//   }
// }

// let intervalId;

// claim_btn.addEventListener("click", () => {
//   claim_btn.style.display = "none";
//   show_countdown.style.display = "block";
//   countdownTime = 4; // reset the countdown time
//   intervalId = setInterval(updateCountdown, 1000);
// });



  });


   