import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, Dimensions } from 'react-native'

export default function FadeInContainer({
	animationDuration,
	initialValue,
	isVisible,
	style,
	children,
}) {
	const appearAnimation = useRef(new Animated.Value(initialValue)).current

	const appear = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(appearAnimation, {
			toValue: 1,
			duration: animationDuration,
			useNativeDriver: true,
		}).start()
	}

	const disappear = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(appearAnimation, {
			toValue: 0,
			duration: animationDuration,
			useNativeDriver: true,
		}).start()
	}

	useEffect(() => {
		if (isVisible) appear()
		else disappear()
	}, [isVisible])

	return (
		<Animated.View
			style={[styles.box, style, { opacity: appearAnimation }]}
		>
			{children}
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'transparent',
		zIndex: 100,
	},
})
