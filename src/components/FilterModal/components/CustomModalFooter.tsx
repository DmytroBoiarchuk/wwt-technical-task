import { Button, Grid, GridItem, ModalFooter } from '@chakra-ui/react'

const CustomModalFooter = (): JSX.Element => {
	return (
		<ModalFooter>
			<Grid
				w="100%"
				templateRows="repeat(1, 1fr)"
				templateColumns="repeat(5, 1fr)"
			>
				<GridItem
					colStart={3}
					justifySelf="center"
				>
					<Button
						height="64px"
						width="184px"
						variant="solid"
						colorScheme="brand"
						type="submit"
					>
						{'Apply'}
					</Button>
				</GridItem>
				<GridItem
					colStart={5}
					justifySelf="end"
					alignSelf="center"
				>
					<Button
						height="19px"
						width="154px"
						variant="link"
						colorScheme="primary"
					>
						{'Clear all parameters'}
					</Button>
				</GridItem>
			</Grid>
		</ModalFooter>
	)
}

export default CustomModalFooter
