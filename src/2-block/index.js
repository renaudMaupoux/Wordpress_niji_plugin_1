
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import blockIcons from '../icons.js';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('new-gutenberg-block/richtext', {
	icon: blockIcons.icon5,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
