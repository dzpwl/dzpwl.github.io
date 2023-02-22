<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="date" content='$date-meta$'>
    <link rel="stylesheet" href="../css/font.css" type="text/css" media="all">
    <link rel="stylesheet" href="../css/global-variables.css" type="text/css" media="all">
    <link rel="stylesheet" href="../css/global-style.css" type="text/css" media="all">
    <link rel="stylesheet" href="../css/blog.css" type="text/css" media="all">
    <title>The Church of Acme Blog -- All Entries</title>

  </head>
  <body>
    <div class="content">
      $body$
      ${if(content)}
        <div class="entries">
          <h3>Recent entries</h3>
	  <ul class="directory">
	    ${content.tpl()}
          </ul>
	</div>
      ${endif}
      </ul>
    </div>
  </body>
  ${if(footer)}${footer.tpl()}${endif}
</html>
