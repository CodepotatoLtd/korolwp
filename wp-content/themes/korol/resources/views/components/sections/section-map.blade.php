<section class="section section-map overflow-hidden text-center">



    <div id="map" class="contact-map">



    </div>



    <?php if (have_rows('map_info')):?>

    <?php        while (have_rows('map_info')):
                the_row(); ?>

    <div class="map-info" data-zoom="<?php                echo get_sub_field("zoom");?>"
        data-lat="<?php                echo get_sub_field("lat");?>"
        data-lon="<?php                echo get_sub_field("lon");?>"
        data-title="<?php                echo get_sub_field("title");?>"
        data-description="<?php                echo get_sub_field("description");?>"
        data-marker-w="<?php                echo get_sub_field("marker_width");?>"
        data-marker-h="<?php                echo get_sub_field("marker_height");?>"
        data-marker-x="<?php                echo get_sub_field("marker_x_pos");?>"
        data-marker-y="<?php                echo get_sub_field("marker_y_pos");?>"
        data-marker="<?php                echo get_sub_field("marker");?>"></div>

    <?php        endwhile;
endif;?>


</section>