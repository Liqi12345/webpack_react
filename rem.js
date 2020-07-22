function setRem() {
			const scale = document.documentElement.clientWidth / 750

			document.documentElement.style.fontSize = 100 * scale + 'px'
		}
		setRem()
		window.onresize = function() {
			setRem()
		}