<?php

//namespace fablab_ticket;

// Tutorial from http://tatiyants.com/how-to-use-wordpress-custom-post-types-to-add-events-to-your-site/

if (!class_exists('TimeTicket'))
{
  class TimeTicket
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_timeticket_rewrite_flush' );
      add_action( 'init', 'timeticket_register' );

      // Displaying Time Ticket Lists
      //add_action("manage_posts_custom_column",  "timetickets_custom_columns");
      add_filter("manage_timetickets_posts_columns", "timetickets_edit_columns");

      // Adding Sortable Columns
      add_filter("manage_edit-timetickets_sortable_columns", "timeticket_date_column_register_sortable");
      add_filter("request", "timeticket_date_column_orderby" );

      // Editing Time Tickets
      add_action("admin_init", "timetickets_admin_init");

      // Saving Time Ticket Details
      add_action('save_post', 'save_timeticket_details');

      // Displaying Time Tickets
      add_shortcode( 'timetickets', 'get_timetickets_shortcode' );

    }
  }
}


function my_timeticket_rewrite_flush() {
    // First, we "add" the custom post type via the above written function.
    // Note: "add" is written with quotes, as CPTs don't get added to the DB,
    // They are only referenced in the post_type column with a post entry, 
    // when you add a post of this CPT.
    timeticket_register();

    // ATTENTION: This is *only* done during plugin activation hook in this example!
    // You should *NEVER EVER* do this on every page load!!
    flush_rewrite_rules();
}
 
function timeticket_register() {
 
    $labels = array(
        'name' => _x('Time Tickets', 'post type general name'),
        'singular_name' => _x('Time Ticket', 'post type singular name'),
        'add_new' => _x('Add New', 'timeticket'),
        'add_new_item' => __('Add New Time Ticket'),
        'edit_item' => __('Edit Time Ticket'),
        'new_item' => __('New Time Ticket'),
        'view_item' => __('View Time Ticket'),
        'search_items' => __('Search Time Tickets'),
        'not_found' =>  __('Nothing found'),
        'not_found_in_trash' => __('Nothing found in Trash'),
        'parent_item_colon' => ''
    );
 
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'timeticket' ),
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => null,
        'menu_icon'          => 'dashicons-schedule',
        'supports' => array('title','editor','thumbnail')
      );
 
    register_post_type( 'timetickets' , $args );
}


// Displaying Time Ticket Lists
 
function timetickets_edit_columns($columns){
    $columns = array(
        "cb" => "<input type=\"checkbox\" />",
        "title" => "Time Ticket",
        "timeticket_start_time" => "Time Ticket Start Time",
        "timeticket_end_time" => "Time Ticket End Time",
        "timeticket_device" => "Device",
  );
  return $columns;
}

// Adding Sortable Columns
function timeticket_date_column_register_sortable( $columns ) {
        $columns['timeticket_date'] = 'timeticket_date';
        return $columns;
}

function timeticket_date_column_orderby( $vars ) {
    if ( isset( $vars['orderby'] ) && 'timeticket_date' == $vars['orderby'] ) {
        $vars = array_merge( $vars, array(
            'meta_key' => 'timeticket_date',
            'orderby' => 'meta_value_num'
        ) );
    }
    return $vars;
}


// Editing Time Tickets
function timetickets_admin_init(){
  add_meta_box("timeticket_meta", "Time Ticket Details", "timeticket_details_meta", "timetickets", "normal", "default");
}
 
function timeticket_details_meta() {
    global $fl_timeticket_edit_script;
    $fl_timeticket_edit_script = true;
    
    $device_list = get_online_devices();
    $device_selected = get_timeticket_field("timeticket_device");
 
    $ret = '</p><p><label>Start Time: </label><input type="text" name="timeticket_start_time" id="timeticket_start_time" value="' . get_timeticket_field("timeticket_start_time") . '" /></p>';
    $ret .= '<p><label>End Time: </label><input type="text" name="timeticket_end_time"  id="timeticket_end_time" value="' . get_timeticket_field("timeticket_end_time") . '" /> </p>';
    $ret .= '<p><label>Device: </label><select name="timeticket_device">';
    foreach($device_list as $device) {
      if ($device['id'] == $device_selected) {
         $ret .= '<option selected value="' . $device['id'] . '">' . $device['device'] . '</option>';
      } else {
        $ret .= '<option value="' . $device['id'] . '">' . $device['device'] . '</option>';
      }
    }
    $ret .= '</select></p>';
    //$ret .= '<p><label>Device: </label><input type="text" name="timeticket_device" value="' . get_timeticket_field("timeticket_device") . '" /></p>';
 
    echo $ret;
}

function get_timeticket_field($timeticket_field) {
    global $post;
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$timeticket_field])) {
        return $custom[$timeticket_field][0];
    }
}

// Saving Time Ticket Details
 
function save_timeticket_details(){
   global $post;
 
   if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
      return;
 
   if ( get_post_type($post) != 'timetickets')
      return;

 
   save_timeticket_field("timeticket_start_time");
   save_timeticket_field("timeticket_end_time");
   save_timeticket_field("timeticket_device");
}

function save_timeticket_field($timeticket_field) {
    global $post;
 
    if(isset($_POST[$timeticket_field])) {
        update_post_meta($post->ID, $timeticket_field, $_POST[$timeticket_field]);
    }
}

// Displaying Time Tickets
 
function get_timetickets_shortcode($atts){
    global $post;
 
    ob_start();
 
    // prepare to get a list of timetickets sorted by the timeticket date
    $args = array(
        'post_type' => 'timetickets',
        'orderby'   => 'timeticket_date',
        'meta_key'  => 'timeticket_date',
        'order'     => 'ASC'
    );
 
    query_posts( $args );
 
    $timetickets_found = false;
 
    // build up the HTML from the retrieved list of timetickets
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            $timeticket_date = get_post_meta($post->ID, 'timeticket_date', true);
            echo get_timeticket_container();
            $timetickets_found = true;
 
        }
    }
 
    wp_reset_query();
 
    if (!$timetickets_found) {
        echo "<p>no timetickets found.</p>";
    }
 
    $output_string = ob_get_contents();
    ob_end_clean();
 
    return $output_string;
}

function get_timeticket_container() {
    global $post;
    $ret = '<section class="timeticket_container">';
    $ret = $ret .  get_timeticket_details();
    $ret =  $ret . '</section>';
 
    return $ret;
}
 
function get_timeticket_details() {
    global $post;
    $unixtime = get_post_meta($post->ID, 'timeticket_date', true);
 
    $ret = '';
    $ret = $ret . '<h3><a href="' . get_permalink() . '">' . $post->post_title . '</a></h3>'; 
    $ret = $ret . '<p><h4>'.get_post_meta($post->ID, 'timeticket_device', true) . '</h4>';
    $ret = $ret . '<em>' . get_post_meta($post->ID, 'timeticket_start_time', true) . ' - ';
    $ret = $ret . get_post_meta($post->ID, 'timeticket_end_time', true) . '</em>';
 
    return $ret;
}




?>