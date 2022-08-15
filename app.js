function stat(e) {
	let t = ` <div class="materialStatus"><span>${e}</span></div>`
	;(t = new DOMParser().parseFromString(t, "text/html")),
		(t = t.querySelector("div.materialStatus")),
		document.body.appendChild(t),
		setTimeout(() => {
			t.style.animation = "closeMaterialStatus 0.2s linear 5s 1 forwards"
		}, 5e3)
}
let qs = (e) => document.querySelector(e),
	pages = [
		{
			src: "/pages/paint.webp",
			speed: 1.2,
			type: "Landing Page",
			location: "https://newpaint.netlify.app",
			name: "Paint",
		},
		{
			src: "/pages/blog.webp",
			speed: 1.6,
			type: "Blog",
			location: "https://thatblog.netlify.app",
			name: "That Blog",
		},
		{
			src: "/pages/fire.webp",
			speed: 1.7,
			type: "Brand Page",
			location: "https://fireoauth.netlify.app",
			name: "Fire OAuth",
		},
		{
			src: "/pages/cool.webp",
			speed: 0.8,
			type: "Code Generator",
			location: "https://coolsw.pages.dev",
			name: "Cool SW",
		},
		{
			src: "/pages/idly.webp",
			speed: 1.4,
			type: "Landing Page",
			location: "https://idly1.netlify.app",
			name: "Idly",
		},
		{
			src: "/pages/privacy.webp",
			speed: 1.1,
			type: "Brand Page",
			location: "https://privacydefenders.pages.dev",
			name: "Privacy Defenders",
		},
		{
			src: "/pages/infant.webp",
			speed: 0.9,
			type: "Landing Page",
			location: "https://infant.pages.dev",
			name: "Infant Lang",
		},
	],
	fa = (e) => {
		let t = "",
			a = pages[e - 1]
		return (
			(t += `<div class="contentPhase">\n<div class="siteImageContainer">\n<img src="${a.src}" alt="${a.name}" height="400" width="556">\n</div>\n<div class="siteInfoContainer">\n<span class="pageSpeed">⚡${a.speed}s</span>\n<span class="pageType">${a.type}</span>\n<a class="pageLocation" rel="noopener noreferrer" href="${a.location}">Link ⛳</a>\n<div class="controlPhase">\n<button type="button" class="prevButton" data-prev="${e}" aria-label="prev">Previous</button>\n<button type="button" class="nextButton" data-prev="${e}" aria-label="next">Next</button>\n</div>\n</div>\n</div>`),
			t
		)
	}
document.addEventListener("click", (e) => {
	let t = e.target
	if (
		t.classList.contains("prevButton") ||
		t.classList.contains("nextButton")
	) {
		let a = t.dataset.prev,
			n = a
		t.classList.contains("prevButton") ? n-- : n++,
			n <= 0 && (n = pages.length),
			n > pages.length && (n = 1)
		let s = fa(n)
		;(qs(".sitesContainer").innerHTML = s), e.stopPropagation()
	} else if (t.classList.contains("contactUsButton")) {
		qs(".goodThingsHappen").scrollIntoView({ behavior: "smooth" })
	}
}),
	(qs(
		".rightsReserved"
	).textContent = `All Rights Reserved © ${new Date().getFullYear()} by <2 Seconds`)
