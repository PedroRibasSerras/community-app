import React, { useState, useContext } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import Banner from '../../common/Banner'
import SubmitButton from '../../common/FormsComponents/SubmitButton'

import { UserContext } from '../../../contexts/UserContext'

export default function AllNotifications({
	notificationPageControl,
	setANotification,
	setCreateANotification,
}) {
	const { user, notifications } = useContext(UserContext)

	function createNotifications(notifications) {
		if (notifications != null)
			return notifications.map((notification, index) => {
				return (
					<Banner
						onPress={() =>
							setANotification(notification, 'MyNotifications')
						}
						key={index}
						title={notification.title}
						desc={notification.description}
					/>
				)
			})
	}

	return (
		<>
			{user != null && (
				<>
					<SubmitButton onPress={setCreateANotification}>
						<Text style={{ fontSize: 20, color: 'white' }}>
							Create
						</Text>
					</SubmitButton>
					<SubmitButton
						onPress={() =>
							notificationPageControl('MyNotifications')
						}
					>
						<Text style={{ fontSize: 20, color: 'white' }}>
							My notifications
						</Text>
					</SubmitButton>
				</>
			)}
			{createNotifications(notifications)}
		</>
	)
}
