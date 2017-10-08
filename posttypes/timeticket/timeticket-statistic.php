<?php

//namespace fablab_ticket;


// -----------------------------
// get statistic

function rest_statistic_devicetypes($data) {
  $start_date = strtotime(sanitize_text_field($data['start_date']));
  $end_date = strtotime(sanitize_text_field($data['end_date']));

  //29-7-17 =>          1878940800
  //1-8-17 =>            998006400
  //current(30.7.17) => 1501455035

  $device_types = get_device_types();

  $ret_device_types = array();

  global $post;

  foreach($device_types as $device_type) {
    $device_list = get_devicees_of_device_type($device_type['id']);

    $query_arg = array(
    'post_type' => 'timeticket',
    'posts_per_page' => -1,
    'meta_query' => array(  
        'relation'=> 'AND',               
        array(
          'key' => 'timeticket_device',                  
          'value' => $device_list,               
          'compare' => 'IN'                 
        ),
        array(
            'key'=>'timeticket_start_time',
            'value'=> $start_date,
            'compare' => '>'   
        ),
        array(
            'key'=>'timeticket_end_time',
            'value'=> $end_date,
            'compare' => '<'   
        )
      )
    );

    $device_type_query = new WP_Query($query_arg);

    $ret_device_type = array();
    $number_tickets = 0;
    $tickets_duration = 0;
    if ( $device_type_query->have_posts() ) {
      while ( $device_type_query->have_posts() ) : $device_type_query->the_post() ;
        $number_tickets++;
        $tickets_duration += (get_post_meta( $post->ID, 'timeticket_end_time', true ) - get_post_meta( $post->ID, 'timeticket_start_time', true ));
      endwhile;
    }
    wp_reset_query();

    $ret_device_type['id'] = $device_type['id'];
    $ret_device_type['name'] = $device_type['name'];
    $ret_device_type['color'] = get_term_meta($device_type['id'], 'tag_color', true);
    $ret_device_type['number'] = $number_tickets;
    $ret_device_type['duration'] = floor($tickets_duration/60);

    array_push($ret_device_types, $ret_device_type);


  }

  return $ret_device_types;
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/statistic', array(
    'methods' => 'GET',
    'callback' => 'rest_statistic_devicetypes'
  ) );
});
?>