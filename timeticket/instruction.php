<?php

//namespace fablab_ticket;


if (!class_exists('Instruction'))
{
  class Instruction
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_instruction_rewrite_flush' );
      add_action( 'init', 'codex_instruction_init' );

      // Displaying Instruction Lists
      add_filter( 'manage_instruction_posts_columns', 'instruction_edit_columns' );
      add_action( 'manage_instruction_posts_custom_column', 'instruction_table_content', 10, 2 );

      // Editing Instruction
      add_action( 'admin_init', 'instruction_admin_init' );

      // Saving Instruction Details
      add_action( 'save_post', 'save_instruction_details' );

      add_filter( 'wp_insert_post_data' , 'set_instruction_title' , '99', 2 );

    }
  }
}


function my_instruction_rewrite_flush() {
    codex_instruction_init();
    flush_rewrite_rules();
}

/**
 * Register a instruction post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function codex_instruction_init() {
  $labels = array(
    'name'               => _x( 'Instructions', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Instruction', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Instructions', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Instruction', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'instruction', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Instruction', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Instruction', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Instruction', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Instruction', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Instruction', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Instruction', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Instruction:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No instruction found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No instruction found in Trash.', 'your-plugin-textdomain' )
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'instruction' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-lightbulb',
    'supports'           => array( 'title', 'editor', 'thumbnail')
  );

  register_post_type( 'instruction', $args );
}

// Displaying Instruction Lists
 
function instruction_edit_columns($columns){
    $columns = array(
        "cb" => '<input type="checkbox" />',
        "title" => "Instruction",
        "instruction_start_time" => "Start Time",
        "instruction_end_time" => "End Time",
        "instruction_devices" => "Devices",
  );
  return $columns;
}

// Edit Admin Table-View
function instruction_table_content( $column_name, $post_id ) {
  switch ( $column_name ) {

    case 'instruction_devices' :
      echo get_instruction_devices_string($post_id);
      break;

    case 'instruction_start_time' :
      echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'instruction_start_time', true ));
      break;

    case 'instruction_end_time' :
      echo date_i18n('Y-m-d H:i', get_post_meta( $post_id, 'instruction_end_time', true ));
      break;

    default :
      echo get_post_meta( $post_id, $column_name, true );
      break;
  }
}


// Editing Instruction
 
function instruction_admin_init(){
  add_meta_box("instruction_meta", "Instruction Details", "instruction_details_meta", "instruction", "normal", "default");
}
 
function instruction_details_meta() {
  
  echo '<p><label>Start Instruction: </label><input type="text" name="instruction_start_time" class="start_time" value="'
   . get_instruction_field("instruction_start_time") . '" /></p>';
  echo '<p><label>End Time: </label><input type="text" name="instruction_end_time"  class="end_time" value="'
  . get_instruction_field("instruction_end_time") . '" /> </p>';

  $device_selected = get_instruction_field("instruction_devices");
  $device_list = get_online_devices(); // after this no get_instruction_field working

  echo '<p><label>Devices:</label></br>';
  foreach($device_list as $device) {
    $checked = ($device_selected[0][$device['id']] == '1')? 'checked' : '';
    echo '<input type="checkbox" name="instruction_devices[' . $device['id'] . ']" value="1"' . $checked . '/>' . $device['device'] . '</br>';
  }
  echo '</p>';
}

function get_instruction_field($instruction_field) {
  global $post;

  $custom = get_post_custom($post->ID);

  if (isset($custom[$instruction_field])) {
    if (($instruction_field == "instruction_start_time") || ($instruction_field == "instruction_end_time")) {
      return date_i18n('Y-m-d H:i', $custom[$instruction_field][0]);
    } else if ($instruction_field == "instruction_devices") {
      return get_post_meta($post->ID, $instruction_field);
    } else {
      return $custom[$instruction_field][0];
    }
  }
}

function get_instruction_devices_string($post_id) {
  $device_list = get_online_devices();
  $device_selected = get_post_meta($post_id, "instruction_devices");
  $device_array = array();

  foreach($device_list as $device) {
    if($device_selected[0][$device['id']] == '1') {
      array_push($device_array, $device['device']);
    }
  }
  if(empty($device_array)) {
    return '--';
  }
  return implode(", ", $device_array);
  
  
}

// Saving Instruction Details
 
function save_instruction_details(){
  global $post;

  if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
    return;

  if ( get_post_type($post) != 'instruction')
    return;

  save_instruction_field("instruction_start_time");
  save_instruction_field("instruction_end_time");
  save_instruction_field("instruction_devices");
}

function save_instruction_field($instruction_field) {
  global $post;

  if(isset($_POST[$instruction_field])) {
    if (($instruction_field == "instruction_start_time") || ($instruction_field == "instruction_end_time")) {
        update_post_meta($post->ID, $instruction_field, strtotime($_POST[$instruction_field]));
    } else {
      update_post_meta($post->ID, $instruction_field, $_POST[$instruction_field]);
    }
  }
}

function set_instruction_title( $data , $postarr ) {
  if($data['post_type'] == 'instruction') {
    $title = 'Einschulung am ' . date_i18n('D, d. M', strtotime($_POST['instruction_start_time']));
    $data['post_title'] = $title;
    $data['post_name'] = sanitize_title_with_dashes( $title, '', save);
  }
  return $data;
}

function next_instruction($device_id) {
  global $post;
  $temp_post = $post;
  
  $query_arg = array(
    'post_type' => 'instruction',
    'order'   => 'ASC',
    'orderby' => 'meta_value',
    'meta_key'  => 'instruction_start_time',
    'meta_query'=> array(
      array(
          'key'=>'instruction_start_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '>'
      )
    )
  );

  $instruction_query = new WP_Query($query_arg);
  if ( $instruction_query->have_posts() ) {
    while ( $instruction_query->have_posts() ) : $instruction_query->the_post();
      $post_id = $post->ID;
      $device_selected = get_post_meta($post_id, 'instruction_devices');
      if($device_selected[0][$device_id] == '1') {
        $post = $temp_post;
        return date_i18n('D, d. M Y, \u\m H:i', get_post_meta( $post_id, 'instruction_start_time', true ));
      }
    endwhile;
  }
  wp_reset_query();
  $post = $temp_post;

  return 'TBA';
}


?>