---
title: "pixelDisplay"
layout: project
overview: "This project maximizes the functionality of a 192x32 pixel LED matrix using a Raspberry Pi. Whether you're tracking Spotify, monitoring Minecraft health, or keeping an eye on the time, this display board has you covered."
---

<style>
  code {
    background-color: #d092ff; /* Light purple background for code blocks */
    padding: 2px 4px;
    border-radius: 4px;
    color: #000000; /* Dark text for code blocks */
  }
  img {
    width: 40%; 
</style>

### Subprojects:

#### 8-bit Spotify (Python)
<img src="/media/spotify_display.gif" alt="Spotify Display">
- **Skills**: <code>openCV</code>, <code>python requests</code>, <code>pillow</code>, <code>json</code>, <code>real-time data</code>, <code>API & auth</code>
- Fetches song details (title, artist, album cover) using the Spotify API
- Downscales album art to fit the 192x32 matrix with openCV
- Displays a live progress bar for song playtime (± 1 second)

#### Minecraft Display (Java & Python)
<img src="/media/health.gif" alt="Minecraft Health">
- **Skills**: <code>flask</code>, <code>fabric modding</code>, <code>threading</code>, <code>webserver setup</code>, <code>real-time syncing</code>, <code>json</code>
- Java Fabric mod monitors player health in real-time, triggering updates
- Sends HTTP POST requests to a Flask server on the Raspberry Pi to display health data on the matrix

#### Clock (Python)
<img src="/media/time.gif" alt="Clock Display">
- Fetches the current time and date
- Calculates the percentage of the day remaining
- Animates a progress bar to show how much time is left in the day
