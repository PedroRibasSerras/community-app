import React, { useState, useContext } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import H1 from '../../common/interpreterElements/H1'
import Divider from '../../common/interpreterElements/Divider'
import Input from '../../common/FormsComponents/Input'
import SubmitButton from '../../common/FormsComponents/SubmitButton'
import LinkButton from '../../common/FormsComponents/LinkButton'

import { UserContext } from '../../../contexts/UserContext'

export default function Login({ openRegister }) {
	const [email, onChangeEmail] = useState(null)
	const [password, onChangePassword] = useState(null)
	const [loginError, setLoginError] = useState(false)

	const { login } = useContext(UserContext)

	return (
		<View style={styles.container}>
			{loginError && (
				<Text style={{ backgroundColor: 'red' }}>
					Email and/or password wrong!
				</Text>
			)}
			<View style={styles.Header}>
				<H1>Login</H1>
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
						<SubmitButton
							onPress={async () => {
								let loginSuccess = await login(email, password)
								console.log(loginSuccess)
								if (!loginSuccess) {
									setLoginError(!loginSuccess)
								}
							}}
						>
							<Text style={{ fontSize: 20, color: 'white' }}>
								Login
							</Text>
						</SubmitButton>
						<LinkButton onPress={openRegister}>
							I don't have an account
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
