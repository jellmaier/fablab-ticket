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

      if(get_current_user_id())
        return $this->html_logout_button();

      return;    

    }

    //--------------------------------------------------------
    // HTML Logout Button
    //--------------------------------------------------------

    private function html_logout_button(){

      $html .= '<div class="logout-button" id="css-element">';
      $html .= '<a href="' . wp_logout_url( get_permalink() ) .'">';
//      $html .= '<a href="' . get_bloginfo('wpurl') . '/wp-login.php?action=logout&_wpnonce=' . wp_create_nonce( 'wp_rest' ) .'">';
      $html .= '<input type="submit" value="Logout"/></a>';
      $html .= '</div>';
      return $html;
        
    }

  }
}
  


?>