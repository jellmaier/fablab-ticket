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

        wp_register_script('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'js/jquery.datetimepicker.js', array('jquery') );
        wp_register_style('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'css/jquery.datetimepicker.css');
        wp_register_script('fl_timeticket_edit_script', plugin_dir_url(__FILE__) . 'js/fl-timeticket-edit.js', array('jquery') );

        wp_register_script('jquery.tinycolorpicker', plugin_dir_url(__FILE__) . 'js/jquery.tinycolorpicker.js', array('jquery') );
        wp_register_style('jquery.tinycolorpicker', plugin_dir_url(__FILE__) . 'css/tinycolorpicker.css');
        wp_register_script('fl_device_edit_script', plugin_dir_url(__FILE__) . 'js/fl-device-edit.js', array('jquery') );
      }
      add_action('init', 'fl_load_script');

      function fl_load_admin_script($hook) {
        global $fl_settings;

        wp_enqueue_script('fl_settings_ajax', plugin_dir_url(__FILE__) . 'js/fl-ajax.js', array('jquery') );
        //wp_enqueue_style('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'css/jquery.datetimepicker.css');
        //wp_enqueue_script('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'js/jquery.datetimepicker.js', array('jquery') );

        //should be loadet just in edit functions
        wp_print_scripts('jquery.datetimepicker');
        wp_print_scripts('fl_timeticket_edit_script');
        wp_print_styles('jquery.datetimepicker');
        wp_print_scripts('jquery.tinycolorpicker');
        wp_print_scripts('fl_device_edit_script');
        wp_print_styles('jquery.tinycolorpicker');

      }
      add_action('admin_enqueue_scripts', 'fl_load_admin_script');


      function print_fl_ticket_script() {
        global $fl_ticket_script;

        if ( ! $fl_ticket_script)
          return;

        wp_print_scripts('fl_ticket_script');
        wp_print_styles('fl_ticket_style');
      }
      add_action('wp_footer', 'print_fl_ticket_script');

      function print_fl_timeticket_edit_script() {
        global $fl_timeticket_edit_script;

        if ( ! $fl_timeticket_edit_script)
          return;

        wp_print_scripts('jquery.datetimepicker');
        wp_print_scripts('fl_timeticket_edit_script');
        wp_print_styles('jquery.datetimepicker');
      }
      add_action('wp_footer', 'print_fl_timeticket_edit_script');

      function print_fl_device_edit_script() {
        global $fl_device_edit_script;

        if ( ! $fl_device_edit_script)
          return;

        wp_print_scripts('jquery.tinycolorpicker');
        wp_print_scripts('fl_device_edit_script');
        wp_print_styles('jquery.tinycolorpicker');
      }
      add_action('wp_footer', 'print_fl_device_edit_script');
    }
  }
}

?>