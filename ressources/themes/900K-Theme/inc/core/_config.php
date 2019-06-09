<?php
/**
 * Enqueue style
 */
function my_style() {
  wp_enqueue_style( 'slick_css',      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css" );
  wp_enqueue_style( 'font',           "https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap" );

  wp_enqueue_script('jQuery',         "https://code.jquery.com/jquery-3.3.1.slim.min.js");
  wp_localize_script( 'script-main', 'ajaxurl', admin_url( 'admin-ajax.php' ) );

  if (IS_PROD) {
    wp_enqueue_script('script-main',    JS_URL  . '/bundle.min.js');
    wp_enqueue_style( 'style-main',     CSS_URL . '/app.min.css'  );
  }else {
    wp_enqueue_script('script-main',    JS_URL  . '/bundle.js');
    wp_enqueue_style( 'style-main',     CSS_URL . '/app.css'  );
  }

  wp_enqueue_script('slick',          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js");
}
add_action( 'wp_enqueue_scripts',  'my_style');

function add_defer_attribute($tag, $handle) {
   // add script handles to the array below
   $scripts_to_defer = array('script-main', 'slick');
   $scripts_to_async = array('jQuery');
   foreach($scripts_to_defer as $defer_script) {
      if ($defer_script === $handle) {
         return str_replace(' src', ' defer="defer" src', $tag);
      }
   }
   return $tag;
}
add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page('Options');
}
