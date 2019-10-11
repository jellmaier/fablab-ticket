<?php

if (!class_exists('UserService')) {
  class UserService
  {

    public function isLoggedIn() {
      return is_user_logged_in();
    }

    public function getCurrentUserId() {
      return get_current_user_id();
    }

    public function isLoggedInAsUser($user_id) {
      if ( UserService::isLoggedIn() && $user_id == UserService::getCurrentUserId()) {
        return true;
      }
      return false;
    }


    public function getUserDisplayName($user_id) {
      return get_userdata($user_id)->display_name;
    }


  }
}