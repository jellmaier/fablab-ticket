<?php

//namespace fablab_ticket;

include 'ticket-getter.php';
include 'ticket-handler.php';
include 'ticket-queries.php';
include 'ticket-rest.php';
include 'ticket-rest-permission.php';

if (!class_exists('Ticket'))
{
  class Ticket
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_ticket_rewrite_flush' );
      add_action( 'init', 'codex_ticket_init' );

      // Displaying Ticket Lists
      add_filter( 'manage_ticket_posts_columns', 'ticket_edit_columns' );
      add_action( 'manage_ticket_posts_custom_column', 'ticket_table_content', 10, 3 );
      // Editing Tickets
      add_action( 'admin_init', 'ticket_admin_init' );
      // Saving Ticket Details
      add_action( 'save_post', 'save_ticket_details' );

      //add_action('add_new{ticket}', 'insert_ticket');
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
  $posttype_singular_name = fablab_get_captions('ticket_caption');
  $posttype_name = fablab_get_captions('tickets_caption');
  $labels = array(
    'name'               => _x( $posttype_name, 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( $posttype_singular_name, 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( $posttype_name, 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( $posttype_singular_name, 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => __( 'Add New', 'fablab-ticket' ),
    'add_new_item'       => sprintf(__( 'Add New %s', 'fablab-ticket' ), $posttype_singular_name),
    'new_item'           => __( 'New ' . $posttype_singular_name, 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit ' . $posttype_singular_name, 'your-plugin-textdomain' ),
    'view_item'          => __( 'View ' . $posttype_singular_name, 'your-plugin-textdomain' ),
    'all_items'          => __( 'All ' . $posttype_name, 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search ' . $posttype_name, 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent ' . $posttype_name . ':', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No ' . $posttype_name . ' found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No ' . $posttype_name . ' found in Trash.', 'your-plugin-textdomain' )
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
    'capabilities'       => array( 'create_posts' => false, ),
    'map_meta_cap'       => true, //  if users are allowed to edit/delete existing posts
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-tickets-alt',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'ticket', $args );

}
// Displaying Ticket Lists
 
function ticket_edit_columns($columns){
  $columns = array(
    "cb" => '<input type="checkbox" />',
    "title" => fablab_get_captions('ticket_caption'),
    "ticket_type" => $posttype_name . " Typ",
    "status" => $posttype_name . " Status",
    "device_id" => fablab_get_captions('device_caption'),
    "duration" => $posttype_name . " dauer",
    "user_id" => "User",
    "activation_time" => "Activierungs Zeit",
  );
  return $columns;
}


// Edit Admin Table-View
function ticket_table_content($column_name, $post_id) {
    switch ( $column_name ) {

      case 'device_id' :
        echo get_device_title_by_id(get_ticket_field('device_id'));
        break;

      case 'duration' :
        echo get_post_time_string(get_ticket_field("duration"),true);
        break;

      case 'user_id' :
        echo get_ticket_field("user_id");
        break;

      case 'ticket_type' :
        echo get_ticket_field("ticket_type");
        break;

      case 'status' :
        echo get_ticket_field("status");
        break;

      case 'activation_time' :
        if(get_ticket_field("activation_time") != 'not set'){
          echo date_i18n('Y-m-d H:i', get_ticket_field("activation_time"));
        } else {
          echo 'Nicht Aktiv';
        }
        break;

    }
}

// Editing Tickets
 
function ticket_admin_init(){
  add_meta_box("ticket_meta", fablab_get_captions('ticket_caption') . " Details", "ticket_details_meta", "ticket", "normal", "default");
}
 
function ticket_details_meta() {
  echo '<p><label>' . fablab_get_captions('device_caption') . ':   </label> <input type="text"  disabled value="' . get_device_title_by_id(get_ticket_field("device_id")) . '" ></p>';
  echo '<p><label>User:   </label> <input type="text" disabled value="' . get_ticket_field("user_id") . '" ></p>';
  echo '<p><label>' . fablab_get_captions('ticket_caption') . ' dauer (min):   </label> <input type="text" disabled value="' . get_ticket_field("duration") . '" ></p>';
  echo '<p><label>Activireungs Zeit:   </label> <input type="text" disabled value="' . get_ticket_field("activation_time") . '" ></p>';
  echo '<p><label>' . fablab_get_captions('ticket_caption') . ' Typ:   </label> <input type="text" disabled value="' . get_ticket_field("ticket_type") . '" ></p>';

}

function get_ticket_field($ticket_field) {
    global $post;
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$ticket_field])) {
        return $custom[$ticket_field][0];
    } else if ( strcmp($ticket_field, 'user_id') == 0 ) {
      return get_user_by('id', $post->post_author)->display_name;
    } else {
      return 'not set';
    }
}

// Saving Ticket Details
 
function save_ticket_details(){
   global $post;
 
   if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
      return;
 
   if ( get_post_type($post) != 'ticket')
      return;
}

function save_ticket_field($ticket_field) {
    global $post;
 
    if(isset($_POST[$ticket_field])) {
        update_post_meta($post->ID, $ticket_field, $_POST[$ticket_field]);
    }
}

?>