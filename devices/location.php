<?php



//namespace fablab_ticket;

/**
 * Register a device taxonomy.
 *
 * @link https://codex.wordpress.org/Function_Reference/register_taxonomy
 */

// create two taxonomies, genres and writers for the post type "book"
function create_location_tax() {
  $caption_singular_name = __( 'Locations', 'fablab-ticket' );
  $caption_name = __( 'Locations', 'fablab-ticket' );

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
    'rewrite'               => array( 'slug' => 'location' ),
  );

  register_taxonomy( 'location', 'device', $args );

  // meta field hooks
  add_action('location_add_form_fields', 'tax_metabox_add_location', 10, 1);
  add_action('location_edit_form_fields', 'tax_metabox_edit_location', 10, 1);
  add_action('create_location', 'save_location_field', 10, 1);  
  add_action('edited_location', 'save_location_field', 10, 1);
  // Table hooks
  add_filter("manage_edit-location_columns", 'location_edit_columns'); 
  add_filter("manage_location_custom_column", 'manage_location_columns', 10, 3);
}



 
function tax_metabox_add_location($tag) { 
$html = '<div class="form-field" id="mapid" style="height: 400px; width: 95%;" data-position-lat="47.075" data-position-long="15.44" data-level="6"></div>';
$html.= '<input type="hidden" id="map-longlat" name="latlng" value="47.5, 14.4">';
echo $html;
}   
 
function tax_metabox_edit_location($tag) { 
$latlng = explode(", ", get_term_meta($tag->term_id, 'latlng', true));
echo '<tr class="form-field">';
echo '<th scope="row" valign="top">';
echo '<label for="device_type">' . __('Location:', 'fablab-ticket') . '</label>';
echo '</th>';
echo '<td> ';
echo '<div id="mapid" style="height: 400px; width: 95%;" data-position-lat="' . $latlng[0] . '" data-position-long="' . $latlng[1] . '" data-level="13"></div>';
echo '<input type="hidden" id="map-longlat" name="latlng" value="' . get_term_meta($tag->term_id, 'latlng', true) . '">';
echo '</td>';
echo '</tr>';
} 


// Saving Tag Details

function save_location_field($term_id)
{
    if (isset($_POST['latlng'])) 
      update_term_meta( $term_id, 'latlng', $_POST['latlng']);              
}

 
function location_edit_columns($columns) {
    $new_columns = array(
        'cb' => '<input type="checkbox" />',
        'name' => __('Name'),
        'location' => __('Location:', 'fablab-ticket'),
        'slug' => __('Slug'),
        'posts' => __('Posts')
        );
    return $new_columns;
}  
 
function manage_location_columns($out, $column_name, $term_id) {
    switch ($column_name) {
        case 'location' :
            $latlng = explode(", ", get_term_meta($term_id, 'latlng', true));
            echo '<div id="mapid" style="height: 20px; width: 100px;" data-position-lat="' . $latlng[0] . '" data-position-long="' . $latlng[1] . '" data-level="15"></div>';
            break;
 
        default:
            break;
    }
    return $out;    
}

?>