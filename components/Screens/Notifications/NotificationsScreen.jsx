import React, { useState, useContext, useEffect } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'

import AllNotifications from './AllNotifications'
import MyNotifications from './MyNotifications'
import Notification from './Notification'
import CreateNotification from './CreateNotification'

import { UserContext } from '../../../contexts/UserContext'

export default function Notifications({ navigation }) {
	const [notificationPageName, setNotificationPageName] =
		useState('AllNotifications')

	const { getAllNotifications, notifications } = useContext(UserContext)

	const [lastPage, setLastPage] = useState()

	const [currentNotification, setCurrentNotification] = useState()

	useEffect(() => {
		if (notifications == null) getAllNotifications()
	})

	function setANotification(notification) {
		setCurrentNotification(notification)

		setNotificationPageName((prev) => {
			setLastPage(prev)
			return 'notification'
		})
	}

	function setCreateANotification(notification) {
		setCurrentNotification(notification)

		setNotificationPageName((prev) => {
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
						{notificationPageName == 'AllNotifications' && (
							<AllNotifications
								notificationPageControl={
									setNotificationPageName
								}
								setANotification={setANotification}
								setCreateANotification={setCreateANotification}
							/>
						)}
						{notificationPageName == 'MyNotifications' && (
							<MyNotifications
								notificationPageControl={
									setNotificationPageName
								}
								setANotification={setANotification}
								setCreateANotification={setCreateANotification}
							/>
						)}
						{notificationPageName == 'notification' && (
							<Notification
								notificationPageControl={
									setNotificationPageName
								}
								notification={currentNotification}
								back={lastPage}
							/>
						)}
						{notificationPageName == 'Create' && (
							<CreateNotification
								notificationPageControl={
									setNotificationPageName
								}
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
