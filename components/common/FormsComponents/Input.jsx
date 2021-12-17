import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Label from './Label'

export default function Input({
	style,
	onChangeText,
	value,
	label,
	secureTextEntry,
}) {
	return (
		<>
			<Label>{label}</Label>
			<TextInput
				style={[styles.input, style]}
				onChangeText={onChangeText}
				value={value}
				secureTextEntry={secureTextEntry}
			/>
		</>
	)
}
const styles = StyleSheet.create({
	input: {
		borderRadius: 7,
		width: '100%',
		borderWidth: 0.9,
		borderColor: 'grey',
		marginTop: 10,
		marginBottom: 10,
		padding: 5,
	},
})
