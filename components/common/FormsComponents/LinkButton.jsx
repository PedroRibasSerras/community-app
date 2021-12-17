import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function LinkButton({ children, onPress, style, fontSize }) {
	return (
		<Pressable onPress={onPress} style={[styles.linkButton, style]}>
			<Text style={{ fontSize: fontSize || 17, color: '#0A81D1' }}>
				{children}
			</Text>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	linkButton: {
		marginTop: 10,
		backgroundColor: 'transparent',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
