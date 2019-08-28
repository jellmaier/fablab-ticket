<?php
if (!class_exists('ManageScripts'))
{
  class ManageScripts
  {
    public function __construct() 
    {

      function fl_load_script() {
        wp_register_style('fl_ticketlist_style', plugin_dir_url(__FILE__) . 'views/css/fl-ticket-views.css');
        wp_register_script('fl_ticket_script_user_rest', plugin_dir_url(__FILE__) . 'views/getticket/js/fl-ticket-user-rest.js', array() );
        wp_register_script('fl_ticketlist_script_user_rest', plugin_dir_url(__FILE__) . 'views/ticketlist/js/fl-ticket-list-user-rest.js', array() );
        wp_register_script('fl_ticketlist_script_admin_rest', plugin_dir_url(__FILE__) . 'views/ticketlist/js/fl-ticket-list-admin-rest.js', array() );
        wp_register_script('nfc_login_scrypt', plugin_dir_url(__FILE__) . 'plugins/nfc-login/nfc-login.js', array() );
        wp_register_style('nfc_login_style', plugin_dir_url(__FILE__) . 'plugins/nfc-login/nfc-login.css');
        wp_register_script('resttest_script', plugin_dir_url(__FILE__) . 'plugins/resttest/resttest.js', array() );
        wp_register_style('resttest_script', plugin_dir_url(__FILE__) . 'plugins/resttest/resttest.css');
        wp_register_script('fl_calendar_script', plugin_dir_url(__FILE__) . 'system/js/fl-calendar.js', array('jquery') );
        wp_register_script('fl_fullcalendar_script', plugin_dir_url(__FILE__) . 'system/js/fullcalendar.min.js', array('jquery', 'moment') );
        wp_register_script('fl_moment_script', plugin_dir_url(__FILE__) . 'system/js/moment.min.js', array('jquery') );
        wp_register_script('fl_jqueryui_script', plugin_dir_url(__FILE__) . 'system/js/jquery-ui.custom.min.js', array('jquery') );
        wp_register_style('fl_calendar_style', plugin_dir_url(__FILE__) . 'views/css/fullcalendar.css');
        // angular
        wp_register_script('angular-core', plugin_dir_url(__FILE__) . 'system/js/angular/angular.min.js', array(), null, false);
        wp_register_script('angular-locale_de-at', plugin_dir_url(__FILE__) . 'system/js/angular/i18n/angular-locale_de-at.js', array(), null, false);
        wp_register_script('angular-sanitize', plugin_dir_url(__FILE__) . 'system/js/angular/angular-sanitize.min.js', array(), null, false);
        wp_register_script('angular-route', plugin_dir_url(__FILE__) . 'system/js/angular/angular-route.min.js', array(), null, false);
        wp_register_script('angular-cookies', plugin_dir_url(__FILE__) . 'system/js/angular/angular-cookies.min.js', array(), null, false);
        wp_register_script('round-progress', plugin_dir_url(__FILE__) . 'system/js/angular/roundProgress.min.js', array(), null, false);
        wp_localize_script( 'angular-core', 'AppAPI', angular_translation_array() );
        wp_localize_script( 'angular-core', 'TerminalDataLoc', angular_terminal_array() );
        wp_localize_script( 'angular-core', 'UserDataLoc', angular_user_array() );
        wp_enqueue_script('angular-core');
        wp_enqueue_script('angular-locale_de-at');
        wp_enqueue_script('angular-sanitize');
        wp_enqueue_script('angular-route');
        wp_enqueue_script('angular-cookies');
        wp_enqueue_script('round-progress');

        wp_register_script('fl-inline', plugin_dir_url(__FILE__) . 'fl-app/dist/inline.bundle.js', array(), false, true);
        wp_register_script('fl-polyfills', plugin_dir_url(__FILE__) . 'fl-app/dist/polyfills.bundle.js', array(), false, true);
        wp_register_script('fl-styles', plugin_dir_url(__FILE__) . 'fl-app/dist/styles.bundle.js', array(), false, true);
        wp_register_script('fl-vendor', plugin_dir_url(__FILE__) . 'fl-app/dist/vendor.bundle.js', array(), false, true);
        wp_register_script('fl-main', plugin_dir_url(__FILE__) . 'fl-app/dist/main.bundle.js', array(), false, true);
        wp_localize_script( 'fl-main', 'AppAPI', angular_translation_array() );
        wp_localize_script( 'fl-main', 'AppAPIv2', angular_app_api_v2_array() );
       

        wp_register_script('leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/leaflet.js');
        wp_register_style('leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/leaflet.css');
        wp_register_script('ui-leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/ui-leaflet.min.js');



      }
      add_action('init', 'fl_load_script');


      function fl_load_leaflet($hook) {
        if (($hook == 'edit-tags.php' || $hook == 'term.php') && $_GET['taxonomy'] == 'location' ) {   
          //wp_enqueue_script('leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/leaflet.js');
          //wp_enqueue_style('leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/leaflet.css');
          wp_print_scripts('leaflet');
          wp_print_styles('leaflet');
          wp_enqueue_script('fl_leaflet_script', plugin_dir_url(__FILE__) . 'system/js/fl-location-edit.js', array('jquery') );
        }         

      }
      //add_action('wp_enqueue_scripts', 'fl_load_leaflet');
      add_action('admin_enqueue_scripts', 'fl_load_leaflet');


      function fl_load_admin_script($hook) {
        global $fl_settings;

        wp_enqueue_script('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'system/js/jquery.datetimepicker.js', array('jquery') );
        wp_enqueue_style('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'views/css/jquery.datetimepicker.css');
        wp_enqueue_script('fl_timeticket_edit_script', plugin_dir_url(__FILE__) . 'system/js/fl-timeticket-edit.js', array('jquery') );

        wp_enqueue_script('jquery.tinycolorpicker', plugin_dir_url(__FILE__) . 'system/js/jquery.tinycolorpicker.js', array('jquery') );
        wp_enqueue_style('jquery.tinycolorpicker', plugin_dir_url(__FILE__) . 'views/css/tinycolorpicker.css');
        wp_enqueue_script('fl_device_edit_script', plugin_dir_url(__FILE__) . 'system/js/fl-device-edit.js', array('jquery') );

        //wp_register_script('leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/leaflet.js');
        //wp_register_style('leaflet', plugin_dir_url(__FILE__) . 'system/js/leaflet/leaflet.css');
        //wp_register_script('fl_leaflet_script', plugin_dir_url(__FILE__) . 'system/js/fl-location-edit.js', array('jquery') );

      }
      add_action('admin_enqueue_scripts', 'fl_load_admin_script');


      function print_fl_calendar_script() {
        global $fl_calendar_script;
        if ( ! $fl_calendar_script)
          return;

        wp_print_scripts('fl_moment_script');
        wp_print_scripts('fl_jqueryui_script');
        wp_print_scripts('fl_fullcalendar_script');
        wp_print_styles('fl_calendar_style');
        wp_print_scripts('fl_calendar_script');
      }
      add_action('wp_footer', 'print_fl_calendar_script');

      function print_fl_ui_leaflet() {
        global $fl_ui_leaflet; // hook too early, can't work this way
        if ( ! $fl_ui_leaflet)
          return;

        wp_print_scripts('leaflet');
        wp_print_styles('leaflet');
        wp_print_scripts('ui-leaflet');

      }
      add_action('wp_enqueue_scripts', 'print_fl_ui_leaflet');


      // Rest Shortcodes

      function print_fl_ticket_user_rest() {
        global $fl_ticket_user_rest;
        if ( ! $fl_ticket_user_rest)
          return;

        wp_localize_script( 'fl_ticket_script_user_rest', 'assign_loc', ticket_assign_translation_array() );
        wp_localize_script( 'fl_ticket_script_user_rest', 'minhour_loc', ticket_ng_minhour_array() );
        wp_print_scripts('fl_ticket_script_user_rest');
        wp_print_styles('fl_ticketlist_style');
      }
      add_action('wp_footer', 'print_fl_ticket_user_rest');


      function print_fl_ticketlist_user_rest() {
        global $fl_ticketlist_user_rest;
        if ( ! $fl_ticketlist_user_rest)
          return;

        wp_localize_script( 'fl_ticketlist_script_user_rest', 'assign_loc', ticket_assign_translation_array() );
        wp_localize_script( 'fl_ticketlist_script_user_rest', 'minhour_loc', ticket_ng_minhour_array() );
        wp_print_scripts('fl_ticketlist_script_user_rest');
        wp_print_styles('fl_ticketlist_style');
      }
      add_action('wp_footer', 'print_fl_ticketlist_user_rest');


      function print_fl_ticketlist_admin_rest() {
        global $fl_ticketlist_admin_rest;
        if ( ! $fl_ticketlist_admin_rest)
          return;

        wp_localize_script( 'fl_ticketlist_script_admin_rest', 'assign_loc', ticket_assign_translation_array() );
        wp_localize_script( 'fl_ticketlist_script_admin_rest', 'minhour_loc', ticket_ng_minhour_array() );
        wp_print_scripts('fl_ticketlist_script_admin_rest');
        wp_print_styles('fl_ticketlist_style');
      }
      add_action('wp_footer', 'print_fl_ticketlist_admin_rest');

      function print_nfc_login_script() {
        global $nfc_login_script;
        if ( ! $nfc_login_script)
          return;

        wp_print_scripts('nfc_login_scrypt');
        wp_print_styles('nfc_login_style');
      }
      add_action('wp_footer', 'print_nfc_login_script');

      function print_rettest_script() {
        global $resttest_script;
        if ( ! $resttest_script)
          return;

        wp_print_scripts('resttest_script');
        wp_print_styles('resttest_script');
      }
      add_action('wp_footer', 'print_rettest_script');


      function print_fl_ng_app_scripts()
      {
        global $flapp_script;
        if ( ! $flapp_script)
          return;

        wp_print_scripts('fl-inline');
        wp_print_scripts('fl-polyfills');
        wp_print_scripts('fl-styles');
        wp_print_scripts('fl-vendor');
        wp_print_scripts('fl-main');
        
      }
      add_action('wp_footer', 'print_fl_ng_app_scripts');


      //add_action('init', array($this, '_init'));
      //register_activation_hook( __FILE__, 'pmg_rewrite_activation' );


      //add_action('init', array($this, 'angular_rewrite_url'));
      add_action('wp_head', array($this, 'hook_base_href'));
    }
    
    // configute navigation for angular routing
/*
    public function angular_rewrite_url() {
      //add_rewrite_rule("^$app.*$", "index.php?page_id=1296", 'top');
      add_rewrite_rule('^app/?', 'index.php?page_id=1296', 'top');
    }
*/
    public function hook_base_href() {
        global $post;
        echo '<base href="' . get_permalink($post->ID) . '">';
    }
    
  }
}


remove_filter('the_content', 'wpautop');

?>