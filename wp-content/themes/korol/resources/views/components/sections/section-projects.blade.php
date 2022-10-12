<section class="section-projects p-b-mobile-section p-b-desktop-section">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-11 ">

          <div class="row justify-content-center g-5 g-xxl-10">

            <?php $count = 0;?>
            <?php
            $posts = get_sub_field('projects');
            if ($posts) : ?>

            <?php foreach ($posts as $post) : // variable must be called $post (IMPORTANT) ?>

            <?php setup_postdata($post); ?>
             <div class="col-lg-6">

               @include('components.cards.card-project')

              </div>
                <?php $count ++;?>

                <?php endforeach; ?>

            <?php endif; ?>

          </div>

       </div>

    </div>

  </div>

</section>
