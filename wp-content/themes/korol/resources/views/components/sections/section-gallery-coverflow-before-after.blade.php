<section
    class="section section-gallery-before-after-coverflow text-dark p-t-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
            <div class="col-12" data-aos="fade-up" data-aos-duration="750">
                <?php $count = count(get_sub_field('slides')); ?>


                <div class="swiper-container gallery-before-after-coverflow-swiper">
                    <div class="swiper-wrapper">
                        <?php  if (have_rows('slides')):
  while (have_rows('slides')):
    the_row(); ?>
                        <div class="swiper-slide">
                            <div class="before-after-image-wrapper">
                                <?php    $before = get_sub_field('before');?>
                                <?php    $after = get_sub_field('after');?>

                                <?php    if ($before) {?>
                                <div class="before">

                                    <?php      $size = 'carousel-image';
      $crop = $before['sizes'][$size]; ?>

                                    <img src="<?php      echo esc_url($crop); ?>"
                                        alt="<?php      echo esc_attr($before['alt']); ?>" />
                                </div>
                                <?php    } ?>


                                <div class="after active">

                                    <?php    $size = 'carousel-image';
    $crop = $after['sizes'][$size]; ?>

                                    <img src="<?php    echo esc_url($crop); ?>"
                                        alt="<?php    echo esc_attr($after['alt']); ?>" />
                                </div>

                                <?php    if ($before) {?>

                                <div class="img-switcher">
                                    <div class="label">BEFORE</div>
                                    <div class="switcher-btn active">
                                        <div class="ball"></div>
                                    </div>
                                    <div class="label">AFTER</div>
                                </div>

                                <?php    } ?>
                            </div>
                        </div>
                        <?php  endwhile;
endif; ?>

                    </div>

                </div>
            </div>
        </div>
</section>