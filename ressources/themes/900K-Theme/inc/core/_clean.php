<?php
// category feeds
remove_action( 'wp_head', 'feed_links_extra', 3 );

// post and comment feeds
remove_action( 'wp_head', 'feed_links', 2 );

// EditURI link
remove_action( 'wp_head', 'rsd_link' );

// windows live writer
remove_action( 'wp_head', 'wlwmanifest_link' );

// previous link
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );

// start link
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );

// links for adjacent posts
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

// WP version
remove_action( 'wp_head', 'wp_generator' );

// Disable XML RPC
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Disable Emoji Mess
 */
function neufsansk_disable_wp_emojicons() {
    // all actions related to emojis
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

    // filter to remove TinyMCE emojis
    add_filter( 'tiny_mce_plugins', 'neufsansk_disable_emojicons_tinymce' );
}
add_action( 'init', 'neufsansk_disable_wp_emojicons' );

/**
 * Remove TinyMCE emojis, called in disable_wp_emojicons function
 * @return array
 * @see called in disable_wp_emojicons function to disable Emoji Mess
 */
function neufsansk_disable_emojicons_tinymce( $plugins ) {
    if ( is_array( $plugins ) )
        return array_diff( $plugins, array( 'wpemoji' ) );
    else
        return array();
}

/**
 *Hide WordPress Update Nag to All But Admins
 *@return void
 */
function neufsansk_hide_update_notice_to_all_but_admin() {
    if ( ! current_user_can( 'update_core' ) )
        remove_action( 'admin_notices', 'update_nag', 3 );
}
add_action( 'admin_head', 'neufsansk_hide_update_notice_to_all_but_admin', 1 );


/**
 * Removes comments from admin menu
 * @return void
 */
function neufsansk_my_remove_admin_menus() {
  	remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_menu', 'neufsansk_my_remove_admin_menus' );


/**
 * Removes comments from post and pages
 * @return void
 */
function neufsansk_remove_comment_support() {
	remove_post_type_support( 'post', 'comments' );
	remove_post_type_support( 'page', 'comments' );
}
add_action('init', 'neufsansk_remove_comment_support', 100);


/**
 * Removes comments from admin bar
 * @return void
 */
function neufsansk_mytheme_admin_bar_render() {
	global $wp_admin_bar;
 	$wp_admin_bar->remove_menu('comments');
}
add_action( 'wp_before_admin_bar_render', 'neufsansk_mytheme_admin_bar_render' );



add_filter('tiny_mce_before_init', 'tiny_mce_remove_unused_formats' );
/*
 * Modify TinyMCE editor to remove H1.
 */
function tiny_mce_remove_unused_formats($init) {
	// Add block format elements you want to show in dropdown
	$init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Address=address;Préformaté=pre';
	return $init;
}

remove_action( 'shutdown', 'wp_ob_end_flush_all', 1 );

add_filter( 'body_class', 'custom_class' );
function custom_class( $classes ) {
    if ( is_page_template( 'page-example.php' ) ) {
        $classes[] = 'example';
    }
    return $classes;
}
