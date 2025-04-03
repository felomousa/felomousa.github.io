function timeAgo(date) {
    const now = new Date()
    const timePlayed = new Date(date)
    const diff = Math.abs(now - timePlayed)
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
    } else {
        return `just now`
    }
}

function setLoadingState(elementId, isLoading) {
    const element = document.getElementById(elementId)
    if (element) {
        if (isLoading) {
            element.classList.add("loading")
            element.style.opacity = "0.7"
        } else {
            element.classList.remove("loading")
            element.style.opacity = "1"
        }
    }
}

if (document.getElementById("spotify-status")) {
    setLoadingState("spotify-status", true)
}


function fetchSpotifyData() {
    fetch("https://api.felomousa.com/spotify")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        })
        .then((data) => {
            document.getElementById("album-cover").src = data.album_cover_url
            document.getElementById("song-name").textContent = data.song_name
            document.getElementById("artist-name").textContent = data.artist_name
            document.getElementById("time-ago").textContent = timeAgo(data.time_played)

            if (document.getElementById("spotify-status")) {
                document.getElementById("spotify-status").classList.remove("loading")
                document.getElementById("spotify-status").style.opacity = "1"
            }
        })
        .catch((error) => {
            console.error("Error fetching Spotify data:", error)
            document.getElementById("song-name").textContent = "Not available"
            document.getElementById("artist-name").textContent = ""
            document.getElementById("time-ago").textContent = ""

            if (document.getElementById("spotify-status")) {
                document.getElementById("spotify-status").classList.remove("loading")
                document.getElementById("spotify-status").style.opacity = "1"
            }
        })
}

fetchSpotifyData()

setInterval(fetchSpotifyData, 5 * 60 * 1000)

document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("failed to fetch projects data")
            }
            return response.json()
        })
        .then((projectsData) => {
            loadProjects(projectsData)
        })
        .catch((error) => {
            console.error("Error loading projects:", error)
        })
})

function loadProjects(projects) {
    const projectsContainer = document.getElementById("projects-container")
    projectsContainer.innerHTML = ""

    projects.forEach((project) => {
        const projectCard = document.createElement("div")
        projectCard.className = "project-card"
        projectCard.setAttribute("data-skills", project.skills)

        projectCard.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-footer">
          <button class="expand-button" onclick="openProjectModal(this)">
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 3L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="project-links">
            <a href="${project.demoLink}" class="project-link">View Demo</a>
            <a href="${project.githubLink}" class="project-link">GitHub</a>
          </div>
        </div>
        <div class="project-details-content" style="display: none;">
          ${generateProjectDetails(project.details)}
        </div>
      `
        projectsContainer.appendChild(projectCard)
    })
}

function generateProjectDetails(details) {
    let html = ""
    if (details.overview) {
        html += `
        <div class="project-detail-section">
          <h4 class="project-detail-title">Project Overview</h4>
          <p class="project-detail-text">${details.overview}</p>
        </div>
      `
    }
    if (details.features) {
        html += `
        <div class="project-detail-section">
          <h4 class="project-detail-title">Key Features</h4>
          <ul class="project-detail-list">
            ${details.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
      `
    }
    if (details.challenges) {
        html += `
        <div class="project-detail-section">
          <h4 class="project-detail-title">Technical Challenges</h4>
          <p class="project-detail-text">${details.challenges}</p>
        </div>
      `
    }
    if (details.implementation) {
        html += `
        <div class="project-detail-section">
          <h4 class="project-detail-title">Technical Implementation</h4>
          <p class="project-detail-text">${details.implementation}</p>
        </div>
      `
    }
    if (details.security) {
        html += `
        <div class="project-detail-section">
          <h4 class="project-detail-title">Security Measures</h4>
          <ul class="project-detail-list">
            ${details.security.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `
    }
    return html
}

function openProjectModal(button) {
    const projectCard = button.closest(".project-card")
    const projectTitle = projectCard.querySelector(".project-title").textContent
    const projectDescription = projectCard.querySelector(".project-description").textContent
    const projectTags = projectCard.querySelector(".project-tags").innerHTML
    const projectDetails = projectCard.querySelector(".project-details-content").innerHTML

    const demoLink = projectCard.querySelector(".project-links a:first-child").href
    const githubLink = projectCard.querySelector(".project-links a:last-child").href

    document.getElementById("modal-title").textContent = projectTitle
    document.getElementById("modal-description").textContent = projectDescription
    document.getElementById("modal-tags").innerHTML = projectTags
    document.getElementById("modal-details").innerHTML = projectDetails
    document.getElementById("modal-demo-link").href = demoLink
    document.getElementById("modal-github-link").href = githubLink

    const modal = document.getElementById("project-modal")
    modal.classList.add("active")
    document.body.classList.add("modal-open")
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal")
    modal.classList.remove("active")
    document.body.classList.remove("modal-open")
}

document.getElementById("project-modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeProjectModal()
    }
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.getElementById("project-modal").classList.contains("active")) {
        closeProjectModal()
    }
})


document.addEventListener("DOMContentLoaded", () => {
    const skillTags = document.querySelectorAll(".skill-tag[data-skill]")
    let activeSkill = null

    skillTags.forEach((tag) => {
        tag.addEventListener("click", function () {
            const skill = this.getAttribute("data-skill")
            const projectCards = document.querySelectorAll(".project-card")

            if (activeSkill === skill) {
                activeSkill = null
                this.classList.remove("active")
                projectCards.forEach((card) => {
                    card.classList.remove("dimmed")
                })
            } else {
                skillTags.forEach((t) => t.classList.remove("active"))
                this.classList.add("active")
                activeSkill = skill
                projectCards.forEach((card) => {
                    const cardSkills = card.getAttribute("data-skills").split(",")
                    if (cardSkills.includes(skill)) {
                        card.classList.remove("dimmed")
                    } else {
                        card.classList.add("dimmed")
                    }
                })
            }
        })
    })
})
