import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function MarkersFilterButton({
	backgroundColor,
	circleColor,
	children,
	onPress,
	isOn,
}) {
	return (
		<Pressable
			style={[
				styles.button,
				{ backgroundColor: isOn ? backgroundColor : 'grey' },
			]}
			onPress={onPress}
		>
			<View
				style={[
					styles.circle,
					{
						backgroundColor: isOn ? backgroundColor : 'grey',
						borderColor: isOn ? circleColor : 'white',
					},
				]}
			>
				{children}
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		width: 40,
		height: 40,
		zIndex: 3,
	},
	circle: {
		borderWidth: 1,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		width: 30,
		height: 30,
		zIndex: 4,
	},
})
