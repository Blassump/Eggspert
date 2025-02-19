let countdownInterval;
let seconds = 0;

function startTimer() {
    clearInterval(countdownInterval); // รีเซ็ตเวลาถ้ามีการเริ่มใหม่
    seconds = document.getElementById("eggType").value * 60;
    let countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        countdownElement.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(countdownInterval);
            alert("ไข่ต้มเสร็จแล้ว!");
        }
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function stopTimer() {
    clearInterval(countdownInterval); // หยุดตัวจับเวลา
    document.getElementById("countdown").innerText = "00:00"; // รีเซ็ตตัวเลขแสดงผล
}
