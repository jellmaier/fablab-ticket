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
    'capabilities' => array( 'create_posts' => false, ),
    'map_meta_cap' => false, //  if users are allowed to edit/delete existing posts
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-clipboard',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'ticket', $args );

}

// Displaying Ticket Lists
 
function ticket_edit_columns($columns){
  $columns = array(
    "title" => "Ticket",
    "device_id" => "Gerät",
    "duration" => "Ticket dauer",
    "user_id" => "User",
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

    }
}

// Editing Tickets
 
function ticket_admin_init(){
  add_meta_box("ticket_meta", "Ticket Details", "ticket_details_meta", "ticket", "normal", "default");
}
 
function ticket_details_meta() {
  echo '<p><label>Gerät:   </label> <input type="text"  disabled value="' . get_device_title_by_id(get_ticket_field("device_id")) . '" ></p>';
  echo '<p><label>User:   </label> <input type="text" disabled value="' . get_ticket_field("user_id") . '" ></p>';
  echo '<p><label>Ticket dauer (min):   </label> <input type="text" disabled value="' . get_ticket_field("duration") . '" ></p>';

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
 
   //save_ticket_field("device_id");
   //save_ticket_field("duration");
}

function save_ticket_field($ticket_field) {
    global $post;
 
    if(isset($_POST[$ticket_field])) {
        update_post_meta($post->ID, $ticket_field, $_POST[$ticket_field]);
    }
}



function get_ticket_query_from_user($user_id) {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => 'date', 
    'order' => 'ASC',
    'post_status' => array('publish', 'draft'),
  );
  return new WP_Query($query_arg);
}

function get_ticket_device($ID) {
    $custom = get_post_custom($ID);
    if (isset($custom['device_id'])) {
        return $custom['device_id'][0];
    } else {
      return 'not set';
    }
}


function insert_ticket() {
  $device_id = $_POST['device_id'];
  $duration = $_POST['duration'];

  $post_information = array(
        'post_title' => "Ticket, von: " . wp_get_current_user()->display_name,
        //'post_title' => "Ticket, für Gerät: " . get_device_title_by_id($device_id) . ", vom " . date_i18n('D, d.m.y \u\m H:i'),
        'post_type' => 'ticket',
        'author' => get_current_user_id(),
        'post_status' => 'publish',
    );
 
    $ID = wp_insert_post( $post_information );

    if ($ID != 0) {
      add_post_meta($ID, 'device_id', $device_id);
      add_post_meta($ID, 'duration' , $duration);
    }
    
    die($ID != 0);
}
add_action( 'wp_ajax_add_ticket', 'insert_ticket' );


function update_ticket() {
  $device_id = $_POST['device_id'];
  $duration = $_POST['duration'];
  $ticket_id = $_POST['ticket_id'];

  if (intval($duration) && intval($ticket_id)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
  } else {
    die('naN');
    return;
  }
       
  die();
}
add_action( 'wp_ajax_update_ticket', 'update_ticket' );

function delete_ticket() {
  $ticket_id = $_POST['ticket_id'];

  die(wp_delete_post($ticket_id));
}
add_action( 'wp_ajax_delete_ticket', 'delete_ticket' );

function deactivate_ticket() {
  $post_information = array(
        'ID' => $_POST['ticket_id'],
        'post_status' => 'draft',
    );
  wp_update_post( $post_information );
  die();
}
add_action( 'wp_ajax_deactivate_ticket', 'deactivate_ticket' );

function activate_ticket() {
  $post_information = array(
        'ID' => $_POST['ticket_id'],
        'post_status' => 'publish',
    );
  wp_update_post( $post_information );
  die();
}
add_action( 'wp_ajax_activate_ticket', 'activate_ticket' );

function get_post_time_string($time, $shownull = false) {
  $ret = "";
  $hours = floor($time / 60);
  $minutes = $time % 60;
  $hours > 0 ? ($ret .= $hours . " Stunde") : ('');
  $hours > 1 ? ($ret .= "n") : ('') ;
  $hours > 0 && $minutes > 0 ? ($ret .= ", ") : ('') ;
  if($shownull && $hours == 0) {
    $ret .= $minutes . " Minute";
    $minutes != 1 ? ($ret .= "n") : ('');
  } else {
    $minutes > 0 ? ($ret .= $minutes . " Minute") : ('');
    $minutes > 1 ? ($ret .= "n") : ('');
  }
  return $ret;
}

?>