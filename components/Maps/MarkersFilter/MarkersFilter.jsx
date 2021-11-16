import React, { useState } from 'react'
import { StyleSheet, Animated, Text, View, Dimensions } from 'react-native'
import MarkersFilterButton from './MarkersFilterButton'
import MapFilterBox from './MapFilterBox'
import FadeInContainer from '../../common/FadeInContainer'

export default function MarkersFilter({ children }) {
	const [isOpen, setIsOpen] = useState(false)

	function openBox() {
		setIsOpen(true)
	}

	function closeBox() {
		setIsOpen(false)
	}

	return (
		<>
			<FadeInContainer
				isVisible={!isOpen}
				animationDuration={250}
				initialValue={1}
				style={styles.buttonContainer}
			>
				<MarkersFilterButton
					circleColor={'#fff'}
					backgroundColor={'grey'}
					onPress={openBox}
				>
					<Text style={{ color: '#fff' }}>F</Text>
				</MarkersFilterButton>
			</FadeInContainer>

			<MapFilterBox isOpen={isOpen} closeBox={closeBox} />
		</>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		position: 'absolute',
		bottom: 30,
		right: 30,
	},
	mapFilterBox: {
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 30,

		width: Dimensions.get('window').width - 60,
		height: '90%',
		position: 'absolute',
		bottom: 30,
		right: 30,
		zIndex: 1,
		backgroundColor: '#fff',
	},
})
