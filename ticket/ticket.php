<?php

//namespace fablab_ticket;

if (!class_exists('Ticket'))
{
  class Ticket
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_ticket_rewrite_flush' );
      add_action( 'init', 'codex_ticket_init' );
      add_action('add_new{ticket}', 'insert_ticket');
    }
  }
}


function my_ticket_rewrite_flush() {
    // First, we "add" the custom post type via the above written function.
    // Note: "add" is written with quotes, as CPTs don't get added to the DB,
    // They are only referenced in the post_type column with a post entry, 
    // when you add a post of this CPT.
    codex_ticket_init();

    // ATTENTION: This is *only* done during plugin activation hook in this example!
    // You should *NEVER EVER* do this on every page load!!
    flush_rewrite_rules();
}

/**
 * Register a ticket post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function codex_ticket_init() {
  $labels = array(
    'name'               => _x( 'Tickets', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Ticket', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Tickets', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Ticket', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'ticket', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Ticket', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Ticket', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Ticket', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Ticket', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Tickets', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Tickets', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Tickets:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No tickets found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No tickets found in Trash.', 'your-plugin-textdomain' )
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'ticket' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-clipboard',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'ticket', $args );

}



function insert_ticket() {
  $tag = $_POST['tag'];

  $post_information = array(
        'post_title' => "Ticket, vom " . date_i18n('D, d.m.y \u\m H:i'),
        'post_type' => 'ticket',
    );
 
    $ID = wp_insert_post( $post_information );
    //$tag = 'Lasercutter';
    if ($ID != 0) {
      $return = wp_set_object_terms( $ID, $tag, 'device_type', false);
    }
      

    die($ID != 0);
}
add_action( 'wp_ajax_add_ticket', 'insert_ticket' );
add_action( 'wp_ajax-nopriv_add_ticket', 'insert_ticket' );

?>