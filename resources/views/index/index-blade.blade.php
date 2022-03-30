@extends('layouts.main')

@section('content')

<div id="root"></div>
<p>THIS IS THE LARAVEL INDEX BLADE - IT SHOWS WHEN SOMETHING DOES NOT WORK

WE KINDA SORTA LIKE DATA4YOU (especially Mikolai!)
</p>

<script src="{{ mix('js/index.js') }}"></script>

{{-- <script src="/js/index.js">

</script> --}}

@endsection