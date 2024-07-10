document.addEventListener('DOMContentLoaded', (event) => {
    // Set the countdown timer
    let countdownElement = document.getElementById('countdown');
    let countdownTime = 0o1 * 60 * 60 + 0o0 * 60 + 0; // initial countdown time in seconds

    function updateCountdown() {
      let hours = Math.floor(countdownTime / 3600);
      let minutes = Math.floor((countdownTime % 3600) / 60);
      let seconds = countdownTime % 60;

      countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (countdownTime > 0) {
        countdownTime--;
      }
    }

    setInterval(updateCountdown, 1000);


 // Get the claim button element
 const claim_btn = document.getElementById('claim');

 // Add click event listener to the claim button
 claim_btn.addEventListener('click', () => {
     // Hide the claim button when clicked
     claim_btn.style.color = 'green';
 });

  });

