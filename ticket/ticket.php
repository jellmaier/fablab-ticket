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
    'menu_icon'          => 'dashicons-tickets-alt',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'ticket', $args );

}

// Displaying Ticket Lists
 
function ticket_edit_columns($columns){
  $columns = array(
    "title" => "Ticket",
    "ticket_type" => "Ticket Typ",
    "device_id" => "Gerät",
    "duration" => "Ticket dauer",
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
  add_meta_box("ticket_meta", "Ticket Details", "ticket_details_meta", "ticket", "normal", "default");
}
 
function ticket_details_meta() {
  echo '<p><label>Gerät:   </label> <input type="text"  disabled value="' . get_device_title_by_id(get_ticket_field("device_id")) . '" ></p>';
  echo '<p><label>User:   </label> <input type="text" disabled value="' . get_ticket_field("user_id") . '" ></p>';
  echo '<p><label>Ticket dauer (min):   </label> <input type="text" disabled value="' . get_ticket_field("duration") . '" ></p>';
  echo '<p><label>Activireungs Zeit:   </label> <input type="text" disabled value="' . get_ticket_field("activation_time") . '" ></p>';
  echo '<p><label>Ticket Typ:   </label> <input type="text" disabled value="' . get_ticket_field("ticket_type") . '" ></p>';

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

function get_ticket_query_from_user($user_id) {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => 'date', 
    'order' => 'ASC',
    'post_status' => array('publish', 'draft'),
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      )
    )
  );
  return new WP_Query($query_arg);
}

function get_instruction_query_from_user($user_id) {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'instruction',
      )
    )
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
  $device_id = sanitize_text_field($_POST['device_id']);
  $duration = sanitize_text_field($_POST['duration']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();

  //valide input
  if(($duration > $options['ticket_max_time']) || is_no_device_entry($device_id) 
                  || user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }

  //check how many tickets of user
  $tickets_per_user = $options['tickets_per_user'];
  $query_arg = array(
        'post_type' => 'ticket',
        'author' => $user_id,
        'post_status' => array('publish', 'draft'),
        'meta_query'=>array(
          array(
            'key'=>'ticket_type',
            'value'=> 'device',
      )
    )
  );

  $ticket_query = new WP_Query($query_arg);
  if ($ticket_query->found_posts < $tickets_per_user) {
    $post_information = array(
      'post_title' => "Ticket, von: " . wp_get_current_user()->display_name,
      'post_type' => 'ticket',
      'author' => get_current_user_id(),
      'post_status' => 'publish',
    );
   
    $ID = wp_insert_post( $post_information );

    if ($ID != 0) {
      add_post_meta($ID, 'device_id', $device_id);
      add_post_meta($ID, 'duration' , $duration);
      add_post_meta($ID, 'ticket_type' , 'device');
    }
    
    die($ID != 0);
  }
  die(false);
}
add_action( 'wp_ajax_add_ticket', 'insert_ticket' );

function insert_instruction_ticket() {
  $device_id = sanitize_text_field($_POST['device_id']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();

  //valide input
  if(is_no_device_entry($device_id) || user_has_ticket($user_id, $device_id, 'instruction')) {
    die(false);
  }

  $post_information = array(
    'post_title' => "Einschulungsanfrage, von: " . wp_get_current_user()->display_name,
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => 'publish',
  );
 
  $ID = wp_insert_post( $post_information );

  if ($ID != 0) {
    add_post_meta($ID, 'device_id', $device_id);
    add_post_meta($ID, 'ticket_type' , 'instruction');
  }
  
  die($ID != 0);
}
add_action( 'wp_ajax_add_instruction_ticket', 'insert_instruction_ticket' );


function update_ticket() {
  $device_id = sanitize_text_field($_POST['device_id']);
  $duration = sanitize_text_field($_POST['duration']);
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  $user_id = get_current_user_id();
  $options = fablab_get_option();

  if ((get_ticket_device($ticket_id) != $device_id) && 
    user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }

  //valide input  
  if(($duration > $options['ticket_max_time']) 
    || is_no_device_entry($device_id) || !is_ticket_entry($ticket_id) 
    || !has_ticket_update_permission($ticket_id)) {
    die(false);
  }

  if (intval($duration) && intval($ticket_id)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
  } else {
    die('naN');
    return;
  }
       
  die(true);
}
add_action( 'wp_ajax_update_ticket', 'update_ticket' );

function delete_ticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !has_ticket_update_permission($ticket_id)) {
    die(false);
  }
  die(!(wp_delete_post($ticket_id) == false));
}
add_action( 'wp_ajax_delete_ticket', 'delete_ticket' );

function deactivate_ticket($ticket_id) {
  $post_information = array(
        'ID' => $ticket_id,
        'post_status' => 'draft',
    );
  wp_update_post( $post_information );
  delete_post_meta($ticket_id, 'activation_time');
  return true;
}

function deactivate_ticket_ajax() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }
  die(deactivate_ticket($ticket_id));
}
add_action( 'wp_ajax_deactivate_ticket', 'deactivate_ticket_ajax' );

function activate_ticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }

  $post_information = array(
    'ID' => $ticket_id,
    'post_status' => 'publish',
  );
  wp_update_post( $post_information );

  clear_device_activation_time(get_post_meta( $ticket_id, 'device_id', true ));

  die(true);
}
add_action( 'wp_ajax_activate_ticket', 'activate_ticket' );


function is_ticket_entry($ID) {
  $post_object = get_post($ID);
  return (!empty($post_object) && ($post_object->post_type == 'ticket'));
}

function has_ticket_update_permission($post_id = 0) {
  $post_object = get_post($post_id);
  return (($post_object->post_author == get_current_user_id()) 
              || current_user_can( 'delete_others_posts' ));
}

function has_timeticket_update_permission($post_id = 0) {
  return ((get_post_meta($post_id, 'timeticket_user', true ) == get_current_user_id()) || is_manager());
}

function is_manager() {
  return current_user_can('delete_others_posts');
}

function set_activation_time($ticket_id) {
  if(is_ticket_entry($ticket_id) && !is_active_ticket($ticket_id)) {
    update_post_meta($ticket_id, 'activation_time', current_time( 'timestamp' ));
    return true;
  }
  return false;
}

function clear_device_activation_time($device_id){
  global $post;
  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      ),
      array(
          'key'=>'activation_time',
          'value'=> '',
          'compare' => '!='
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    delete_post_meta($post->ID, 'activation_time');
  endwhile;
}

function is_active_ticket($ticket_id){
  $activation_time = get_activation_time($ticket_id);
  if(empty($activation_time)){
    return false;
  }
  return true;
}

function user_has_ticket($user_id, $device_id, $device_type){
  global $post;
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => array('publish', 'draft'),
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> $device_type,
      ),
      array(
          'key'=>'device_id',
          'value'=> $device_id,
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    return true;
  }
  return false;
}

function get_activation_time($ticket_id) {
  return get_post_meta( $ticket_id, 'activation_time', true );
}

function get_timediff_string($first_time, $second_time = 0) {
  if($second_time == 0) {
    $second_time = current_time('timestamp');
  }
  $second_time = round($second_time / 60);
  $first_time = round($first_time / 60);
  if($second_time > $first_time){
    return 'vor ' . get_post_time_string($second_time - $first_time);
  } else if ($first_time > $second_time) {
    return 'in ' . get_post_time_string($first_time - $second_time);
  } else {
    return 'jetzt';
  }
}

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