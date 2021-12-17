import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Home from './components/Screens/Home'
import Guides from './components/Screens/Guides/Guides'
import Organizational from './components/Screens/Organizational/Organizational'
import Notifications from './components/Screens/Notifications/NotificationsScreen'
import EventsScreen from './components/Screens/Events/EventsScreen'

import { MapProvider } from './contexts/MapContext'

const Drawer = createDrawerNavigator()

export default function App() {
	return (
		<MapProvider>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Home'>
					<Drawer.Screen name='Home' component={Home} />
					<Drawer.Screen name='Guides' component={Guides} />
					<Drawer.Screen
						name='Organizational'
						component={Organizational}
					/>
					<Drawer.Screen
						name='Notifications'
						component={Notifications}
					/>
					<Drawer.Screen name='Events' component={EventsScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</MapProvider>
	)
}
