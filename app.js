search.onkeydown = (inp) => {
	let search = document.getElementById('search'),
		img = document.querySelector('.card-img-top'),
		src = `https://minotar.net/skin/${search.value}`
	if (inp.key === 'Enter') {
		if (search.value === '') {
			img.src = 'https://file.garden/ZqPrCJ2v7HmQTmrR/transparent.png'
			img.style.position = 'absolute'
            img.style.pointerEvents = 'none'
            img.style.opacity = 0
		} else {
			img.src = src
			img.style.position = 'static'
            img.style.pointerEvents = 'all'
            img.style.opacity = 1
		}
	}
}

document.body.onload = () => {

	search.value = ''
}
