import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import H2 from '../../common/interpreterElements/H2'
import H3 from '../../common/interpreterElements/H3'
import Divider from '../../common/interpreterElements/Divider'
import Paragraph from '../../common/interpreterElements/Paragraph'
import LinkButton from '../../common/FormsComponents/LinkButton'
import Map from '../../Maps/Map'

import { Marker } from 'react-native-maps'

import { UserContext } from '../../../contexts/UserContext'

export default function Event({ event, eventPageControl, back }) {
	const { user, deleteEvent } = useContext(UserContext)

	return (
		<>
			<View style={styles.titleContainer}>
				<View style={styles.controlButtons}>
					{user != null && user.id == event.creator && (
						<LinkButton
							onPress={() => {
								deleteEvent(event.title, event.date)
								eventPageControl(back)
							}}
							style={{ marginTop: 0, padding: 0 }}
						>
							Delete |
						</LinkButton>
					)}
					<LinkButton
						onPress={() => {
							eventPageControl(back)
						}}
						style={{ marginTop: 0, padding: 0 }}
					>
						{' '}
						Close
					</LinkButton>
				</View>
				<H2>{event.title}</H2>
			</View>

			<H3 style={{ fontSize: 18 }}>Event Date: {event.date}</H3>
			<H3 style={{ color: 'grey' }}>Creator: {event.creatorName}</H3>

			<Divider></Divider>

			<Paragraph style={{ marginTop: 10 }}>{event.description}</Paragraph>

			<View style={{ height: 400, width: 100, display: 'flex' }}>
				<Map
					border={false}
					filter={false}
					latitude={event.latitude}
					longitude={event.longitude}
				>
					<Marker
						coordinate={{
							latitude: event.latitude,
							longitude: event.longitude,
						}}
					></Marker>
				</Map>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	titleContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		// marginBottom: -10,
	},
	controlButtons: {
		display: 'flex',
		flexDirection: 'row',
		zIndex: 2,
		justifyContent: 'center',
		marginBottom: 15,
		marginTop: 15,
	},
})
