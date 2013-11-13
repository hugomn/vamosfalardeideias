<?php
/**
* Add home page option to WordPress Menu
 *
 * @package WordPress
 * @subpackage VamosFalar
*/
add_filter( 'wp_page_menu_args', 'home_page_menu_args' );
function home_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
