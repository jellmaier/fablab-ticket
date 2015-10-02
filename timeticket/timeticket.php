<?php

//namespace fablab_ticket;


if (!class_exists('TimeTicket'))
{
  class TimeTicket
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_timeticket_rewrite_flush' );
      add_action( 'init', 'codex_timeticket_init' );


      // Displaying Time Ticket Lists
      add_filter( 'manage_timeticket_posts_columns', 'timeticket_edit_columns' );
      add_action( 'manage_timeticket_posts_custom_column', 'timeticket_table_content', 10, 2 );

      // Editing Time Tickets
      add_action( 'admin_init', 'timeticket_admin_init' );

      // Saving Time Ticket Details
      add_action( 'save_post', 'save_timeticket_details' );

      add_filter( 'wp_insert_post_data' , 'set_timeticket_title' , '99', 2 );

    }
  }
}


function my_timeticket_rewrite_flush() {
    codex_timeticket_init();
    flush_rewrite_rules();
}

/**
 * Register a timeticket post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function codex_timeticket_init() {
  $labels = array(
    'name'               => _x( 'Time Tickets', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Time Ticket', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Time Tickets', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Time Ticket', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'timeticket', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Time Ticket', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Time Ticket', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Time Ticket', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Time Ticket', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Time Tickets', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Time Tickets', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Time Tickets:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No timeticket found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No timeticket found in Trash.', 'your-plugin-textdomain' )
  );

  $args = array(
    'labels'             => $labels,
                'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'timeticket' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-schedule',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'timeticket', $args );

  // Init Taxonomy

   $labels = array(
      'name'                       => _x( 'Time Ticket Type', 'taxonomy general name' ),
      'singular_name'              => _x( 'Time Ticket Type', 'taxonomy singular name' ),
      'search_items'               => __( 'Time Ticket Types suchen' ),
      'popular_items'              => __( 'Meistverwendete Lables' ),
      'all_items'                  => __( 'Alle Labes' ),
      'parent_item'                => null,
      'parent_item_colon'          => null,
      'edit_item'                  => __( 'Time Ticket Type bearbeiten' ),
      'update_item'                => __( 'Time Ticket Type updaten' ),
      'add_new_item'               => __( 'Add New Time Ticket Type' ),
      'new_item_name'              => __( 'New Time Ticket Type Name' ),
      'separate_items_with_commas' => __( '' ),
      'add_or_remove_items'        => __( 'Add or remove Time Ticket Types' ),
      'choose_from_most_used'      => __( '' ),
      'not_found'                  => __( 'No Time Ticket Types found.' ),
      'menu_name'                  => __( 'Time Ticket Types' ),
    );

    $args = array(
      'hierarchical'          => false,
      'labels'                => $labels,
      'show_ui'               => true,
      'show_admin_column'     => true,
      'update_count_callback' => '_update_post_term_count',
      'query_var'             => true,
      'rewrite'               => array( 'slug' => 'timeticket_type' ),
    );

    //register_taxonomy( 'timeticket_type', array( 'timeticket', 'timeticket', 'ticket'), $args );
}


// Displaying Time Ticket Lists
 
function timeticket_edit_columns($columns){
    $columns = array(
        "cb" => '<input type="checkbox" />',
        "title" => "Time Ticket",
        "timeticket_start_time" => "Start Time",
        "timeticket_end_time" => "End Time",
        "timeticket_device" => "Device",
        "timeticket_user" => "User",
  );
  return $columns;
}

// Edit Admin Table-View
function timeticket_table_content( $column_name, $post_id ) {
  switch ( $column_name ) {

    case 'timeticket_device' :
      echo get_device_title_by_id(get_post_meta( $post_id, 'timeticket_device', true ));
      break;

    case 'timeticket_user' :
      echo get_user_by('id', get_post_meta( $post_id, 'timeticket_user', true ))->display_name;
      break;

    case 'timeticket_start_time' :
      echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'timeticket_start_time', true ));
      break;

    case 'timeticket_end_time' :
      echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'timeticket_end_time', true ));
      break;

    default :
      echo get_post_meta( $post_id, $column_name, true );
      break;
  }
}


// Editing Time Tickets
 
function timeticket_admin_init(){
  add_meta_box("timeticket_meta", "Time Ticket Details", "timeticket_details_meta", "timeticket", "normal", "default");
}
 
function timeticket_details_meta() {
  
  echo '<p><label>Start Time Ticket: </label><input type="text" name="timeticket_start_time" id="timeticket_start_time" value="' . get_timeticket_field("timeticket_start_time") . '" /></p>';
  echo '<p><label>End Time: </label><input type="text" name="timeticket_end_time"  id="timeticket_end_time" value="' . get_timeticket_field("timeticket_end_time") . '" /> </p>';

  $device_selected = get_timeticket_field("timeticket_device");
  $timeticket_user = get_timeticket_field("timeticket_user");
  $device_list = get_online_devices(); // after this no get_timeticket_field working

  echo '<p><label>Device: </label><select name="timeticket_device">';
    foreach($device_list as $device) {
      if ($device['id'] == $device_selected) {
        echo '<option selected value="' . $device['id'] . '">' . $device['device'] . '</option>';
      } else {
        echo '<option value="' . $device['id'] . '">' . $device['device'] . '</option>';
      }
    }
  echo '</select></p>';

  $userlist = get_users( array( 'fields' => array( 'display_name', 'id'  ) ) );
  echo '<p><label>User: </label><select name="timeticket_user">';
  foreach ( $userlist as $user ) {
    if ($user->id == $timeticket_user) {
      echo '<option selected value="' . $user->id . '">' . $user->display_name . '</option>';
    } else {
      echo '<option value="' . $user->id . '">' . $user->display_name . '</option>';
    }
  }
  echo '</select></p>';

}

function get_timeticket_field($timeticket_field) {
    global $post;
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$timeticket_field])) {
      if (($timeticket_field == "timeticket_start_time") || ($timeticket_field == "timeticket_end_time")) {
        return date_i18n('Y-m-d H:i', $custom[$timeticket_field][0]);
      } else {
        return $custom[$timeticket_field][0];
      }
    }
}

// Saving Time Ticket Details
 
function save_timeticket_details(){
   global $post;
 
   if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
      return;
 
   if ( get_post_type($post) != 'timeticket')
      return;

   save_timeticket_field("timeticket_start_time");
   save_timeticket_field("timeticket_end_time");
   save_timeticket_field("timeticket_device");
   save_timeticket_field("timeticket_user");

}

function save_timeticket_field($timeticket_field) {
    global $post;
 
    if(isset($_POST[$timeticket_field])) {
      if (($timeticket_field == "timeticket_start_time") || ($timeticket_field == "timeticket_end_time")) {
          update_post_meta($post->ID, $timeticket_field, strtotime($_POST[$timeticket_field]));
      } else {
        update_post_meta($post->ID, $timeticket_field, $_POST[$timeticket_field]);
      }
    }
}

function set_timeticket_title( $data , $postarr ) {
  if($data['post_type'] == 'timeticket' && $_POST["timeticket_user"] != '') {
    $title = 'Time-Ticket von: ' . get_user_by('id', $_POST["timeticket_user"])->display_name;
    $data['post_title'] = $title;
    $data['post_name'] = sanitize_title_with_dashes( $title, '', save);
  }
  return $data;
}

function is_device_availabel($device_id){
  global $post;

  $query_arg = array(
    'post_type' => 'timeticket',
    'meta_query'=>array(
      'relation'=>'and',
      array(
        'key' => 'timeticket_device',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '<'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '>'
      )
    )
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    return false;
  }
  wp_reset_query();

  return true;
}

function is_device_availabel_range($device_id, $start_time, $end_time) {
  global $post;
  
  $query_arg = array(
    'post_type' => 'timeticket',
    'meta_query'=>array(
      'relation'=>'and',
      array(
        'key' => 'timeticket_device',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> $start_time,
          'compare' => '>'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> $end_time,
          'compare' => '<'
      )
    )
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    return false;
  }
  wp_reset_query();

  $query_arg = array(
    'post_type' => 'timeticket',
    'meta_query'=>array(
      'relation'=>'and',
      array(
        'key' => 'timeticket_device',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> $start_time,
          'compare' => '<'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> $start_time,
          'compare' => '>'
      )
    )
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    return false;
  }
  wp_reset_query();

  $query_arg = array(
    'post_type' => 'timeticket',
    'meta_query'=>array(
      'relation'=>'and',
      array(
        'key' => 'timeticket_device',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> $end_time,
          'compare' => '<'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> $end_time,
          'compare' => '>'
      )
    )
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    return false;
  }

  return true;
}

// handle waiting time of current active time-tickets
function device_waiting_time($device_id, $waiting_time) {
  global $post;
  $temp_post = $post;
  
  $query_arg = array(
    'post_type' => 'timeticket',
    'meta_query'=>array(
      'relation'=>'and',
      array(
        'key' => 'timeticket_device',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '<'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '>'
      )
    )
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ; 
      $waiting_time += ((get_post_meta($post->ID, 'timeticket_end_time', true ) - current_time( 'timestamp' )) / 60 );
    endwhile;
  }
  wp_reset_query();
 
  // handle waiting time of upcoming time-tickets
 /*
  $query_arg = array(
    'post_type' => 'timeticket',
    'meta_query'=>array(
      'relation'=>'and',
      array(
        'key' => 'timeticket_device',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '>'
      ),
      array(
          'key'=>'timeticket_start_time',
          'value'=> (current_time( 'timestamp' ) + (60*60*24)),
          'compare' => '<'
      )
    )
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $start_time = get_post_meta($post->ID, 'timeticket_start_time', true );
      $end_time = get_post_meta($post->ID, 'timeticket_end_time', true );
      $current_endtime = (current_time( 'timestamp' ) + (60 * $waiting_time));
      if($current_endtime > $start_time) {
        if($current_endtime > $end_time) {
          $waiting_time += (($end_time - $start_time) / 60 );
        } else {
          $waiting_time += (($end_time - $current_endtime) / 60 );
        }
      } else {
        $post = $temp_post;
        return $waiting_time;
      }
    endwhile;
  }
  wp_reset_query();

  */

  $post = $temp_post;

  return $waiting_time;
}

function insert_timeticket() {
  $device_id = $_POST['device_id'];
  $duration = $_POST['duration'];
  $user_id = $_POST['user_id'];

  $start_time = current_time( 'timestamp' );
  $end_time = (current_time( 'timestamp' ) + (60 * $duration)) ;

  $post_information = array(
        'post_title' => 'Time-Ticket von: ' . get_user_by('id', $user_id)->display_name,
        'post_type' => 'timeticket',
        'author' => get_current_user_id(),
        'post_status' => 'publish',
    );
 
    $ID = wp_insert_post( $post_information );

    if ($ID != 0) {
      add_post_meta($ID, 'timeticket_device', $device_id);
      add_post_meta($ID, 'timeticket_start_time' , $start_time);
      add_post_meta($ID, 'timeticket_end_time' , $end_time);
      add_post_meta($ID, 'timeticket_user' , $user_id);
    }

    die($ID != 0);
}
add_action( 'wp_ajax_add_timeticket', 'insert_timeticket' );


function delete_timeticket() {
  $ticket_id = $_POST['ticket_id'];
  die(wp_delete_post($ticket_id));
}
add_action( 'wp_ajax_delete_timeticket', 'delete_timeticket' );

function stop_timeticket() {
  $ticket_id = $_POST['ticket_id'];
  update_post_meta($ticket_id, 'timeticket_end_time', current_time( 'timestamp' ));
  die();
}
add_action( 'wp_ajax_stop_timeticket', 'stop_timeticket' );


?>