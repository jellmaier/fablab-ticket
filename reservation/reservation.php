<?php

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

      // Displaying Ticket options
      add_shortcode( 'tickets', 'get_ticket_shortcode' );
      
 
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


// Get Ticket Shortcut

function get_ticket_shortcode($atts){
  global $post;
  global $fl_ticket_script;
  $fl_ticket_script = true;


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
  if ( $device_query->have_posts() ) {
    echo '<div id="fl-getticket" action="" metod="POST">';
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      ?>
      <a href="#" data-name="<?php the_ID(); ?>">
          <div class="fl-ticket-buttons">
          <h2><?php the_title(); ?></h2>
          <?php /* <p id="<?php the_ID(); ?>-content" hidden><?php the_content(); ?></p> */ ?>
          <input type="hidden" name="device-id" value="<?php the_ID(); ?>">
          <input type="submit" name="<?php the_title(); ?>" id="<?php the_title(); ?>" class="button-primary" value="Get Ticket"/>
          </div></a>
      <?php
    endwhile;
    echo '</div>';
  } else {
    echo '<p> No device online! </p>'; 
  }

  wp_reset_query();
  ?>

  <div id="overlay" class="fl-overlay" hidden></div>
      <div id="device-ticket-box"class="device-ticket" hidden action="" metod="POST">
        <h2>Ticket bestätigen!</h2>
        <p id="device-name"></p>
        <input type="hidden" id="device-id" value="">
        <div id="device-content"></div>
        <p></p>
        <p>Dauer: <select id="time-select"></select></p>
        <input type="submit" id="submit-ticket" class="button-primary" value="Ticket ziehen"/>
        <input type="submit" id="cancel-ticket" class="button-primary" value="Abbrechen"/>
      </div>

    <div id="message" hidden class="info"></div>
  <?php

}

// Get Ticket Shortcut

function get_ticket_category_shortcode($atts){
    global $post;
    global $fl_ticket_script;
    $fl_ticket_script = true;

    $terms = get_terms( 'device_type' );
    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){

      echo '<div id="fl-getticket" action="" metod="POST">';
      foreach ( $terms as $term ) {
        $activedevice = get_active_device_number($term->name);
        if ($activedevice) {
          echo '<a href="#" data-name="' . $term->name . '">';
          echo '<div class="fl-ticket-buttons">';
          echo '<h2>' . $term->name . '</h2>';
          echo '<p> Active Devices: ' . get_active_device_number($term->name) . '! </p>'; 
          echo '<input type="submit" name="' . $term->name . '" id="' . $term->name . '" class="button-primary" value="Get Ticket"/>';
          echo '</div></a>';
        } else {
          echo '<div class="fl-ticket-buttons">';
          echo '<h2>' . $term->name . '</h2>';
          echo '<p> No device online! </p>'; 
          echo '</div></a>';
        }      
        
      }
      echo '</div>';

      ?>
      <div id="overlay" class="fl-overlay" hidden></div>
      <div id="device-ticket-box"class="device-ticket" hidden>
      <h2 id="device-name">Ticket bestätigen!</h2>
      <p id="device-content"> blaa </p>
      <select id="time-select">
        <option value="15">15 Min</option>
      </select> </br>
      <input type="submit" id="fl-submit-getticket" class="button-primary" value="Ticket ziehen"/>
      </div>

      <div id="message" hidden class="info"></div>
      <?php
         
    }
    else {
      ?>
      <div id="message" class="info">
        <p> Kein gerät verfügbar! </p>
      </div>
    <?php
    }





/*
  $mykey_values = get_post_custom_values( 'device_status' );
  foreach ( $mykey_values as $key => $value ) {
    echo "$key  => $value ( 'device_status' )<br />"; 
  }
  */
/*
    $terms = get_terms( 'device_type' );
    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
      echo '<form id="fl-form-getticket" action="" metod="POST">';
      foreach ( $terms as $term ) {
        echo '<div class="bubbles">';
        echo '<div class="post-content">';
        echo '<h2>' . $term->name . '</h2>'; 
        echo '<input type="submit" name="' . $term->name . '" id="' . $term->name . '" class="button-primary" value="Get Ticket"/>';
        echo '</div></div>';
      }
      echo '</form>';
         
    }
    */




/*
    //echo '<p>' . date_i18n('D h:i') . '</p>';
    // DeviceType Tags Dropdown
    $terms = get_terms( 'device_type' );
    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
      ?>
      <div id="dropdown">
        <select name="field">
        <option value="Chose Device">Chose Device</option>
        <?php
         foreach ( $terms as $term ) {
           echo '<option value="' . $term->term_id . '">' . $term->name . '</option>';       
         }
         ?>
        </select>
        </div>
        <?php
     }
       
*/ 

}

?>