import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import AllEvents from './AllEvents'
import MyEvents from './MyEvents'
import Event from './Event'
import CreateEvent from './CreateEvent'

export default function EventsScreen({ navigation }) {
	const [eventPageName, setEventPageName] = useState('AllEvents')

	const [lastPage, setLastPage] = useState()

	const [currentEvent, setCurrentEvent] = useState()

	function setAEvent(event) {
		setCurrentEvent(event)

		setEventPageName((prev) => {
			setLastPage(prev)
			return 'Event'
		})
	}

	function setCreateAEvent(notification) {
		setCurrentEvent(notification)

		setEventPageName((prev) => {
			setLastPage(prev)
			return 'Create'
		})
	}

	return (
		<View style={styles.container}>
			<ScrollView
				style={{
					width: '100%',
				}}
			>
				<View style={styles.scrollContent}>
					<View style={styles.contenteContainer}>
						{eventPageName == 'AllEvents' && (
							<AllEvents
								eventPageControl={setEventPageName}
								setAEvent={setAEvent}
								setCreateAEvent={setCreateAEvent}
							/>
						)}
						{eventPageName == 'MyEvents' && (
							<MyEvents
								eventPageControl={setEventPageName}
								setAEvent={setAEvent}
								setCreateAEvent={setCreateAEvent}
							/>
						)}
						{eventPageName == 'Event' && (
							<Event
								eventPageControl={setEventPageName}
								event={currentEvent}
								back={lastPage}
							/>
						)}
						{eventPageName == 'Create' && (
							<CreateEvent
								eventPageControl={setEventPageName}
								back={lastPage}
							/>
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',

		backgroundColor: '#fff',
	},
	Header: {
		width: '90%',
		marginTop: '1%',
		marginBottom: '1%',

		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	contenteContainer: {
		marginTop: 10,
		flex: 1,
		width: '80%',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	scrollContent: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
