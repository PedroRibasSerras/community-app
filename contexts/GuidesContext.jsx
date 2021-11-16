import React, { useEffect, createContext } from 'react'
import { useState } from 'react'
import guidesData from '../mok/Guides.json'

export const GuidesContext = createContext({})

export function GuidesProvider({ children }) {
	const [chapters, setChapters] = useState([])

	useEffect(async () => {
		let error = false
		let resChapters = null
		try {
			// const response = await fetch('../')
			const response = guidesData
			// resChapters = await response.json().chapters
			resChapters = response.chapters
			resChapters.forEach((chapter) => {
				chapter.guides.map((guide) => {
					return {
						title: guide,
						content: null,
					}
				})
			})
		} catch (error) {
			console.error(error)
			error = true
		}

		if (error == false) setChapters(resChapters)
	})

	return (
		<GuidesContext.Provider
			value={{
				chapters,
			}}
		>
			{children}
		</GuidesContext.Provider>
	)
}
