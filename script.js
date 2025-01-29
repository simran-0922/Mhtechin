document.addEventListener('DOMContentLoaded', function() {
    
    const timeDisplay = document.getElementById('time');
    const dateDisplay = document.getElementById('date');
   
    const refreshButton = document.querySelector('.profile-refresh');
    
    // Update time display (Simran)
    function updateTime() {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        dateDisplay.textContent = now.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            weekday: 'long'
        });
    }

    // Handle refresh button click(Simran)
    refreshButton.addEventListener('click', function() {
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 1000);
        updateTime();
    });

    
    
});