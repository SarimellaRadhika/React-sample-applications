(function ($) {
    // js for vanish dropdown in collaboration
    $(document).mouseup(function (event) {
        var $trigger = $(".threadicons");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".chat-settings-dropdown").hide();
            $(".iconsontreads").removeClass("show");
        }
    });
    // js for split screen
    $(".pretty-split-pane-frame, .adjust-colum-right").mouseout(function () {
        if (parseInt($(".adjust-colum-right").width()) <= 420) {
            $('.workarea-container').addClass('mobile-view');
            $('.workarea-container').removeClass('all');
            $('.workarea-container').removeClass('medium-view');
        } else if ((parseInt($(".adjust-colum-right").width()) >= 421) && (parseInt($(".adjust-colum-right").width()) < 600)) {
            $('.workarea-container').addClass('medium-view');
            $('.workarea-container').removeClass('mobile-view');
            $('.workarea-container').removeClass('all');
        } else {
            $('.workarea-container').addClass('all');
            $('.workarea-container').removeClass('mobile-view');
            // $('.workarea-container').addClass('thisis420');
            $('.workarea-container').removeClass('medium-view');
        }
    });
})(jQuery);