import React from 'react'
import { View, Picker, StyleSheet } from 'react-native'
import Label from './Label'

export default function Select({
	children,
	selectedValue,
	onValueChange,
	style,
	label,
}) {
	return (
		<>
			<Label>{label}</Label>
			<View style={[styles.selectContainer, style]}>
				<Picker
					selectedValue={selectedValue}
					onValueChange={(itemValue, itemIndex) =>
						onValueChange(itemValue)
					}
				>
					{children}
				</Picker>
			</View>
		</>
	)
}
const styles = StyleSheet.create({
	selectContainer: {
		borderRadius: 7,
		width: '100%',
		borderWidth: 0.9,
		borderColor: 'grey',
		marginTop: 10,
		marginBottom: 10,
	},
})
