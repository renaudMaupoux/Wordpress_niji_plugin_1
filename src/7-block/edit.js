import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'
import { TextControl} from '@wordpress/components'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// La fonction qui met à jour la valeur
	const onChangeContent = content => {
		props.setAttributes( { content: content } )
	}

	return (
		<div { ...blockProps }>
			<TextControl
				placeholder={ __( 'Link Label', 'new-gutenberg-block' ) }
				value={ props.attributes.text }
				onChange={ text => props.setAttributes( { text } ) }
			/>
		</div>
	)
}
