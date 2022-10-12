<section class="section-image-tabs section  section p-t-mobile-intro p-b-mobile-section p-t-desktop-section p-b-desktop-section">

  <div class="container">
    <div class="row justify-content-center">

      <div class="col-11 col-xl-12 col-xxl-10">

        <div class="row justify-content-center">


          <?php $count = 0;?>

          <?php

          // Check rows exists.
          if (have_rows('tabs')) :
          // Loop through rows.
          while (have_rows('tabs')) :
          the_row();?>

            <div class="col-3">

              <div id="tab-<?php echo $count;?>" class="tab text-dark">
                <div class="medium sans text-center padding-bottom-intro">
                  <h3 class="h4"><?php the_sub_field('title')?></h3>
                </div>

                  <div id="icon-<?php echo $count;?>" class="icon">

                  <?php
                  $image = get_sub_field('image');
                  if( !empty( $image ) ): ?>
                  <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                  <?php endif; ?>

                  </div>

                <div class="tab-hotspot"></div>

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

  <div class="p-t-mobile-intro p-t-desktop-intro">

    <div class="bg-colour-navy p-t-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

      <div class="container">

        <div class="row justify-content-center">

          <div class="col-11 col-xl-12 col-xxl-10">

            <div id="panel-holder" class="panel-holder">

            <div class="grid-wrapper">
              <?php $count = 0;?>



              <?php

              // Check rows exists.
              if (have_rows('tabs')) :
              // Loop through rows.
              while (have_rows('tabs')) :
              the_row();?>

              <div class="grid-inner">

                <div id="tab-panel-<?php echo $count;?>" class="tab-panel text-white">
                  <div class="inner medium">

                    <div class="row justify-content-center">

                      <div class="col-12">
                    <h3><?php the_sub_field('title')?></h3>

                    <?php the_sub_field('text')?>

                      </div>
                    </div>
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

        </div>

      </div>

    </div>

  </div>

</section>

