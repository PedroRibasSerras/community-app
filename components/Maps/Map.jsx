import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import MarkersFilter from './MarkersFilter/MarkersFilter'

export default function Map({
	children,
	filter = true,
	latitude,
	longitude,
	border = true,
}) {
	const [region, setRegion] = useState({
		latitude: latitude,
		longitude: longitude,
		latitudeDelta: 0.00811,
		longitudeDelta: 0.00811,
	})

	return (
		<View style={styles.container}>
			{border && (
				<>
					<View style={styles.marginTop}></View>
					<View style={styles.marginBottom}></View>
				</>
			)}

			<MapView
				style={styles.map}
				region={region}
				// onRegionChage={setRegion}
				// mapType={'satellite'}
				// showsBuildings={false}
				// showsUserLocation={true}
			>
				{children}
			</MapView>
			{filter && <MarkersFilter />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	marginTop: {
		width: '100%',
		height: 40,
		position: 'absolute',
		top: 0,
		borderColor: '#fff',
		borderBottomColor: 'transparent',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderWidth: 10,
		zIndex: 2,
	},
	marginBottom: {
		width: '100%',
		height: 40,
		position: 'absolute',
		bottom: 0,
		borderColor: '#fff',
		borderTopColor: 'transparent',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderWidth: 10,
		zIndex: 2,
	},
	marginLeft: {
		width: 10,
		height: Dimensions.get('window').width - 80,
		position: 'absolute',
		left: 0,
		borderColor: '#fff',
		borderWidth: 10,
		zIndex: 2,
	},
	marginLeft: {
		width: 10,
		height: Dimensions.get('window').width - 80,
		position: 'absolute',
		right: 0,
		borderColor: '#fff',
		borderWidth: 10,
		zIndex: 2,
	},
	map: {
		position: 'absolute',
		width: Dimensions.get('window').width - 20,
		height: '98%',
		shadowColor: 'black',
	},
})
