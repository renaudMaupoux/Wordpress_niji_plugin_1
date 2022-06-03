<?php
/**
 * Plugin Name:       New Gutenberg Block
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       new-gutenberg-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function gutenberg_block_block_init() {
	register_block_type( __DIR__ . '/build/1-block' );
	register_block_type( __DIR__ . '/build/2-block' );
	register_block_type( __DIR__ . '/build/3-block' );
	register_block_type( __DIR__ . '/build/4-block' );
	register_block_type( __DIR__ . '/build/5-block' );
	register_block_type( __DIR__ . '/build/6-block' );
	register_block_type( __DIR__ . '/build/7-block' );
}
add_action( 'init', 'gutenberg_block_block_init' );
