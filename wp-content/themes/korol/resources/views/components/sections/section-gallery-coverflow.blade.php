<section class="section section-gallery-coverflow text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">
  <div class="container-fluid">
    <div class="row align-items-center justify-content-center">
      <div class="col-12" data-aos="fade-up"  data-aos-duration="750">
        <?php $count = count(get_sub_field('gallery')); ?>
        <?php
        $images = get_sub_field('gallery');
        if ($images) : ?>

          <div class="swiper-container gallery-coverflow-swiper">
            <div class="swiper-wrapper">
                <?php foreach ($images as $image) : ?>
                  <div class="swiper-slide">
                    <div class="image-wrapper">
                    <img src="<?php echo esc_url($image['url']); ?>"
                         alt="<?php echo esc_attr($image['alt']); ?>" />
                    </div>
                  </div>
                <?php endforeach; ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>

