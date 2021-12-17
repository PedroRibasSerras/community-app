import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import H3 from './interpreterElements/H3'
import H2 from './interpreterElements/H2'
import Divider from './interpreterElements/Divider'

export default function Banner({ title, subtitle, desc, onPress }) {
	return (
		<Pressable onPress={onPress} style={styles.box}>
			<View style={styles.titleContainer}>
				<H2 numberOfLines={2}>{title}</H2>
			</View>

			{subtitle && (
				<H3 style={{ color: 'grey' }} numberOfLines={2}>
					{subtitle}
				</H3>
			)}

			<Divider></Divider>
			<H3 numberOfLines={2}>{desc}</H3>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'white',
		borderRadius: 10,
		width: '100%',
		marginTop: 15,
		marginBottom: 15,

		padding: 10,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		// marginBottom: -10,
	},
})
