<?php
// add_action( 'init', 'neufsansk_custom_post_type_catalogue' );
function neufsansk_custom_post_type_catalogues() {
    $post_type         = "catalogue";
    $post_type_support = "posts";
    $labels            = array(
        'name'               => __( 'Catalogues',         'neufsansk' ),
        'singular_name'      => __( 'Catalogue',          'neufsansk' ),
        'all_items'          => __( 'All the catalogues', 'neufsansk' ),
        'add_new'            => __( 'Add a catalogue',    'neufsansk' ),
        'add_new_item'       => __( 'Add a catalogue',    'neufsansk' ),
        'edit_item'          => __( "Edit catalogue",     'neufsansk' ),
        'new_item'           => __( 'New catalogue',      'neufsansk' ),
        'view_item'          => __( "View catalogue",     'neufsansk' ),
        'search_items'       => __( 'Find a catalogue',   'neufsansk' ),
        'not_found'          => __( 'No result',          'neufsansk' ),
        'not_found_in_trash' => __( 'No result',          'neufsansk' ),
        'parent_item_colon'  => __( 'Parent catalogue:',  'neufsansk' ),
        'menu_name'          => __( 'Catalogues',         'neufsansk' ),
    );

    $args = array(
        'labels'              => $labels,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor' ),
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-slides',
        'show_in_nav_menus'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => false,
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => array( 'slug' => $post_type )
    );

    // register_post_type($post_type, $args );
}
// https://developer.wordpress.org/resource/dashicons/#admin-comments -> Wordpress Icons
