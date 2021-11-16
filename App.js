import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Screens/Home'
import Guides from './components/Screens/Guides/Guides'
import Social from './components/Screens/Social'
import { MapProvider } from './contexts/MapContext'

const Drawer = createDrawerNavigator()

export default function App() {
	return (
		<MapProvider>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Home'>
					<Drawer.Screen name='Home' component={Home} />
					<Drawer.Screen name='Guides' component={Guides} />
					<Drawer.Screen name='Social' component={Social} />
				</Drawer.Navigator>
			</NavigationContainer>
		</MapProvider>
	)
}
