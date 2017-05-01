<?php

//namespace fablab_ticket;

if (!class_exists('LogoutShortcode'))
{
  class LogoutShortcode
  {
    public function __construct()
    {
      // Displaying Logout Button
      add_shortcode( 'logout-button', array(&$this, 'rest_logout_shortcode') );
    }

    // Shortcode Function
    public function rest_logout_shortcode($atts){

      //if(get_current_user_id())
        //return $this->html_logout_button();

      return;    

    }

    //--------------------------------------------------------
    // HTML Logout Button
    //--------------------------------------------------------

    private function html_logout_button(){


      $html .= '<div class="user-headder">';
        $html .= '<div class="user-info">';
          $html .= '<p>' . wp_get_current_user()->display_name . '</p>';
        $html .= '</div>';
        $html .= '<div class="logout-button">';
          $html .= '<a href="' . wp_logout_url( get_permalink() ) .'"><p>Log out</p></a>';
        $html .= '</div>';
      $html .= '</div>';
      return $html;
        
    }

  }
}

function rest_logout($data) {
  wp_logout();
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/logout', array(
    'methods' => 'GET',
    'callback' => 'rest_logout',
  ) );
} );


?>