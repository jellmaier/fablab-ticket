<?php

// from https://wordpress.stackexchange.com/questions/196453/displaying-logged-in-user-name-in-wordpress-menu

add_filter( 'wp_nav_menu_objects', 'my_dynamic_menu_items' );
function my_dynamic_menu_items( $menu_items ) {
  foreach ( $menu_items as $menu_item ) {
    if ( '#name#' == $menu_item->title ) {
      $user=wp_get_current_user();
      $menu_item->title = $user->display_name;
    }
  }
  return $menu_items;
} 

?>