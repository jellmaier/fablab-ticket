<?php
    $args = array('post_type' => 'device');
    $query = new WP_Query($args);
    while($query -> have_posts()) : $query -> the_post();
?>
    <div class="device">
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    </div>
<?php endwhile; ?>