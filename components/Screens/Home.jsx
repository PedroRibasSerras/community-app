import React, { useContext } from 'react'
import Map from '../Maps/Map'
import { Image } from 'react-native'
import { View } from 'react-native'
import { MapContext } from '../../contexts/MapContext'

export default function Home({ navigation }) {
	const { markerComponents } = useContext(MapContext)

	return (
		<>
			{markerComponents != null && (
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Map>{markerComponents}</Map>
				</View>
			)}
		</>
	)
}
