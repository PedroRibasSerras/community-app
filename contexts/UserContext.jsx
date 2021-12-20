import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

export function UserProvider({ children }) {
	const [user, setUser] = useState(null)
	const [notifications, setNotifications] = useState(null)
	const [events, setEvents] = useState(null)

	async function register(name, type, email, password) {
		try {
			let error = false
			const result = await fetch(
				'http://192.168.15.100:3333/criarContaOrganizacional',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						nome: name,
						tipo: type,
						email: email,
						senha: password,
					}),
				}
			)
				.then((result) => {
					return result.json()
				})
				.then((resultJson) => {
					if (!!resultJson.errno) {
						error = true
						return resultJson.errMessage
					}
					return resultJson.data
				})
				.catch((err) => {
					throw err
				})

			if (error) {
				return result
			}
			// setUser({ id: result.insertId, name: name, type: type })
		} catch (error) {
			console.error(error)
			return error
		}

		// if (error == false) {
		// 	setMarkersTypes(resMarkersTypes)
		// 	setMarkers(resMarkers)
		// }
	}

	async function login(email, password) {
		try {
			const user = await fetch(
				'http://192.168.15.100:3333/loginOrganizacional',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: email,
						senha: password,
					}),
				}
			)
				.then((result) => {
					return result.json()
				})
				.then((resultJson) => {
					return resultJson.data
				})

			if (user == undefined) {
				return false
			}

			setUser(user)
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}

	function logout() {
		setUser(null)
	}

	async function getAllNotifications() {
		const result = await fetch('http://192.168.15.100:3333/notificacoes')
			.then((data) => {
				return data.json()
			})
			.then((data) => {
				return data.data
			})

		let newNotifications = result.map((notification) => {
			let newNotification = { ...notification }
			newNotification.date = newNotification.date.replace('T', ' ')
			newNotification.date = newNotification.date.replace('.000Z', '')
			return newNotification
		})

		setNotifications(newNotifications)
	}

	async function deleteNotification(title, date) {
		try {
			const result = await fetch(
				'http://192.168.15.100:3333/notificacoes/delete',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						title,
						date,
					}),
				}
			)
				.then((result) => {
					return result.json()
				})
				.then((resultJson) => {
					return resultJson.data
				})

			if (result == undefined) {
				return false
			}

			getAllNotifications()
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}

	async function createNotification(title, description) {
		try {
			const result = await fetch(
				'http://192.168.15.100:3333/notificacoes/criar',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						title,
						description,
						creator: user.id,
					}),
				}
			)
				.then((result) => {
					return result.json()
				})
				.then((resultJson) => {
					return resultJson.data
				})

			if (result == undefined) {
				return false
			}

			getAllNotifications()
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}

	async function getAllEvents() {
		const result = await fetch('http://192.168.15.100:3333/eventos')
			.then((data) => {
				return data.json()
			})
			.then((data) => {
				return data.data
			})

		let newEvents = result.map((event) => {
			let newEvent = { ...event }
			newEvent.date = newEvent.date.replace('T', ' ')
			newEvent.date = newEvent.date.replace('.000Z', '')
			return newEvent
		})

		setEvents(newEvents)
	}

	async function deleteEvent(title, date) {
		try {
			const result = await fetch(
				'http://192.168.15.100:3333/eventos/delete',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						title,
						date,
					}),
				}
			)
				.then((result) => {
					return result.json()
				})
				.then((resultJson) => {
					return resultJson.data
				})

			if (result == undefined) {
				return false
			}

			getAllEvents()
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}

	async function createEvent(
		title,
		description,
		latitude,
		longitude,
		dataEhoraEvento,
		endereco
	) {
		try {
			const result = await fetch(
				'http://192.168.15.100:3333/eventos/criar',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						title,
						description,
						latitude,
						longitude,
						dataEhoraEvento,
						endereco,
						criador: user.id,
					}),
				}
			)
				.then((result) => {
					return result.json()
				})
				.then((resultJson) => {
					return resultJson.data
				})

			if (result == undefined) {
				return false
			}

			getAllEvents()
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}

	return (
		<UserContext.Provider
			value={{
				login,
				user,
				logout,
				register,
				notifications,
				getAllNotifications,
				createNotification,
				deleteNotification,
				events,
				getAllEvents,
				deleteEvent,
				createEvent,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
