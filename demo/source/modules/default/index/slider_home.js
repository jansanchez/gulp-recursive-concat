
/*
Slider de la portada
@class slider_home
@main default/index
@author Carlos Huamani, Ana Reyna
 */
yOSON.AppCore.addModule("slider_home", function(Sb) {
  var catchDom, dom, functions, initialize, st;
  dom = {};
  st = {
    slider: '.slider',
    sliderImg: '.slider img',
    sliderArrows: '.slidesjs-navigation'
  };
  catchDom = function() {
    dom.slider = $(st.slider);
    dom.sliderImg = $(st.sliderImg);
    dom.sliderArrows = $(st.sliderArrows);
  };
  functions = {
    sliderHome: function() {
      if (dom.sliderImg.length > 1) {
        dom.slider.slidesjs({
          width: 745,
          height: 265,
          play: {
            active: false,
            interval: 10000,
            auto: true,
            pauseOnHover: true
          },
          pagination: {
            active: false
          }
        });
      } else {
        dom.sliderArrows.hide();
      }
    }
  };
  initialize = function(oP) {
    $.extend(st, oP);
    catchDom();
    functions.sliderHome();
  };
  return {
    init: initialize
  };
}, ['dist/libs/jquery/jquery.slides.js']);
