(function ($) {

    // Add sunset notification banner
    let bannerHTML = '<div id="sunset-banner" style="background-color: #fff3cd; border-bottom: 2px solid #ffc107; padding: 15px 0; text-align: center; width: 100%;"><div class="container"><p style="margin: 0; font-size: 16px; color: #333;">This project will sunset on December 31st, 2026. <a href="/sunset" style="color: #006f6f; font-weight: bold; text-decoration: underline;">Read more</a>.</p></div></div>';
    $('#page').prepend(bannerHTML);

    // Masonry for the partner logos in footer
    let $container = $('#partner-wrap');
    $container.imagesLoaded(function () {
        $container.masonry();
    });

    // Load header and main background images
    function stringInArray(needleString, hayArray) {
        needleString = needleString.toLowerCase();
        for (var i = 0; i < hayArray.length; i++) {
            if (hayArray[i].toLowerCase().match(needleString)) {
                return true;
            }
        }
        return false;
    }

    let months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];
    let pathArray = window.location.pathname.split('/');
    let monthURL = pathArray[1];
    let bgImg = Math.floor((Math.random() * 2) + 1);

    if (stringInArray(monthURL, months)) {
        $(".sub-nav-wrap").backstretch("/sites/all/themes/daybydayoh_theme/images/months/bg-" + monthURL + ".jpg").find("img").attr({
            alt: "",
            "aria-hidden": "true"
        });
        $(".header").backstretch("/sites/all/themes/daybydayoh_theme/images/months/head-bg-" + monthURL + ".png").find("img").attr({
            alt: "",
            "aria-hidden": "true"
        });
    } else {
        $(".sub-nav-wrap").backstretch("/sites/all/themes/daybydayoh_theme/images/months/bg-cover" + bgImg + ".jpg").find("img").attr({
            alt: "",
            "aria-hidden": "true"
        });
    }

    // Responsive image map for Places page
    $('img[usemap]').rwdImageMaps();

}(jQuery));
