<section class="section section-map overflow-hidden text-center">



        <div id="map" class="contact-map">



        </div>



        <?php if( have_rows('map_info') ):?>

        <?php while ( have_rows('map_info') ) : the_row(); ?>

        <div class="map-info"
             data-zoom="<?php the_sub_field("zoom");?>"
             data-lat="<?php the_sub_field("lat");?>"
             data-lon="<?php the_sub_field("lon");?>"
             data-title="<?php the_sub_field("title");?>"
             data-description="<?php the_sub_field("description");?>"
             data-marker-w="<?php the_sub_field("marker_width");?>"
             data-marker-h="<?php the_sub_field("marker_height");?>"
             data-marker-x="<?php the_sub_field("marker_x_pos");?>"
             data-marker-y="<?php the_sub_field("marker_y_pos");?>"
             data-marker="<?php the_sub_field("marker");?>"
        ></div>

        <?php endwhile;
        endif;?>


</section>
