$(document).ready(function() {
    $('.header-burger').click(function() {
        $('.headlist').toggleClass('open-menu');
    });



    $('.headlist li').click(function() {
        $('.headlist').toggleClass('open-menu');
    });



    $('.garden-btn').click(function() {
        if (!$('.plancon').hasClass('blur') && !$('.lawcon').hasClass('blur') && 
        $('.garcon').hasClass('blur')) {
            return;
        } else if (!$('.garcon').hasClass('blur') && $('.plancon').hasClass('blur')
        && $('.lawcon').hasClass('blur')) {
            $('.plancon').removeClass('blur');
            $('.lawcon').removeClass('blur');
            $('.garden-btn').removeClass('chosen');
        } else if ($('.garcon').hasClass('blur')) {
            $('.garcon').removeClass('blur');
            $('.garden-btn').toggleClass('chosen');
        } else if (!$('.garcon').hasClass('blur') && $('.plancon').hasClass('blur')
        || $('.lawcon').hasClass('blur')) {
            $('.garcon').toggleClass('blur');
            $('.garden-btn').removeClass('chosen');
        } else if ($('.plancon').hasClass('blur') && $('.lawcon').hasClass('blur')) {
            return;
        } else if ($('.lawcon').hasClass('blur')) {
            $('.plancon').toggleClass('blur');
            $('.garden-btn').toggleClass('chosen');
        } else if ($('.plancon').hasClass('blur')) {
            $('.lawcon').toggleClass('blur');
            $('.garden-btn').toggleClass('chosen');
        } else {
            $('.lawcon').toggleClass('blur');
            $('.plancon').toggleClass('blur');
            $('.garden-btn').toggleClass('chosen');
        };
    });
    $('.lawn-btn').click(function() {
        if (!$('.plancon').hasClass('blur') && !$('.garcon').hasClass('blur') && 
        $('.lawcon').hasClass('blur')) {
            return;
        } else if (!$('.lawcon').hasClass('blur') && $('.plancon').hasClass('blur')
        && $('.garcon').hasClass('blur')) {
            $('.plancon').removeClass('blur');
            $('.garcon').removeClass('blur');
            $('.lawn-btn').removeClass('chosen');
        } else if ($('.lawcon').hasClass('blur')) {
            $('.lawn-btn').toggleClass('chosen');
            $('.lawcon').removeClass('blur');
        } else if (!$('.lawcon').hasClass('blur') && $('.plancon').hasClass('blur')
        || $('.garcon').hasClass('blur')) {
            $('.lawcon').toggleClass('blur');
            $('.lawn-btn').removeClass('chosen');
        } else if ($('.garcon').hasClass('blur') && $('.plancon').hasClass('blur')) {
            return;
        } else if ($('.garcon').hasClass('blur')) {
            $('.plancon').toggleClass('blur');
            $('.lawn-btn').toggleClass('chosen');
        } else if ($('.plancon').hasClass('blur')) {
            $('.garcon').toggleClass('blur');
            $('.lawn-btn').toggleClass('chosen');
        } else {
            $('.garcon').toggleClass('blur');
            $('.plancon').toggleClass('blur');
            $('.lawn-btn').toggleClass('chosen');
        };
    });
    $('.plant-btn').click(function() {
        if (!$('.lawcon').hasClass('blur') && !$('.garcon').hasClass('blur') && 
        $('.plancon').hasClass('blur')) {
            return;
        } else if (!$('.plancon').hasClass('blur') && $('.lawcon').hasClass('blur')
        && $('.garcon').hasClass('blur')) {
            $('.lawcon').removeClass('blur');
            $('.garcon').removeClass('blur');
            $('.plant-btn').removeClass('chosen');
        } else if ($('.plancon').hasClass('blur')) {
            $('.plancon').removeClass('blur');
            $('.plant-btn').toggleClass('chosen');
        } else if (!$('.plancon').hasClass('blur') && $('.lawcon').hasClass('blur')
        || $('.garcon').hasClass('blur')) {
            $('.plancon').toggleClass('blur');
            $('.plant-btn').removeClass('chosen');
        
        } else if ($('.garcon').hasClass('blur') && $('.lawcon').hasClass('blur')) {
            return;
        } else if ($('.garcon').hasClass('blur')) {
            $('.lawcon').toggleClass('blur');
            $('.plant-btn').toggleClass('chosen');
        } else if ($('.lawcon').hasClass('blur')) {
            $('.garcon').toggleClass('blur');
            $('.plant-btn').toggleClass('chosen');
        } else {
            $('.garcon').toggleClass('blur');
            $('.lawcon').toggleClass('blur');
            $('.plant-btn').toggleClass('chosen');
        };
    });





    
    
    $('.clickable-1').click(function() {
        if ($('.added-info1').hasClass('hidden') && $('.added-info2').hasClass('hidden')
        && $('.added-info3').hasClass('hidden')) {
            if ($('.city').hasClass('city-active') && !$('.choose-city').hasClass('hidden')) {
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city').removeClass('city-active');
                $('.city-button').removeClass('delete-shadow');
                $('.arrow-btn').removeClass('city-active');}
            $('.btn-one-basics').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-basics').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info1').removeClass('hidden').toggleClass('opened-btn');
            $('.basics').toggleClass('opened');
        } else if ($('.added-info1').hasClass('opened-btn')) {
            $('.btn-one-basics').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-basics').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info1').removeClass('opened-btn').toggleClass('hidden');
            $('.basics').removeClass('opened');
        } else if ($('.added-info1').hasClass('hidden') && 
        $('.added-info2').hasClass('opened-btn')) {
            $('.btn-one-standard').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-standard').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info2').removeClass('opened-btn').toggleClass('hidden');
            $('.standard').removeClass('opened');
            
            $('.btn-one-basics').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-basics').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info1').removeClass('hidden').toggleClass('opened-btn');
            $('.basics').toggleClass('opened');
        } else if ($('.added-info1').hasClass('hidden') && 
        $('.added-info3').hasClass('opened-btn')) {
            $('.btn-one-pro-care').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-pro-care').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info3').removeClass('opened-btn').toggleClass('hidden');
            $('.pro-care').removeClass('opened');

            $('.btn-one-basics').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-basics').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info1').removeClass('hidden').toggleClass('opened-btn');
            $('.basics').toggleClass('opened');
        }
    });
    $('.clickable-2').click(function() {
        if ($('.added-info1').hasClass('hidden') && $('.added-info2').hasClass('hidden')
        && $('.added-info3').hasClass('hidden')) { 
            if ($('.city').hasClass('city-active') && !$('.choose-city').hasClass('hidden')) {
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city').removeClass('city-active');
                $('.city-button').removeClass('delete-shadow');
                $('.arrow-btn').removeClass('city-active');}
            $('.btn-one-standard').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-standard').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info2').removeClass('hidden').toggleClass('opened-btn');
            $('.standard').toggleClass('opened');
        } else if ($('.added-info2').hasClass('opened-btn')) {  
            $('.btn-one-standard').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-standard').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info2').removeClass('opened-btn').toggleClass('hidden');
            $('.standard').removeClass('opened');
        }  else if ($('.added-info2').hasClass('hidden') && 
        $('.added-info1').hasClass('opened-btn')) {
            $('.btn-one-basics').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-basics').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info1').removeClass('opened-btn').toggleClass('hidden');
            $('.basics').removeClass('opened');

            $('.btn-one-standard').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-standard').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info2').removeClass('hidden').toggleClass('opened-btn');
            $('.standard').toggleClass('opened');
        }  else if ($('.added-info2').hasClass('hidden') && 
        $('.added-info3').hasClass('opened-btn')) {
            $('.btn-one-pro-care').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-pro-care').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info3').removeClass('opened-btn').toggleClass('hidden');
            $('.pro-care').removeClass('opened');

            $('.btn-one-standard').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-standard').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info2').removeClass('hidden').toggleClass('opened-btn');
            $('.standard').toggleClass('opened');
        }
    });
    $('.clickable-3').click(function() {
        if ($('.added-info1').hasClass('hidden') && $('.added-info2').hasClass('hidden')
        && $('.added-info3').hasClass('hidden')) {
            if ($('.city').hasClass('city-active') && !$('.choose-city').hasClass('hidden')) {
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city').removeClass('city-active');
                $('.city-button').removeClass('delete-shadow');
                $('.arrow-btn').removeClass('city-active');}
            $('.btn-one-pro-care').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-pro-care').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info3').removeClass('hidden').toggleClass('opened-btn');
            $('.pro-care').toggleClass('opened');
        } else if ($('.added-info3').hasClass('opened-btn')) {  
            $('.btn-one-pro-care').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-pro-care').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info3').removeClass('opened-btn').toggleClass('hidden');
            $('.pro-care').removeClass('opened');
        } else if ($('.added-info3').hasClass('hidden') && 
        $('.added-info1').hasClass('opened-btn')) {
            $('.btn-one-basics').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-basics').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info1').removeClass('opened-btn').toggleClass('hidden');
            $('.basics').removeClass('opened');

            $('.btn-one-pro-care').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-pro-care').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info3').removeClass('hidden').toggleClass('opened-btn');
            $('.pro-care').toggleClass('opened');
        } else if ($('.added-info3').hasClass('hidden') && 
        $('.added-info2').hasClass('opened-btn')) {
            $('.btn-one-standard').removeClass('hidden').toggleClass('little-btn');
            $('.btn-two-standard').removeClass('little-btn-opened').toggleClass('hidden');
            $('.added-info2').removeClass('opened-btn').toggleClass('hidden');
            $('.standard').removeClass('opened');

            $('.btn-one-pro-care').removeClass('little-btn').toggleClass('hidden');
            $('.btn-two-pro-care').removeClass('hidden').toggleClass('little-btn-opened');
            $('.added-info3').removeClass('hidden').toggleClass('opened-btn');
            $('.pro-care').toggleClass('opened');
        }
    });







    $('.city-button').click(function() {
        if ($('.city').hasClass('city-active') && !$('.choose-city').hasClass('hidden')) {
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city').removeClass('city-active');
            $('.city-button').removeClass('delete-shadow');
            $('.arrow-btn').removeClass('city-active');
        } else if ($('.city').hasClass('city-active')) {
            if ($('.added-info1').hasClass('opened-btn')) {
                $('.btn-one-basics').removeClass('hidden').toggleClass('little-btn');
                $('.btn-two-basics').removeClass('little-btn-opened').toggleClass('hidden');
                $('.added-info1').removeClass('opened-btn').toggleClass('hidden');
                $('.basics').removeClass('opened');
            } else if ($('.added-info2').hasClass('opened-btn')) {
                $('.btn-one-standard').removeClass('hidden').toggleClass('little-btn');
                $('.btn-two-standard').removeClass('little-btn-opened').toggleClass('hidden');
                $('.added-info2').removeClass('opened-btn').toggleClass('hidden');
                $('.standard').removeClass('opened');
            } else if ($('.added-info3').hasClass('opened-btn')) {
                $('.btn-one-pro-care').removeClass('hidden').toggleClass('little-btn');
                $('.btn-two-pro-care').removeClass('little-btn-opened').toggleClass('hidden');
                $('.added-info3').removeClass('opened-btn').toggleClass('hidden');
                $('.pro-care').removeClass('opened');
            };
            $('.choose-city').removeClass('hidden');
            $('.closed-btn').toggleClass('hidden');
            $('.opened-btn').removeClass('hidden');
            if (!$('.canan').hasClass('hidden')) {
                $('.canan').toggleClass('hidden');
                $('.canan-city').toggleClass('hidden');
                $('.city-city').removeClass('hidden');
            } else if (!$('.sherrill').hasClass('hidden')) {
                $('.sherrill').toggleClass('hidden');
                $('.sherrill-city').toggleClass('hidden');
                $('.city-city').removeClass('hidden');
            } else if (!$('.yonkers').hasClass('hidden')) {
                $('.yonkers').toggleClass('hidden');
                $('.yonkers-city').toggleClass('hidden');
                $('.city-city').removeClass('hidden');
            } else if (!$('.new-york').hasClass('hidden')) {
                $('.new-york').toggleClass('hidden');
                $('.new-york-city').toggleClass('hidden');
                $('.city-city').removeClass('hidden');
            }
        } else if ($('.opened-btn').hasClass('hidden')) {
            $('.choose-city').removeClass('hidden');
            $('.closed-btn').toggleClass('hidden');
            $('.opened-btn').removeClass('hidden');
            $('.city').toggleClass('city-active');
            $('.city-button').toggleClass('delete-shadow');
            $('.arrow-btn').toggleClass('city-active');

            if ($('.added-info1').hasClass('opened-btn')) {
                $('.btn-one-basics').removeClass('hidden').toggleClass('little-btn');
                $('.btn-two-basics').removeClass('little-btn-opened').toggleClass('hidden');
                $('.added-info1').removeClass('opened-btn').toggleClass('hidden');
                $('.basics').removeClass('opened');
            } else if ($('.added-info2').hasClass('opened-btn')) {
                $('.btn-one-standard').removeClass('hidden').toggleClass('little-btn');
                $('.btn-two-standard').removeClass('little-btn-opened').toggleClass('hidden');
                $('.added-info2').removeClass('opened-btn').toggleClass('hidden');
                $('.standard').removeClass('opened');
            } else if ($('.added-info3').hasClass('opened-btn')) {
                $('.btn-one-pro-care').removeClass('hidden').toggleClass('little-btn');
                $('.btn-two-pro-care').removeClass('little-btn-opened').toggleClass('hidden');
                $('.added-info3').removeClass('opened-btn').toggleClass('hidden');
                $('.pro-care').removeClass('opened');
            };
        } else if ($('.closed-btn').hasClass('hidden')) {
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city').removeClass('city-active');
            $('.city-button').removeClass('delete-shadow');
            $('.arrow-btn').removeClass('city-active');
        }
    });

    $('.ca').click(function() {
        if ($('.canan').hasClass('hidden') && $('.sherrill').hasClass('hidden') &&
        $('.yonkers').hasClass('hidden') && $('.new-york').hasClass('hidden')) {
            $('.canan').removeClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').toggleClass('hidden');
            $('.canan-city').removeClass('hidden');
        } else if ($('.canan').hasClass('hidden') && (!$('.sherrill').hasClass('hidden') ||
        !$('.yonkers').hasClass('hidden') || !$('.new-york').hasClass('hidden'))) {
            if (!$('.sherrill').hasClass('hidden')) {
                $('.sherrill').toggleClass('hidden');
                
                $('.canan').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.canan-city').removeClass('hidden');
            } else if (!$('.yonkers').hasClass('hidden')) {
                $('.yonkers').toggleClass('hidden');

                $('.canan').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.canan-city').removeClass('hidden');
            } else if (!$('.new-york').hasClass('hidden')) {
                $('.new-york').toggleClass('hidden');

                $('.canan').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.canan-city').removeClass('hidden');
            }
        } else {
            $('.canan').toggleClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').removeClass('hidden');
            $('.canan-city').toggleClass('hidden');
        }
    });   
    $('.ny').click(function() {
        if ($('.canan').hasClass('hidden') && $('.sherrill').hasClass('hidden') &&
        $('.yonkers').hasClass('hidden') && $('.new-york').hasClass('hidden')) {
            $('.new-york').removeClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').toggleClass('hidden');
            $('.new-york-city').removeClass('hidden');
        } else if ($('.new-york').hasClass('hidden') && (!$('.sherrill').hasClass('hidden') ||
        !$('.yonkers').hasClass('hidden') || !$('.canan').hasClass('hidden'))) {
            if (!$('.sherrill').hasClass('hidden')) {
                $('.sherrill').toggleClass('hidden');
                
                $('.new-york').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.new-york-city').removeClass('hidden');
            } else if (!$('.yonkers').hasClass('hidden')) {
                $('.yonkers').toggleClass('hidden');

                $('.new-york').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.new-york-city').removeClass('hidden');
            } else if (!$('.canan').hasClass('hidden')) {
                $('.canan').toggleClass('hidden');

                $('.new-york').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.new-york-city').removeClass('hidden');
            }
        } else {
            $('.new-york').toggleClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').removeClass('hidden');
            $('.new-york-city').toggleClass('hidden');
        }
    }); 
    $('.yo').click(function() {
        if ($('.canan').hasClass('hidden') && $('.sherrill').hasClass('hidden') &&
        $('.yonkers').hasClass('hidden') && $('.new-york').hasClass('hidden')) {
            $('.yonkers').removeClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').toggleClass('hidden');
            $('.yonkers-city').removeClass('hidden');
        } else if ($('.yonkers').hasClass('hidden') && (!$('.sherrill').hasClass('hidden') ||
        !$('.new-york').hasClass('hidden') || !$('.canan').hasClass('hidden'))) {
            if (!$('.sherrill').hasClass('hidden')) {
                $('.sherrill').toggleClass('hidden');
                
                $('.yonkers').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.yonkers-city').removeClass('hidden');
            } else if (!$('.new-york').hasClass('hidden')) {
                $('.new-york').toggleClass('hidden');

                $('.yonkers').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.yonkers-city').removeClass('hidden');
            } else if (!$('.canan').hasClass('hidden')) {
                $('.canan').toggleClass('hidden');

                $('.yonkers').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.yonkers-city').removeClass('hidden');
            }
        } else {
            $('.yonkers').toggleClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').removeClass('hidden');
            $('.yonkers-city').toggleClass('hidden');
        }
    });
    $('.sh').click(function() {
        if ($('.canan').hasClass('hidden') && $('.sherrill').hasClass('hidden') &&
        $('.yonkers').hasClass('hidden') && $('.new-york').hasClass('hidden')) {
            $('.sherrill').removeClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').toggleClass('hidden');
            $('.sherrill-city').removeClass('hidden');
        } else if ($('.sherrill').hasClass('hidden') && (!$('.yonkers').hasClass('hidden') ||
        !$('.new-york').hasClass('hidden') || !$('.canan').hasClass('hidden'))) {
            if (!$('.yonkers').hasClass('hidden')) {
                $('.yonkers').toggleClass('hidden');
                
                $('.sherrill').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.sherrill-city').removeClass('hidden');
            } else if (!$('.new-york').hasClass('hidden')) {
                $('.new-york').toggleClass('hidden');

                $('.sherrill').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.sherrill-city').removeClass('hidden');
            } else if (!$('.canan').hasClass('hidden')) {
                $('.canan').toggleClass('hidden');

                $('.sherrill').removeClass('hidden');
                $('.choose-city').toggleClass('hidden');
                $('.closed-btn').removeClass('hidden');
                $('.opened-btn').toggleClass('hidden');
                $('.city-city').toggleClass('hidden');
                $('.sherrill-city').removeClass('hidden');
            }
        } else {
            $('.sherrill').toggleClass('hidden');
            $('.choose-city').toggleClass('hidden');
            $('.closed-btn').removeClass('hidden');
            $('.opened-btn').toggleClass('hidden');
            $('.city-city').removeClass('hidden');
            $('.sherrill-city').toggleClass('hidden');
        }
    });
});