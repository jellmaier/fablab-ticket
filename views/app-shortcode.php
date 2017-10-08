<?php

//namespace fablab_ticket;


if (!class_exists('FlNgAppShortcodeRest'))
{
  class FlNgAppShortcodeRest
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'fl-ng-app', array(&$this, 'get_fl_ng_app_shortcode' ) );

    }

    //--------------------------------------------------------
    // Display active Tickets
    //--------------------------------------------------------
    public function get_fl_ng_app_shortcode($atts) {


      //--------------------------------------------------------
      // Display NG App
      //--------------------------------------------------------

      global $flapp_script;
      $flapp_script = true;

      return '<app-root>Loading...</app-root>';
      
    }
  }
}


?>