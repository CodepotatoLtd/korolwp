<a class="sr-only focus:not-sr-only" href="#main">
  {{ __('Skip to content') }}
</a>

@include('sections.header')

<main id="main" class="main">
  @yield('content')
</main>


<?php $hide_footer = get_field('hide_footer');?>
<?php if ($hide_footer !== "yes") {?>
  @include('sections.footer')
<?php } ?>
