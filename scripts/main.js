// Animations
AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
});

// Add your javascript here

$("#demos .s-nav li a").click(function() {
    console.log($(this).attr("data-id"));
    $("#demos .s-nav li").removeClass("active");
    $(this).parent().addClass("active");
    $("#demos .item").hide();
    $("#demos .item." + $(this).attr("data-id")).show();
    return false;
});

$.fn.skin_count = function() {
    $(this).each(function() {
        var $main = $(this);
        $main.html($(".demo." + $main.parent().attr("data-id")).length);
    });
};

// load function
$(window).load(function() {
    $('.demo-count').html($('.demo').length);
});

// resize function
$(window).on("resize", function() {

});

window.addEventListener("load", function load() {
    /**
     * remove listener, no longer needed
     * */
    window.removeEventListener("load", load, false);
    /**
     * start functions
     * */
    if ($('.skin-count').length) {
        $('.skin-count').skin_count();
    }
}, false);