import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import GuidesList from './GuidesList'
import Guide from './Guide'
import { GuidesProvider } from '../../../contexts/GuidesContext'

export default function Guides({ navigation }) {
	const [selectedGuide, setSelectedGuide] = useState(null)

	function openGuide() {
		setSelectedGuide(<Guide closeGuide={closeGuide} />)
	}
	function closeGuide() {
		setSelectedGuide(null)
	}

	return (
		<GuidesProvider>
			<View style={styles.container}>
				<GuidesList openGuide={openGuide} />
				{selectedGuide}
			</View>
		</GuidesProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
