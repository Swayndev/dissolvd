<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Dissolvd</title>
</head>
<body>
    {{-- <h1> THIS IS OUR LARAVEL LAYOUT</h1> --}}

    @yield('content')

    {{-- will wrap all the different views that extends it--}}

</body>
</html>