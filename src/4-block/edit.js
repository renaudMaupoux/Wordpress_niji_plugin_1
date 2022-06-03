import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// La fonction qui met à jour la valeur
	const onChangeContent = content => {
		props.setAttributes( { content: content } )
	}

	return (
		<div { ...blockProps }>
			<p className="first-line">
				<span>#</span>
				<RichText
					tagName="span"
					placeholder="1"
					value={ props.attributes.number }
					className="number"
					onChange={ number => props.setAttributes( { number } ) }
				/>
			</p>
			<RichText
				tagName="h2"
				placeholder={ __( 'Your title here', 'new-gutenberg-block' ) }
				value={ props.attributes.title }
				className="title"
				onChange={ title => props.setAttributes( { title } ) }
			/>
			<RichText
				tagName="p"
				placeholder={ __( 'Your content here', 'new-gutenberg-block' ) }
				value={ props.attributes.content }
				className="content"
				onChange={ content => props.setAttributes( { content } ) }
			/>
		</div>
	)
}
