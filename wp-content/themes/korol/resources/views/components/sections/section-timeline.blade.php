<section class="section-timeline p-b-mobile-none p-b-desktop-none p-t-mobile-section p-t-desktop-section bg-colour-light">

  <div id="timeline-wrapper">
    <div id="container">
      <div class="start-spacer"></div>

      <?php


      if (have_rows('entires')) :
          while (have_rows('entires')) :
              the_row(); ?>

      <div class="year">

              <?php $date = get_sub_field('date');?>

        <div class="content">

          <span class="dot">
            <svg class="c1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" stroke-linecap="round" fill="#001F60" stroke="none" stroke-width="0"/>
            </svg>
            <svg class="c2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" vector-effect="non-scaling-stroke" stroke-linecap="round" fill="#EEEDEB" stroke="none" stroke-width="0"/>
            </svg>
          </span>
              <?php // Loop over sub repeater rows.
                if (have_rows('corporate')) : ?>
        <div class="corporate">

        <h3><?php echo $date;?></h3>
                    <?php  while (have_rows('corporate')) :
                        the_row();

            // Get sub value.
                    endwhile; ?>
        </div>
                <?php endif;?>

              <?php // Loop over sub repeater rows.
                if (have_rows('project')) : ?>
          <div class="project">
          <h3><?php echo $date;?></h3>
                    <?php   while (have_rows('project')) :
                        the_row();

            // Get sub value.
                    endwhile; ?>
          </div>
                <?php endif;?>
        </div>


         <div class="hotspot"></div>
      </div>
          <?php endwhile;
      endif;?>

      <div class="end-spacer"></div>


    </div>
  </div>




<!--<div class="container-fluid">

      <div class="row justify-content-center">

        <div class="col-xxl-12">

          <div class="intro p-l-mobile-element p-l-desktop-element text-dark medium">

            <?php the_sub_field('text')?>

          </div>

       </div>


        <div id="timeline-wrapper">

            <?php


            if (have_rows('entires')) :
                while (have_rows('entires')) :
                    the_row(); ?>

                      <div class="year">
                    <?php

                    // Get parent value.
                    echo get_sub_field('date');?>



                    <?php // Loop over sub repeater rows.
                    if (have_rows('child_repeater')) :
                        while (have_rows('child_repeater')) :
                            the_row();

                            // Get sub value.
                            $child_title = get_sub_field('child_title');
                        endwhile;
                    endif;?>
                      </div>
                <?php endwhile;
            endif;?>

        </div>-->

    </div>

  </div>

</section>
