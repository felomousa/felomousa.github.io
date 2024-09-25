---
title: "pixelDisplay"
layout: project
overview: "this main project squeezes as much functionality as possible out of a 192x32 pixel led matrix using a raspberry pi. whether you're checking your spotify, watching your minecraft health, or realizing how fast your day is slipping away, this display board has you covered."
subprojects:
  - title: "8-bit spotify (python)"
    github_link: "https://github.com/felomousa/SpotifyDisplay"
    description: |
      **skills**:  <span style="color:#F39C12;">openCV</span>, <span style="color:#3498DB;"></span><span style="color:#F39C12;">python requests</span>, <span style="color:#F39C12;">pillow</span>, <span style="color:#F39C12;">json handling</span>, <span style="color:#F39C12;">real-time data processing</span>,<span style="color:#3498DB;"> api & auth</span>

      - <span style="color:#3498DB;">spotify api</span> securely fetches song details (title, artist, album cover).
      - <span style="color:#F39C12;">openCV</span> downscales the album art to fit the matrix, because, you know, 192x32.
      - a <span style="color:#2ECC71;">live progress bar</span> tracks song playtime, accurate to ± 1 second.

      

    gif: "media/spotify_display.gif"

  - title: "minecraft display (java & python)"
    github_link: "https://github.com/felomousa/R.A.D"
    description: |
      **skills**:  <span style="color:#F39C12;">flask</span>, <span style="color:#F39C12;">fabric modding</span>, <span style="color:#F39C12;">threading</span>, <span style="color:#F39C12;">webserver setup</span>, <span style="color:#F39C12;">real-time data syncing</span>, <span style="color:#F39C12;">json</span>

      - a <span style="color:#F39C12;">fabric mod</span> written in java watches your health in real-time and triggers updates.
      - sends <span style="color:#F39C12;">HTTP POST requests</span> to a <span style="color:#F39C12;">Flask web server</span> on the raspberry pi whenever your health changes.
      - the <span style="color:#9B59B6;">raspberry pi</span> parses the data and displays the hearts.



    gif: "media/health.gif"

  - title: "clock (python)"
    description: |
      - <span style="color:#F39C12;">fetches</span> the current time and date.
      - <span style="color:#F39C12;">calculates</span> the percentage of the day remaining.
      - <span style="color:#2ECC71;">animates a progress bar</span> on the led matrix to remind you just how little time is left in the day.
    gif: "media/time.gif"
---