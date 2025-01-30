// document.getElementById('punch-in').addEventListener('click', () => {
//     alert('Punch In button clicked!');
//   });

function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  document.getElementById("current-date").textContent = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', weekday: 'long' });
}
setInterval(updateTime, 1000);
updateTime();

let punchInTime = null;
let punchOutTime = null;
let isPunchedIn = false;

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

function punchInOut() {
  const now = new Date();
  if (!isPunchedIn) {
    punchInTime = now;
    document.getElementById("punch-in-time").textContent = formatTime(now);
    document.getElementById("punch-text").textContent = "PUNCH OUT";
    isPunchedIn = true;
  } else {
    punchOutTime = now;
    document.getElementById("punch-out-time").textContent = formatTime(now);
    calculateTotalHours();
    document.getElementById("punch-text").textContent = "PUNCH IN";
    isPunchedIn = false;
  }
}

function calculateTotalHours() {
  if (punchInTime && punchOutTime) {
    let diff = (punchOutTime - punchInTime) / 1000 / 60 / 60;
    document.getElementById("total-hours").textContent = diff.toFixed(2);
  }
}

function refreshPage() {
  location.reload();
}


  