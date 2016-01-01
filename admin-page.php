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
        $page_title = __('Options', 'fl');
        $menu_title = __('Options', 'fl');
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
          'Fablab Settings',                          // Title
          'fablab_settings_function',                 // callback
          'fablab_options'                            // Page slug
        );

        // Set Ticketing system online
        add_settings_field(
          'ticket_online',                           // ID/Name of the field
          fablab_get_captions('ticket_system_caption') . ' Online',                    // Title
          'fablab_ticket_online_function',           // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        // If user need ticket for permission
        add_settings_field(
          'ticket_permission',                           // ID/Name of the field
          fablab_get_captions('instructions_caption') . ' erforderlich',                    // Title
          'fablab_ticket_permission_function',           // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        
        // Add the field with the names and function to use for our new
        // settings, put it in our new section
        add_settings_field(
          'tickets_per_user',                           // ID/Name of the field
          fablab_get_captions('tickets_caption') . ' pro User',                            // Title
          'fablab_tickets_per_user_function',           // callback
          'fablab_options',                             // page slug
          'fablab_settings'                             // section
        );

        add_settings_field(
          'ticket_time_interval',                           // ID/Name of the field
          'Zeit Intervall (min)',                           // Title
          'fablab_ticket_time_interval_function',           // callback
          'fablab_options',                                 // page slug
          'fablab_settings'                                 // section
        );

        add_settings_field(
          'ticket_max_time',                         // ID/Name of the field
          'Maximale ' . fablab_get_captions('ticket_caption') . ' Zeit (min)',              // Title
          'fablab_ticket_max_time_function',         // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'ticket_delay',                                           // ID/Name of the field
          'Zeit bis zur automatischen Deaktivierung (min)',         // Title
          'fablab_ticket_delay_function',                           // callback
          'fablab_options',                                         // page slug
          'fablab_settings'                                         // section
        );

        // Register our setting so that $_POST handling is done for us and
        // our callback function just has to echo the <input>
        register_setting( 'fablab_settings', 'option_fields', 'validate_options');


        // ------------------------------------------------------------------
        // Add all your sections, fields and settings during admin_menu
        // ------------------------------------------------------------------

        // Add the section to reading settings so we can add our
        // fields to it
        add_settings_section(
          'fablab_settings',                      // ID
          'Fablab Caption',                       // Title
          'fablab_captions_function',             // callback
          'fablab_options'                        // Page slug
        );

        add_settings_field(
          'fablab_ticket_system_caption',            // ID/Name of the field
          'System Caption',                          // Title
          'fablab_ticket_system_caption_function',   // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_device_caption',                   // ID/Name of the field
          'Device (EZ) Caption',                     // Title
          'fablab_device_caption_function',          // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_devices_caption',                  // ID/Name of the field
          'Devices (MZ) Caption',                    // Title
          'fablab_devices_caption_function',         // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_ticket_caption',                   // ID/Name of the field
          'Ticket (EZ) Caption',                     // Title
          'fablab_ticket_caption_function',          // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_tickets_caption',                  // ID/Name of the field
          'Tickets (MZ) Caption',                    // Title
          'fablab_tickets_caption_function',         // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_time_ticket_caption',                 // ID/Name of the field
          'Time-Ticket (EZ) Caption',                   // Title
          'fablab_time_ticket_caption_function',        // callback
          'fablab_options',                             // page slug
          'fablab_settings'                             // section
        );

        add_settings_field(
          'fablab_time_tickets_caption',                // ID/Name of the field
          'Time-Tickets (MZ) Caption',                  // Title
          'fablab_time_tickets_caption_function',       // callback
          'fablab_options',                             // page slug
          'fablab_settings'                             // section
        );

        add_settings_field(
          'fablab_instruction_caption',              // ID/Name of the field
          'Instruction (EZ) Caption',                // Title
          'fablab_instruction_caption_function',     // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_instructions_caption',             // ID/Name of the field
          'Instructions (MZ) Caption',               // Title
          'fablab_instructions_caption_function',    // callback
          'fablab_options',                          // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_instruction_request_caption',             // ID/Name of the field
          'Instruction Requet (EZ) Caption',                // Title
          'fablab_instruction_request_caption_function',    // callback
          'fablab_options',                                 // page slug
          'fablab_settings'                                 // section
        );

        add_settings_field(
          'fablab_nstruction_requests_caption',             // ID/Name of the field
          'Instruction Requets (MZ) Caption',               // Title
          'fablab_instruction_requests_caption_function',   // callback
          'fablab_options',                                 // page slug
          'fablab_settings'                                 // section
        );

        // Register our setting so that $_POST handling is done for us and
        // our callback function just has to echo the <input>
        register_setting( 'fablab_settings', 'caption_fields', 'validate_captions');



        // ------------------------------------------------------------------
        // Add all your sections, fields and settings during admin_menu
        // ------------------------------------------------------------------

        // Add the section to reading settings so we can add our
        // fields to it
        add_settings_section(
          'fablab_settings',                     // ID
          'Fablab AGB',                   // Title
          'fablab_tac_function',            // callback
          'fablab_options'                  // Page slug
        );

        add_settings_field(
          'fablab_tac_needed',                    // ID/Name of the field
          'AGB Zustimmung erforderlich',           // Title
          'fablab_tac_needed_function',           // callback
          'fablab_options',                       // page slug
          'fablab_settings'                          // section
        );

        add_settings_field(
          'fablab_tac',                           // ID/Name of the field
          'AGB',                                  // Title
          'fablab_termsandconditions_function',   // callback
          'fablab_options',                       // page slug
          'fablab_settings'                    // section
        );

        add_settings_field(
          'fablab_tac_date',                    // ID/Name of the field
          'Änderungsdatum',                     // Title
          'fablab_tac_date_function',           // callback
          'fablab_options',                     // page slug
          'fablab_settings'                  // section
        );

        // Register our setting so that $_POST handling is done for us and
        // our callback function just has to echo the <input>
        register_setting( 'fablab_settings', 'tac_fields', 'validate_tacs');

      
      }
      add_action('admin_menu', 'fl_options_page');

    }
  }
}

// ------------------------------------------------------------------
// Get Option wraper and set default values
// ------------------------------------------------------------------

function fablab_get_option($key = 'array') {
  $default_values =  array(
    'tickets_per_user' => '1',
    'ticket_time_interval' => '15',
    'ticket_max_time' => '120',
    'ticket_online' => '0',
    'ticket_delay' => '10',
    'ticket_permission' => '0',
  );

  $options = wp_parse_args(get_option('option_fields'), $default_values);

  if($key == 'array'){
    return $options;
  } else {
    return $options[$key];
  }
}

function fablab_get_captions($key = 'array') {
  $default_values =  array(
    'ticket_system_caption' => 'Ticket-Systemi',
    'device_caption' => 'Gerät',
    'devices_caption' => 'Geräte',
    'ticket_caption' => 'Ticket',
    'tickets_caption' => 'Tickets',
    'time_ticket_caption' => 'Time-Ticket',
    'time_tickets_caption' => 'Time-Tickets',
    'instruction_caption' => 'Einschulung',
    'instructions_caption' => 'Einschulungen',
    'instruction_request_caption' => 'Einschulunganfrage',
    'instruction_requests_caption' => 'Einschulungsanfragen',
  );

  $options = wp_parse_args(get_option('caption_fields'), $default_values);

  if($key == 'array'){
    return $options;
  } else {
    return $options[$key];
  }
}

function fablab_get_tac($key = 'array') {
  $default_values =  array(
    'tac_needed' => '0',
    'termsandconditions' => 'Termesss',
    'tac_date' => '1451606400',
  );

  $options = wp_parse_args(get_option('tac_fields'), $default_values);

  if($key == 'array'){
    return $options;
  } else {
    return $options[$key];
  }
}

// ------------------------------------------------------------------
// Callback functions
// ------------------------------------------------------------------

function fablab_options_page() {
  ?>
  <div class="wrap">
    <h2><?php fablab_get_captions('ticket_system_caption') ?> Einstellungen<h2>
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
  //echo '<h3>Fablab Einstellungen</h3>';
}
 
function fablab_tickets_per_user_function() {
  echo '<input type="text" name="option_fields[tickets_per_user]" value="' . fablab_get_option('tickets_per_user') . '"/>';
}
function fablab_ticket_time_interval_function() {
  echo '<input type="text" name="option_fields[ticket_time_interval]" value="' . fablab_get_option('ticket_time_interval') . '"/>';
}
function fablab_ticket_max_time_function() {
  echo '<input type="text" name="option_fields[ticket_max_time]" value="' . fablab_get_option('ticket_max_time') . '"/>';
}
function fablab_ticket_online_function() {
  echo '<input type="checkbox" name="option_fields[ticket_online]" value="1"' . checked( 1, fablab_get_option('ticket_online'), false ) . '/>';
}
function fablab_ticket_delay_function() {
  echo '<input type="text" name="option_fields[ticket_delay]" value="' . fablab_get_option('ticket_delay') . '"/>';
}
function fablab_ticket_permission_function() {
  echo '<input type="checkbox" name="option_fields[tickets_permission]" value="1"' . checked( 1, fablab_get_option('tickets_permission'), false ) . '"/>';
}


// Name functions

function fablab_captions_function() {
  //echo '<h3>Fablab Captions</h3>';
}
 
function fablab_ticket_system_caption_function() {
  echo '<input type="text" name="caption_fields[ticket_system_caption]" value="' . fablab_get_captions('ticket_system_caption') . '"/>';
}
function fablab_device_caption_function() {
  echo '<input type="text" name="caption_fields[device_caption]" value="' . fablab_get_captions('device_caption') . '"/>';
}
function fablab_devices_caption_function() {
  echo '<input type="text" name="caption_fields[devices_caption]" value="' . fablab_get_captions('devices_caption') . '"/>';
}
function fablab_ticket_caption_function() {
  echo '<input type="text" name="caption_fields[ticket_caption]" value="' . fablab_get_captions('ticket_caption') . '"/>';
}
function fablab_tickets_caption_function() {
  echo '<input type="text" name="caption_fields[tickets_caption]" value="' . fablab_get_captions('tickets_caption') . '"/>';
}
function fablab_time_ticket_caption_function() {
  echo '<input type="text" name="caption_fields[time_ticket_caption]" value="' . fablab_get_captions('time_ticket_caption') . '"/>';
}
function fablab_time_tickets_caption_function() {
  echo '<input type="text" name="caption_fields[time_tickets_caption]" value="' . fablab_get_captions('time_tickets_caption') . '"/>';
}
function fablab_instruction_caption_function() {
  echo '<input type="text" name="caption_fields[instruction_caption]" value="' . fablab_get_captions('instruction_caption') . '"/>';
}
function fablab_instructions_caption_function() {
  echo '<input type="text" name="caption_fields[instructions_caption]" value="' . fablab_get_captions('instructions_caption') . '"/>';
}
function fablab_instruction_request_caption_function() {
  echo '<input type="text" name="caption_fields[instruction_request_caption]" value="' . fablab_get_captions('instruction_request_caption') . '"/>';
}
function fablab_instruction_requests_caption_function() {
  echo '<input type="text" name="caption_fields[instruction_requests_caption]" value="' . fablab_get_captions('instruction_requests_caption') . '"/>';
}

// Terms and Conditions

function fablab_tac_function() {
  
}

function fablab_tac_needed_function() {
  echo '<input type="checkbox" name="tac_fields[tac_needed]" value="1"' . checked( 1, fablab_get_tac('tac_needed'), false ) . '/>';
}
function fablab_termsandconditions_function() {
  echo '<textarea rows="5" cols="50" name="tac_fields[termsandconditions]">' . fablab_get_tac('termsandconditions') . '</textarea>';
}
function fablab_tac_date_function() {
  echo '<input type="text" name="tac_fields[tac_date]" class="time" value="' . date_i18n('Y-m-d H:i', fablab_get_tac('tac_date')) . '"/>';
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
      add_settings_error('option_fields', 'naN', 'Bitte eine positive Zahl eingeben!');
      $output[$key] = $old_settings[$key];
    } 
  }
  return $output;
}

function validate_captions($options) {
  $output = array();
  $old_settings = fablab_get_captions();

  foreach ($options as $key => $value) {

    if(!empty($value)) {
        $output[$key] = sanitize_text_field($value);
    } else {
      add_settings_error('caption_fields', 'empty', 'Leeres Feld ist nicht erlaubt!');
      $output[$key] = $old_settings[$key];
    } 
  }
  return $output;
}

function validate_tacs($options) {
  $output = array();
  $old_settings = fablab_get_tac();

  foreach ($options as $key => $value) {

    if(($key) == 'tac_date') {
      $date = strtotime($value);
      if($date) {
        $output[$key] = $date;
      } else {
          add_settings_error('tac_fields', 'naDate', 'Bitte ein Datum eingeben!');
          $output[$key] = $old_settings[$key];
      } 
    } else if(is_pos_int($old_settings[$key])) {
      if(is_pos_int($value)) {
          $output[$key] = sanitize_text_field($value);
        } else {
          add_settings_error('tac_fields', 'naN', 'Bitte eine positive Zahl eingeben!');
          $output[$key] = $old_settings[$key];
        } 
    } else {
      if(!empty($value)) {
          $output[$key] = sanitize_text_field($value);
      } else {
        add_settings_error('tac_fields', 'empty', 'Leeres Feld ist nicht erlaubt!');
        $output[$key] = $old_settings[$key];
      } 
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

function get_fablab_captions() {
  echo json_encode(fablab_get_captions());
  die();
}
add_action( 'wp_ajax_get_fablab_captions', 'get_fablab_captions' );

function fablab_activate_ticketing() {
  if(current_user_can( 'delete_others_posts' )){
    $options = fablab_get_option();
    $options['ticket_online'] = 1; 
    update_option( 'option_fields', $options);
    die(true);
  }
  die(false);
}
add_action( 'wp_ajax_activate_ticketing', 'fablab_activate_ticketing' );

function fablab_deactivate_ticketing() {
  if(current_user_can( 'delete_others_posts' )){
    $options = fablab_get_option();
    $options['ticket_online'] = 0; 
    update_option( 'option_fields', $options);
    die(true);
  }
  die(false);
}
add_action( 'wp_ajax_deactivate_ticketing', 'fablab_deactivate_ticketing' );

?>