# 0x01. Developer tools

## Overview
This project you will learn how to use Dev Tools create and run snippets on a page, block requests etc.

## Resources
* [Chrome DevTools | Tools for Web Developers | Google Developers](https://developer.chrome.com/docs/devtools/)
* [Introduction | Down and Dirty with Chrome Developer Tools](https://blittle.github.io/chrome-dev-tools/)
* [Firefox Developer Tools | MDN](https://developer.mozilla.org/en-US/docs/Tools)
* [Dev Tips - Developer Tips by Umar Hansa](https://umaar.com/dev-tips/)
* [Get Started With Viewing And Changing CSS | Tools for Web Developers](https://developer.chrome.com/docs/devtools/css/)
* [Keeping it simple with the JavaScript console - LogRocket Blog](https://blog.logrocket.com/keeping-it-simple-with-the-javascript-console/)
* [Inspect Network Activity - Chrome DevTools 101](https://www.youtube.com/watch?v=e1gAyQuIFQo)

## Requirements
### General
* A README.md file, at the root of the folder of the project, is mandatory
* Use the newest version of Google Chrome browser (78.0.3904.70 or later).
* Screenshots can be taken via the OS, not necessary via the DevTools. These screenshots are used to see how and where you are doing/playing with the DevTools.
* Go to https://dev-tools.hbtn.info/

## Learning Objectives
* What Developer Tools in your browser are
* How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.
* How to use the elements tab to edit HTML and CSS
* How to audit a page according to the tips suggested by Lighthouse
* How to create and run snippets on a page
* How to get information about files and server configurations
* How to block requests
* How to know how much JavaScript or CSS is used on a page
* How to detect 404 issues
* How to move elements on a webpage

## Tasks
### Mandatory
**[0-responsive_device.png](0-responsive_device.png)** - Responsive device.
```
Take a screenshot of the website using the device toolbar Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)
juangraram@juangraram$ 
```
**[1-change_bg_color.png](1-change_bg_color.png)** - Change the background color.
```
Change the background-color of the body to use #4233bd Take a screenshot of the PORTFOLIO section
juangraram@juangraram$ 
```
**[2-pathways_menu.png](2-pathways_menu.png)** - Force element state.
```
Force the hover state of the “cake” block in the section Portfolio Take a screenshot of it
juangraram@juangraram$ 
```
**[3-button_styles](3-button_styles)** - Copy all the styles of the button.
```
Select the Download me! and copy all the CSS styling that is applied on this button
juangraram@juangraram$ 
```
**[4-new_buttons.png](4-new_buttons.png)** - Change button styles.
```
* All primary buttons (btn-primary) should have the #0080ee color as a background color
* All outlined buttons light (btn-outline-light) should have #0020aa for the text color
* Screenshot all buttons that changed and merge it to one image
juangraram@juangraram$ 
```
**[5-deleted_elements.png](5-deleted_elements.png)** - Remove part of the website.
```
Remove the div of the “cake” box in the section Portfolio
juangraram@juangraram$ 
```
**[6-declaration_file](6-declaration_file)** - Where is it coming from?.
```
* On the right panel, click on the Computed tab
* Then, select the h2 with the text ABOUT
* Search for margin-bottom
juangraram@juangraram$ 
```
**[7-number_of_listeners](7-number_of_listeners)** - How many listeners.
```
How many times click events are referenced in JavaScript files?
juangraram@juangraram$ 
```
**[8-hsl](8-hsl)** - What is the HSL code.
```
* Select the primary button “Send”
* What is the equivalent value of the hexadecimal background-color, in HSL?
juangraram@juangraram$ 
```
**[9-max_width](9-max_width)** - The max-width of the container.
```
What is the max-width for the first .container in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%)
juangraram@juangraram$ 
```
**[10-moved_around.png](10-moved_around.png)** - Moving around.
```
Switch the section “About” and “Portfolio”
juangraram@juangraram$ 
```
**[11-coverage](11-coverage)** - Coverage.
```
How many bytes that freelancer.css covers?
juangraram@juangraram$ 
```
**[12-print_version.png](12-print_version.png)** - Emulate the print version of the webpage.
```
Take a screenshot of the homepage, only emulation the CSS print version of the website.
juangraram@juangraram$ 
```
**[13-logo_dollar0](13-logo_dollar0)** - Using the console.
```
Select the Avatar image in the header and type $0 in the console. Enter.
juangraram@juangraram$ 
```
**[14-doc_title](14-doc_title)** - Write code in the console.
```
Write in the console console.log(document.title), what is returned?
juangraram@juangraram$ 
```
**[15-hbtn_framework](15-hbtn_framework)** - Holberton web framework.
```
Which front-end framework could we guess this page is using?
* A. React JS
* B. Material Design
* C. Bootstrap
* D. Angular JS
juangraram@juangraram$ 
```
**[16-weight.png](16-weight.png)** - Homepage weight.
```
What is the total weight of the page (with all the elements)?
juangraram@juangraram$ 
```
**[17-requests.png](17-requests.png)** - Number of requests.
```
What is the number of requests done when accessing this page?
juangraram@juangraram$ 
```
**[18-css_loaded](18-css_loaded)** - Number of CSS files.
```
How many CSS resources are loaded on this page?
juangraram@juangraram$ 
```
**[19-images_loaded](19-images_loaded)** - Number of images.
```
How many image resources are loaded on this page?
juangraram@juangraram$ 
```
**[20-favicon_type](20-favicon_type)** - Favicon image type.
```
What is the type value of the favicon image?
juangraram@juangraram$ 
```
**[21-hbtn_font_lib](21-hbtn_font_lib)** - Font library.
```
Holberton School website uses a font library for their icons, which one is it?
juangraram@juangraram$ 
```
**[22-xhr_calls](22-xhr_calls)** - XHR calls.
```
What is the name of the resource that generates 1 XHR calls?
juangraram@juangraram$ 
```
**[23-performance_audit.png](23-performance_audit.png)** - Audits panel.
```
What is the notation for Performance (for desktop mode and no throttling - also called Lighthouse)?
juangraram@juangraram$ 
```
**[24-static_assets_audit.png](24-static_assets_audit.png)** -  Static assets.
```
How many static assets need a better cache policy?
juangraram@juangraram$ 
```
**[25-contrast_issue](25-contrast_issue)** - Accessibility.
```
When you run an accessibility audit, what is the contrast issue?
* A. Image elements do not have [alt] attributes
* B. Links do not have a discernible name
* C. Background and foreground colors do not have a sufficient contrast ratio.
juangraram@juangraram$ 
```
**[26-no_alt](26-no_alt)** - No alt.
```
Which classes are on the images that have no alt attribute?
juangraram@juangraram$ 
```
**[27-missing_attr](27-missing_attr)** - Best practices.
```
Which attribute is missing on all the links with the target _blank?
* A. rel="noopener"
* B. rel="noreferrer"
* C. A and B
* D. rel = "nofollow"
juangraram@juangraram$ 
```
**[28-unclear_desc.png](28-unclear_desc.png)** - SEO.
```
Which <a> links don’t have enough text description?
juangraram@juangraram$ 
```
**[29-how_many_colors.png](29-how_many_colors.png)** - Sources.
```
The sources panel allow you to edit files, add breakpoints to analyse your JavaScript code and create snippets.
* Create a new snippet called allcolors.js
* Copy-paste the code on that page
* Run the code
* Take a screenshot of the result in your console
juangraram@juangraram$ 
```
**[30-no_css.png](30-no_css.png)** - Block CSS files.
```
Block all CSS requests
juangraram@juangraram$ 
```
**[31-session_storage_key](31-session_storage_key)** - Application panel.
```
The application panel gives you access to the storage (cookies, sessions, cache…) and some other options as Services Workers and more recently, notifications.
juangraram@juangraram$ 
```
**[32-service_workers](32-service_workers)** - Service workers.
```
Does this page have any service workers? Yes or No
juangraram@juangraram$ 
```
**[33-ssl_cert](33-ssl_cert)** - Security.
```
The security panel allows you to make sure HTTS is properly implement on a webpage.
juangraram@juangraram$ 
```
**[34-ssl_expiration.png](34-ssl_expiration.png)** - Expiration date.
```
When does the SSL certificate expire?
juangraram@juangraram$ 
```

2021 - All programs written by Juan Granada ([@juangraram](https://twitter.com/JuanGraRam)) 
