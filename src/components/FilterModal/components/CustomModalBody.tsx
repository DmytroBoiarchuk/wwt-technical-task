import { FormControl, ModalBody } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '@api/types/Filter'

import CustomCheckBoxGroup from '@components/FilterModal/components/CustomCheckBoxGroup.tsx'

const fetchJsonData = async () => {
	const response = await fetch('src/temp/filterData.json')
	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}
	return response.json()
}

const CustomModalBody = (): JSX.Element => {
	// const [formData, setFormData] = useState<SearchRequestFilter>()
	const { data } = useQuery<{
		//  isLoading, isError, error
		filterItems: FilterItem[]
	}>({
		queryKey: ['FilterData'],
		queryFn: fetchJsonData
	})
	const handleCheckboxChange = (e: (string | number)[]) => {
		console.log('handleCheckboxChange', e)
	}
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}
	return (
		<ModalBody>
			<FormControl
				as="form"
				onSubmit={handleSubmit}
			>
				{data?.filterItems.map(chBoxGroup => (
					<CustomCheckBoxGroup
						key={chBoxGroup.id}
						chBoxGroup={chBoxGroup}
						handleCheckboxChange={handleCheckboxChange}
					/>
				))}
			</FormControl>
		</ModalBody>
	)
}

export default CustomModalBody
