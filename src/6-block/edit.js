import { __ } from '@wordpress/i18n'
import { useBlockProps, URLInput} from '@wordpress/block-editor'
import { TextControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	return (
		<div { ...blockProps }>
			{ props.isSelected ? (

				<Fragment>

					<TextControl
						placeholder={ __( 'Link Label', 'new-gutenberg-block' ) }
						value={ props.attributes.text }
						onChange={ text => props.setAttributes( { text } ) }
					/>

					<URLInput
						value={ props.attributes.url }
						onChange={ (url, post) => props.setAttributes( { url, text: (post && post.title) || props.attributes.text  } ) }
					/>
				</Fragment>
			) : (
				<p>
					<a href={ props.attributes.url }>
						{ props.attributes.text || __( 'Edit link',  'new-gutenberg-block' ) }
					</a>
				</p>
			)
			}
		</div>
	)
}
