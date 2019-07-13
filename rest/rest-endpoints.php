<?php

include 'v2/rest-endpoints.php';

if (!class_exists('RestEndpoints'))
{
  class RestEndpoints
  {
    public function __construct()
    {
    	new RestEndpointsV2();

    }
  }
}


?>