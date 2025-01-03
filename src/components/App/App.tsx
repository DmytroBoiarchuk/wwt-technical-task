import { Box } from '@chakra-ui/react'

import FilterModal from '@components/FilterModal/FilterModal.tsx'

export const App = () => {
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<FilterModal />
		</Box>
	)
}
