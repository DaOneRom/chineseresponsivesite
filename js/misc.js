jQuery(function($) {
    $('.slide').slide(
        {
            start: false,
            speed: 7000,
            animate: 'opacity'
        });
    });
jQuery(function($) {
    $(".moreshare").mouseover(function(){
        $(this).addClass("active");
    });
    $(".moreshare").mouseout(function(){
        $(this).removeClass("active");
    });
});

jQuery(function($) {
    $(".social-container").mouseover(function(){
        $(".share-containers").addClass("active");
    });
    $(".social-container").mouseout(function(){
        $(".share-containers").removeClass("active");
    });
});

jQuery(function ()
{
var tabs = new Tabs(
{
    elem: "tabs",
    open: 0
});
}());

jQuery(function(){
    $("#menutoggle").click(function(){
        $(".custom-blocker").toggleClass('active', '300');
    });
    $(".custom-blocker").click(function(){
        $(this).removeClass('active');
    });
});
jQuery(function()
{
    $("#main .slider-container .main-slide .slide.slidebox .slide-tabs li[style*='opacity: 1'] .slide-a").addClass("befores");
});
