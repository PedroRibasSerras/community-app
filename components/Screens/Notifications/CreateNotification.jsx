import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import H2 from '../../common/interpreterElements/H2'
import Input from '../../common/FormsComponents/Input'
import LinkButton from '../../common/FormsComponents/LinkButton'
import SubmitButton from '../../common/FormsComponents/SubmitButton'

export default function CreateNotification({ notificationPageControl, back }) {
	const [title, onChangeTitle] = useState()
	const [description, onChangeDescription] = useState()

	return (
		<>
			<View style={styles.titleContainer}>
				<View style={styles.controlButtons}>
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
				<H2>Create a notification</H2>
			</View>

			<Input
				label={'Title:'}
				onChangeText={onChangeTitle}
				value={title}
			/>
			<Input
				label={'Descreption:'}
				onChangeText={onChangeDescription}
				value={description}
			/>
			<SubmitButton>
				<Text style={{ fontSize: 20, color: 'white' }}>Create</Text>
			</SubmitButton>
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
