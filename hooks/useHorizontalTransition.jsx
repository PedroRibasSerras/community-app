import { useState } from 'react'

export default function useHorizontalTransition() {
	const [inTrasition, setInTrasition] = useState(false)

	function microAnimation(target, transition, transform) {
		target.style.transition = `${transition}ms`
		target.style.transform = transform
	}

	function animation(element, animationDuration, callback, left) {
		let microAnimationDurations = animationDuration / 2 - 50
		let direction = left ? 1 : -1

		microAnimation(
			element,
			microAnimationDurations,
			`translateX(${direction * -110}%)`
		)
		setTimeout(() => {
			callback()
			microAnimation(element, 0, `translateX(${direction * 110}%)`)
			setTimeout(() => {
				microAnimation(
					element,
					microAnimationDurations,
					`translateX(0%)`
				)
			}, 2 * 50)
		}, microAnimationDurations)
	}

	return function init(element, animationDuration, callback, left) {
		if (!inTrasition) {
			setInTrasition(true)
			animation(element, animationDuration, callback, left)
			setTimeout(() => {
				setInTrasition(false)
			}, animationDuration)
		}
	}
}
