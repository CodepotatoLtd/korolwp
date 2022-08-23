@if(have_rows('header'))
    {{-- loop through the rows of data --}}
    @while (have_rows('header')) @php(the_row())


    @if(get_row_layout() == 'header_main')

      @include('components.headers.header-main')

    @endif

    @if(get_row_layout() == 'header_small')

      @include('components.headers.header-small')

    @endif

    @if(get_row_layout() == 'header_image')

      @include('components.headers.header-image')

    @endif


   @endwhile
@else
   {{-- no layouts found --}}
@endif
