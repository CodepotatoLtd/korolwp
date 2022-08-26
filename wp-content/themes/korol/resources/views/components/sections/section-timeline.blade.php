<section class="section-timeline bg-colour-light text-dark medium">

  <div id="timeline-wrapper">
    <div id="container">

    <div class="title">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <?php the_sub_field('text');?>
            </div>
          </div>
        </div>

      </div>
      <div class="year"></div>
      <div class="year"></div>
      <div class="year"></div>

      <?php $yearCount = 0;?>

      <?php


      if (have_rows('entires')) :
          while (have_rows('entires')) :
              the_row(); ?>



      <div id="y<?php echo $yearCount;?>" class="year year-entry">

              <?php $date = get_sub_field('date');?>

        <div class="content">

          <span class="dot">
            <svg class="d1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" stroke-linecap="round" fill="#001F60" stroke="none" stroke-width="0"/>
            </svg>
            <svg class="d2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" vector-effect="non-scaling-stroke" stroke-linecap="round" fill="#EEEDEB" stroke="none" stroke-width="0"/>
            </svg>
          </span>

          <?php $rows = get_sub_field('corporate' ); ?>

          <?php if( $rows ) {
            $first_row = $rows[0];
            $second_row = $rows[0];

            if ($first_row['image'] && $second_row['image']){
              $class = "top";
            } else {
              $class = "middle";
            }

          } ?>

              <?php // Loop over sub repeater rows.
                if (have_rows('corporate')) : ?>
                  <div class="corporate">

                  <h3><?php echo $date;?></h3>

                    <?php $count = 1;?>
                    <div class="corporate-wrapper horizontal <?php echo $class;?>">
                      <?php   while (have_rows('corporate')) :
                      the_row();?>

                      <div class="corporate-inner c<?php echo $count;?>">

                        <?php
                        $image = get_sub_field('image');
                        if ($image) :
                        // Image variables.
                        $url = $image['url'];
                        $title = $image['title'];
                        $alt = $image['alt'];
                        $caption = $image['caption'];

                        // Thumbnail size attributes.
                        $size = 'timeline-image';
                        $thumb = $image['sizes'][ $size ];
                        $width = $image['sizes'][ $size . '-width' ];
                        $height = $image['sizes'][ $size . '-height' ];

                        // Begin caption wrap. ?>

                        <div class="image">
                          <img src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr($alt); ?>" />
                        </div>

                        <?php endif;?>

                        <?php the_sub_field('details');?>

                      </div>

                      <?php $count ++;?>
                      <?php endwhile; ?>

                    </div>
                  </div>
                <?php endif;?>

              <?php $rows = get_sub_field('project' ); ?>

          <?php if( $rows ) {
          $first_row = $rows[0];
          $second_row = $rows[0];

          if ($first_row['image'] && $second_row['image']){
            $class = "top";
          } else {
            $class = "middle";
          }

          } ?>

              <?php // Loop over sub repeater rows.
                if (have_rows('project')) : ?>
                <div class="project">

                  <h3><?php echo $date;?></h3>

                  <?php $count = 1;?>

                  <div class="project-wrapper horizontal <?php echo $class;?>">
                          <?php   while (have_rows('project')) :
                              the_row();?>

                      <div class="project-inner p<?php echo $count;?>">

                          <?php
                          $image = get_sub_field('image');
                          if ($image) :
                          // Image variables.
                              $url = $image['url'];
                              $title = $image['title'];
                              $alt = $image['alt'];
                              $caption = $image['caption'];

                          // Thumbnail size attributes.
                              $size = 'timeline-image';
                              $thumb = $image['sizes'][ $size ];
                              $width = $image['sizes'][ $size . '-width' ];
                              $height = $image['sizes'][ $size . '-height' ];

                          // Begin caption wrap. ?>

                              <div class="image">
                                  <img src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr($alt); ?>" />
                              </div>

                          <?php endif;?>

                            <?php the_sub_field('details');?>

                      </div>

                            <?php $count ++;?>
                      <?php endwhile; ?>

                  </div>

                </div>
                <?php endif;?>
            </div>


         <div class="hotspot"></div>
      </div>
    <?php $yearCount ++ ;?>

          <?php endwhile;
      endif;?>

      <!--<div class="end-spacer"></div>-->
      <div class="year"></div>
      <div class="year"></div>

    </div>

  </div>






</section>
