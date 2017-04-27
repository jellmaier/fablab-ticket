<?php



//namespace fablab_ticket;

/**
 * Register a device taxonomy.
 *
 * @link https://codex.wordpress.org/Function_Reference/register_taxonomy
 */

// create two taxonomies, genres and writers for the post type "book"
function create_device_type_tax() {
  $caption_singular_name = fablab_get_captions('device_caption') . ' ' . __( 'type', 'fablab-ticket' );
  $caption_name = fablab_get_captions('devices_caption') . ' ' . __( 'type', 'fablab-ticket' );

  // Add new taxonomy, NOT hierarchical (like tags)
  $labels = array(
    'name'                       => $caption_name,
    'singular_name'              => $caption_singular_name,
    'search_items'               => sprintf(__( 'Search %s', 'fablab-ticket' ), $caption_name),
    'popular_items'              => sprintf(__( 'Popular %s', 'fablab-ticket' ), $caption_name),
    'all_items'                  => sprintf(__( 'All %s', 'fablab-ticket' ), $caption_name),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => sprintf(__( 'Edit %s', 'fablab-ticket' ), $caption_singular_name),
    'update_item'                => sprintf(__( 'Update %s', 'fablab-ticket' ), $caption_singular_name),
    'add_new_item'               => sprintf(__( 'Add New %s', 'fablab-ticket' ), $caption_singular_name),
    'new_item_name'              => sprintf(__( 'New %s Name', 'fablab-ticket' ), $caption_singular_name),
    'separate_items_with_commas' => sprintf(__( 'Separate %s with commas', 'fablab-ticket' ), $caption_name),
    'add_or_remove_items'        => sprintf(__( 'Add or remove %s', 'fablab-ticket' ), $caption_name),
    'choose_from_most_used'      => sprintf(__( 'Choose from the most used %s', 'fablab-ticket' ), $caption_name),
    'not_found'                  => sprintf(__( 'No %s found.', 'fablab-ticket' ), $caption_name),
    'menu_name'                  => $caption_name
  );

  $args = array(
    'hierarchical'          => false,
    'labels'                => $labels,
    'show_ui'               => true,
    'meta_box_cb'           => false,
    'show_in_quick_edit'    => false,
    'show_in_nav_menus'     => false,
    'show_admin_column'     => true,
    'update_count_callback' => '_update_post_term_count',
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'device_type' ),
  );

  register_taxonomy( 'device_type', 'device', $args );

  // meta field hooks
  add_action('device_type_add_form_fields', 'tax_metabox_add', 10, 1);
  add_action('device_type_edit_form_fields', 'tax_metabox_edit', 10, 1);
  add_action("device_type_edit_form_fields", 'add_form_fields_description', 10, 2);
  add_action('create_device_type', 'save_device_type_field', 10, 1);  
  add_action('edited_device_type', 'save_device_type_field', 10, 1);
  // Table hooks
  add_filter("manage_edit-device_type_columns", 'device_type_edit_columns'); 
  add_filter("manage_device_type_custom_column", 'manage_device_type_columns', 10, 3);
}



// from http://wordpress.stackexchange.com/questions/190510/replace-taxomony-description-field-with-visual-wysiwyg-editor

function add_form_fields_description($term, $taxonomy){
    ?>
    <tr valign="top">
        <th scope="row">Description</th>
        <td>
            <?php wp_editor(html_entity_decode($term->description), 'description', array('media_buttons' => false)); ?>
            <script>
                jQuery(window).ready(function(){
                    jQuery('label[for=description]').parent().parent().remove();
                });
            </script>
        </td>
    </tr>
    <?php
} 

function get_usage_types() {
  $usage_types = array();
  $usage_types['ticket_schedule'] = sprintf(__('Schedule %s', 'fablab-ticket' ), __( 'Tickets', 'fablab-ticket' ));
  $usage_types['ticket_direct_use'] = __('Direct use', 'fablab-ticket');
  return $usage_types;

}

 
function tax_metabox_add($tag) { 

  ?>
  <div class="form-field">  
    <table>
     <tr>
      <th>
        <label for="tag_color"><?= sprintf(__('%s Color', 'fablab-ticket' ), __( 'Devices', 'fablab-ticket' )) ?>:</label>
      </th>
      <th> 
        <div id="colorPicker">
          <a class="color"><div class="colorInner" style="background-color:#0f0;"></div></a>
          <div class="track"></div>
          <ul class="dropdown"><li></li></ul>
          <input type="hidden" name="tag_color" class="colorInput" value="#0f0"/>
        </div>
      </th>
    </tr>
  </table> 
  <p class="description"><?php _e('The color will be shown as device and devicetype color.'); ?></p>
  </div>

  <div class="form-field">  
    <table>
    <tr>
      <th>
        <label for="usage_type"><?= __('Usage Type', 'fablab-ticket') ?>:</label>
      </th>
      <th> 
        <select name="usage_type">
        <?php
        foreach(get_usage_types() as $slug => $name)
          echo '<option value="' . $slug . '">' . $name . '</option>';
        ?>
        </select>
      </th>
    </tr>
  </table> 
  <p class="description"><?php _e('Description missing.'); ?></p>
  </div>
<?php 
}   
 
function tax_metabox_edit($tag) { ?>
   <tr class="form-field">
    <th scope="row" valign="top">
      <label for="device_type"><?= sprintf(__('%s Color', 'fablab-ticket' ), __( 'Devices', 'fablab-ticket' )) ?>:</label>
    </th>
    <td> 
      <div id="colorPicker">
        <a class="color"><div class="colorInner" style="background-color: <?= get_term_meta($tag->term_id, 'tag_color', true); ?>;"></div></a>
        <div class="track"></div>
        <ul class="dropdown"><li></li></ul>
        <input type="hidden" name="tag_color" class="colorInput" value="<?= get_term_meta($tag->term_id, 'tag_color', true); ?>"/>
      </div>
      <p class="description"><?php _e('The color will be shown as device and devicetype color.'); ?></p>
    </td>
  </tr>
  <?=

  $usage_type_selected = get_term_meta($tag->term_id, 'usage_type', true); 

  ?>
  <tr class="form-field">
    <th scope="row" valign="top">
      <label for="device_type"><?= __('Usage Type', 'fablab-ticket') ?>:</label>
    </th>
    <td> 
      <select name="usage_type">
        <?php
        foreach(get_usage_types() as $slug => $name)
          echo '<option '. selected($slug, $usage_type_selected, false) .' value="' . $slug . '">' . $name . '</option>';
        ?>
        </select>
      <p class="description"><?php _e('Description missing.'); ?></p>
    </td>
  </tr>
<?php 
} 


// Displaying Device Lists

 
function device_type_edit_columns($columns) {
  $new_columns = array(
      'cb' => '<input type="checkbox" />',
      'name' => __('Name'),
      'device_type_color' => __('Color', 'fablab-ticket'),
      'device_usage_type' => __('Usage Type', 'fablab-ticket'),
      'posts' => __('Posts')
      );
  return $new_columns;
}  
 
function manage_device_type_columns($out, $column_name, $term_id) {
  switch ($column_name) {
      case 'device_type_color' :
          echo '<div style="background-color: ' . get_term_meta($term_id, 'tag_color', true) 
          . '; width: 30px; height: 30px; border-radius: 15px;"><div>';
          break;

      case 'device_usage_type' :
          $usage_type = get_usage_types();
          echo '<p>' . $usage_type[get_term_meta($term_id, 'usage_type', true)]
          . '</p>';
          break;

      default:
          break;
  }
  return $out;    
}


// Saving Tag Details

function save_device_type_field($term_id)
{
  if (isset($_POST['tag_color'])) 
    update_term_meta( $term_id, 'tag_color', $_POST['tag_color']);
  
  // if (isset($_POST['location'])) 
    // update_term_meta( $term_id, 'tag_color', $_POST['tag_color']);
  
  if (isset($_POST['usage_type'])) 
    update_term_meta( $term_id, 'usage_type', $_POST['usage_type']);              
}


//--------------------------
// getter functions

function get_devicees_of_device_type($term_id) {
  return get_devices_of_device_type($term_id, $free=false, $beginner=false, $beginner_first=false, $user=0);
}

function get_free_beginner_device_of_device_type($term_id) {
  return get_devices_of_device_type($term_id, $free=true, $beginner=true, $beginner_first=false, $user=0);
}

function get_beginner_device_of_device_type($term_id) {
  return get_devices_of_device_type($term_id, $free=false, $beginner=true, $beginner_first=false, $user=0);
}

function get_free_device_of_device_type($term_id, $user_id = 0) {
  return get_devices_of_device_type($term_id, $free=true, $beginner=false, $beginner_first=true, $id_and_name=true, $user=$user_id);
}


function get_devices_of_device_type($term_id, $free=false, $beginner=false, $beginner_first=false, $id_and_name = false, $user=0)
{
  //permission handling missing
  global $post;
  $temp_post = $post;

  // create tax query

  $tax_query = array(
      array(
          'taxonomy' => 'device_type',
          'field' => 'term_id',
          'terms' => $term_id,
      )
  );

  // create meta query

  if($beginner) {
    $meta_query = array(   
        'relation'=> 'AND',               
          array(
            'key' => 'device_status',                  
            'value' => 'online',               
            'compare' => '='                 
          ),
          array(
            'key' => 'device_qualification',                  
            'value' => 'beginner',               
            'compare' => '='                 
          )
      ); 
  } else {
    $meta_query = array(               
        array(
          'key' => 'device_status',                  
          'value' => 'online',               
          'compare' => '='                 
        )
      );   
  }

  // create query

  if($beginner_first) {
    $query_arg = array(
      'post_type' => 'device',
      'orderby' => 'meta_value',
      'meta_key' => 'device_qualification',
      'order' => 'ASC',
      'tax_query' => $tax_query,
      'meta_query' => $meta_query
    );
  } else {
      $query_arg = array(
        'post_type' => 'device',
        'tax_query' => $tax_query,
        'meta_query' => $meta_query
     );
  }
   
  // query handling

  $device_query = new WP_Query($query_arg);
  $user_id = get_current_user_id();
  
  $device_list = array();

  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      //if ((get_user_meta($user_id, $post->ID, true ) || !$permission_needed) {
    // device_available($device_id, $device_type = 'device', $ticket = 0, $include_waiting = true)
      if(!$free || ($free && is_device_availabel($post->ID))) { // debricated check 
        //if(!$free || ($free && device_available($post->ID, $device_type = 'device', $ticket = 0, $include_waiting = false))) {
          if($id_and_name) {
            $device = array();
            $device['id'] = $post->ID;
            $device['name'] = $post->post_title;
            array_push($device_list, $device);
          } else 
          array_push($device_list, $post->ID);
       }
    endwhile;
  }

  wp_reset_query();
  $post = $temp_post;

  return $device_list;
}


function get_device_type_title_by_id($device_type_id) {
  $device_type = get_term($device_type_id, 'device_type');
  return $device_type->name;
}

function get_device_types($user_id = 0) {
  //permission handling missing
  global $post;

  $device_type_list = get_terms('device_type', array(
    'orderby'    => 'name',
    'hide_empty' => '1'
  ));

  $available_devicees = array();
  foreach($device_type_list as $device_type) {
    $number_devices = count(get_beginner_device_of_device_type($device_type->term_id));
    if($number_devices > 0) {
      $device = array();
      $device['id'] = $device_type->term_id;
      $device['name'] = $device_type->name;
      array_push($available_devicees, $device);
    }
  }
  return $available_devicees;
}

function get_device_types_ajax() {
  $user_id = sanitize_text_field($_POST['user_id']);
  echo json_encode(get_device_types($user_id));
  die();
}
add_action( 'wp_ajax_get_device_types', 'get_device_types_ajax' );


function get_devices_of_device_types_ajax() {
  $user_id = sanitize_text_field($_POST['user_id']);
  $ticket_type = sanitize_text_field($_POST['ticket_type']);
  $device_id = sanitize_text_field($_POST['device_id']);

  if($ticket_type == 'device'){
    $device_type_id_array = wp_get_post_terms($device_id, 'device_type', array("fields" => "ids"));
    $device_type_id = $device_type_id_array[0];
  }
  else if ($ticket_type == 'device_type')
    $device_type_id = $device_id;
  else
    die();

  echo json_encode(get_free_device_of_device_type($device_type_id, $user_id));
  die();
}
add_action( 'wp_ajax_get_devices_of_device_types', 'get_devices_of_device_types_ajax' );

function get_device_type_description() {
  $device_type_id = sanitize_text_field($_POST['device_type_id']);
  die(term_description($device_type_id, 'device_type'));
}
add_action( 'wp_ajax_get_device_type_description', 'get_device_type_description' );


// ----------------------------------
// Rest API Methods
// ----------------------------------

function rest_user_device_types($data) {
  // user_id has no effect
  if(isset($data['id']))
    $user_id = $data['id'];
  else
    $user_id = 0;

  if (fablab_get_option('ticket_online') != 1)
    return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

  return get_device_types($user_id);
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/user_device_types', array(
    'methods' => 'GET',
    'callback' => 'rest_user_device_types',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_device_type_content($data) {
  $device_type_id = $data['id'];
  return term_description($device_type_id, 'device_type');
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/device_type_content/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_device_type_content',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

//--------------------------------------------------------
// get Device-Type values
//--------------------------------------------------------
function rest_device_type_values($data) {
  $device_type_id = $data['id'];

  //is_ticket_entry($ticket_id);

  $device_type = array();
  $device_type['color'] = get_term_meta($device_type_id, 'tag_color', true);
  $device_type['usage_type'] = get_term_meta($device_type_id, 'usage_type', true);

  // check total user ticket count
  $query_arg = array( 'post_type' => 'ticket', 'author' => get_current_user_id(), 'post_status' => 'publish');
  $user_ticket_count =  count(get_posts($query_arg));
  $tickets_per_user = fablab_get_option('tickets_per_user');
  $device_type['max_available'] = ($user_ticket_count < $tickets_per_user);


  // check user device ticket count
  $device_ticket_count = get_number_of_tickets_by_device_type_and_user($device_type_id, get_current_user_id());
  $tickets_per_device = fablab_get_option('tickets_per_device');
  $ticket_device_available = ($device_ticket_count < $tickets_per_device);
  $device_type['available'] = ($ticket_user_available || $ticket_device_available );

  // count online Devices
  $device_type['online'] = (count(get_devicees_of_device_type($device_type_id)) > 0);
  
  if ( empty( $device_type ) ) {
    return null;
  }
 
  return $device_type; 
}


function get_number_of_tickets_by_device_type_and_user($device_id, $user_id) {

  $device_list = get_devicees_of_device_type($device_id);
  $meta_array = array(
    'relation'=>'OR',
      array(
      'relation'=>'AND',
      array(
          'key'=>'ticket_type',
          'value'=> 'device_type',
      ),
      array(
        'key'=>'device_id',
        'value'=> $device_id,
      )
    ),
    array(
      'relation'=>'AND',
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      ),
      array(
        'key'=>'device_id',
        'value'=> $device_list,
      )
    )
  );
  
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => 'publish',
    'meta_query' => $meta_array
  );

  $posts = get_posts( $query_arg);
  return count( $posts ) ;

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/device_type_values/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_device_type_values',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


function rest_devices_for_ticket($data) {
  $user_id = sanitize_text_field($data['user_id']);
  $ticket_id = sanitize_text_field($data['ticket_id']);
  //$device_id = sanitize_text_field($data['device_id']);

  $ticket_type = get_post_meta($ticket_id, 'ticket_type', true );
  $device_id = get_post_meta($ticket_id, 'device_id', true );

  if($ticket_type == 'device'){
    $device_type_id_array = wp_get_post_terms($device_id, 'device_type', array("fields" => "ids"));
    $device_type_id = $device_type_id_array[0];
  }
  else if ($ticket_type == 'device_type')
    $device_type_id = $device_id;
  else
    return null;

  return get_free_device_of_device_type($device_type_id, $user_id);

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/devices_for_ticket', array(
    'methods' => 'GET',
    'callback' => 'rest_devices_for_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

/*
function rest_device_type_description() {
  $device_type_id = sanitize_text_field($_POST['device_type_id']);
  die(term_description($device_type_id, 'device_type'));
}
add_action( 'wp_ajax_get_device_type_description', 'get_device_type_description' );
*/


?>