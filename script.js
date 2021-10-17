// ------Toggle nav links
const navToggle = document.querySelector(".nav-btn")
const links = document.querySelector(".nav-links")

navToggle.addEventListener("click", () => {
	links.classList.toggle("show-nav")
})

// ------Get data for animal-list

// Get the local JSON and pass it to populateAnimalList as an obj
let requestURL = "./animals.json"
let request = new XMLHttpRequest()
request.open("GET", requestURL)
request.responseType = "json"
request.send()
request.onload = function () {
	const animals = request.response
	console.log("funciono?", animals)
	populateAnimalList(animals)
}

// Extract the data from the obj an put it in the div container
function populateAnimalList(obj) {
	const animalList = document.querySelector(".animal-list")

	for (let i = 0; i < obj.length; i++) {
		const div = document.createElement("div")
		const a = document.createElement("a")
		const img = document.createElement("img")
		const h4 = document.createElement("h4")
		const p = document.createElement("p")
		const aText = document.createElement("a")

		h4.textContent = obj[0].name
		p.textContent = obj[0].info

		// Add respective classes
		div.classList.add("animal")
		a.classList.add("animal-link")
		img.classList.add("img")
		h4.classList.add("animal-name")
		p.classList.add("animal-desc")
		aText.classList.add("learn-more")
		// Append elements
		a.appendChild(img)
		div.appendChild(a)
		p.appendChild(aText)
		div.appendChild(h4)
		div.appendChild(p)
		animalList.appendChild(div)
	}
}
