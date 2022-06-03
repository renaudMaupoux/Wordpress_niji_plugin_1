import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor'
import { ToolbarGroup, ToolbarButton
} from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import blockIcons from '../icons.js'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// On ajoute notre classe personnalisée
	blockProps.className += ` is-${props.attributes.type}`
	// La fonction qui met à jour la valeur

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ props.attributes.alignment }
					onChange={ alignment => props.setAttributes( { alignment } ) }
				/>

				<ToolbarGroup>
					<ToolbarButton
						icon="thumbs-up"
						label={ __( 'Advice', 'new-gutenberg-block' )  }
						className='new-gutenberg-block-toolbar-green'
						onClick={ () => props.setAttributes( { type: 'advice' } ) }
						isPressed={ props.attributes.type == 'advice' }
					/>

					<ToolbarButton
						icon="warning"
						label={ __( 'Warning', 'new-gutenberg-block' )  }
						className='new-gutenberg-block-toolbar-yellow'
						onClick={ () => props.setAttributes( { type: 'warning' } ) }
						isPressed={ props.attributes.type == 'warning' }
					/>

					<ToolbarButton
						icon="dismiss"
						label={ __( 'Avoid', 'new-gutenberg-block' )  }
						className='new-gutenberg-block-toolbar-red'
						onClick={ () => props.setAttributes( { type: 'avoid' } ) }
						isPressed={ props.attributes.type == 'avoid' }
					/>
					<ToolbarButton
						icon={ blockIcons.icon5 }
						label={ __( 'pettype', 'new-gutenberg-block' )  }
						className='new-gutenberg-block-toolbar-blue'
						onClick={ () => props.setAttributes( { type: 'pettype' } ) }
						isPressed={ props.attributes.type == 'pettype' }
					/>
				</ToolbarGroup>
			</BlockControls>

			<div { ...blockProps }>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __('Write a text!', 'new-gutenberg-block' ) }
					value={ props.attributes.content }
					className="content"
					onChange={ content => props.setAttributes( { content } ) }
					style={ { textAlign: props.attributes.alignment } }
				/>
			</div>
		</Fragment>
	)
}
