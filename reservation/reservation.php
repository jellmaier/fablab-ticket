<?php

//namespace fablab_ticket;

// Tutorial from http://tatiyants.com/how-to-use-wordpress-custom-post-types-to-add-events-to-your-site/

if (!class_exists('Reservation'))
{
  class Reservation
  {
    public function __construct()
    {
      register_activation_hook( __FILE__, 'my_reservation_rewrite_flush' );
      add_action( 'init', 'reservation_register' );

      // Displaying Reservation Lists
      //add_action("manage_posts_custom_column",  "reservations_custom_columns");
      add_filter("manage_reservations_posts_columns", "reservations_edit_columns");

      // Adding Sortable Columns
      add_filter("manage_edit-reservations_sortable_columns", "reservation_date_column_register_sortable");
      add_filter("request", "reservation_date_column_orderby" );

      // Editing Reservations
      add_action("admin_init", "reservations_admin_init");

      // Saving Reservation Details
      add_action('save_post', 'save_reservation_details');

      // Displaying Reservations
      add_shortcode( 'reservations', 'get_reservations_shortcode' );

    }
  }
}


function my_reservation_rewrite_flush() {
    // First, we "add" the custom post type via the above written function.
    // Note: "add" is written with quotes, as CPTs don't get added to the DB,
    // They are only referenced in the post_type column with a post entry, 
    // when you add a post of this CPT.
    reservation_register();

    // ATTENTION: This is *only* done during plugin activation hook in this example!
    // You should *NEVER EVER* do this on every page load!!
    flush_rewrite_rules();
}
 
function reservation_register() {
 
    $labels = array(
        'name' => _x('Reservations', 'post type general name'),
        'singular_name' => _x('Reservation', 'post type singular name'),
        'add_new' => _x('Add New', 'reservation'),
        'add_new_item' => __('Add New Reservation'),
        'edit_item' => __('Edit Reservation'),
        'new_item' => __('New Reservation'),
        'view_item' => __('View Reservation'),
        'search_items' => __('Search Reservations'),
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
        'rewrite' => array( 'slug' => 'reservation' ),
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => null,
        'menu_icon'          => 'dashicons-schedule',
        'supports' => array('title','editor','thumbnail')
      );
 
    register_post_type( 'reservations' , $args );
}


// Displaying Reservation Lists
 
function reservations_edit_columns($columns){
    $columns = array(
        "cb" => "<input type=\"checkbox\" />",
        "title" => "Reservation",
        "reservation_start_time" => "Reservation Start Time",
        "reservation_end_time" => "Reservation End Time",
        "reservation_device" => "Device",
  );
  return $columns;
}
 /*
function reservations_custom_columns($column){
    global $post;
    $custom = get_post_custom();

 
    switch ($column) {
    case "reservation_date":
            echo format_date($custom["reservation_date"][0]) . '<br /><em>' .
            $custom["reservation_start_time"][0] . ' - ' .
            $custom["reservation_end_time"][0] . '</em>';
            break;
 
    case "reservation_location":
            echo $custom["reservation_location"][0];
            break;
    }
}
 
function format_date($unixtime) {
    return date("F", $unixtime)." ".date("d", $unixtime).", ".date("Y", $unixtime);
}
*/


// Adding Sortable Columns
 
function reservation_date_column_register_sortable( $columns ) {
        $columns['reservation_date'] = 'reservation_date';
        return $columns;
}
 
function reservation_date_column_orderby( $vars ) {
    if ( isset( $vars['orderby'] ) && 'reservation_date' == $vars['orderby'] ) {
        $vars = array_merge( $vars, array(
            'meta_key' => 'reservation_date',
            'orderby' => 'meta_value_num'
        ) );
    }
    return $vars;
}


// Editing Reservations
 
function reservations_admin_init(){
  add_meta_box("reservation_meta", "Reservation Details", "reservation_details_meta", "reservations", "normal", "default");
}
 
function reservation_details_meta() {
 
    $ret = '</p><p><label>Start Time: </label><input type="text" name="reservation_start_time" id="reservation_start_time" value="' . get_reservation_field("reservation_start_time") . '" /></p>';
    $ret = $ret . '<p><label>End Time: </label><input type="text" name="reservation_end_time"  id="reservation_end_time" value="' . get_reservation_field("reservation_end_time") . '" /> </p>';
    $ret = $ret . '<p><label>Location: </label><input type="text" name="reservation_device" value="' . get_reservation_field("reservation_device") . '" /></p>';
 
    echo $ret;
}

function get_reservation_field($reservation_field) {
    global $post;
 
    $custom = get_post_custom($post->ID);
 
    if (isset($custom[$reservation_field])) {
        return $custom[$reservation_field][0];
    }
}

// Saving Reservation Details
 
function save_reservation_details(){
   global $post;
 
   if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
      return;
 
   if ( get_post_type($post) != 'reservations')
      return;
 
   if(isset($_POST["reservation_date"])) {
      update_post_meta($post->ID, "reservation_date", strtotime($_POST["reservation_date"]));
   }
 
   save_reservation_field("reservation_start_time");
   save_reservation_field("reservation_end_time");
   save_reservation_field("reservation_location");
}

function save_reservation_field($reservation_field) {
    global $post;
 
    if(isset($_POST[$reservation_field])) {
        update_post_meta($post->ID, $reservation_field, $_POST[$reservation_field]);
    }
}

// Displaying Reservations
 
function get_reservations_shortcode($atts){
    global $post;
 
    ob_start();
 
    // prepare to get a list of reservations sorted by the reservation date
    $args = array(
        'post_type' => 'reservations',
        'orderby'   => 'reservation_date',
        'meta_key'  => 'reservation_date',
        'order'     => 'ASC'
    );
 
    query_posts( $args );
 
    $reservations_found = false;
 
    // build up the HTML from the retrieved list of reservations
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            $reservation_date = get_post_meta($post->ID, 'reservation_date', true);
            echo get_reservation_container();
            $reservations_found = true;
 
        }
    }
 
    wp_reset_query();
 
    if (!$reservations_found) {
        echo "<p>no reservations found.</p>";
    }
 
    $output_string = ob_get_contents();
    ob_end_clean();
 
    return $output_string;
}

function get_reservation_container() {
    global $post;
    $ret = '<section class="reservation_container">';
    $ret = $ret .  get_reservation_details();
    $ret =  $ret . '</section>';
 
    return $ret;
}
 
function get_reservation_details() {
    global $post;
    $unixtime = get_post_meta($post->ID, 'reservation_date', true);
 
    $ret = '';
    $ret = $ret . '<h3><a href="' . get_permalink() . '">' . $post->post_title . '</a></h3>'; 
    $ret = $ret . '<p><h4>'.get_post_meta($post->ID, 'reservation_location', true) . '</h4>';
    $ret = $ret . '<em>' . get_post_meta($post->ID, 'reservation_start_time', true) . ' - ';
    $ret = $ret . get_post_meta($post->ID, 'reservation_end_time', true) . '</em>';
 
    return $ret;
}


?>