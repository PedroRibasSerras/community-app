import React from 'react'
import { Text } from 'react-native'

export default function Label({ children, style }) {
	return (
		<Text style={[{ fontSize: 17, width: '100%' }, style]}>{children}</Text>
	)
}
