// Helper function to calculate time ago
function timeAgo(date) {
    const now = new Date();
    const timePlayed = new Date(date);
    const diff = Math.abs(now - timePlayed); // Difference in milliseconds

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

// Fetch data from the Spotify API
fetch('https://callback.felomousa.com/spotify')
    .then(response => response.json())
    .then(data => {
        // Update album cover
        document.getElementById('album-cover').src = data.album_cover_url;

        // Update song name, artist name, and album name
        document.getElementById('song-name').textContent = data.song_name;
        document.getElementById('artist-name').textContent = data.artist_name;

        // Calculate and update time played
        document.getElementById('time-ago').textContent = timeAgo(data.time_played);
    })
    .catch(error => {
        console.error('Error fetching Spotify data:', error);
    });


// Fetch data from the Netflix (Letterboxd) API
fetch('https://callback.felomousa.com/netflix')
    .then(response => response.json())
    .then(data => {
        // Update movie title and rating
        document.getElementById('netflix-title').textContent = data.title;
        document.getElementById('netflix-rating').textContent = data.rating;
    })
    .catch(error => {
        console.error('Error fetching Netflix data:', error);
    });