import React, { useState } from 'react'

export default function useRender(initialValue) {
	const [isRendering, setIsRendering] = useState(initialValue)

	function render(delay) {
		if (delay > 0)
			setTimeout(() => {
				setIsRendering(true)
			}, delay)
		else setIsRendering(true)
	}
	function stopRender(delay) {
		if (delay > 0)
			setTimeout(() => {
				setIsRendering(false)
			}, delay)
		else setIsRendering(false)
	}

	function getIsRendering() {
		return isRendering
	}

	return { render, stopRender, getIsRendering }
}
