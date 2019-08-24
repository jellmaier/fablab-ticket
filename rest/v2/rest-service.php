<?php

if (!class_exists('RestV2Service'))
{
  class RestV2Service
  {
    public function restBasicResources($data) {

      $links = array();
      array_push($links, RestEndpointsV2::createGETLink('profiles' . '/' . get_current_user_id(), 'related'));

      $resource = array();
      $resource['_links'] = $links;

      return $resource;

    }

  }
}

?>