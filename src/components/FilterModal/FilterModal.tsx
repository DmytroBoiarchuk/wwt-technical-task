import React, { Dispatch, SetStateAction, useState } from 'react'

import {
	Button,
	CheckboxGroup,
	FormControl,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter.ts'

import CustomCheckBoxSection from '@components/FilterModal/components/CustomCheckBoxSection.tsx'
import CustomModalFooter from '@components/FilterModal/components/CustomModalFooter.tsx'

const fetchJsonData = async () => {
	const response = await fetch('src/temp/filterData.json')
	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}
	return response.json()
}

const getInitialValueForCheckBoxes = (data: SearchRequestFilter) => {
	return data.find(filter => filter.id === 'optionFilterId')?.optionsIds
}
interface FilterModalProps {
	formData: SearchRequestFilter
	setFormData: Dispatch<SetStateAction<SearchRequestFilter>>
}
const FilterModal = ({
	formData,
	setFormData
}: FilterModalProps): JSX.Element => {
	const [checkBoxGroupValue, setCheckBoxGroupValue] = useState<
		(string | number)[]
	>([])
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { data } = useQuery<{
		//  isLoading, isError, error
		filterItems: FilterItem[]
	}>({
		queryKey: ['FilterData'],
		queryFn: fetchJsonData
	})
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setFormData(prevState =>
			prevState.map(filter =>
				filter.id !== 'optionFilterId'
					? filter
					: {
							...filter,
							optionsIds: checkBoxGroupValue.map(value => value.toString())
					  }
			)
		)
	}

	return (
		<>
			<Button onClick={onOpen}>{'Open Modal'}</Button>

			<Modal
				size="xl"
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<FormControl
						as="form"
						onSubmit={handleSubmit}
					>
						<ModalHeader p={4}>{'Filter'}</ModalHeader>
						<ModalCloseButton />
						<ModalBody pt={0}>
							<CheckboxGroup
								defaultValue={getInitialValueForCheckBoxes(formData)}
								colorScheme="green"
								onChange={setCheckBoxGroupValue}
							>
								{data?.filterItems.map(chBoxSection => (
									<CustomCheckBoxSection
										key={chBoxSection.id}
										chBoxSection={chBoxSection}
									/>
								))}
							</CheckboxGroup>
						</ModalBody>
						<CustomModalFooter />
					</FormControl>
				</ModalContent>
			</Modal>
		</>
	)
}

export default FilterModal
