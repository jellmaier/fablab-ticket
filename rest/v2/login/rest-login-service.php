<?php


if (!class_exists('RestV2LoginService'))
{
  class RestV2LoginService
  {

    public function checkUserLoginsLeft($user_id)
    {
      $latest_login_time = get_user_meta($user_id, 'last-login-fail', true);

      $max_number_logins = intval(SettingsService::getOption('number_login_fails'));

      if (empty($latest_login_time))
        return $max_number_logins;

      $time_diff = current_time('timestamp') - $latest_login_time;

      if ($time_diff > (60 * intval(SettingsService::getOption('login_fail_delay')))) {
        delete_user_meta($user_id, 'last-login-fail');
        delete_user_meta($user_id, 'login-fails');
        return $max_number_logins;
      }


      $login_fails = intval(get_user_meta($user_id, 'login-fails', true));

      if ($login_fails < intval(SettingsService::getOption('number_login_fails'))) {
        return $max_number_logins - $login_fails;
      }

      return 0;
    }

    public function calcUserNextLogin($user_id)
    {
      $latest_login_time = get_user_meta($user_id, 'last-login-fail', true);
      $time_diff = current_time('timestamp') - $latest_login_time;
      return (intval(SettingsService::getOption('login_fail_delay')) - ($time_diff / 60));
    }

    public function setUserLoginFail($user_id)
    {
      $login_fails = intval(get_user_meta($user_id, 'login-fails', true));
      update_user_meta($user_id, 'login-fails', $login_fails + 1);
      update_user_meta($user_id, 'last-login-fail', current_time('timestamp'));
    }

  }
}



?>