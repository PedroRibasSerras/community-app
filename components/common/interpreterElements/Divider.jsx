import React from 'react'
import { View } from 'react-native'

export default function Divider() {
	return (
		<View
			style={{
				width: '100%',
				borderWidth: 0.5,
				height: 1,
				borderColor: 'gray',
			}}
		></View>
	)
}
