<header class="dropdown-menu-style">
  <div class="background">
    <div class="container">
      <div class="menu-wrapper">
        <a class="brand" href="{{ home_url('/') }}">
          <?php

          $image = get_field('logo', 'options');

          if (!empty($image)) :
            // vars
            $url = $image['url'];
            $title = $image['title'];
            $alt = $image['alt'];
            $caption = $image['caption']; ?>


          <img class="menu-logo" src="<?php echo $url;?>" alt="<?php echo $alt; ?>">

            <?php  endif; ?>
        </a>
        <nav class="nav-primary-dropdown">
          @if (has_nav_menu('primary_navigation'))
            {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'container' => '', 'menu_class' => '']) !!}
          @endif
        </nav>

        <a id="show-menu">

          <span></span>
          <span></span>
          <span></span>

        </a>
      </div>
    </div>
  </div>
</header>
