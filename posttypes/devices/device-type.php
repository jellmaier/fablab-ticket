<?php

//namespace fablab_ticket;

include 'device-type-getter.php';
include 'device-type-rest.php';

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


?>