<?php

//namespace fablab_ticket;


if (!class_exists('UserList'))
{
  class UserList
  {
    public function __construct()
    {

      function fl_user_page() {
        $parent_slug = 'edit.php?post_type=device';
        $page_title = __('User List', 'fl');
        $menu_title = __('User List', 'fl');
        $capability = 'delete_others_posts';
        $menu_slug = 'fablab_user_list';
        $function = 'fablab_user_list';

        add_submenu_page( $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function);
      
      }
      add_action('admin_menu', 'fl_user_page');
    }
  }
}

// ------------------------------------------------------------------
// Callback functions
// ------------------------------------------------------------------

function fablab_user_list() {
  ?>
  <h2>User Liste</h2>
  <div id="error-message-box"></div>
  <h3 style="font-size: 2.3em;">User Berechtigungen</h3>
  <p>Änderungen werden automatisch gespeichert!</p>
  <?php
  $user_query = new WP_User_Query(array( 'orderby' => 'name', 'order' => 'ASC' ));
  $device_list = get_online_devices();

  // User Loop
  if ( ! empty( $user_query->results ) ) {
    ?>
    <table class="wp-list-table widefat striped users">
    <thead>
      <tr>
        <th>Benutzername</th>
        <th>Berechtigungen</th>
      </tr>
    </thead>

    <tbody id="the-list" data-wp-lists="list:user">
    <?php
    foreach ( $user_query->results as $user ) {
      ?> 
      <tr id='<?= $user->ID ?>'>
        <td><?= $user->display_name ?></td>
        <td> <?= get_user_permission_checkboxes($user->ID, $device_list) ?></td>
      </tr>
      <?php
    }
    echo '</table></tbody>';
  } else {
    echo 'No users found.';
  }

}


function get_user_permission_checkboxes($user_id, $device_list) {
  $device_array = array();
  
  foreach ( $device_list as $device ) {
    $checked = (get_user_meta($user_id, $device['id'], true ))? 'checked' : '';
    echo '<input type="checkbox" class="user-permission-chekbox" style="margin-left: 8px;" id="' 
    . $device['id'] . '"' . $checked . '>' . $device['device'] . '   </input>';
  } 
}


// ------------------------------------------------------------------
// AJAX getter/setter functions
// ------------------------------------------------------------------

function get_user_device_permission() {
  $user_id = sanitize_text_field($_POST['user_id']);
  global $post;
  $query_arg = array(
    'post_type' => 'device',
    'meta_query' => array(   
      'relation'=> 'AND',               
      array(
        'key' => 'device_status',                  
        'value' => 'online',               
        'compare' => '='                 
      ),
      array(
        'key' => 'device_qualification',                  
        'value' => 'pro',               
        'compare' => '='                 
      )
    ) 
  );
  $device_query = new WP_Query($query_arg);
  $device_list = array();
  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $device = array();
      $device['id'] = $post->ID;
      $device['device'] = $post->post_title;
      $device['permission'] =  (get_user_meta($user_id, $device['id'], true ) == true);
      array_push($device_list, $device);
    endwhile;
  } 
  wp_reset_query();

  echo json_encode($device_list);
  die();
}
add_action( 'wp_ajax_get_user_device_permission', 'get_user_device_permission' );


function set_user_device_permission() {
  $user_id = sanitize_text_field($_POST['user_id']);
  $device_id = sanitize_text_field($_POST['device_id']);
  $set_permission = sanitize_text_field($_POST['set_permission']);

  if(is_no_device_entry($device_id)){
    die(false);
  }

  update_user_meta( $user_id, $device_id, ($set_permission == 'true') );

  die(true);
}
add_action( 'wp_ajax_set_user_device_permission', 'set_user_device_permission' );


?>