import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, Picker, ScrollView } from 'react-native'
import H1 from '../../common/interpreterElements/H1'
import Divider from '../../common/interpreterElements/Divider'
import SubmitButton from '../../common/FormsComponents/SubmitButton'
import LinkButton from '../../common/FormsComponents/LinkButton'
import Select from '../../common/FormsComponents/Select'
import Input from '../../common/FormsComponents/Input'

import { UserContext } from '../../../contexts/UserContext'

export default function Register({ openLogin }) {
	const [name, onChangeName] = useState(null)
	const [type, setType] = useState(1)
	const [email, onChangeEmail] = useState(null)
	const [password, onChangePassword] = useState(null)
	const [confirmPassword, onChangeConfirmPassword] = useState(null)

	const [errorMessage, setErrorMessage] = useState('')

	const { register } = useContext(UserContext)

	return (
		<View style={styles.container}>
			{!!errorMessage && (
				<Text style={{ backgroundColor: 'red' }}>{errorMessage}</Text>
			)}
			<View style={styles.Header}>
				<H1>Create an account</H1>
			</View>
			<Divider />
			<ScrollView
				style={{
					width: '100%',
				}}
			>
				<View style={styles.scrollContent}>
					<View style={styles.contenteContainer}>
						<Input
							label={'Name:'}
							onChangeText={onChangeName}
							value={name}
						/>
						<Select
							label={'Type:'}
							selectedValue={type}
							onValueChange={setType}
						>
							<Picker.Item label='Centro Acadêmico' value={1} />
							<Picker.Item
								label='Secretaria Acadêmica'
								value={2}
							/>
							<Picker.Item label='Extracurricular' value={3} />
						</Select>
						<Input
							label={'Email:'}
							onChangeText={onChangeEmail}
							value={email}
						/>
						<Input
							label={'Password:'}
							onChangeText={onChangePassword}
							value={password}
							secureTextEntry={true}
						/>
						<Input
							label={'Confirm password:'}
							onChangeText={onChangeConfirmPassword}
							value={confirmPassword}
							secureTextEntry={true}
						/>
						<SubmitButton
							onPress={async () => {
								if (password == confirmPassword) {
									let error = await register(
										name,
										type,
										email,
										password
									)
									console.log(error)
									if (!!error) {
										setErrorMessage(error)
									}
								} else
									setErrorMessage(
										'Password != confirmPassword'
									)
							}}
						>
							<Text style={{ fontSize: 20, color: 'white' }}>
								Register
							</Text>
						</SubmitButton>
						<LinkButton onPress={openLogin}>
							I already have an account
						</LinkButton>
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
