<?php
  
  function angular_translation_array() {
    return array(
      // this is the address of the blog
      'blog_url' => get_bloginfo('wpurl'),
      // this is the address of the blog
      'templates_url' => get_bloginfo('wpurl') . '/wp-content/plugins/fablab-ticket/views/templates/',
      // this is the API address of the JSON API plugin
      'api_url' => get_bloginfo('wpurl') . '/api/',
      // this is the API address of the JSON API plugin
      'sharing_url' => get_bloginfo('wpurl') . '/wp-json/sharepl/v1/',
      // rest v2 url
      'rest_v2_url' => get_bloginfo('wpurl') . '/wp-json/sharepl/v2/',
      // user nonce
      'nonce' => wp_create_nonce( 'wp_rest' ),
    );
  }

  function angular_app_api_v2_array() {
    return array(

      'is_dev_mode' => SettingsService::isDevMode(),
      'rest_v2_url' => get_bloginfo('wpurl') . '/wp-json/sharepl/v2/',
      // user nonce
      'nonce' => wp_create_nonce( 'wp_rest' )
    );
  }

  function angular_terminal_array() {
    return array(
      // is_terminal
      'is_terminal' => ($_COOKIE['terminal_token'] == fablab_get_option('terminal_token')),
      // ticket_terminals_only
      'ticket_terminals_only' => (fablab_get_option('ticket_terminals_only') == '1'),
      // auto_logout
      'auto_logout' =>fablab_get_option('auto_logout'),
      // ticket system online
      'ticket_system_online' => (fablab_get_option('ticket_online') == '1'),
    );
  }

  function angular_user_array() {
    return array(
      // user logged in
      'is_user_logged_in' => is_user_logged_in(),
      // is_admin
      'is_admin' => is_manager(),
      // user_display_name
      'user_display_name' => wp_get_current_user()->display_name,
      // user nonce
      'nonce' => wp_create_nonce( 'wp_rest' ),
    );
  }

  function ticket_translation_array() {
    return array(
      // Du hast den AGBs zugestimmt
      'tac_confirmed' => __('You have agreed to the terms and conditions', 'fablab-ticket' ),
      // Ticket speichern
      'save_ticket' => sprintf(__('Save %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket bearbeiten
      'edit_ticket' => sprintf(__( 'Edit %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Gerät
      'ticket_device' => __('Device', 'fablab-ticket' ),
      // Dauer
      'ticket_duration' => __('Duration', 'fablab-ticket' ),
      // Löschen
      'ticket_delete' => __('Delete', 'fablab-ticket' ),
      // Abbrechen
      'ticket_cancel' => __('Cancel', 'fablab-ticket' ),
      // Ticket bestätigen
      'confirm_ticket' => sprintf(__('Confirm the %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket ziehen
      'get_ticket' => sprintf(__('Get %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket wurde gelöscht!
      'ticket_deleted' => sprintf(__('%s has been deleted!', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket konnte nicht gelöscht werden!
      'ticket_ndeleted' => sprintf(__('%s could not be deleted!', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket für %s, erfolgreich erstellt!
      'ticket_created' => sprintf(__('%s for {0}, successfully created!', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket konnte nicht erstellt werden!
      'ticket_ncreated' => sprintf(__('Could not create %s!', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket für %s, erfolgreich geändert!
      'ticket_changed' => sprintf(__('%s for {0}, successfully changed!', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket konnte nicht geändert werden!
      'ticket_nchanged' => sprintf(__('%s could not be changed!', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
    );
  }

  function ticket_minhour_array() {
    return array(
      // %d Stunde
      'hour' => __('{0} Hour', 'fablab-ticket' ),
      // %d Stunden
      'hours' => __('{0} Hours', 'fablab-ticket' ),
      // %d Minute
      'minute' => __('{0} Minute', 'fablab-ticket' ),
      // %d Minuten
      'minutes' => __('{0} Minutes', 'fablab-ticket' ),
    );
  }

  function ticket_ng_minhour_array() {
    return array(
      // %d Stunde
      'hour' => __('{} Hour', 'fablab-ticket' ),
      // %d Stunden
      'hours' => __('{} Hours', 'fablab-ticket' ),
      // %d Minute
      'minute' => __('{} Minute', 'fablab-ticket' ),
      // %d Minuten
      'minutes' => __('{} Minutes', 'fablab-ticket' ),
    );
  }

  function tticket_translation_array() {
    return array(
      // Time-Ticket von: %s, beendet!
      'tticket_finished' => sprintf(__('%s from: {0}, finished!', 'fablab-ticket' ), __( 'Time-Ticket', 'fablab-ticket' )),
      // Time-Ticket konnte nicht gestoppt werden!
      'tticket_nstoped' => sprintf(__('%s could not be stopped!', 'fablab-ticket' ), __( 'Time-Ticket', 'fablab-ticket' )),
      // Time-Ticket von: %s, verlängert!
      'tticket_extended' => sprintf(__('%s from: {0}, extended!', 'fablab-ticket' ), __( 'Time-Ticket', 'fablab-ticket' )),
      // Time-Ticket konnte nicht verlängert werden, vielleicht ist die maximale Dauer überschritten!
      'tticket_nextended' => sprintf(__('%s could not be extended, perhaps the maximum duration is exceeded!', 'fablab-ticket' ), __( 'Time-Ticket', 'fablab-ticket' )),
    );
  }

  function iticket_translation_array() {
    return array(
      // Instruction-Ticket für %s, erfolgreich erstellt!
      'iticket_createt' => sprintf(__('%s for {0}, successfully created!', 'fablab-ticket' ), __( 'Instruction-Ticket', 'fablab-ticket' )),
      // Ticket konnte nicht erstellt werden!
      'iticket_ncreated' => sprintf(__('Could not create %s!', 'fablab-ticket' ), __( 'Instruction-Ticket', 'fablab-ticket' )),
      // Instruction-Ticket wurde gelöscht!
      'iticket_deleted' => sprintf(__('%s has been deleted!', 'fablab-ticket' ), __( 'Instruction-Ticket', 'fablab-ticket' )),
      // Ticket konnte nicht gelöscht werden!
      'iticket_ndeleted' => sprintf(__('%s could not be deleted!', 'fablab-ticket' ), __( 'Instruction-Ticket', 'fablab-ticket' )),
    );
  }

  function ticket_assign_translation_array() {
    return array(

      // für Gerät
      'for_device' => sprintf(__('for %s', 'fablab-ticket' ), __( 'Device', 'fablab-ticket' )),

      // Ticket beenden
      'finish_ticket' => sprintf(__( 'Finish %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket verlängern
      'continue_ticket' => sprintf(__( 'Continue %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket zuweisen
      'assign_ticket' => sprintf(__( 'Assign %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket planen
      'schedule_ticket' => sprintf(__( 'Schedule %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket Aktivieren
      'activate_ticket' => sprintf(__( 'Activate %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket Deaktivieren
      'deactivate_ticket' => sprintf(__( 'Deactivate %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket löschen
      'delete_ticket' => sprintf(__( 'Delete %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket bearbeiten
      'edit_ticket' => sprintf(__( 'Edit %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),
      // Ticket hinzufügen
      'add_ticket' => sprintf(__( 'Add %s', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )),

      // Bearbeiten
      'ticket_edit' => __( 'Edit', 'fablab-ticket' ),
      // Gerät
      'ticket_device' => __('Device', 'fablab-ticket' ),
      // Geräte
      'ticket_devices' => __('Devices', 'fablab-ticket' ),
      // Dauer
      'ticket_duration' => __('Duration', 'fablab-ticket' ),
      // Abbrechen
      'ticket_cancel' => __('Cancel', 'fablab-ticket' ),
    );
  }

?>