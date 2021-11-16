import React, { useContext, useMemo } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { GuidesContext } from '../../../contexts/GuidesContext'

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)',
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})

export default function GuidesList({ navigation, openGuide }) {
	const { chapters } = useContext(GuidesContext)

	const sectionChapters = useMemo(() => {
		return (newChaptersFormat = chapters.map((chapter) => {
			chapter.guides.map((guide) => {
				return guide.title
			})
			return {
				title: chapter.title,
				data: chapter.guides,
			}
		}))
	})

	return (
		<View style={styles.container}>
			<SectionList
				sections={
					sectionChapters || [
						{ title: 'ALGO DEU ERRADO!', data: [''] },
					]
				}
				renderItem={({ item }) => (
					<Text onPress={openGuide} style={styles.item}>
						{item}
					</Text>
				)}
				renderSectionHeader={({ section }) => (
					<Text style={styles.sectionHeader}>{section.title}</Text>
				)}
				keyExtractor={(item, index) => index}
			/>
		</View>
	)
}
