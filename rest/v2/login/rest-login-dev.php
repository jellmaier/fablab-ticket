<?php

if (!class_exists('RestV2LoginDev'))
{
  class RestV2LoginDev
  {
    public function restGetUserData($data)
    {
      $params = $data->get_params();
      $data = isset($params['params']) ? $params['params'] : $data;

      if (!isset($data['username']))
        return new WP_Error('rest_forbidden', __('OMG you can not view private data.', 'fablab-ticket'), array('status' => 401));


      $username = sanitize_text_field($data['username']);
      $password = sanitize_text_field($data['password']);
      $user = get_user_by('login', $username);
      $user_id = $user->ID;


      $logins_left = RestV2LoginService::checkUserLoginsLeft($user_id);
      if ($logins_left == 0) {
        $time_left = RestV2LoginService::calcUserNextLogin($user_id);
        return new WP_Error('rest_forbidden', sprintf(__('Zu viele Versuche! Nächster Login in %d Minuten möglich.'), $time_left), array('status' => 401));
      }

      if (wp_check_password($password, $user->user_pass, $user_id)) {

        $old_user_id = get_current_user_id();

        wp_set_current_user($user_id);
        $user_infos = angular_user_array();

        // reset old user
        wp_set_current_user($old_user_id);

        return $user_infos;

      } else {
        RestV2LoginService::setUserLoginFail($user_id);
        //return intval(get_user_meta( $user_id, 'login-fails', true ));
        return new WP_Error('no_user_found',
          sprintf(__('Login fehlgeschlagen, du hast noch %d versuche übrig.', 'fablab-ticket'), $logins_left), array('status' => 401));
      }
    }

  }
}


?>