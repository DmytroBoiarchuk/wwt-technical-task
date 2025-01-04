import { Box, Checkbox, FormLabel, Grid, GridItem } from '@chakra-ui/react'

import { FilterItem } from '@api/types/Filter'

import CustomIcon from '@components/FilterModal/components/CustomIcon.tsx'

interface CustomCheckBoxSectionProps {
	chBoxSection: FilterItem
}
const CustomCheckBoxSection = ({
	chBoxSection
}: CustomCheckBoxSectionProps) => {
	return (
		<Box
			pb="4"
			// had to do so because for some reason default color looked different from header`s border
			borderBottom={'1px solid #AAAAAA'}
		>
			<FormLabel
				pb={4}
				pt={4}
				m={0}
				color="gray.500"
				fontSize="24px"
				fontWeight="bold"
			>
				{chBoxSection.name}
			</FormLabel>
			<Grid
				gap={7}
				w="100%"
				templateRows={`repeat(${Math.ceil(
					chBoxSection.options.length / 3
				)}, 3fr)`}
				templateColumns="repeat(3, 1fr)"
			>
				{chBoxSection.options.map(option => (
					<GridItem key={option.id}>
						<Checkbox
							sx={{
								'& .chakra-checkbox__control': {
									borderRadius: '3px'
								}
							}}
							icon={<CustomIcon />}
							value={option.id}
						>
							{option.name}
						</Checkbox>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default CustomCheckBoxSection
