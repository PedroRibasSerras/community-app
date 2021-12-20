import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import H2 from '../../common/interpreterElements/H2'
import Input from '../../common/FormsComponents/Input'
import LinkButton from '../../common/FormsComponents/LinkButton'
import SubmitButton from '../../common/FormsComponents/SubmitButton'

import { UserContext } from '../../../contexts/UserContext'

export default function CreateEvent({ eventPageControl, back }) {
	const [title, onChangeTitle] = useState()
	const [description, onChangeDescription] = useState()
	const [latitude, onChangeLatitude] = useState()
	const [longitude, onChangeLongitude] = useState()
	const [day, onChangeDay] = useState()
	const [month, onChangeMonth] = useState()
	const [year, onChangeYear] = useState()
	const [hour, onChangeHour] = useState()
	const [minute, onChangeMinute] = useState()

	const [endereco, onChangeEndereco] = useState()

	const { createEvent } = useContext(UserContext)

	return (
		<>
			<View style={styles.titleContainer}>
				<View style={styles.controlButtons}>
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
				<H2>Create a notification</H2>
			</View>

			<Input
				label={'Title:'}
				onChangeText={onChangeTitle}
				value={title}
			/>
			<Input
				label={'Description:'}
				onChangeText={onChangeDescription}
				value={description}
			/>

			<Input
				label={'Latitude:'}
				onChangeText={onChangeLatitude}
				value={latitude}
			/>
			<Input
				label={'Longitude:'}
				onChangeText={onChangeLongitude}
				value={longitude}
			/>
			<Input label={'Day:'} onChangeText={onChangeDay} value={day} />
			<Input
				label={'Month:'}
				onChangeText={onChangeMonth}
				value={month}
			/>
			<Input label={'Year:'} onChangeText={onChangeYear} value={year} />
			<Input label={'Hour:'} onChangeText={onChangeHour} value={hour} />
			<Input
				label={'Minute:'}
				onChangeText={onChangeMinute}
				value={minute}
			/>
			<Input
				label={'Endereco:'}
				onChangeText={onChangeEndereco}
				value={endereco}
			/>
			<SubmitButton
				onPress={() => {
					if (
						createEvent(
							title,
							description,
							latitude,
							longitude,
							`${year}-${month}-${day} ${hour}:${minute}:00`,
							endereco
						)
					)
						eventPageControl(back)
				}}
			>
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
