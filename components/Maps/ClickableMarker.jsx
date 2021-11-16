import * as React from 'react'
import { Marker } from 'react-native-maps'
import { StyleSheet, Image, View, Text } from 'react-native'

export default function ClickableMarker({
	children,
	coordinates,
	color,
	isOn,
	onPress,
	name,
	description,
}) {
	return (
		<>
			{isOn && (
				<>
					<Marker
						pinColor={color}
						style={styles.margin}
						coordinate={coordinates}
						title={name}
						description={description}
					>
						{children}
					</Marker>
				</>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	margin: {
		zIndex: 3,
	},
})
