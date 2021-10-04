const navToggle = document.querySelector(".nav-btn")
const links = document.querySelector(".nav-links")

navToggle.addEventListener("click", () => {
	links.classList.toggle("show-nav")
})
