(function($){"use strict";function handlePreloader(){if($('.loader-wrap').length){$('.loader-wrap').delay(1000).fadeOut(500)}}
if($(".preloader-close").length){$(".preloader-close").on("click",function(){$('.loader-wrap').delay(200).fadeOut(500)})}
if($('.main-header li.dropdown ul').length){$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>')}
if($('.mobile-menu').length){$('.mobile-menu .menu-box').mCustomScrollbar();var mobileMenuContent=$('.main-header .nav-outer .main-menu').html();$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);$('.sticky-header .main-menu').append(mobileMenuContent);$('.mobile-menu li.dropdown .dropdown-btn').on('click',function(){$(this).toggleClass('open');$(this).prev('ul').slideToggle(500)});$('.mobile-menu li.dropdown .dropdown-btn').on('click',function(){$(this).prev('.megamenu').slideToggle(900)});$('.mobile-nav-toggler').on('click',function(){$('body').addClass('mobile-menu-visible')});$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible')})}
if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000)})}
if($('.parallax-scene-1').length){var scene=$('.parallax-scene-1').get(0);var parallaxInstance=new Parallax(scene)}
if($('.parallax-scene-2').length){var scene=$('.parallax-scene-2').get(0);var parallaxInstance=new Parallax(scene)}
if($('.parallax-scene-3').length){var scene=$('.parallax-scene-3').get(0);var parallaxInstance=new Parallax(scene)}
if($('.parallax-scene-4').length){var scene=$('.parallax-scene-4').get(0);var parallaxInstance=new Parallax(scene)}
if($('.parallax-scene-5').length){var scene=$('.parallax-scene-5').get(0);var parallaxInstance=new Parallax(scene)}
if($('.scroll-nav').length){$('.scroll-nav').onePageNav()}
if($('.quantity-spinner').length){$("input.quantity-spinner").TouchSpin({verticalbuttons:!0})}
function headerStyle(){if($('.main-header').length){var windowpos=$(window).scrollTop();var siteHeader=$('.main-header');var scrollLink=$('.scroll-top');if(windowpos>=350){siteHeader.addClass('fixed-header');scrollLink.fadeIn(300)}else{siteHeader.removeClass('fixed-header');scrollLink.fadeOut(300)}}}
headerStyle();function stickyHeader(){if($('.stricky').length){var strickyScrollPos=700;if($(window).scrollTop()>strickyScrollPos){$('.stricky').addClass('stricky-fixed');$('.scroll-to-top').fadeIn(1500)}else if($(this).scrollTop()<=strickyScrollPos){$('.stricky').removeClass('stricky-fixed');$('.scroll-to-top').fadeOut(1500)}}}
function isotopeBlock(){if($(".isotope-block").length){var $grid=$('.isotope-block').isotope()}}
isotopeBlock();function bottomParallax(){if($('.bottom-parallax').length){var windowpos=$(window).scrollTop();var siteFooter=$('.footer-area').height();var sitebodyHeight=$('.boxed_wrapper').height();var finalHeight=sitebodyHeight-siteFooter-1000;if(windowpos>=finalHeight){$('body').addClass('parallax-visible')}else{$('body').removeClass('parallax-visible')}}}
function bottomParallax2(){if($('.bottom-parallax2').length){var windowpos=$(window).scrollTop();var siteFooter=$('.footer-style3-area').height();var sitebodyHeight=$('.boxed_wrapper').height();var finalHeight=sitebodyHeight-siteFooter-1000;if(windowpos>=finalHeight){$('body').addClass('parallax-visible')}else{$('body').removeClass('parallax-visible')}}}
function beforeAfterTwentyTwenty(){if($(".before-after-twentytwenty").length){$(".before-after-twentytwenty").each(function(){var Self=$(this);var objName=Self.attr('id');$('#'+objName).twentytwenty();$(document).on('shown.bs.tab','a[data-toggle="tab"]',function(e){var paneTarget=$(e.target).attr('data-target');var $thePane=$('.tab-pane'+paneTarget);var twentyTwentyContainer='#'+objName;var twentyTwentyHeight=$thePane.find(twentyTwentyContainer).height();if(0===twentyTwentyHeight){$thePane.find(twentyTwentyContainer).trigger('resize')}})})}}
function CounterNumberChanger(){var timer=$('.timer');if(timer.length){timer.appear(function(){timer.countTo()})}}
function projectMasonaryLayout(){if($('.masonary-layout').length){$('.masonary-layout').isotope({layoutMode:'masonry'})}
if($('.post-filter').length){$('.post-filter li').children('.filter-text').on('click',function(){var Self=$(this);var selector=Self.parent().attr('data-filter');$('.post-filter li').removeClass('active');Self.parent().addClass('active');$('.filter-layout').isotope({filter:selector,animationOptions:{duration:500,easing:'linear',queue:!1}});return!1})}
if($('.post-filter.has-dynamic-filters-counter').length){var activeFilterItem=$('.post-filter.has-dynamic-filters-counter').find('li');activeFilterItem.each(function(){var filterElement=$(this).data('filter');var count=$('.filter-layout').find(filterElement).length;$(this).children('.filter-text').append('<span class="count">'+count+'</span>')})}}
function onHoverthreeDmovement(){var tiltBlock=$('.js-tilt');if(tiltBlock.length){$('.js-tilt').tilt({maxTilt:20,perspective:700,glare:!0,maxGlare:0})}}
function tabBox(){if($('.tabs-box').length){$('.tabs-box .tab-buttons .tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).is(':visible')){return!1}else{target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');$(this).addClass('active-btn');target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');$(target).fadeIn(300);$(target).addClass('active-tab')}})}}
function directionswitch(){if($('.page_direction').length){$('.direction_switch button').on('click',function(){$('.boxed_wrapper').toggleClass(function(){return $(this).is('.rtl, .ltr')?'rtl ltr':'rtl'})})}}
function swithcerMenu(){if($('.switch_menu').length){$('.switch_btn button').on('click',function(){$('.switch_menu').toggle(500)});$('#styleOptions').styleSwitcher({hasPreview:!0,fullPath:'assets/css/color/',cookie:{expires:30,isManagingLoad:!0}})}}
function datepicker(){if($('#datepicker').length){$('#datepicker').datepicker()}}
function priceFilter(){if($('.price-ranger').length){$('.price-ranger #slider-range').slider({range:!0,min:10,max:200,values:[11,99],slide:function(event,ui){$('.price-ranger .ranger-min-max-block .min').val('$'+ui.values[0]);$('.price-ranger .ranger-min-max-block .max').val('$'+ui.values[1])}});$('.price-ranger .ranger-min-max-block .min').val('$'+$('.price-ranger #slider-range').slider('values',0));$('.price-ranger .ranger-min-max-block .max').val('$'+$('.price-ranger #slider-range').slider('values',1))}}
function languageSwitcher(){if($("#polyglot-language-options").length){$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({effect:'slide',animSpeed:500,testMode:!0,onChange:function(evt){alert("The selected language is: "+evt.selectedItem)}})}}
function countDownTimer(){if($('.time-countdown').length){$('.time-countdown').each(function(){var Self=$(this);var countDate=Self.data('countdown-time');Self.countdown(countDate,function(event){$(this).html('<h3>'+event.strftime('%D : %H : %M : %S')+'</h3>')})})};if($('.time-countdown-two').length){$('.time-countdown-two').each(function(){var Self=$(this);var countDate=Self.data('countdown-time');Self.countdown(countDate,function(event){$(this).html('<li> <div class="box"> <span class="days">'+event.strftime('%D')+'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+event.strftime('%H')+'</span> <span class="timeRef clr-1">hrs</span> </div> </li> <li> <div class="box"> <span class="minutes">'+event.strftime('%M')+'</span> <span class="timeRef clr-2">mins</span> </div> </li> <li> <div class="box"> <span class="seconds">'+event.strftime('%S')+'</span> <span class="timeRef clr-3">secs</span> </div> </li>')})})}}
if($('.theme_carousel').length){$(".theme_carousel").each(function(index){var $owlAttr={},$extraAttr=$(this).data("options");$.extend($owlAttr,$extraAttr);$(this).owlCarousel($owlAttr)})}
if($(".thm-owl__carousel--custom-nav").length){$(".thm-owl__carousel--custom-nav").each(function(){let elm=$(this);let owlNavPrev=elm.data('owl-nav-prev');let owlNavNext=elm.data('owl-nav-next');$(owlNavPrev).on("click",function(e){elm.trigger('prev.owl.carousel');e.preventDefault()})
$(owlNavNext).on("click",function(e){elm.trigger('next.owl.carousel');e.preventDefault()})})}
if($('.banner-carousel').length){$('.banner-carousel').owlCarousel({animateOut:'fadeOut',animateIn:'fadeIn',loop:!0,margin:0,dots:!0,nav:!0,singleItem:!0,smartSpeed:500,autoplay:!0,autoplayTimeout:9000,navText:['<span class="icon-down-arrow"></span>','<span class="icon-down-arrow right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1}}})}
if($('.event-style2-carousel').length){$('.event-style2-carousel').owlCarousel({animateOut:'fadeOut',animateIn:'fadeIn',loop:!0,margin:30,dots:!1,nav:!0,singleItem:!0,smartSpeed:500,autoplay:!0,autoplayTimeout:9000,navText:['<span class="icon-right-arrow-1"></span>','<span class="icon-right-arrow-1 right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:2}}})}
if($("#learning-courses-items-thumb").length){let learningcoursesThumb=new Swiper("#learning-courses-items-thumb",{slidesPerView:2,spaceBetween:30,speed:1400,watchSlidesVisibility:!0,watchSlidesProgress:!0,loop:!1,autoplay:{delay:5000000000}});let learningcoursesCarousel=new Swiper("#learning-courses-items-carousel",{observer:!0,observeParents:!0,loop:!1,speed:1400,mousewheel:!0,slidesPerView:1,spaceBetween:0,autoplay:{delay:5000000000},thumbs:{swiper:learningcoursesThumb},pagination:{el:'#learning-courses-carousel-pagination',type:'bullets',clickable:!0},"navigation":{"nextEl":"#learning-courses__swiper-button-next","prevEl":"#learning-courses__swiper-button-prev"},})}
if($(".slider-bg-slide").length){$(".slider-bg-slide").each(function(){var Self=$(this);var bgSlideOptions=Self.data("options");var bannerTwoSlides=Self.vegas(bgSlideOptions)})}
if($('.single-vertical-carousel').length){$('.single-vertical-carousel').slick({dots:!0,autoplay:!0,loop:!0,autoplaySpeed:9000,infinite:!0,responsive:!0,slidesToShow:1,vertical:!0,slidesToScroll:1,prevArrow:"<div class='prev-btn'><span class='icon-top prev-icon'></span></div>",nextArrow:"<div class='next-btn'><span class='icon-top next-icon'></span></div>"})}
if($('.explore-future-tab').length){$('.explore-future-tab .tab-btns .tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.explore-future-tab .tab-btns .tab-btn').removeClass('active-btn');$(this).addClass('active-btn');$('.explore-future-tab .pr-content .pr-tab').removeClass('active-tab');$(target).addClass('active-tab')}})}
if($('.course-details__tab-box').length){$('.course-details__tab-box .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.course-details__tab-box .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.course-details__tab-box .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.academy-statements-area').length){$('.academy-statements-area .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.academy-statements-area .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.academy-statements-area .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.programmes-offered-area').length){$('.programmes-offered-area .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.programmes-offered-area .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.programmes-offered-area .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.program-details-area').length){$('.program-details-area .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.program-details-area .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.program-details-area .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.involment-activities-area').length){$('.involment-activities-area .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.involment-activities-area .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.involment-activities-area .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.faq-page-one').length){$('.faq-page-one .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.faq-page-one .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.faq-page-one .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.statements-style2-area').length){$('.statements-style2-area .tabs-button-box .tab-btn-item').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.statements-style2-area .tabs-button-box .tab-btn-item').removeClass('active-btn-item');$(this).addClass('active-btn-item');$('.statements-style2-area .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');$(target).addClass('tab-content-box-item-active')}})}
if($('.accordion-box').length){$(".accordion-box").on('click','.acc-btn',function(){var outerBox=$(this).parents('.accordion-box');var target=$(this).parents('.accordion');if($(this).hasClass('active')!==!0){$(outerBox).find('.accordion .acc-btn').removeClass('active')}
if($(this).next('.acc-content').is(':visible')){return!1}else{$(this).addClass('active');$(outerBox).children('.accordion').removeClass('active-block');$(outerBox).find('.accordion').children('.acc-content').slideUp(300);target.addClass('active-block');$(this).next('.acc-content').slideDown(300)}})}
if($('.dial').length){$('.dial').appear(function(){var elm=$(this);var color=elm.attr('data-fgColor');var perc=elm.attr('value');elm.knob({'value':0,'min':0,'max':100,'skin':'tron','readOnly':!0,'thickness':0.15,'dynamicDraw':!0,'displayInput':!1});$({value:0}).animate({value:perc},{duration:2000,easing:'swing',progress:function(){elm.val(Math.ceil(this.value)).trigger('change')}});$(this).append(function(){})},{accY:20})}
if($('.progress-levels .progress-box .bar-fill').length){$(".progress-box .bar-fill").each(function(){$('.progress-box .bar-fill').appear(function(){var progressWidth=$(this).attr('data-percent');$(this).css('width',progressWidth+'%')})},{accY:0})}
if($('.count-box').length){$('.count-box').appear(function(){var $t=$(this),n=$t.find(".count-text").attr("data-stop"),r=parseInt($t.find(".count-text").attr("data-speed"),10);if(!$t.hasClass("counted")){$t.addClass("counted");$({countNum:$t.find(".count-text").text()}).animate({countNum:n},{duration:r,easing:"linear",step:function(){$t.find(".count-text").text(Math.floor(this.countNum))},complete:function(){$t.find(".count-text").text(this.countNum)}})}},{accY:0})}
$('.video-popup').magnificPopup({type:'iframe'});if($('.lightbox-image').length){$('.lightbox-image').fancybox({openEffect:'fade',closeEffect:'fade',youtube:{controls:0,showinfo:0},helpers:{media:{}}})}
if($('.paroller').length){$('.paroller').paroller({factor:-0.1,factorLg:-0.1,type:'foreground',direction:'vertical'})}
if($('.paroller-2').length){$('.paroller-2').paroller({factor:0.05,factorLg:0.05,type:'foreground',direction:'horizontal'})}
if($('.wow').length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0});wow.init()}
if($("[data-aos]").length){AOS.init({duration:'1000',disable:'false',easing:'ease',mirror:!0})}
if($("#contact-form").length){$("#contact-form").validate({submitHandler:function(form){var form_btn=$(form).find('button[type="submit"]');var form_result_div='#form-result';$(form_result_div).remove();form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var form_btn_old_msg=form_btn.html();form_btn.html(form_btn.prop('disabled',!0).data("loading-text"));$(form).ajaxSubmit({dataType:'json',success:function(data){if(data.status='true'){$(form).find('.form-control').val('')}
form_btn.prop('disabled',!1).html(form_btn_old_msg);$(form_result_div).html(data.message).fadeIn('slow');setTimeout(function(){$(form_result_div).fadeOut('slow')},6000)}})}})}
if($('#search-popup').length){$('.search-toggler').on('click',function(){$('#search-popup').addClass('popup-visible')});$(document).keydown(function(e){if(e.keyCode===27){$('#search-popup').removeClass('popup-visible')}});$('.close-search,.search-popup .overlay-layer').on('click',function(){$('#search-popup').removeClass('popup-visible')})}
if($('.curved-circle').length){$('.curved-circle').circleType({position:'absolute',dir:1,radius:90,forceHeight:!0,forceWidth:!0})}
if($('.curved-circle-2').length){$('.curved-circle-2').circleType({position:'absolute',dir:1,radius:-60,forceHeight:!0,forceWidth:!0})}
if($('.curved-circle-3').length){$('.curved-circle-3').circleType({position:'absolute',dir:1,radius:80,forceHeight:!0,forceWidth:!0})}
if($('.curved-circle-4').length){$('.curved-circle-4').circleType({position:'absolute',dir:1,radius:100,forceHeight:!0,forceWidth:!0})}
if($('.curved-circle-5').length){$('.curved-circle-5').circleType({position:'absolute',dir:1,radius:85,forceHeight:200,forceWidth:200})}
if($(".filter-option-box").length){$(".search__toggler").on("click",function(){$(".search-field .filter-option-box").addClass("active")})
$(".filter-option-box .close-btn").on("click",function(){$(".search-field .filter-option-box").removeClass("active")})}
if(!$(".woocommerce").length){$('select:not(.ignore)').niceSelect()}
jQuery(document).on('ready',function(){(function($){tabBox();datepicker();directionswitch();swithcerMenu();CounterNumberChanger();onHoverthreeDmovement();beforeAfterTwentyTwenty();priceFilter();languageSwitcher();countDownTimer()})(jQuery)});jQuery(window).on('scroll',function(){(function($){headerStyle();bottomParallax();bottomParallax2();stickyHeader()})(jQuery)});jQuery(window).on('load',function(){(function($){handlePreloader();projectMasonaryLayout();isotopeBlock()})(jQuery)})})(window.jQuery)