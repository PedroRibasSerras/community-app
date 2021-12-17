import React from 'react'
import { Text } from 'react-native'

export default function Paragraph({
	Tab,
	marginBottom,
	color,
	children,
	style,
}) {
	return (
		<Text
			style={[
				{
					marginBottom: marginBottom,
					color: color,
				},
				style,
			]}
		>
			{' '.repeat(Tab || 4)}
			{children}
		</Text>
	)
}
