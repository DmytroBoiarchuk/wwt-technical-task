import {
	Button,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'

import CustomModalBody from '@components/FilterModal/components/CustomModalBody.tsx'
import CustomModalFooter from '@components/FilterModal/components/CustomModalFooter.tsx'

const FilterModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
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
					<ModalHeader>{'Filter'}</ModalHeader>
					<ModalCloseButton />
					<CustomModalBody />
					<CustomModalFooter onClose={onClose} />
				</ModalContent>
			</Modal>
		</>
	)
}

export default FilterModal
