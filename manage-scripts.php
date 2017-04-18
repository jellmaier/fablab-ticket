<?php
if (!class_exists('ManageScripts'))
{
  class ManageScripts
  {
    public function __construct() 
    {

      function fl_load_script() {
        wp_register_script('fl_ticket_script', plugin_dir_url(__FILE__) . 'js/fl-ticket.js', array('jquery') );
        wp_register_style('fl_ticket_style', plugin_dir_url(__FILE__) . 'css/fl-ticket.css');
        wp_register_script('fl_ticketlist_script', plugin_dir_url(__FILE__) . 'js/fl-ticket-list.js', array('jquery') );
        wp_register_style('fl_ticketlist_style', plugin_dir_url(__FILE__) . 'css/fl-ticket-list.css');
        wp_register_script('fl_ticketlist_script_user', plugin_dir_url(__FILE__) . 'js/fl-ticket-list-user.js', array('jquery') );
        wp_register_script('fl_ticket_script_user_rest', plugin_dir_url(__FILE__) . 'js/fl-ticket-user-rest.js', array() );
        wp_register_script('fl_ticketlist_script_user_rest', plugin_dir_url(__FILE__) . 'js/fl-ticket-list-user-rest.js', array() );
        wp_register_script('fl_ticketlist_script_admin_rest', plugin_dir_url(__FILE__) . 'js/fl-ticket-list-admin-rest.js', array() );
        wp_register_script('fl_calendar_script', plugin_dir_url(__FILE__) . 'js/fl-calendar.js', array('jquery') );
        wp_register_script('fl_fullcalendar_script', plugin_dir_url(__FILE__) . 'js/fullcalendar.min.js', array('jquery', 'moment') );
        wp_register_script('fl_moment_script', plugin_dir_url(__FILE__) . 'js/moment.min.js', array('jquery') );
        wp_register_script('fl_jqueryui_script', plugin_dir_url(__FILE__) . 'js/jquery-ui.custom.min.js', array('jquery') );
        wp_register_style('fl_calendar_style', plugin_dir_url(__FILE__) . 'css/fullcalendar.css');
        // angular
        wp_register_script('angular-core', plugin_dir_url(__FILE__) . 'js/angular/angular.min.js', array(), null, false);
        wp_register_script('angular-locale_de-at', plugin_dir_url(__FILE__) . 'js/angular/i18n/angular-locale_de-at.js', array(), null, false);
        wp_register_script('angular-sanitize', plugin_dir_url(__FILE__) . 'js/angular/angular-sanitize.min.js', array(), null, false);
        wp_register_script('angular-route', plugin_dir_url(__FILE__) . 'js/angular/angular-route.min.js', array(), null, false);
        wp_localize_script( 'angular-core', 'AppAPI', angular_translation_array() );
        wp_enqueue_script('angular-core');
        wp_enqueue_script('angular-locale_de-at');
        wp_enqueue_script('angular-sanitize');
        wp_enqueue_script('angular-route');



        wp_register_script('leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/leaflet.js');
        wp_register_style('leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/leaflet.css');
        wp_register_script('ui-leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/ui-leaflet.min.js');


        //wp_enqueue_script('angular-animate');

      }
      add_action('init', 'fl_load_script');


      function fl_load_leaflet($hook) {
        if (($hook == 'edit-tags.php' || $hook == 'term.php') && $_GET['taxonomy'] == 'location' ) {   
          //wp_enqueue_script('leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/leaflet.js');
          //wp_enqueue_style('leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/leaflet.css');
          wp_print_scripts('leaflet');
          wp_print_styles('leaflet');
          wp_enqueue_script('fl_leaflet_script', plugin_dir_url(__FILE__) . 'js/fl-location-edit.js', array('jquery') );
        }         

      }
      //add_action('wp_enqueue_scripts', 'fl_load_leaflet');
      add_action('admin_enqueue_scripts', 'fl_load_leaflet');


      function fl_load_admin_script($hook) {
        global $fl_settings;

        wp_enqueue_script('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'js/jquery.datetimepicker.js', array('jquery') );
        wp_enqueue_style('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'css/jquery.datetimepicker.css');
        wp_enqueue_script('fl_timeticket_edit_script', plugin_dir_url(__FILE__) . 'js/fl-timeticket-edit.js', array('jquery') );

        wp_enqueue_script('jquery.tinycolorpicker', plugin_dir_url(__FILE__) . 'js/jquery.tinycolorpicker.js', array('jquery') );
        wp_enqueue_style('jquery.tinycolorpicker', plugin_dir_url(__FILE__) . 'css/tinycolorpicker.css');
        wp_enqueue_script('fl_device_edit_script', plugin_dir_url(__FILE__) . 'js/fl-device-edit.js', array('jquery') );

        //wp_register_script('leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/leaflet.js');
        //wp_register_style('leaflet', plugin_dir_url(__FILE__) . 'js/leaflet/leaflet.css');
        //wp_register_script('fl_leaflet_script', plugin_dir_url(__FILE__) . 'js/fl-location-edit.js', array('jquery') );

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

      function print_fl_ticket_script() {
        global $fl_ticket_script;
        if ( ! $fl_ticket_script)
          return;

        wp_localize_script( 'fl_ticket_script', 'fl_minhour', ticket_minhour_array() );
        wp_localize_script( 'fl_ticket_script', 'fl_ticket', ticket_translation_array() );
        wp_localize_script( 'fl_ticket_script', 'fl_tticket', tticket_translation_array() );
        wp_localize_script( 'fl_ticket_script', 'fl_iticket', iticket_translation_array() );

        wp_print_scripts('fl_ticket_script');
        wp_print_styles('fl_ticket_style');
      }
      add_action('wp_footer', 'print_fl_ticket_script');

      function print_fl_ticketlist_manager() {
        global $fl_ticketlist_manager;
        if ( ! $fl_ticketlist_manager)
          return;

        wp_localize_script( 'fl_ticketlist_script', 'fl_ticket', ticket_assign_translation_array() );
        wp_print_scripts('fl_ticketlist_script');
        wp_print_styles('fl_ticketlist_style');
      }
      add_action('wp_footer', 'print_fl_ticketlist_manager');

      function print_fl_ticketlist_user() {
        global $fl_ticketlist_user;
        if ( ! $fl_ticketlist_user)
          return;
        
        wp_print_scripts('fl_ticketlist_script_user');
        wp_print_styles('fl_ticketlist_style');
      }
      add_action('wp_footer', 'print_fl_ticketlist_user');

      function print_fl_ui_leaflet() {
        global $fl_ui_leaflet; // hook too early, can't work this way
        if ( ! $fl_ui_leaflet)
          return;

        wp_print_scripts('leaflet');
        wp_print_styles('leaflet');
        wp_print_scripts('ui-leaflet');
      }
      add_action('wp_enqueue_scripts', 'print_fl_ui_leaflet');

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
    }
  }
}



function pluginname_ajaxurl() {
  ?>
  <script type="text/javascript">
    var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
  </script>
  <?php
}

add_action('wp_head','pluginname_ajaxurl');

remove_filter('the_content', 'wpautop');

?>