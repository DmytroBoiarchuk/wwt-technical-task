import { useState } from 'react'

import { Box } from '@chakra-ui/react'

import { FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

import FilterModal from '@components/FilterModal/FilterModal.tsx'

export const App = () => {
	const [formData, setFormData] = useState<SearchRequestFilter>([
		{ type: FilterType.OPTION, id: 'optionFilterId', optionsIds: [] }
	])
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			{formData[0].optionsIds.map(optionId => (
				<p key={optionId}>{optionId}</p>
			))}
			<FilterModal
				formData={formData}
				setFormData={setFormData}
			/>
		</Box>
	)
}
