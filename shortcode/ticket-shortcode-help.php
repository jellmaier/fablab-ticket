<?php

//namespace fablab_ticket;


//--------------------------------------------------------
// Display User Help
//--------------------------------------------------------

if (!class_exists('TicketShortcodeHelp'))
{
  class TicketShortcodeHelp
  {
    public function __construct()
    {
      $devices = get_online_devices();
      $user_id = get_current_user_id();
      $show = true;

      foreach ($devices as $device) {
        if(get_user_meta($user_id, $device['id'], true )) {
          $show = false;
        }
      }
      $captions = fablab_get_captions();
      $ticket_caption = $captions['ticket_caption'];
      $tickets_caption = $_captions['tickets_caption'];
      $device_caption = $captions['device_caption'];
      $devices_caption = $captions['devices_caption'];

      ?>
      <div class="help-container">

        <input type="submit" class="help-button" value="Erste Schritte" />

        <div class="help-box" <?= $show ? "" :  "hidden"; ?> >
          <div><p class="help-headder">1. <?= fablab_get_captions('instruction_caption') ?></p>
          <div class="help-content" hidden>
          <p><?= $devices_caption ?> für die du noch nicht eingeschult wurdest, werden grau angezeigt.</p>
          <ol>
            <li>Stelle eine <?= fablab_get_captions('instruction_request_caption') ?> für dein gewünschtes <?= $device_caption ?></li>
            <li>Komm zu einer <?= fablab_get_captions('instruction_caption') ?></li>
          </ol>
          </div></div>
          <div><p class="help-headder">2. Zugang zu einem <?= $device_caption ?></p>
          <div class="help-content" hidden>
          <p>Für dich verfügbare <?= $devices_caption ?> werden farbig angezeigt.</p>
          <ol>
            <li>Gewünschtes <?= $device_caption ?> auswählen</li>
            <li>Benutzungsdauer auswählen</li>
            <li><?= $ticket_caption ?> ziehen</li>
          </ol>
          </div></div>
          <div><p class="help-headder">3. <?= $ticket_caption ?> ändern</p>
          <div class="help-content" hidden>
          <p>Gezogene <?= $tickets_caption ?> werden unter <?php $tickets_caption ?> angezeigt.</p>
          <ol>
            <li><?= $ticket_caption ?> bearbeiten klicken</li>
            <li><?= $device_caption ?> oder Dauer ändern</li>
            <li><?= $ticket_caption ?> speichern</li>
          </ol>
          </div></div>
          <div><p class="help-headder">4. Du bist an der Reihe</p>
          <div class="help-content" hidden>
          <p>Wenn dein gewünschtes <?= $device_caption ?> verfügbar ist (<?= $ticket_caption ?> blinkt), 
            melde dich bei dem Manager, er wird dir dein <?= $device_caption ?> zuweisen.</p>
          </div></div>
          <div><p class="help-headder">5. <?= $device_caption ?> benutzen</p>
          <div class="help-content" hidden>
          <p>Wenn dir ein <?= $device_caption ?> zugewiesen wurde, wird dir ein <?= fablab_get_captions('time_ticket_caption') ?> angezeigt.</p>
          <ul>
            <li>Du bist früher fertig: <b>"Jetzt Beenden"</b> klicken.</li>
            <li>Du brauchst länger: <b>"+30 Minuten"</b> klicken. (Maximale Benutzungsdauer: 2h)</li>
          </ul>
          </div></div>
        </div>
      </div>
      <?php
    }

  }
}

?>