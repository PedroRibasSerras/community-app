import React from 'react'
import { Text } from 'react-native'

export default function H2({ children, style, numberOfLines }) {
	return (
		<Text
			style={[{ fontSize: 20, fontWeight: 'bold' }, style]}
			numberOfLines={numberOfLines || 0}
		>
			{children}
		</Text>
	)
}
