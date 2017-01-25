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
      // hook into the init action and call create_device_taxonomies when it fires
      add_action( 'init', 'create_device_type_tax', 0 );
      add_action( 'init', 'create_location_tax', 0 );


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
    'name'               => $posttype_name,
    'singular_name'      => $posttype_singular_name,
    'menu_name'          => $posttype_name,
    'name_admin_bar'     => $posttype_singular_name,
    'add_new'            => __( 'Add New', 'fablab-ticket' ),
    'add_new_item'       => sprintf(__( 'Add New %s', 'fablab-ticket' ), $posttype_singular_name),
    'new_item'           => sprintf(__( 'New %s', 'fablab-ticket'), $posttype_singular_name),
    'edit_item'          => sprintf(__( 'Edit %s', 'fablab-ticket'), $posttype_singular_name),
    'view_item'          => sprintf(__( 'View %s', 'fablab-ticket'), $posttype_singular_name),
    'all_items'          => sprintf(__( 'All %s', 'fablab-ticket'), $posttype_name),
    'search_items'       => sprintf(__( 'Search %s', 'fablab-ticket'), $posttype_name),
    'parent_item_colon'  => sprintf(__( 'Parent %s:', 'fablab-ticket' ), $posttype_name),
    'not_found'          => sprintf(__( 'No %s found.', 'fablab-ticket'), $posttype_name),
    'not_found_in_trash' => sprintf(__( 'No %s found in trash.', 'fablab-ticket' ), $posttype_name)
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'fablab-ticket' ),
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
        "device_type" => $device_caption . " Type",
        "device_status" => $device_caption . " Status",
        "device_qualification" => $device_caption . " Qualification",
  );
  return $columns;
}

// Edit Admin Table-View
function device_table_content( $column_name, $post_id ) {
  switch ( $column_name ) {

    case 'device_type' :
      echo '<p style="border-bottom: 3px solid ' . get_device_type_color_field($post_id) 
          . '; display: inline-block;" >' . get_device_type_name_by_device_id($post_id) . '</p>';
      break;

    case 'device_status' :
      $device_status = get_post_meta( $post_id, 'device_status', true );
      $status_color = ($device_status == 'online')? '#0d0' : '#d00';
      echo '<p style="border-bottom: 3px solid ' . $status_color
          . '; display: inline-block;" >' . $device_status . '</p>';
      break;

    case 'device_qualification' :
      echo get_post_meta( $post_id, 'device_qualification', true );
      break;
  }
}


// Editing Devices
 
function device_admin_init(){
  add_meta_box("device_meta", $device_caption . " Details", "device_details_meta", "device", "normal", "default");
}
 
function device_details_meta() {
  global $post;

  $device_type_selected_array = wp_get_post_terms($post->ID, 'device_type', array("fields" => "ids"));
  $device_type_selected = $device_type_selected_array[0];
  
  $device_type_list = get_terms('device_type', array(
    'orderby'    => 'name',
    'hide_empty' => '0'
    ));

  ?>
   <table>
    <tr>
      <th><?= fablab_get_captions('device_caption') ?> type:</th>
      <th>
        <select name="device_type">
        <?php
        foreach($device_type_list as $device_type)
          echo '<option '. selected($device_type->term_id, $device_type_selected, false) .' value="' . $device_type->name . '">' . $device_type->name . '</option>';
        ?>
        </select>
      </th>
    </tr>
    <form name="" method="post">
    <tr>
      <th><?= fablab_get_captions('device_caption') ?> Status:</th>
      <th>
        <?php
        $device_status = get_device_field("device_status");
        echo '<input type="radio" name="device_status" ' . checked($device_status, 'online', false) . ' value="online">Online ';
        echo '<input type="radio" name="device_status" ' . checked($device_status, 'offline', false) . ' value="offline">Offline ' ;
        ?>
      </th>
    </tr>
    <tr>
      <th><?= sprintf(__('%s qualification', 'fablab-ticket'), fablab_get_captions('device_caption')) ?></th>
      <th>
        <?php
        $device_qualification = get_device_field("device_qualification");
        echo '<input type="radio" name="device_qualification" ' . checked($device_qualification, 'beginner', false) . ' value="beginner">Beginner ';
        echo '<input type="radio" name="device_qualification" ' . checked($device_qualification, 'pro', false) . ' value="pro">Professional ' ;
        ?>
      </th>
    </tr>
    </form>
     
  </table> 
  <?php
}

function get_device_field($device_field) {
    global $post;

    if($device_field == 'device_color')
      return get_device_type_color_field($post->ID);
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$device_field])) {
        return $custom[$device_field][0];
    }

}

function get_device_type_color_field($post_id) {
    $tag = get_device_type_by_device_id($post_id);
    if(!empty($tag))
      return get_term_meta($tag, 'tag_color', true);    
    else
      return '#ccc';
}

function get_device_type_by_device_id($post_id) {
  $return_array = wp_get_post_terms($post_id, 'device_type', array("fields" => "ids"));
  return $return_array[0];
}

function get_device_type_name_by_device_id($post_id) {
  $return_array = wp_get_post_terms($post_id, 'device_type', array("fields" => "names"));
  return $return_array[0];
}



// Saving Device Details
 
function save_device_details(){
   global $post;
 
   if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
      return;
 
   if ( get_post_type($post) != 'device')
      return;

   save_device_field("device_status");
   save_device_field("device_qualification");
   //save_device_q_field();
   //update_post_meta($post->ID, "device_qualification", 'pro');
   wp_set_post_terms( $post->ID, $_POST["device_type"], 'device_type', false);
}

function save_device_field($device_field) {
    global $post;
 
    if(isset($_POST[$device_field])) {
        update_post_meta($post->ID, $device_field, $_POST[$device_field]);
    }
}

function save_device_q_field() {
    global $post;
 
    if(isset($_POST['device_qualification'])) 
        update_post_meta($post->ID, "device_qualification", 'yes');
    else
        update_post_meta($post->ID, "device_qualification", 'no');

}

function is_no_device_entry($ID) {
  $post_object = get_post($ID);
  return (empty($post_object) && ($post_object->post_type != 'device'));
}

function is_no_device_type($ID) {
  $device_type = get_terms('device_type', array(
        'orderby'    => 'name',
        'fields'    => 'id=>name',
        'hide_empty' => '0'
      ));
  return empty($device_type);
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

function get_online_pro_devices() {
  $temp_post = $post;
  global $post;
  $query_arg = array(
    'post_type' => 'device',
    'meta_query' => array(   
      'relation'=> 'AND',               
      array(
        'key' => 'device_status',                  
        'value' => 'online',               
        'compare' => '='                 
      ),
      array(
        'key' => 'device_qualification',                  
        'value' => 'pro',               
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