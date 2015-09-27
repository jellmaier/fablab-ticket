<?php

//namespace fablab_ticket;


if (!class_exists('AdminPage'))
{
  class AdminPage
  {
    public function __construct()
    {

      function fl_options_page() {
        $parent_slug = 'edit.php?post_type=device';
        $page_title = __('Ticket Options', 'fl');
        $menu_title = __('Ticket Options', 'fl');
        $capability = 'delete_others_posts';
        $menu_slug = 'fablab_options';
        $function = 'fablab_options_page';

        add_submenu_page( $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function);


        // ------------------------------------------------------------------
        // Add all your sections, fields and settings during admin_menu
        // ------------------------------------------------------------------

        // Add the section to reading settings so we can add our
        // fields to it
        add_settings_section(
          'fablab_settings',                          // ID
          'Example settings section in reading',      // Title
          'fablab_settings_function',                 // callback
          'fablab_options'                            // Page slug
        );
        
        // Add the field with the names and function to use for our new
        // settings, put it in our new section
        add_settings_field(
          'tickets_per_user',                            // ID/Name of the field
          'Ticket pro User',                                // Title
          'fablab_tickets_per_user_function',               // callback
          'fablab_options',                                     // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'ticket_time_interval',                            // ID/Name of the field
          'Zeit Intervall (min)',                                // Title
          'fablab_ticket_time_interval_function',               // callback
          'fablab_options',                                     // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'ticket_max_time',                         // ID/Name of the field
          'Maximale Ticket Zeit (min)',              // Title
          'fablab_ticket_max_time_function',         // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        // Register our setting so that $_POST handling is done for us and
        // our callback function just has to echo the <input>
        register_setting( 'fablab_settings', 'settings_fields', 'validate_options');
      
      }
      add_action('admin_menu', 'fl_options_page');

    }
  }
}

// ------------------------------------------------------------------
// Get Option wraper and set default values
// ------------------------------------------------------------------

function fablab_get_option() {
  $default_values =  array(
    'tickets_per_user' => '1',
    'ticket_time_interval' => '15',
    'ticket_max_time' => '120'
  );

  return wp_parse_args(get_option('settings_fields'), $default_values);
}

// ------------------------------------------------------------------
// Callback functions
// ------------------------------------------------------------------

function fablab_options_page() {
  ?>
  <div class="wrap">
    <h2>Ticket Einstellungen<h2>
    <?php settings_errors(); ?>
    <form method="post" action="options.php">
      <?php
      settings_fields('fablab_settings');
      do_settings_sections('fablab_options');
      submit_button();
      ?>
    </form>      
  </div>
  <?php
}
 
function fablab_settings_function() {
  echo '<p>Intro text for our settings section</p>';
}
 
function fablab_tickets_per_user_function() {
  $options = fablab_get_option();
  echo '<input type="text" name="settings_fields[tickets_per_user]" value="' . $options['tickets_per_user'] . '"/>';
}
function fablab_ticket_time_interval_function() {
  $options = fablab_get_option();
  echo '<input type="text" name="settings_fields[ticket_time_interval]" value="' . $options['ticket_time_interval'] . '"/>';
}
function fablab_ticket_max_time_function() {
  $options = fablab_get_option();
  echo '<input type="text" name="settings_fields[ticket_max_time]" value="' . $options['ticket_max_time'] . '"/>';
}

// ------------------------------------------------------------------
// Validation functions
// ------------------------------------------------------------------

function validate_options($options) {
  $output = array();
  $old_settings = fablab_get_option();

  foreach ($options as $key => $value) {
    if(is_pos_int($value)) {
      $output[$key] = sanitize_text_field($value);
    } else {
      add_settings_error('settings_fields', 'naN', 'Bitte eine positive Zahl eingeben!');
      $output[$key] = $old_settings[$key];
    } 
  }
  return $output;
}

function is_pos_int($value){
  if(is_numeric($value) && (intval($value) > 0 )) {
    return true;
  } else {
    return false;
  }
}

// ------------------------------------------------------------------
// Ajax getter for Options
// ------------------------------------------------------------------

function get_fablab_options() {
  echo json_encode(fablab_get_option());
  die();
}
add_action( 'wp_ajax_get_fablab_options', 'get_fablab_options' );

?>