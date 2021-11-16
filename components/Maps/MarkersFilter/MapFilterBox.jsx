import React, { useRef, useEffect, useContext, useMemo } from 'react'
import {
	StyleSheet,
	Animated,
	Text,
	View,
	Dimensions,
	Pressable,
} from 'react-native'
import MarkersFilterButton from './MarkersFilterButton'
import H1 from '../../common/interpreterElements/H1'
import FocusBackground from '../../common/FocusBackground'
import useRender from '../../../hooks/useRender'
import { MapContext } from '../../../contexts/MapContext'

const animationDuration = 250

export default function MapFilterBox({ isOpen, closeBox }) {
	const { markersTypes, toggleType, onTypes } = useContext(MapContext)

	const openXAnimation = useRef(new Animated.Value(0)).current
	const openYAnimation = useRef(new Animated.Value(0)).current
	const render = useRender()

	const open = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		render.render(0)

		setTimeout(() => {
			Animated.timing(openXAnimation, {
				toValue: Dimensions.get('window').width - 60,
				duration: animationDuration,
				useNativeDriver: false,
			}).start()

			Animated.timing(openYAnimation, {
				toValue: (9.2 * Dimensions.get('window').height) / 10,
				duration: animationDuration,
				useNativeDriver: false,
			}).start()
		}, 0)
	}

	const close = () => {
		// Will change fadeAnim value to 0 in 3 seconds

		render.stopRender(animationDuration)

		Animated.timing(openXAnimation, {
			toValue: 0,
			duration: animationDuration,
			useNativeDriver: false,
		}).start()

		Animated.timing(openYAnimation, {
			toValue: 0,
			duration: animationDuration,
			useNativeDriver: false,
		}).start()
	}

	useEffect(() => {
		if (isOpen) open()
		else close()
	}, [isOpen])

	let buttons = useMemo(() => {
		if (markersTypes == null) return false
		return markersTypes.map((type, index) => {
			return (
				<View style={styles.filter} key={index}>
					<MarkersFilterButton
						circleColor={'#fff'}
						backgroundColor={type.color}
						onPress={() => {
							toggleType(type.name)
						}}
						isOn={onTypes[type.name]}
					>
						<Text style={{ color: '#fff' }}></Text>
					</MarkersFilterButton>
					<Text style={styles.filterName}>{type.name}</Text>
				</View>
			)
		})
	}, [onTypes, markersTypes])

	return (
		<>
			{render.getIsRendering() && (
				<>
					<FocusBackground animationDuration={250} isOpen={isOpen} />
					<Animated.View
						style={[
							{
								width: openXAnimation,
								height: openYAnimation,
							},
							styles.container,
						]}
					>
						<View style={styles.title}>
							<H1>Filters</H1>
							<Pressable
								style={styles.closeButton}
								onPress={closeBox}
							>
								<Text>X</Text>
							</Pressable>
						</View>

						<View style={styles.contentContainer}>{buttons}</View>
					</Animated.View>
				</>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',

		borderRadius: 30,
		overflow: 'hidden',

		maxHeight: '90%',
		position: 'absolute',
		bottom: 30,
		right: 30,
		zIndex: 2,
		backgroundColor: '#fff',
	},
	title: {
		marginTop: 10,
		flex: 0.1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentContainer: {
		flex: 1,
		marginLeft: 20,
		marginTop: 10,
	},
	filter: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 10,
	},
	filterName: {
		fontSize: 18,
		marginLeft: 10,
	},
	closeButton: {
		width: 30,
		height: 30,
		borderWidth: 1,
		position: 'absolute',
		top: 15,
		right: 25,

		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderColor: 'black',
		backgroundColor: '#fff',
	},
})
