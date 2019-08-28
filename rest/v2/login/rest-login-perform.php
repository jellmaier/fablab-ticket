<?php


if (!class_exists('RestV2LoginPerform'))
{
  class RestV2LoginPerform
  {

    public function restPerformLogin($data)
    {
      $params = $data->get_params();
      $data = isset($params['params']) ? $params['params'] : $data;

      if (!isset($data['username']))
        return new WP_Error('rest_forbidden', __('OMG you can not view private data.', 'fablab-ticket'), array('status' => 401));


      $username = sanitize_text_field($data['username']);
      $password = sanitize_text_field($data['password']);
      $user = get_user_by('login', $username);
      $user_id = $user->ID;
      
      // todo Implement random return when no user_id

      $logins_left = RestV2LoginService::checkUserLoginsLeft($user_id);
      if ($logins_left == 0) {
        $time_left = RestV2LoginService::calcUserNextLogin($user_id);

        $resource = RestV2Login::getBasicResource();
        $resource['loginFailed'] = true;
        $resource['loginMessage'] = sprintf(__('Zu viele Versuche! Nächster Login in %d Minuten möglich.'), $time_left);
        return $resource; //new WP_Error('rest_forbidden', sprintf(__('Zu viele Versuche! Nächster Login in %d Minuten möglich.'), $time_left), array('status' => 401));
      }


      if (wp_check_password($password, $user->user_pass, $user_id)) {
        wp_set_auth_cookie($user_id);
      } else {
        RestV2LoginService::setUserLoginFail($user_id);
        //return intval(get_user_meta( $user_id, 'login-fails', true ));
        $resource = RestV2Login::getBasicResource();
        $resource['loginFailed'] = true;
        $resource['loginMessage'] = sprintf(__('Login fehlgeschlagen, du hast noch %d versuche übrig.', 'fablab-ticket'), $logins_left);
        return $resource;
      }


      if ( SettingsService::isDevMode() ) {
        $resource =  RestV2LoginDev::getLinkGetUserData();
      } else {
        $resource = RestV2Login::getBasicResource();
      }

      $resource['loginFailed'] = false;
      return $resource;

    }

  }
}



?>