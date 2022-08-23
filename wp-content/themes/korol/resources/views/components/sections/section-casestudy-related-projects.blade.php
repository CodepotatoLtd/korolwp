<section class="section-casestudy-related-projects small text-dark p-b-mobile-section p-t-mobile-intro p-t-desktop-intro p-b-desktop-section">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-xxl-11">
          <div class="title-wrapper sans text-center p-b-mobile-element p-b-desktop-element">
            <h2><?php echo get_sub_field('title')?></h2>
          </div>
        </div>

        <div class="col-xxl-11 p-t-mobile-intro p-t-desktop-intro">

          <div class="row justify-content-center ">

            <?php
            $count = 0;
            $posts = get_sub_field('projects');
            if ($posts) : ?>

            <?php foreach ($posts as $post) : // variable must be called $post (IMPORTANT) ?>

            <?php setup_postdata($post); ?>

            <?php $delay = ($count * 150 ) ;?>
             <div class="col-4 sans text-center p-b-mobile-element p-b-desktop-element" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="<?php echo $delay;?>">

               <div class="image p-b-mobile-element p-b-desktop-element">

                 <?php $img_id = get_post_thumbnail_id($post->ID);
                 $image = wp_get_attachment_image_src($img_id, "featured-image");
                 $alt_text = get_post_meta($img_id , '_wp_attachment_image_alt', true); ?>

                 <img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>">

               </div>

               <h3><?php the_title();?></h3>

              </div>
          <?php  $count ++;?>
                <?php endforeach; ?>

            <?php endif; ?>

          </div>

       </div>

    </div>

  </div>

</section>
