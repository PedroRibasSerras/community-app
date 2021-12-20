import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Login from './Login'
import Register from './Register'

import SubmitButton from '../../common/FormsComponents/SubmitButton'

import { UserContext } from '../../../contexts/UserContext'

export default function Organizational({ navigation }) {
	const [isOnLogin, setIsOnLogin] = useState(true)

	const { user, logout } = useContext(UserContext)

	return (
		<View style={styles.container}>
			{user == null ? (
				<>
					{isOnLogin ? (
						<Login
							openRegister={() => {
								setIsOnLogin(false)
							}}
						/>
					) : (
						<Register
							openLogin={() => {
								setIsOnLogin(true)
							}}
						/>
					)}
				</>
			) : (
				<>
					<Text>Você está logado, {user.name}</Text>
					<SubmitButton onPress={logout}>
						<Text style={{ fontSize: 20, color: 'white' }}>
							Logout
						</Text>
					</SubmitButton>
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		// padding: 20,
	},
	button: {
		marginTop: 10,
		width: '80%',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 9,
	},
	blue: {
		backgroundColor: '#0A81D1',
	},
	ruby: {
		backgroundColor: '#d81159',
	},
	title: {
		padding: 10,
	},
	input: {
		borderRadius: 8,
		width: '90%',
		borderWidth: 1,
		marginTop: 10,
		marginBottom: 10,
		padding: 5,
	},
})
