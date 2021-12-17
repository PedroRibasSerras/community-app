import React, { useState } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import Banner from '../../common/Banner'
import SubmitButton from '../../common/FormsComponents/SubmitButton'
import notifications from '../../../mok/notifications.json'

export default function AllNotifications({
	notificationPageControl,
	setANotification,
	setCreateANotification,
}) {
	function createNotifications(notifications) {
		return notifications.map((notification, index) => {
			return (
				<Banner
					onPress={() =>
						setANotification(notification, 'AllNotifications')
					}
					key={index}
					title={notification.title}
					desc={notification.desc}
				/>
			)
		})
	}

	return (
		<>
			<SubmitButton onPress={setCreateANotification}>
				<Text style={{ fontSize: 20, color: 'white' }}>Create</Text>
			</SubmitButton>
			<SubmitButton
				onPress={() => notificationPageControl('MyNotifications')}
			>
				<Text style={{ fontSize: 20, color: 'white' }}>
					My notifications
				</Text>
			</SubmitButton>
			{createNotifications(notifications)}
		</>
	)
}
