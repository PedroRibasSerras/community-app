import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, Dimensions } from 'react-native'

export default function FocusBackground({ animationDuration, isOpen }) {
	const appearAnimation = useRef(new Animated.Value(0)).current

	const appear = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(appearAnimation, {
			toValue: 0.3,
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
		if (isOpen) appear()
		else disappear()
	}, [isOpen])

	return (
		<Animated.View
			style={[styles.back, { opacity: appearAnimation }]}
		></Animated.View>
	)
}

const styles = StyleSheet.create({
	back: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: Dimensions.get('window').height,
		backgroundColor: 'rgba(10, 10, 10, 1)',
		zIndex: 2,
	},
})
