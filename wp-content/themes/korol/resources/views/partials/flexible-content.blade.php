@if(have_rows('content'))
    {{-- loop through the rows of data --}}
    @while (have_rows('content')) @php(the_row())

      @if(get_row_layout() == 'intro')

        @include('components.sections.section-intro')

      @endif

      @if(get_row_layout() == 'intro_small')

        @include('components.sections.section-intro-small')

      @endif

      @if(get_row_layout() == 'text_image')

        @include('components.sections.section-text-image')

      @endif

      @if(get_row_layout() == 'image_tabs')

        @include('components.sections.section-image-tabs')

      @endif

    @if(get_row_layout() == 'projects')

      @include('components.sections.section-projects')

    @endif

    @if(get_row_layout() == 'team')

      @include('components.sections.section-team')

    @endif

    @if(get_row_layout() == 'intro_cs')

      @include('components.sections.section-casestudy-intro')

    @endif

    @if(get_row_layout() == 'specification_cs')

      @include('components.sections.section-casestudy-specification')

    @endif

    @if(get_row_layout() == 'gallery_cs')

      @include('components.sections.section-gallery-coverflow')

    @endif

    @if(get_row_layout() == 'related_projects_cs')

      @include('components.sections.section-casestudy-related-projects')

    @endif

    @if(get_row_layout() == 'timeline')

      @include('components.sections.section-timeline')

    @endif

    @if(get_row_layout() == 'map')

      @include('components.sections.section-map')

    @endif

    @if(get_row_layout() == 'contact_footer')

      @include('components.sections.section-contact-footer')

    @endif

    @endwhile
@else
   {{-- no layouts found --}}
@endif
