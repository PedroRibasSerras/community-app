import React from 'react'
import { Text } from 'react-native'

export default function H1({ children }) {
	return <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{children}</Text>
}
