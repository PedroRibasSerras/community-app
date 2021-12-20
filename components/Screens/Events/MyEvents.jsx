import React, { useState, useContext } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import Banner from '../../common/Banner'
import SubmitButton from '../../common/FormsComponents/SubmitButton'

import { UserContext } from '../../../contexts/UserContext'

export default function MyEvents({
	eventPageControl,
	setAEvent,
	setCreateAEvent,
}) {
	const { user, events } = useContext(UserContext)

	function createEvents(events) {
		if (events != null)
			return events.map((event, index) => {
				return (
					<Banner
						onPress={() => setAEvent(event)}
						key={index}
						title={event.title}
						desc={event.description}
					/>
				)
			})
	}

	return (
		<>
			{user != null && (
				<>
					<SubmitButton onPress={setCreateAEvent}>
						<Text style={{ fontSize: 20, color: 'white' }}>
							Create
						</Text>
					</SubmitButton>
					<SubmitButton onPress={() => eventPageControl('AllEvents')}>
						<Text style={{ fontSize: 20, color: 'white' }}>
							All events
						</Text>
					</SubmitButton>
				</>
			)}
			{createEvents(
				events.filter((event) => {
					if (user.id == event.creator) return event
				})
			)}
		</>
	)
}
