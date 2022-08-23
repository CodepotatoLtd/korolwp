<section class="section-projects p-b-mobile-section p-b-desktop-section">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-xxl-11 p-t-mobile-intro p-t-desktop-intro">

          <div class="row justify-content-center g-10">


            <?php
            $posts = get_sub_field('projects');
            if ($posts) : ?>

            <?php foreach ($posts as $post) : // variable must be called $post (IMPORTANT) ?>

            <?php setup_postdata($post); ?>
             <div class="col-6">

               <a href="<?php the_permalink($post->ID);?>" class="text-white" data-aos="fade-up"  data-aos-duration="750">

               <div class="image">

                 <?php $img_id = get_post_thumbnail_id($post->ID);
                 $image = wp_get_attachment_image_src($img_id, "featured-image");
                 $alt_text = get_post_meta($img_id , '_wp_attachment_image_alt', true); ?>

                 <img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>">

                 <div class="overlay large">
                   <h3><?php echo get_the_title($post->ID);?></h3>
                 </div>

               </div>

               </a>

              </div>
                <?php endforeach; ?>

            <?php endif; ?>

          </div>

       </div>

    </div>

  </div>

</section>
