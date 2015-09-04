<?php

//namespace fablab_ticket;


if (!class_exists('AdminPage'))
{
  class AdminPage
  {
    public function __construct()
    {
      function fl_admin_page() {
        global $fl_settings;
        $fl_settings = add_options_page(__('Fablab Options', 'fl'), __('Fablab Options', 'fl'), 'manage_options', 'fl-options', 'fl_options_render');
      }
      add_action('admin_menu', 'fl_admin_page');

      function fl_options_render() {
        ?>
        <div class="wrap">
          <h2>Fablab Optionen<h2>
          <form id="fl-ticket-settings" action="" metod="POST">
            <div>
              <h5>Ticket Optionen</h5>
              <p>Zeit Intervall: <input type="text" id="time-interval" value="15"/></p>
              <p>Maximale Ticket Zeit: <input type="text" name="max-time" value="120"/></p>
              <input type="submit" name="time-submit" class="button-primary" value="Speichern"/>
            </div>
          </form>
        </div>
        <?php
      }
    }
  }
}

?>