<?php

//namespace fablab_ticket;

 
include 'timeticket-statistic.php';


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
  $posttype_singular_name = fablab_get_captions('time_ticket_caption');
  $posttype_name = fablab_get_captions('time_tickets_caption');
  $labels = array(
    'name'               => _x( $posttype_name, 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( $posttype_singular_name, 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( $posttype_name, 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( $posttype_singular_name, 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'ticket', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New ' . $posttype_singular_name, 'your-plugin-textdomain' ),
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
    'rewrite'            => array( 'slug' => 'timeticket' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-schedule',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'timeticket', $args );

}


// Displaying Time Ticket Lists
 
function timeticket_edit_columns($columns){
  $posttype_name = fablab_get_option('time_ticket_caption');
  $columns = array(
        "cb" => '<input type="checkbox" />',
        "title" => $posttype_name,
        "timeticket_start_time" => "Start Zeit",
        "timeticket_end_time" => "End Zeit",
        "timeticket_waiting_start_time" => "Waiting Start Zeit",
        "timeticket_device" => fablab_get_captions('device_caption'),
        "timeticket_user" => "User",
        "ticket_id" => fablab_get_captions('ticket_caption'),
  );
  return $columns;
}

// Edit Admin Table-View
function timeticket_table_content( $column_name, $post_id ) {
  switch ( $column_name ) {

    case 'timeticket_device' :
      $device_type = get_post_meta( $post_id, 'timeticket_device', true );
      echo '<p style="border-bottom: 3px solid ' . get_device_type_color_field($device_type) 
          . '; display: inline-block;" >' . get_device_title_by_id($device_type) . '</p>';
      //echo get_device_title_by_id(get_post_meta( $post_id, 'timeticket_device', true ));
      break;

    case 'timeticket_user' :
      echo get_ticket_field("user_id");
      break;

    case 'timeticket_start_time' :
      echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'timeticket_start_time', true ));
      break;

    case 'timeticket_end_time' :
      $end_time = get_post_meta( $post_id, 'timeticket_end_time', true );
      if($end_time)
        echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'timeticket_end_time', true ));
      else
        echo 'not set';
      break;

    case 'timeticket_waiting_start_time' :
      $waiting_start_time = get_post_meta( $post_id, 'timeticket_waiting_start_time', true );
      if($waiting_start_time)
        echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'timeticket_waiting_start_time', true ));
      else
        echo 'not set';
      break;

    case 'ticket_id' :
      echo get_the_title(get_ticket_field("ticket_id"));
      break;

    default :
      echo get_post_meta( $post_id, $column_name, true );
      break;
  }
}


// Editing Time Tickets
 
function timeticket_admin_init(){
  add_meta_box("timeticket_meta", fablab_get_captions('time_ticket_caption') . " Details", "timeticket_details_meta", "timeticket", "normal", "default");
}
 
function timeticket_details_meta() {

  echo '<p><label>Start Wartezeit: </label><input type="text" name="timeticket_waiting_start_time"  class="start_waiting_time" value="' . get_timeticket_field("timeticket_waiting_start_time") . '" /> </p>';
  
  echo '<p><label>Start Zeit: </label><input type="text" name="timeticket_start_time" class="start_time" value="' . get_timeticket_field("timeticket_start_time") . '" /></p>';
  echo '<p><label>End Zeit: </label><input type="text" name="timeticket_end_time"  class="end_time" value="' . get_timeticket_field("timeticket_end_time") . '" /> </p>';


  $device_selected = get_timeticket_field("timeticket_device");
  //$timeticket_user = get_timeticket_field("timeticket_user");
  $device_list = get_online_devices(); // after this no get_timeticket_field working

  echo '<p><label>' . fablab_get_captions('device_caption') . ': </label><select name="timeticket_device">';
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
  foreach ( $userlist as $user )
      echo '<option '. selected($user->id, $post->post_author, false) .' value="' . $user->id . '">' . $user->display_name . '</option>';

  echo '</select></p>';

}

function get_timeticket_field($timeticket_field) {
    global $post;
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$timeticket_field])) {
      if (($timeticket_field == "timeticket_start_time") 
        || ($timeticket_field == "timeticket_end_time")
        || ($timeticket_field == "timeticket_waiting_start_time")
      ) {
        return date_i18n('Y-m-d H:i', $custom[$timeticket_field][0]);
      } else {
        return $custom[$timeticket_field][0];
      }
    } else if ( strcmp($timeticket_field, 'user_id') == 0 ) {
      return get_user_by('id', $post->post_author)->display_name;
    } else {
      return 'not set';
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
   save_timeticket_field("timeticket_waiting_start_time");
   save_timeticket_field("timeticket_device");
   save_timeticket_field("timeticket_user");

}

function save_timeticket_field($timeticket_field) {
    global $post;
 
    if(isset($_POST[$timeticket_field])) {
      if (($timeticket_field == "timeticket_start_time") 
          || ($timeticket_field == "timeticket_end_time")
          || ($timeticket_field == "timeticket_waiting_start_time") ) {
          update_post_meta($post->ID, $timeticket_field, strtotime($_POST[$timeticket_field]));
      } else if ($timeticket_field == "timeticket_user") {
          //update_post_meta($post->ID, $timeticket_field, strtotime($_POST[$timeticket_field]));
      } else {
        update_post_meta($post->ID, $timeticket_field, $_POST[$timeticket_field]);
      }
    }
}

function set_timeticket_title( $data , $postarr ) {
  if($data['post_type'] == 'timeticket' && $_POST["timeticket_user"] != '') {
    $title = fablab_get_captions('time_ticket_caption') . ' von: ' . get_user_by('id', $_POST["timeticket_user"])->display_name;
    $data['post_title'] = $title;
    $data['post_name'] = sanitize_title_with_dashes( $title, '', save);
  }
  return $data;
}

// ------------------------------------------------------------------------------------


function add_ticket_timeticket($device_id, $user_id, $ticket_id) {

  $start_time = current_time( 'timestamp' );
  //$end_time = (current_time( 'timestamp' ) + (60 * $duration)) ;


  $post_information = array(
        'post_title' => fablab_get_captions('time_ticket_caption') . ' von: ' . get_user_by('id', $user_id)->display_name,
        'post_type' => 'timeticket',
        'post_author' => $user_id,
        'post_status' => 'publish',
    );
 
  $ID = wp_insert_post( $post_information );

  if ($ID != 0) {
    add_post_meta($ID, 'timeticket_device', $device_id);
    set_timeticket_start_time($ID);
    add_post_meta($ID, 'timeticket_waiting_start_time' , get_the_time('U', $ticket_id)); 
    add_post_meta($ID, 'ticket_id' , $ticket_id);
  }

  return $ID;

}

function set_timeticket_start_time($timeticket_id) {
  $time = current_time( 'timestamp' );
  update_post_meta($timeticket_id, 'timeticket_start_time' , $time);
}

function set_timeticket_end_time($timeticket_id) {
  $time = current_time( 'timestamp' );
  update_post_meta($timeticket_id, 'timeticket_end_time' , $time);
}

function disconnect_ticket_of_timeticket($timeticket_id) {
  delete_post_meta($timeticket_id, 'ticket_id');
}

// -----------------------------------------------------------------------------

/*
function get_active_user_ticket($user_id) {
  $time_delay = (fablab_get_option('ticket_delay') * 60);
  
  $query_arg = array(
    'post_type' => 'timeticket',
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
    'relation'=>'and',
      array(
          'key'=>'timeticket_start_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '<'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> (current_time( 'timestamp' ) - $time_delay),
          'compare' => '>'
      ),
      array(
          'key'=>'timeticket_user',
          'value'=> $user_id,
          'compare' => '='
      )
    )
  );
  return new WP_Query($query_arg);
}
*/
function is_device_availabel($device_id){
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
    wp_reset_query();
    $post = $temp_post;
    return false;
  }
  wp_reset_query();
  $post = $temp_post;

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
 
  // -- mssing -- handle waiting time of upcoming time-tickets

  $post = $temp_post;

  return $waiting_time;
}

function insert_timeticket() {
  $device_id = $_POST['device_id'];
  $duration = $_POST['duration'];
  $user_id = $_POST['user_id'];
  $ticket_id = $_POST['ticket_id'];

  $start_time = current_time( 'timestamp' );
  $end_time = (current_time( 'timestamp' ) + (60 * $duration)) ;

  $post_information = array(
        'post_title' => fablab_get_captions('time_ticket_caption') . ' von: ' . get_user_by('id', $user_id)->display_name,
        'post_type' => 'timeticket',
        'author' => $user_id,
        'post_status' => 'publish',
    );
 
    $ID = wp_insert_post( $post_information );

    if ($ID != 0) {
      add_post_meta($ID, 'timeticket_device', $device_id);
      add_post_meta($ID, 'timeticket_start_time' , $start_time);
      add_post_meta($ID, 'timeticket_end_time' , $end_time);
      add_post_meta($ID, 'timeticket_user' , $user_id);
    }

    deactivate_ticket($ticket_id);
    set_activation_time($ticket_id);

    die($ID != 0);
}
add_action( 'wp_ajax_add_timeticket', 'insert_timeticket' );

function is_timeticket_entry($ID) {
  $post_object = get_post($ID);
  return (!empty($post_object) && ($post_object->post_type == 'timeticket'));
}

function delete_timeticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);
  if(!is_timeticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }
  die(!(wp_delete_post($ticket_id) == false));
}
add_action( 'wp_ajax_delete_timeticket', 'delete_timeticket' );

function stop_timeticket() {  
  $ticket_id = sanitize_text_field($_POST['ticket_id']);
  if(!is_timeticket_entry($ticket_id) || !has_timeticket_update_permission($ticket_id)) {
    die(false);
  }
  die(update_post_meta($ticket_id, 'timeticket_end_time', current_time( 'timestamp' )) == true);
}
add_action( 'wp_ajax_stop_timeticket', 'stop_timeticket' );

function extend_timeticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);
  $minutes = sanitize_text_field($_POST['minutes']);

  if(!is_timeticket_entry($ticket_id) || !has_timeticket_update_permission($ticket_id)) {
    die(false);
  }

  $start_time = get_post_meta($ticket_id, 'timeticket_start_time', true );
  $end_time = get_post_meta($ticket_id, 'timeticket_end_time', true );
  $new_time = $end_time + ($minutes * 60);
  $ticket_max_time = (fablab_get_option('ticket_max_time') * 60);

  if((($new_time - $start_time) > $ticket_max_time) && !is_manager()) {
    if(($end_time - $start_time) < $ticket_max_time) {
      $new_time = $start_time + $ticket_max_time;
    } else {
      die(false);
    }
    
  }

  

  clear_device_activation_time(get_post_meta( $ticket_id, 'timeticket_device', true ));

  die(update_post_meta($ticket_id, 'timeticket_end_time', $new_time) == true);
}
add_action( 'wp_ajax_extend_timeticket', 'extend_timeticket' );


?>