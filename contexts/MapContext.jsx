import React, { useEffect, createContext, cloneElement } from 'react'
import { useState } from 'react'
import ClickableMarker from '../components/Maps/ClickableMarker'

import serverIp from '../constants/serverIp'

export const MapContext = createContext({})

export function MapProvider({ children }) {
	const [markersTypes, setMarkersTypes] = useState(null)
	const [markers, setMarkers] = useState()
	const [onTypes, setOnTypes] = useState({})
	const [markerComponents, setMarkerComponents] = useState(null)

	useEffect(async () => {
		if (markersTypes == null) {
			let error = false

			let resMarkersTypes = null
			let resMarkers = null

			try {
				const markers = await fetch(serverIp + '/localizacoes')

				let response = await markers.json()

				resMarkersTypes = response.data.markersTypes
				resMarkers = response.data.markers

				resMarkers.forEach((marker) => {
					for (let i = 0; i < resMarkersTypes.length; i++) {
						if (marker.type == resMarkersTypes[i].name) {
							marker.type = resMarkersTypes[i]
							break
						}
					}
				})
			} catch (error) {
				console.error(error)
				error = true
			}

			if (error == false) {
				setMarkersTypes(resMarkersTypes)
				setMarkers(resMarkers)
			}
		}
	})

	useEffect(() => {
		if (markersTypes != null && markers != null) {
			let newOnTypes = {}
			markersTypes.forEach((markersType) => {
				newOnTypes[markersType.name] = true
			})
			setOnTypes(newOnTypes)

			setMarkerComponents(
				markers.map((marker, index) => {
					return (
						<ClickableMarker
							key={index}
							coordinates={marker.coordinates}
							color={marker.type.color}
							name={marker.name}
							description={marker.type.name}
							type={marker.type.name}
							isOn={newOnTypes[marker.type.name]}
						></ClickableMarker>
					)
				})
			)
		}
	}, [markersTypes, markers])

	function toggleType(typeName) {
		let toggledOnType = !onTypes[typeName]

		setOnTypes((prev) => {
			let newOnTypes = { ...prev }
			newOnTypes[typeName] = !newOnTypes[typeName]

			return newOnTypes
		})
		setMarkerComponents((prev) => {
			return prev.map((markerComponent) => {
				if (markerComponent.props.type != typeName) {
					return markerComponent
				} else {
					return cloneElement(markerComponent, {
						isOn: toggledOnType,
					})
				}
			})
		})
	}

	return (
		<MapContext.Provider
			value={{
				markersTypes,
				markers,
				onTypes,
				markerComponents,
				toggleType,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}
