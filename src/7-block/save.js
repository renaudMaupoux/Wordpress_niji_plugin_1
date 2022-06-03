import { __ } from '@wordpress/i18n'
import { useBlockProps} from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		<div { ...blockProps }>

			<button>{ props.attributes.text}</button>

		</div>
	)
}
