// Background Music Control
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const savedMusicState = localStorage.getItem('westwood-music-enabled');
    
    // Set initial volume
    bgMusic.volume = 0.3; // 30% volume (adjust as needed)
    
    // Check if user previously enabled/disabled music
    const isMusicEnabled = savedMusicState !== 'disabled';
    
    // Function to attempt playing music
    function playMusic() {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // If autoplay fails, wait for user interaction
                console.log('Autoplay prevented - waiting for user interaction');
            });
        }
    }
    
    // Function to update button state
    function updateMusicButton() {
        if (bgMusic.paused) {
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            musicToggle.classList.remove('music-playing');
        } else {
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            musicToggle.classList.add('music-playing');
        }
    }
    
    // Try to play music on page load
    if (isMusicEnabled) {
        playMusic();
    }
    
    // Toggle music on button click
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            localStorage.setItem('westwood-music-enabled', 'enabled');
        } else {
            bgMusic.pause();
            localStorage.setItem('westwood-music-enabled', 'disabled');
        }
        updateMusicButton();
    });
    
    // Update button state when music plays/pauses
    bgMusic.addEventListener('play', updateMusicButton);
    bgMusic.addEventListener('pause', updateMusicButton);
    
    // Fallback: Enable music on first user interaction
    document.addEventListener('click', function playOnInteraction() {
        if (bgMusic.paused && isMusicEnabled) {
            playMusic();
            updateMusicButton();
            document.removeEventListener('click', playOnInteraction);
        }
    }, { once: true });
});