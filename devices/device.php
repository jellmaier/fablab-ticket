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
      add_filter( 'manage_device_posts_columns', 'device_edit_columns' );
      add_action( 'manage_device_posts_custom_column', 'device_table_content', 10, 2 );

      // Editing Devices
      add_action( 'admin_init', 'device_admin_init' );

      // Saving Device Details
      add_action( 'save_post', 'save_device_details' );

    }
  }
}


function my_rewrite_flush() {
    codex_device_init();
    flush_rewrite_rules();
}

/**
 * Register a device post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function codex_device_init() {
  $posttype_singular_name = fablab_get_captions('device_caption');
  $posttype_name = fablab_get_captions('devices_caption');
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
    'rewrite'            => array( 'slug' => 'device' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-desktop',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'device', $args );

}


// Displaying Device Lists
 
function device_edit_columns($columns){

  $device_caption = fablab_get_captions('device_caption');
  $columns = array(
        "cb" => '<input type="checkbox" />',
        "title" => $device_caption,
        "device_status" => $device_caption . " Status",
        "device_color" => $device_caption . " Color",
  );
  return $columns;
}

// Edit Admin Table-View
function device_table_content( $column_name, $post_id ) {
  switch ( $column_name ) {

    case 'device_status' :
      echo get_post_meta( $post_id, 'device_status', true );
      break;

    case 'device_color' :
      echo '<div style="background-color: ' . get_post_meta( $post_id, "device_color", true ) 
      . '; width: 30px; height: 30px; border-radius: 15px;"><div>';
      break;
  }
}


// Editing Devices
 
function device_admin_init(){
  add_meta_box("device_meta", $device_caption . " Details", "device_details_meta", "device", "normal", "default");
}
 
function device_details_meta() {
  
  ?>
   <table>
    <tr>
      <th><?= fablab_get_captions('device_caption') ?> Status:</th>
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
      <th><?= fablab_get_captions('device_caption') ?> Color:</th>
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

function is_no_device_entry($ID) {
  $post_object = get_post($ID);
  return (empty($post_object) && ($post_object->post_type != 'device'));
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
  $temp_post = $post;
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
  $post = $temp_post;

  return $device_list;
}

?>