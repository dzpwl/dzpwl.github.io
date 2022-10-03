<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="date" content='$date-meta$'>
    <link rel="stylesheet" href="../../css/global-variables.css" type="text/css" media="all">
    <link rel="stylesheet" href="../../css/global-style.css" type="text/css" media="all">
    <link rel="stylesheet" href="../../css/blog.css" type="text/css" media="all">
    <title>The Church of Acme Code Blog${if(title)} - ${title}${endif}</title>

  </head>
  <body>
    ${if(date)}<p class="date">$date$</p>${endif}
    $body$
  </body>
  ${if(sidebar)}${sidebar.tpl()}${endif}
</html>
