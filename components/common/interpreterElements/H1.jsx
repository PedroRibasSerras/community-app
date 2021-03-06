import React from 'react'
import { Text } from 'react-native'

export default function H1({ children, style, numberOfLines }) {
	return (
		<Text
			style={[{ fontSize: 30, fontWeight: 'bold' }, style]}
			numberOfLines={numberOfLines || 0}
		>
			{children}
		</Text>
	)
}
