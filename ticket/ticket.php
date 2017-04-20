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

function get_ticket_query_from_user($user_id, $device_id = '-1') {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => array( 
      'meta_value' => 'ASC', 
      'date' => 'ASC',
    ),
    'meta_key' => 'status',
    'post_status' => 'publish',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'   => array( 'device', 'device_type'),
          'compare' => 'IN',
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
  $ticket_type = sanitize_text_field($_POST['type']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();

  //valide input
  if(($duration > $options['ticket_max_time']) || user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }

  if (($ticket_type == 'device') || ($ticket_type == 'device_type') || ($ticket_type == 'instruction')) {
    if (($ticket_type == 'device') && is_no_device_entry($device_id)) {
        die(false);
    } else if (($ticket_type == 'device_type') && is_no_device_type($device_id)) {
        die(false);
    }

  
  } else
    die(false);



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
      'post_title' => fablab_get_captions('ticket_caption') . ", von: " . wp_get_current_user()->display_name,
      'post_type' => 'ticket',
      'author' => get_current_user_id(),
      'post_status' => 'publish',
    );
   
    $ID = wp_insert_post( $post_information );

    if ($ID != 0) {
      add_post_meta($ID, 'device_id', $device_id);
      add_post_meta($ID, 'duration' , $duration);
      add_post_meta($ID, 'ticket_type' , $ticket_type);
      add_post_meta($ID, 'status' , "5-waiting");
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
    'post_title' => fablab_get_captions('instruction_request_caption') . ', von: ' . wp_get_current_user()->display_name,
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
  $ticket_type = sanitize_text_field($_POST['type']);

  $user_id = get_current_user_id();
  $options = fablab_get_option();

  if ((get_ticket_device($ticket_id) != $device_id) && 
    user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }

  //valide input  
  if(($duration > $options['ticket_max_time']) 
    || !is_ticket_entry($ticket_id) || !has_ticket_update_permission($ticket_id)) {
        if (($ticket_type == 'device') && is_no_device_entry($device_id)) {
        die(false);
    } else if (($ticket_type == 'device_type') && is_no_device_type($device_id)) {
        die(false);
    }
  }

  if (intval($duration) && intval($ticket_id)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
    update_post_meta($ticket_id, 'ticket_type' , $ticket_type);
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
  update_post_meta($ticket_id, 'status', '6-inactive');
  delete_post_meta($ticket_id, 'activation_time');
  return true;
}
/*
function deactivate_ticket_ajax() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }
  die(deactivate_ticket($ticket_id));
}
add_action( 'wp_ajax_deactivate_ticket', 'deactivate_ticket_ajax' );
*/
/*
function activate_ticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }


  update_post_meta($ticket_id, 'status', '5-waiting');
  clear_device_activation_time(get_post_meta( $ticket_id, 'device_id', true ));

  die(true);
}
add_action( 'wp_ajax_activate_ticket', 'activate_ticket' );
*/

function rest_continue_ticket($data) {

  $ticket_id = sanitize_text_field($data['id']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );

  update_post_meta($ticket_id, 'status', '1-assigned');

  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/continue_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_continue_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


function rest_finish_ticket($data) {

  $ticket_id = sanitize_text_field($data['id']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );

  update_post_meta($ticket_id, 'status', '0-finished');

  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/finish_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_finish_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_assign_ticket($data) {

  $ticket_id = sanitize_text_field($data['ticket_id']);
  $device_id = sanitize_text_field($data['device_id']);
  $duration = sanitize_text_field($data['duration']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );


  if (intval($duration)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
    update_post_meta($ticket_id, 'ticket_type' , 'device');
    update_post_meta($ticket_id, 'status', '1-assigned');
  } else 
    return WP_Error( 'rest_noticket', __( 'Please, set duration!', 'fablab-ticket' ), array( 'status' => 422 ) );
  
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/assign_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_assign_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_schedule_ticket($data) {

  $ticket_id = sanitize_text_field($data['ticket_id']);
  $device_id = sanitize_text_field($data['device_id']);
  $ticket_type = sanitize_text_field($data['device_type']);
  $duration = sanitize_text_field($data['duration']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );


  if (intval($duration)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
    update_post_meta($ticket_id, 'ticket_type' , $ticket_type);
    update_post_meta($ticket_id, 'status', '3-scheduled');
  } else 
    return WP_Error( 'rest_noticket', __( 'Please, set duration!', 'fablab-ticket' ), array( 'status' => 422 ) );
  
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/schedule_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_schedule_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_deactivate_ticket($data) {
  $ticket_id = $data['id'];
  //valide input  
  if(!is_ticket_entry($ticket_id)) {
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
  }
  deactivate_ticket($ticket_id);
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/deactivate_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_deactivate_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_activate_ticket($data) {
  $ticket_id = $data['id'];
  //valide input  
  if(!is_ticket_entry($ticket_id)) {
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
  }
  update_post_meta($ticket_id, 'status', '5-waiting');

  $ticket_type = get_post_meta( $ticket_id, 'ticket_type', true );
  if($ticket_type == 'device') {
    $device_id = get_post_meta( $ticket_id, 'device_id', true );
    $device_type_selected_array = wp_get_post_terms($device_id, 'device_type', array("fields" => "ids"));
    $device_type_selected = $device_type_selected_array[0];
    update_post_meta($ticket_id, 'device_id', $device_type_selected);
    update_post_meta($ticket_id, 'ticket_type' , 'device_type');
  }


  //set_activation_time($ticket_id);
  //clear_device_activation_time(get_post_meta( $ticket_id, 'device_id', true ));
  //delete_post_meta($ticket_id, 'activation_time');
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/activate_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_activate_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_delete_ticket($data) {
  $ticket_id = $data['id'];
  //valide input  
  if(!is_ticket_entry($ticket_id)) {
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
  }

  if (wp_delete_post($ticket_id) == false)
    return WP_Error( 'rest_notdeleted', __( 'Ticket not deleted', 'fablab-ticket' ), array( 'status' => 423 ) );
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/delete_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_delete_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_edit_ticket($data) {

  $ticket_id = sanitize_text_field($data['ticket_id']);
  $device_id = sanitize_text_field($data['device_id']);
  //$duration = sanitize_text_field($data['duration']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );


  //if (intval($duration)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    //update_post_meta($ticket_id, 'duration' , $duration);
    //update_post_meta($ticket_id, 'ticket_type' , 'device');
  //} else 
    //return WP_Error( 'rest_noticket', __( 'Please, set duration!', 'fablab-ticket' ), array( 'status' => 422 ) );
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/edit_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_edit_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_add_ticket($data) {
  $device_id = sanitize_text_field($data['device_id']);
  //$duration = sanitize_text_field($data['duration']);
  $ticket_type = sanitize_text_field($data['type']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();


  if ($options['ticket_online'] != 1)
    return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

  $duration = $options['ticket_max_time'];
  /*
  //valide input
  if(($duration > $options['ticket_max_time']) || user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }
*/

  if (($ticket_type == 'device') && is_no_device_entry($device_id))
    return new WP_Error( 'rest_nodevice', __( 'Is not a device', 'fablab-ticket' ), array( 'status' => 422 ) );
  else if (($ticket_type == 'device_type') && is_no_device_type($device_id))
    return new WP_Error( 'rest_nodevice_type', __( 'Is not a device_type', 'fablab-ticket' ), array( 'status' => 422 ) );
  

/*
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

  if ($ticket_query->found_posts >= $tickets_per_user) 
    return WP_Error( 'rest_max_tickets', __( 'Max number of Tickets', 'fablab-ticket' ), array( 'status' => 422 ) );

  */

  $post_information = array(
    'post_title' => sprintf(__( '%s, from: ', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )) . wp_get_current_user()->display_name,//fablab_get_captions('ticket_caption') . ", von: " . 
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => 'publish',
  );

  $ID = wp_insert_post( $post_information );


  if ($ID != 0) {
    add_post_meta($ID, 'device_id', $device_id);
    add_post_meta($ID, 'duration' , $duration);
    add_post_meta($ID, 'ticket_type' , $ticket_type);
    add_post_meta($ID, 'status' , "5-waiting");
  }


  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/add_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_add_ticket',
    'permission_callback' => 'rest_has_ticket_add_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


function is_ticket_entry($ID) {
  $post_object = get_post($ID);
  return (!empty($post_object) && ($post_object->post_type == 'ticket'));
}

function rest_has_ticket_add_permission() {

  if (current_user_can('edit_posts'))
    return true;
  
  return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
}

function rest_has_ticket_update_permission($data) {
  if (isset($data['id']))
    $ticket_id = sanitize_text_field($data['id']);
  else if (isset($data['ticket_id']))
    $ticket_id = sanitize_text_field($data['ticket_id']);
  else
    $ticket_id = 0;

  if (has_ticket_update_permission($ticket_id))
    return true;
  
  return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
}

function rest_is_manager() {

  if (is_manager())
    return true;
  
  return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
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