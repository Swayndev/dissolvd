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

    <nav>
        <img class="dissolvd-logo"/>
        <a>Sign in</a>
        <a>Create account</a>
        <a>How it works</a>
        <a>Films</a>
        <a>About us</a>
    <nav>
    
    <h1> The better way to discuss films FROM LAYOUTS/MAIN.BLADE</h1>

    @yield('content')

    {{-- will wrap all the different views that extends it-}}

</body>
</html>