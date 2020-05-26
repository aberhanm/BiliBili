let photos = document.querySelector('#photos')

			let imgs = photos.querySelectorAll('.img')

			let dots = document.querySelector('#dots').querySelectorAll('li')
			let current = 0
			let timer = null
			slide()
			for (let i = 0; i < imgs.length; i++) {
				imgs[i].index = i
				imgs[i].onmouseenter = () => {
					clearInterval(timer)
					current = i
				}
			}
			photos.onmouseleave = function() {
				slide(current)
			}

			function slide(current) {
				let slides = document.querySelector('.slides')
				let width = parseInt(slides.offsetWidth)
				let left = current ? current * -width : 0;
				timer = setInterval(() => {

					left -= width
					let index = parseInt(Math.abs(left) / width)
					if (index == imgs.length) {
						index = 0
					}
					for (var i = 0; i < dots.length; i++) {
						if (index == i) {
							dots[i].className = 'dot-active'
						} else {
							dots[i].className = ''
						}
					}
					photos.style.marginLeft = left + 'px'
					if (Math.abs(left) >= imgs.length * width) {
						left = 0
						photos.style.marginLeft = 0 + 'px'
						clearInterval(timer)
						slide()
					}
				}, 3000)
			}
