import React, { useState } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import Banner from '../../common/Banner'
import SubmitButton from '../../common/FormsComponents/SubmitButton'
import notifications from '../../../mok/notifications.json'

export default function AllEvents({
	eventPageControl,
	setAEvent,
	setCreateAEvent,
}) {
	function createEvents(events) {
		return events.map((event, index) => {
			return (
				<Banner
					onPress={() => setAEvent(event)}
					key={index}
					title={event.title}
					desc={event.desc}
				/>
			)
		})
	}

	return (
		<>
			<SubmitButton onPress={setCreateAEvent}>
				<Text style={{ fontSize: 20, color: 'white' }}>Create</Text>
			</SubmitButton>
			<SubmitButton onPress={() => eventPageControl('MyEvents')}>
				<Text style={{ fontSize: 20, color: 'white' }}>My events</Text>
			</SubmitButton>
			{createEvents(notifications)}
		</>
	)
}
