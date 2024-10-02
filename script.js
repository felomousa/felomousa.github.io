function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function redirectToMobile() {
    if (isMobile() && !window.location.href.includes('mobile-index.html')) {
        window.location.href = 'mobile-index.html';
    }
}

redirectToMobile();

function timeAgo(date) {
    const now = new Date();
    const timePlayed = new Date(date);
    const diff = Math.abs(now - timePlayed);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `just now`;
    }
}

fetch('https://callback.felomousa.com/spotify')
    .then(response => response.json())
    .then(data => {
        document.getElementById('album-cover').src = data.album_cover_url;

        document.getElementById('song-name').textContent = data.song_name;
        document.getElementById('artist-name').textContent = data.artist_name;

        document.getElementById('time-ago').textContent = timeAgo(data.time_played);
    })
    .catch(error => {
        console.error('Error fetching Spotify data:', error);
    });


fetch('https://callback.felomousa.com/netflix')
    .then(response => response.json())
    .then(data => {
        document.getElementById('netflix-title').textContent = data.title;
        document.getElementById('netflix-rating').textContent = data.rating;
    })
    .catch(error => {
        console.error('Error fetching Netflix data:', error);
    });