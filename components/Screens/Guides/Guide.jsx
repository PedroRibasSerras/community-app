import React, { useRef, useEffect, useState } from 'react'
import {
	Animated,
	Text,
	View,
	StyleSheet,
	Pressable,
	Dimensions,
	ScrollView,
} from 'react-native'
import FocusBackground from '../../common/FocusBackground'
import Paragraph from '../../common/interpreterElements/Paragraph'
import H2 from '../../common/interpreterElements/H2'
import H1 from '../../common/interpreterElements/H1'

export default function Guide({ closeGuide }) {
	const [isOpen, setIsOpen] = useState(true)

	const verticalMoveAnimation = useRef(
		new Animated.Value(-Dimensions.get('window').height)
	).current

	const moveUp = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(verticalMoveAnimation, {
			toValue: 0,
			duration: 600,
		}).start()
	}

	const moveDown = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(verticalMoveAnimation, {
			toValue: -Dimensions.get('window').height,
			duration: 600,
		}).start()
	}

	useEffect(() => {
		if (isOpen) moveUp()
		else moveDown()
	}, [isOpen])

	function close() {
		setIsOpen(false)

		setTimeout(() => {
			closeGuide()
		}, 600)
	}

	return (
		<>
			<FocusBackground animationDuration={600} isOpen={isOpen} />
			<Animated.View
				style={[
					styles.container,
					{
						// Bind opacity to animated value
						bottom: verticalMoveAnimation,
					},
				]}
			>
				<View style={styles.Header}>
					<H1>Bem-vindo Bixo!!!</H1>
					<Pressable style={styles.closeButton} onPress={close}>
						<Text>X</Text>
					</Pressable>
				</View>
				<ScrollView style={styles.contenteContainer}>
					<H2>Por onde começar?</H2>
					<Paragraph>
						De onde vem a calma daquele cara ele não sabe ser melhor
						viu ele não sabe não viu e as vezes sá com um fio é o
						mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
					<Paragraph>
						Pinto de onde vem a calma daquele cara ele não sabe ser
						melhor viu ele não sabe não viu e as vezes sá com um fio
						é o mundo que anda hostil o mundo todo é hostil.
					</Paragraph>
				</ScrollView>
			</Animated.View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

		width: Dimensions.get('window').width,
		height: (8 * Dimensions.get('window').height) / 10,

		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,

		backgroundColor: '#fff',

		position: 'absolute',
		bottom: 0,

		zIndex: 3,
	},
	Header: {
		width: '90%',
		marginTop: '2%',
		marginBottom: '2%',

		flex: 0.1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	closeButton: {
		width: 30,
		height: 30,
		borderWidth: 1,

		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderColor: 'black',
		backgroundColor: '#fff',
	},
	contenteContainer: {
		flex: 1,
		width: '90%',
	},
})
