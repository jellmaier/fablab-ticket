<?php

//namespace fablab_ticket;


if (!class_exists('Device'))
{
  class Device
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_rewrite_flush' );
      add_action( 'init', 'codex_device_init' );


      // Displaying Device Lists
      //add_action("manage_posts_custom_column",  "device_custom_columns");
      add_filter("manage_device_posts_columns", "device_edit_columns");

      // Editing Devices
      add_action("admin_init", "device_admin_init");

      // Saving Device Details
      add_action('save_post', 'save_device_details');

    }
  }
}


function my_rewrite_flush() {
    // First, we "add" the custom post type via the above written function.
    // Note: "add" is written with quotes, as CPTs don't get added to the DB,
    // They are only referenced in the post_type column with a post entry, 
    // when you add a post of this CPT.
    codex_device_init();

    // ATTENTION: This is *only* done during plugin activation hook in this example!
    // You should *NEVER EVER* do this on every page load!!
    flush_rewrite_rules();
}

/**
 * Register a device post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function codex_device_init() {
  $labels = array(
    'name'               => _x( 'Devices', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Device', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Devices', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Device', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'device', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Device', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Device', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Device', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Device', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Devices', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Devices', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Devices:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No device found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No device found in Trash.', 'your-plugin-textdomain' )
  );

  $args = array(
    'labels'             => $labels,
                'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'device' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-desktop',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'device', $args );

  // Init Taxonomy

   $labels = array(
      'name'                       => _x( 'Device Type', 'taxonomy general name' ),
      'singular_name'              => _x( 'Device Type', 'taxonomy singular name' ),
      'search_items'               => __( 'Device Types suchen' ),
      'popular_items'              => __( 'Meistverwendete Lables' ),
      'all_items'                  => __( 'Alle Labes' ),
      'parent_item'                => null,
      'parent_item_colon'          => null,
      'edit_item'                  => __( 'Device Type bearbeiten' ),
      'update_item'                => __( 'Device Type updaten' ),
      'add_new_item'               => __( 'Add New Device Type' ),
      'new_item_name'              => __( 'New Device Type Name' ),
      'separate_items_with_commas' => __( '' ),
      'add_or_remove_items'        => __( 'Add or remove Device Types' ),
      'choose_from_most_used'      => __( '' ),
      'not_found'                  => __( 'No Device Types found.' ),
      'menu_name'                  => __( 'Device Types' ),
    );

    $args = array(
      'hierarchical'          => false,
      'labels'                => $labels,
      'show_ui'               => true,
      'show_admin_column'     => true,
      'update_count_callback' => '_update_post_term_count',
      'query_var'             => true,
      'rewrite'               => array( 'slug' => 'device_type' ),
    );

    register_taxonomy( 'device_type', array( 'device', 'device', 'ticket'), $args );


}


// Displaying Device Lists
 
function device_edit_columns($columns){
    $columns = array(
        "title" => "Device",
        "device_status" => "Device Status",
        "device_color" => "Device Color",
  );
  return $columns;
}

// Editing Devices
 
function device_admin_init(){
  add_meta_box("device_meta", "Device Details", "device_details_meta", "device", "normal", "default");
}
 
function device_details_meta() {
  ?>
   <table>
    <tr>
      <th>Status:</th>
      <th>
        <form name="" id="deviceStatus">
        <?php
        if(get_device_field("device_status") == 'online'){ 
          echo '<input type="radio" name="device_status" checked value="online">Online ';
          echo '<input type="radio" name="device_status" value="offline">Offline ' ;
        } else if (get_device_field("device_status") == 'offline') {
          echo '<input type="radio" name="device_status" value="online">Online ';
          echo '<input type="radio" name="device_status" checked value="offline">Offline ' ;
        } else {
          echo '<input type="radio" name="device_status" value="online">Online ';
          echo '<input type="radio" name="device_status" checked value="offline">Offline ' ;
        }
        ?>
        </form>
      </th>
    </tr>
     <tr>
      <th>Device Color:</th>
      <th> 
        <div id="colorPicker">
          <a class="color"><div class="colorInner" style="background-color: <?= get_timeticket_field("device_color"); ?>;"></div></a>
          <div class="track"></div>
          <ul class="dropdown"><li></li></ul>
          <input type="hidden" name="device_color" class="colorInput" value="<?= get_timeticket_field("device_color"); ?>"/>
        </div>
      </th>
    </tr>
  </table> 
  <?php
}

function get_device_field($device_field) {
    global $post;
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$device_field])) {
        return $custom[$device_field][0];
    }
}

// Saving Device Details
 
function save_device_details(){
   global $post;
 
   if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
      return;
 
   if ( get_post_type($post) != 'device')
      return;

   save_device_field("device_status");
   save_device_field("device_color");
}

function save_device_field($device_field) {
    global $post;
 
    if(isset($_POST[$device_field])) {
        update_post_meta($post->ID, $device_field, $_POST[$device_field]);
    }
}

function get_device_content() {
  $device_id = $_POST['device_id'];
  //$ticket_id = '43';
  $device = get_post( $device_id, ARRAY_A );
  //echo var_dump($ticket);
  //$contetnt = $post['post_contetnt'];
  $content = apply_filters ("the_content", $device['post_content']);

  die($content);
}
add_action( 'wp_ajax_get_device_content', 'get_device_content' );

function get_device_title() {
  $device_id = $_POST['device_id'];
  $device = get_post( $device_id, ARRAY_A );
  $title = $device['post_title'];

  die($title);
}
add_action( 'wp_ajax_get_device_title', 'get_device_title' );

function get_device_title_by_id($device_id) {
  $device = get_post( $device_id, ARRAY_A );
  return $device['post_title'];
}

function get_online_devices() {
  global $post;
  $query_arg = array(
    'post_type' => 'device',
    'meta_query' => array(   
      'relation'=> 'OR',               
      array(
        'key' => 'device_status',                  
        'value' => 'online',               
        'compare' => '='                 
      )
    ) 
  );
  $device_query = new WP_Query($query_arg);
  $device_list = array();
  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $device = array();
      $device['id'] = $post->ID;
      $device['device'] = $post->post_title;
      array_push($device_list, $device);
    endwhile;
  } 
  wp_reset_query();

  return $device_list;
}

function get_online_devices_select_options() {
  echo json_encode(get_online_devices());
  die();
}
add_action( 'wp_ajax_get_online_devices_select_options', 'get_online_devices_select_options' );


function get_waiting_time_and_persons($device_id, $ticket = 0) {
  global $post;
  $temp_post = $post;
  //--------------------------------------------------------
  // Display available Devices
  //--------------------------------------------------------
  $waiting = array();
  $waiting['time'] = 0;
  $waiting['persons'] = 0;


  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date',
    'order'   => 'ASC',
    'meta_query' => array(   
      'relation'=> 'OR',               
      array(
        'key' => 'device_id',                  
        'value' => $device_id,               
        'compare' => '='                 
      )
    ) 
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      if ($post->ID == $ticket) {
        return $waiting;
      } else {
        $waiting['persons'] ++;
        $waiting['time'] += get_post_meta($post->ID, 'duration', true );
      }
    endwhile;
  } 

  wp_reset_query();
  $post = $temp_post;

  return $waiting;

}

function get_divice_waiting_time() {
  $device_id = $_POST['device_id'];
  echo json_encode(get_waiting_time_and_persons($device_id));
  die();
}
add_action( 'wp_ajax_get_online_devices_select_options', 'get_online_devices_select_options' );

?>