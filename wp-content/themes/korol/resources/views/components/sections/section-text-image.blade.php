<section class="section-text-image section text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

  <div class="container">
    <div class="row align-items-center">

      <?php $image_position = get_sub_field('image_position');?>

      <?php $text_class = ''; ?>
      <?php $image_class = '';?>

      <?php if ($image_position === "right") {

          $text_class = "order-2 order-lg-1 col-lg-6";
          $image_class = "order-1 order-lg-2 col-lg-6";
          $image_row = " justify-content-center justify-content-lg-end";
          $textAnimation = 'data-aos="fade-right"  data-aos-duration="750" data-aos-delay="200"';
          $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
        } else {

          $text_class = "order-2 order-lg-2 col-lg-6";
          $image_class = "order-1 order-lg-1 col-lg-6";
          $image_row = " justify-content-center justify-content-lg-start";
          $textAnimation = 'data-aos="fade-left"  data-aos-duration="750" data-aos-delay="200"';
          $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
       }?>

      <div class="<?php echo $text_class;?>">

        <div class="text-wrapper medium">

          <div class="row justify-content-center">

            <div class="col-11 col-lg-10">

              <div class="text-wrapper" <?php echo $textAnimation;?>>

          <?php $use_icon = get_sub_field('use_icon');?>

          <?php if (have_rows('text')) :
                while (have_rows('text')) :
                    the_row();?>

                    <?php if ($use_icon === "yes") {?>
                        <?php $icon = get_sub_field('icon');?>

                        <?php if ($icon) {?>
                          <img class="icon" src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo $icon['alt']; ?>" />
                        <?php  }?>

                    <?php  }?>

                    <?php $text = get_sub_field('text');?>

                    <?php echo $text;?>

                <?php endwhile; ?>
          <?php endif; ?>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="<?php echo $image_class;?>">

        <div class="row <?php echo $image_row;?>">

          <div class="col-11">

        <div class="image-wrapper p-b-mobile-element" <?php echo $imageAnimation;?> >

          <?php
            $image = get_sub_field('image');

               if ($image) {?>
            <div class="image">

                <img src="<?php echo esc_url($image['sizes']['landscape-image']); ?>" alt="<?php echo $image['alt']; ?>" />

            </div>

          <?php  } ?>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
