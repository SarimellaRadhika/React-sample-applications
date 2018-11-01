 function toggleLeft(){
     (function($){
		 	$.noConflict();
            var pCon = $('.page-container'),
                sRight = $('.right-aside'),
                aRight = $('.right-aside'),
                mLbar = $('.m-leftbar-show'),
                pBody = $('body'),
                pHtml = $('html');

            function IconView() {
                $('.aside-pin').on('click', function (event) {
                    pCon.addClass('pin-it');
                    $(".mask").remove();
                    $(this).hide();
                    $('.main-container').trigger('resize');

                });

                $('.leftbar-action').on('click', function (event) {
                    event.preventDefault();

                    if (pCon.hasClass('iconic-view')) {
                        pCon.removeClass('iconic-view');
                        pCon.addClass('pin-it');
                        $('.left-aside').css({
                            'height': ''
                        });
                    } else if (pCon.hasClass('pin-it')) {
                        pCon.removeClass('pin-it');
                        pCon.addClass('iconic-view');
                        if($('.leftnavigations').height() > pBody.height()){
                            $('.left-aside').css({
                                'height': $('.leftnavigations').height()+100
                            });
                        }
                        else
                        {
                            $('.left-aside').css({
                                'height': pBody.height()
                            });
                        }

                    }

                    if (pBody.hasClass('h-iconic-view')) {
                        pBody.removeClass('h-iconic-view');
                        pCon.removeClass('iconic-view');
                    }

                    if (sRight.hasClass('rightbar-show')) {
                        sRight.removeClass('rightbar-show');
                    }
                    $('.main-container').trigger('resize');
                });

                $('.leftbar-action-mobile').on('click', function (event) {
                    event.preventDefault();

                    if (pCon.hasClass('iconic-view')) {
                        pCon.removeClass('iconic-view');
                        pCon.addClass('pin-it');
                        $('.left-aside').css({
                            'height': ''
                        });
                    } else if (pCon.hasClass('pin-it')) {
                        pCon.removeClass('pin-it');
                        pCon.addClass('iconic-view');
                        if($('.list-accordion').height() > pBody.height()){
                            $('.left-aside').css({
                                'height': $('.list-accordion').height()+100
                            });
                        }
                        else
                        {
                            $('.left-aside').css({
                                'height': pBody.height()
                            });
                        }

                    }

                    if (pBody.hasClass('h-iconic-view')) {
                        pBody.removeClass('h-iconic-view');
                        pCon.removeClass('iconic-view');

                    }

                    if (sRight.hasClass('rightbar-show')) {
                        sRight.removeClass('rightbar-show');
                    }
                    $('.main-container').trigger('resize');
                });


                $('.rightbar-action').on('click', function (ev) {
                    ev.preventDefault();
                    if (aRight.hasClass('rightbar-show')) {
                        aRight.removeClass('rightbar-show');
                        $(".r-mask").remove();

                    } else {
                        aRight.addClass('rightbar-show');

                    }

                });


                $('.aside-close').on('click', function () {
                    pBody.addClass('h-iconic-view');
                });

            }

            function IconicViewExit() {
                pCon.addClass('iconic-view');
                pCon.removeClass('pin-it');
                if (sRight.hasClass('rightbar-show')) {
                    sRight.removeClass('rightbar-show');
                }
            }

            /*====Search Bar====*/
            function SearchBar() {
                if ($('.search-bar').hasClass('search-show')) {
                    $('.search-bar').removeClass('search-show');

                } else {
                    $('.search-bar').addClass('search-show');
                    $('.search-input').focus();
                }
            }



            IconView();

    })(jQuery);

}
