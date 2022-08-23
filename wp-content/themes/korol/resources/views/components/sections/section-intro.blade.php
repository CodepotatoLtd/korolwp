<section class="section-intro large text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

  <div class="container">

    <div class="row justify-content-center">

      <div class="col-2">

        <?php
        $image = get_sub_field('icon');
        if( $image ): ?>

        <div class="image" data-aos="fade-up"  data-aos-duration="750">

          <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />

        </div>



        <?php endif; ?>

      </div>

    </div>

      <div class="row justify-content-center">


      <div class="col-xxl-11" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="200">

          <?php echo get_sub_field('text')?>

      </div>

    </div>

  </div>

</section>
