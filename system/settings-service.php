<?php

if (!class_exists('OptionService'))
{
  class SettingsService
  {

    public static function isDevMode()
    {
      return TRUE; // todo add option
    }
    public function getOption($key)
    {
      return fablab_get_option($key);
    }

    public function getOptions()
    {
      return fablab_get_option('array');
    }
  }
}


?>