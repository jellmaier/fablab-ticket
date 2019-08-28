<?php


if (!class_exists('RestV2Login'))
{
  class RestV2Login
  {

    public function restGetLoginOptions($data)
    {

      if ( UserService::isLoggedIn() ) {
        return RestV2Login::getBasicResource();
      }
      return RestV2Login::getLoginOptions();
    }

    public function getBasicResource() {

      $links = array();
      array_push($links, RestEndpointsV2::createGETLink('profiles' . '/' . UserService::getCurrentUserId(), 'related'));

      $resource = array();
      $resource['userInfos'] = angular_user_array();
      $resource['_links'] = $links;

      return $resource;

    }

    private function getLoginOptions() {

      $links = array();
      array_push($links, RestEndpointsV2::createGETLink('login/nfc', 'login-nfc', 'Login/Registrieren mit NFC'));
      array_push($links, RestEndpointsV2::createGETLink('register', 'register', 'Registrieren'));
      array_push($links, RestEndpointsV2::createGETLink('password-reset', 'password-reset', 'Passwort vergessen?'));

      $login_fields = array(
        RestEndpointsV2::createTextField('Username', 'username'),
        RestEndpointsV2::createPasswordField('Password', 'password'));


      $loginMaskLinks = array();
      array_push($loginMaskLinks, RestEndpointsV2::createPOSTLink('login' , 'submit', 'Login'));

      $loginMask = array();
      $loginMask['inputFields'] = $login_fields;
      $loginMask['_links'] = $loginMaskLinks;
      $login = array();
      $login['loginHeading'] = 'Login';
      $login['loginMessage'] = 'Du bist nicht eingeloggt!';
      $login['loginMask'] = $loginMask;
      $login['registerInfo'] = 'Du hast noch keinen Account?';
      $resource = RestV2Login::getBasicResource();
      $resource['login'] = $login;
      $resource['_links'] = $links;

      return $resource;

    }

  }
}



?>