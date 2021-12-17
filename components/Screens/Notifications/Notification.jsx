import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import H2 from '../../common/interpreterElements/H2'
import H3 from '../../common/interpreterElements/H3'
import Divider from '../../common/interpreterElements/Divider'
import Paragraph from '../../common/interpreterElements/Paragraph'
import LinkButton from '../../common/FormsComponents/LinkButton'

export default function Notification({
	notification,
	notificationPageControl,
	back,
}) {
	return (
		<>
			<View style={styles.titleContainer}>
				<View style={styles.controlButtons}>
					<H3> Delete |</H3>
					<H3> Edite |</H3>
					<LinkButton
						onPress={() => {
							notificationPageControl(back)
						}}
						style={{ marginTop: 0, padding: 0 }}
					>
						{' '}
						Close
					</LinkButton>
				</View>
				<H2>{notification.title}</H2>
			</View>

			<H3 style={{ color: 'grey' }}>Creator: {notification.creator}</H3>
			<H3 style={{ color: 'grey' }}>
				Creation Data: {notification.date}
			</H3>

			<Divider></Divider>

			<Paragraph style={{ marginTop: 10 }}>{notification.desc}</Paragraph>
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
