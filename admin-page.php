<?php

//namespace fablab_ticket;


if (!class_exists('AdminPage'))
{
  class AdminPage
  {
    public function __construct()
    {

      /*
      function fl_admin_menu_seperator(){
        if ( ! current_user_can( 'bp_moderate' ) ) {
          return;
        }
        global $menu;

        $menu[] = array( '', 'read', 'separator-fablab-ticket', '', 'wp-menu-separator' );
      }
      add_action('admin_menu', 'fl_admin_menu_seperator');

      */

      function fl_options_page() {
        $parent_slug = 'edit.php?post_type=device';
        $page_title = __('Ticket Options', 'fl');
        $menu_title = __('Ticket Options', 'fl');
        $capability = 'manage_options';
        $menu_slug = 'fl-options';
        $function = 'fl_options_render';

        //global $fl_settings;
        //$fl_settings = add_options_page(__('Fablab Options', 'fl'), __('Fablab Options', 'fl'), 'manage_options', 'fl-options', 'fl_options_render');
        add_submenu_page( $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function);
      
      }
      add_action('admin_menu', 'fl_options_page');

      function fl_options_render() {
        ?>
        <div class="wrap">
          <h2>Ticket Einstellungen<h2>
          <div>
            <h5>Ticket Optionen</h5>
            <p>Ticket pro User: <input type="text" id="ticket-per-user" value="<?= get_option('ticket_per_user'); ?>"/></p>
            <p>Zeit Intervall (min):<input type="text" id="ticket-time-interval" value="<?= get_option('ticket_time_interval'); ?>"/></p>
            <p>Maximale Ticket Zeit (min): <input type="text" id="ticket-max-time" value="<?= get_option('ticket_max_time'); ?>"/></p>
            <input type="submit" id="ticket-option-submit" class="button-primary" value="Speichern"/>
          </div>
        </div>
        <?php
      }
       // ------------------------------------------------------------------
       // Add all your sections, fields and settings during admin_init
       // ------------------------------------------------------------------
       //


        //* settings shoud be includet with settings api
       
       function eg_settings_api_init() {
        // Add the section to reading settings so we can add our
        // fields to it
        add_settings_section(
          'eg_setting_section',
          'Example settings section in reading',
          'eg_setting_section_callback_function',
          'fl-options'
        );
        
        // Add the field with the names and function to use for our new
        // settings, put it in our new section
        add_settings_field(
          'eg_setting_name',
          'Example setting Name',
          'eg_setting_callback_function',
          'fl-options',
          'eg_setting_section'
        );
        
        // Register our setting so that $_POST handling is done for us and
        // our callback function just has to echo the <input>
        register_setting( 'reading', 'eg_setting_name' );
       } // eg_settings_api_init()
       
       //add_action( 'admin_init', 'eg_settings_api_init' );
       
        
       // ------------------------------------------------------------------
       // Settings section callback function
       // ------------------------------------------------------------------
       //
       // This function is needed if we added a new section. This function 
       // will be run at the start of our section
       //
       
       function eg_setting_section_callback_function() {
        echo '<p>Intro text for our settings section</p>';
       }
       
       // ------------------------------------------------------------------
       // Callback function for our example setting
       // ------------------------------------------------------------------
       //
       // creates a checkbox true/false option. Other types are surely possible
       //
       
       function eg_setting_callback_function() {
        echo '<input name="eg_setting_name" id="eg_setting_name" type="checkbox" value="1" class="code" ' . checked( 1, get_option( 'eg_setting_name' ), false ) . ' /> Explanation text';
       }

    }
  }
}

function fl_update_options() {
  $ticket_per_user = $_POST['ticket_per_user'];
  $ticket_time_interval = $_POST['ticket_time_interval'];
  $ticket_max_time = $_POST['ticket_max_time'];

  if (intval($ticket_per_user) &&  intval($ticket_time_interval) 
    && intval($ticket_max_time)) {
    update_option('ticket_per_user', $ticket_per_user);
    update_option('ticket_time_interval', $ticket_time_interval);
    update_option('ticket_max_time', $ticket_max_time);
    die('suc');
  } else {
    die('naN');
  }
  

  
}
add_action( 'wp_ajax_update_ticket_options', 'fl_update_options' );

function get_ticket_time_interval() {
    die(get_option('ticket_time_interval', $ticket_time_interval));
}
add_action( 'wp_ajax_get_ticket_time_interval', 'get_ticket_time_interval' );

function get_ticket_max_time() {
    die(get_option('ticket_max_time', $ticket_time_interval));
}
add_action( 'wp_ajax_get_ticket_max_time', 'get_ticket_max_time' );


?>