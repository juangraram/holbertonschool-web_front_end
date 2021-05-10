# 0x03. Sass & Scss

## Overview
This project was a brief introduction to the Sass & Scss. Concepts included how to @debug text, variables, @each, @while in general.

## Resources
[Sass](https://sass-lang.com/guide)
[Sass](https://sass-lang.com/documentation)


## Requirements
### General
* Allowed editors: `vi`, `vim`, `emacs`
* All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
* All your files should end with a new line
* All your Scss files should have a comment at the beginning (i.e. syntax above)
* All your files should start by a comment describing the task
* A README.md file, at the root of the folder of the project, is mandatory
* The length of your files will be tested using wc

### Install Sass/Scss on Ubuntu 18.04 LTS
* $ sudo apt-get install -y ruby2.5 ruby2.5-dev
* $ sudo apt-get install ubuntu-dev-tools
* $ gem install sass -v 3.7.4
* $ sass --version
* Ruby Sass 3.7.4


## Tasks
### Mandatory
**[0-debug_log.scss](0-debug_log.scss)** - Sass file that prints Hello world in the debug output.
```
juangraram@juangraram:0x03-sass_scss$ sass 0-debug_log.scss | head -n 0
0-debug_log.scss:2 DEBUG: Hello world
```
**[1-color_variable.scss](1-color_variable.scss)** - Sass file that assigns the text color #3D3D3D to the HTML tags body and p.
```
juangraram@juangraram:0x03-sass_scss$ sass 1-color_variable.scss | tail -n +2
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }
```
**[2-color_variables.scss](2-color_variables.scss)** - Sass file that assigns Color.
```
juangraram@juangraram:0x03-sass_scss$ sass 2-color_variables.scss | tail -n +2
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }
```
**[3-nested_tag.scss](3-nested_tag.scss)** - Sass file that assigns nested_tag.
```
juangraram@juangraram:0x03-sass_scss$ sass 3-nested_tag.scss | tail -n +2
body {
  margin: 0px;
  padding: 0px; }
  body p {
    margin: 10px; }
```
**[4-nested_class.scss](4-nested_class.scss)** - Sass file that assigns nested_class.
```
juangraram@juangraram:0x03-sass_scss$ sass 4-nested_class.scss | tail -n +2
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
```
**[5-nested_child.scss](5-nested_child.scss)** - Sass file that assigns nested child.
```
juangraram@juangraram:0x03-sass_scss$ sass 5-nested_child.scss | tail -n +2
body {
  color: #3D3D3D; }
  body > .red {
    color: #FF0000; }
```
**[6-nested_hover.scss](6-nested_hover.scss)** - Sass file that assigns nested hover.
```
juangraram@juangraram:0x03-sass_scss$ sass 6-nested_hover.scss | tail -n +2
button {
  color: #FF0000; }
  button:hover {
    color: #00FF00; }
```
**[7-nested_deeper.scss](7-nested_deeper.scss)** - Sass file that assigns Nested and nested again.
```
juangraram@juangraram:0x03-sass_scss$ sass 7-nested_deeper.scss | tail -n +2
body {
  font-size: 14px; }
  body h1 {
    font-size: 16px; }
    body h1.smaller {
      font-size: 12px; }
```
**[8-mixin_margins.scss](8-mixin_margins.scss)** - Sass file that assigns Margin mixin.
```
juangraram@juangraram:0x03-sass_scss$ sass 8-mixin_margins.scss | tail -n +2
body {
  margin-left: 10px;
  margin-right: 10px; }

div {
  margin-left: 15px;
  margin-right: 15px; }
```
**[9-extend_list.scss](9-extend_list.scss)** - Sass file that assigns Extended.
```
juangraram@juangraram:0x03-sass_scss$ sass 9-extend_list.scss | tail -n +2
.info, .success, .warning {
  font-size: 12px; }

.success {
  color: #00FF00; }

.warning {
  color: #FF0000; }
```
**[10-import_colors.scss](10-import_colors.scss)** - Sass file that assigns Import colors.
```
juangraram@juangraram:0x03-sass_scss$ sass 10-import_colors.scss | tail -n +3
.red {
  color: #FF0000; }

.green {
  color: #00FF00; }

.blue {
  color: #0000FF; }
```
**[11-loop_photos.scss](11-loop_photos.scss)** - Sass file that creates a class for each name in the list $list-names.
```
juangraram@juangraram:0x03-sass_scss$ sass 11-loop_photos.scss | tail -n +3
.photo-julien {
  background: image-url("photos/julien.jpg") no-repeat; }

.photo-john {
  background: image-url("photos/john.jpg") no-repeat; }

.photo-sam {
  background: image-url("photos/sam.jpg") no-repeat; }

.photo-damian {
  background: image-url("photos/damian.jpg") no-repeat; }
```
**[12-loop_header.scss](12-loop_header.scss)** - Sass file that creates H* tags, where ‘*’ is the size of the font used.
```
juangraram@juangraram:0x03-sass_scss$ sass 12-loop_header.scss | tail -n +2
h1 {
  font-size: 1px; }

h2 {
  font-size: 2px; }

h3 {
  font-size: 3px; }

h4 {
  font-size: 4px; }

h5 {
  font-size: 5px; }
```
**[100-loop_col.scss](100-loop_col.scss)** - Sass file that creates classes with different width.
```
juangraram@juangraram:0x03-sass_scss$ sass 100-loop_col.scss | tail -n +2
.col-1 {
  width: 100%; }

.col-2 {
  width: 50%; }

.col-3 {
  width: 33.3333333333%; }

.col-4 {
  width: 25%; }
```
**[101-media_query.scss](101-media_query.scss)** - Sass file that assigns font size.
```
juangraram@juangraram:0x03-sass_scss$ sass 101-media_query.scss | tail -n +2
h1 {
  font-size: 20px; }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 14px; } }
```
**[102-media_query.scss](102-media_query.scss)** - Sass file that assigns font size.
```
juangraram@juangraram:0x03-sass_scss$ sass 102-media_query.scss | tail -n +2
h1 {
  font-size: 20px; }
  @media screen and (max-width: 960px) {
    h1 {
      font-size: 18px; } }
  @media screen and (max-width: 640px) {
    h1 {
      font-size: 16px; } }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 14px; }
      h1.small {
        color: #1D1D1D; } }
```

2021 - All programs written by Juan Granada ([@juangraram](https://twitter.com/JuanGraRam))
