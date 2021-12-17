import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export default function SubmitButton({ children, onPress }) {
	return (
		<Pressable onPress={onPress} style={styles.submitButton}>
			{children}
		</Pressable>
	)
}
const styles = StyleSheet.create({
	submitButton: {
		width: '100%',
		marginTop: 10,
		backgroundColor: '#0A81D1',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 9,
	},
})
