<?php
if (!class_exists('ManageAppScripts'))
{
  class ManageAppScripts
  {
    public function __construct() 
    {

      function fl_load_app_script() {

        wp_register_script('fl-polyfills', plugin_dir_url(__FILE__) . 'fl-app/dist/polyfills.js', array(), false, true);
        wp_register_script('fl-polyfills-es5', plugin_dir_url(__FILE__) . 'fl-app/dist/polyfills-es5.js', array(), false, true);
        wp_register_script('fl-runtime', plugin_dir_url(__FILE__) . 'fl-app/dist/runtime.js', array(), false, true);
        wp_register_script('fl-styles', plugin_dir_url(__FILE__) . 'fl-app/dist/styles.js', array(), false, true);
        wp_register_script('fl-vendor', plugin_dir_url(__FILE__) . 'fl-app/dist/vendor.js', array(), false, true);
        wp_register_script('fl-main', plugin_dir_url(__FILE__) . 'fl-app/dist/main.js', array(), false, true);
        wp_localize_script( 'fl-main', 'AppAPI', angular_translation_array() );
        wp_localize_script( 'fl-main', 'AppAPIv2', angular_app_api_v2_array() );

      }
      add_action('init', 'fl_load_app_script');

      function print_fl_ng_app_scripts()
      {
        global $flapp_script;
        if ( ! $flapp_script)
          return;

        wp_print_scripts('fl-polyfills');
      //  wp_print_scripts('fl-polyfills-es5');
        wp_print_scripts('fl-runtime');
        wp_print_scripts('fl-styles');
        wp_print_scripts('fl-vendor');
        wp_print_scripts('fl-main');
        echo '<script src="'. plugin_dir_url(__FILE__) . 'fl-app/dist/polyfills-es5.js" nomodule></script>';


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
