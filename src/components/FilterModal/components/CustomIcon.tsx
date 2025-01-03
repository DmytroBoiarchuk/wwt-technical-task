import { Icon, IconProps } from '@chakra-ui/react'

interface CustomIconProps extends IconProps {
	isIndeterminate?: boolean
	isChecked?: boolean
}

const CustomIcon = (props: CustomIconProps): JSX.Element => {
	const { isIndeterminate, isChecked, ...rest } = props

	const direction: string = isIndeterminate
		? 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z'
		: 'M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z'

	return (
		<>
			{isChecked ? (
				<Icon
					viewBox="0 0 24 24"
					{...rest}
				>
					<path
						fill="currentColor"
						d={direction}
					/>
				</Icon>
			) : null}
		</>
	)
}

export default CustomIcon
