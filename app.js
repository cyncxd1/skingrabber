search.onkeydown = (inp) => {
	let search = document.getElementById('search'),
		img = document.querySelector('.card-img-top'),
		src = `https://minotar.net/skin/${search.value}`

	if (inp.key === 'Enter') {
		switch (search.value) {
			case '':
				img.src = 'https://file.garden/ZqPrCJ2v7HmQTmrR/transparent.png'
				img.style.position = 'absolute'
				img.style.opacity = 0
				break
			default:
				img.src = src
				img.style.position = 'static'
				img.style.opacity = 1
		}
	}
}

document.body.onload = () => {
	search.value = ''
}
