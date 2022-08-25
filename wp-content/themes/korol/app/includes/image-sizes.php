<?php

add_action('after_setup_theme', function () {

    add_image_size('acf-large-hero', 1920, 1080, true);

    add_image_size('acf-small-hero', 1920, 850, true);

    add_image_size('acf-large-image', 1080, 1080, true);

    add_image_size('landscape-image', 758, 472, true);

    add_image_size('carousel-image', 1120, 750, true);

    add_image_size('featured-image', 1120, 700, true);

    add_image_size('timeline-image', 600, 600, true);

    add_image_size('team-image', 500, 670, true);


}, 20);
