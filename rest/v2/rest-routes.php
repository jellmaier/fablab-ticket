<?php

if (!class_exists('RestV2Routes'))
{
  class RestV2Routes
  {
    const appRoute = 'sharepl/v2';
    const userId = '(?P<userId>\d+)';
    const deviceId = '(?P<deviceId>\d+)';
  }
}
