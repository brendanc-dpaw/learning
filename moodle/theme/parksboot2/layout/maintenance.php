<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

// Get the HTML for the settings bits.
$html = theme_parksboot2_get_html_for_settings($OUTPUT, $PAGE);

echo $OUTPUT->doctype() ?>
<html <?php echo $OUTPUT->htmlattributes(); ?>>
<head>
    <title><?php echo $OUTPUT->page_title(); ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->favicon(); ?>" />
    <?php echo $OUTPUT->standard_head_html() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<style>
body {margin:0; padding:0;}
#page {pading:0;}
#page-header {background: #3580ca; padding: 5px 10px;}
#page-content {margin:0 auto; padding-bottom:10px;}
.container-fluid {padding:0;}
</style>
</head>

<body <?php echo $OUTPUT->body_attributes(); ?>>

<?php echo $OUTPUT->standard_top_of_body_html() ?>

<div id="page" class="container-fluid">

    <header id="page-header" class="clearfix">
        <?php echo $html->heading; ?>
    </header>

    <div id="page-content" class="row-fluid">
        <section id="region-main" class="span12">
            <?php echo $OUTPUT->main_content(); ?>
        </section>
    </div>

    <footer id="page-footer">
        <?php
        echo $OUTPUT->standard_footer_html();
        ?>
    </footer>

    <?php echo $OUTPUT->standard_end_of_body_html() ?>

</div>
</body>
</html>
