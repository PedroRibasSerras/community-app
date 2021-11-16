import React from 'react'
import { Text } from 'react-native'

export default function H2({ children }) {
	return <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{children}</Text>
}
