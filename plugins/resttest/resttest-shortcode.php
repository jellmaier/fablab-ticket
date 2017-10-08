<?php

//--------------------------------------------------------
// Rest Test
//--------------------------------------------------------

if (!class_exists('RestTestShortcode'))
{
  class RestTestShortcode
  {
    public function __construct()
    {
      add_shortcode( 'rest-test', array(&$this, 'rest_test_shortcode') );
    }

    // Shortcode Function
    public function rest_test_shortcode($atts){
      global $resttest_script; // script loader
      $resttest_script = true;
      
      return '<div ng-app="restTest" ng-controller="restTestCtrl" ng-include="templates_url + \'restTestTemplate.html\'"></div>';   
    }


  }
}

function rest_scan_rest_routes($data) {
  /*if (isset($data['reload'])) {
    shell_exec("rest-routes-script.sh");
  }*/
  return shell_exec('sh wp-content/plugins/fablab-ticket/plugins/resttest/rest-routes-script2.sh');
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/scan_rest_routes', array(
    'methods' => 'GET',
    'callback' => 'rest_scan_rest_routes',
  ) );
});


  


?>