<section class="section-casestudy-specification text-dark p-b-mobile-element p-b-desktop-element">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-xxl-11">

        <div class="row justify-content-center">

        <?php

         $count = 0;

        // Check rows exists.
        if( have_rows('stats') ):

            // Loop through rows.
            while( have_rows('stats') ) : the_row(); ?>

          <?php $delay = ($count * 150 ) ;?>

          <div class="col-6 col-lg-3">
            <div id="s<?php echo $count;?>" class="spec-wrapper p-t-mobile-intro p-b-mobile-intro p-t-desktop-intro p-b-desktop-intro" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="<?php echo $delay;?>">
              <div class="medium sans">
                <h3><?php echo get_sub_field('label');?></h3>
                <p><?php  the_sub_field('info');?></p>
              </div>
            </div>
          </div>

          <?php  $count ++;?>

            <?php // End loop.
            endwhile;

        // No value.
        else :
            // Do something...
        endif; ?>

        </div>

        </div>

    </div>

  </div>

</section>
