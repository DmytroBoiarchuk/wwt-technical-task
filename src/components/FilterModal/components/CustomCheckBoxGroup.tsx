import {
	Box,
	Checkbox,
	CheckboxGroup,
	FormLabel,
	Grid,
	GridItem
} from '@chakra-ui/react'

import { FilterItem } from '@api/types/Filter'

import CustomIcon from '@components/FilterModal/components/CustomIcon.tsx'

interface CustomCheckBoxGroupProps {
	chBoxGroup: FilterItem
	handleCheckboxChange: (e: (string | number)[]) => void
}
const CustomCheckBoxGroup = ({
	chBoxGroup,
	handleCheckboxChange
}: CustomCheckBoxGroupProps) => {
	return (
		<CheckboxGroup
			colorScheme="green"
			onChange={(e: (string | number)[]) => handleCheckboxChange(e)}
		>
			<Box
				pt="4"
				pb="4"
				// had to do so because for some reason default color looked different from header`s border
				borderBottom={'1px solid #AAAAAA'}
			>
				<FormLabel
					pb={5}
					color="gray.500"
					fontSize="24px"
					fontWeight="bold"
				>
					{chBoxGroup.name}
				</FormLabel>
				<Grid
					gap={7}
					w="100%"
					templateRows={`repeat(${Math.ceil(
						chBoxGroup.options.length / 3
					)}, 3fr)`}
					templateColumns="repeat(3, 1fr)"
				>
					{chBoxGroup.options.map(option => (
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
		</CheckboxGroup>
	)
}

export default CustomCheckBoxGroup
