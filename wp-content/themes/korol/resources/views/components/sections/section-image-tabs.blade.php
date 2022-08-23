<section class="section-image-tabs  section text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

  <div class="container">
    <div class="row justify-content-center">

      <div class="col-xxl-11">
        <div class="tabs-image padding-bottom-section" data-aos="fade-up"  data-aos-duration="750">
        <?php the_sub_field('image')?>
        </div>
      </div>


    </div>

    <div class="row justify-content-center">

      <div class="col-xxl-11">

        <?php $count = 0;?>

          <div class="panel-holder" data-aos="fade-up"  data-aos-duration="750">

        <?php

        // Check rows exists.
        if (have_rows('tabs')) :
            // Loop through rows.
            while (have_rows('tabs')) :
                the_row();?>

              <div id="tab-panel-<?php echo $count;?>" class="tab-panel">
                <div class="medium">
                <h3><?php the_sub_field('title')?></h3>
                <?php the_sub_field('text')?>
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
