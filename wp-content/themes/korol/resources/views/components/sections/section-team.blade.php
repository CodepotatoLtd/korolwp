<section class="section-team p-b-mobile-section p-b-desktop-section">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-xxl-11 p-t-mobile-intro p-t-desktop-intro">

          <div class="row justify-content-center g-10">

            <?php
            $posts = get_sub_field('members');
            if ($posts) : ?>

            <?php foreach ($posts as $post) : // variable must be called $post (IMPORTANT) ?>

            <?php setup_postdata($post); ?>
             <div class="col-6">

               <div class="member medium text-dark sans" data-aos="fade-up"  data-aos-duration="750">

                 <div class="image p-b-mobile-element p-b-desktop-element">

                   <?php $img_id = get_post_thumbnail_id($post->ID);
                   $image = wp_get_attachment_image_src($img_id, "team-image");
                   $alt_text = get_post_meta($img_id , '_wp_attachment_image_alt', true); ?>

                   <img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>">

                 </div>
                  <div class="name">
                    <h4><?php the_field('name', $post->ID);?></h4>
                  </div>
                 <p class="h4 light"><?php the_field('position', $post->ID);?></p>

                 <div class="bio">
                  <?php the_field('bio', $post->ID);?>
                 </div>



               </div>

              </div>
                <?php endforeach; ?>

            <?php endif; ?>

          </div>

       </div>

    </div>

  </div>

</section>
