
/*
Módulo para agregar el Likebox de Facebook(falta validar en ie)
@class likebox
@main default/index
@author Jan Sanchez
 */
yOSON.AppCore.addModule("likebox", function(Sb) {
  var catchDom, dom, facebookAccount, functions, iframe, initialize, milliseconds, st;
  dom = {};
  facebookAccount = 'OferTOPLima';
  iframe = null;
  milliseconds = 350;
  st = {
    divLikebox: '.fb_likebox',
    styleInline: 'border:none; overflow:hidden; width:100%; height:290px; background:#fff; margin-top:2em;',
    url: '//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2F' + facebookAccount + '&width=1000&height=290&colorscheme=light&show_faces=true&header=true&stream=false&show_border=true'
  };
  catchDom = function() {
    dom.divLikebox = $(st.divLikebox);
  };
  functions = {
    setupIframe: function() {
      iframe = document.createElement('iframe');
      iframe.frameBorder = 0;
      iframe.scrolling = 'no';
      iframe.setAttribute("src", st.url);
      iframe.setAttribute("style", st.styleInline);
      iframe.setAttribute("allowTransparency", 'true');
    },
    appendIframe: function() {
      setTimeout(function() {
        return dom.divLikebox.append(iframe);
      }, milliseconds);
    }
  };
  initialize = function(oP) {
    return $(document).ready(function() {
      $.extend(st, oP);
      catchDom();
      functions.setupIframe();
      functions.appendIframe();
    });
  };
  return {
    init: initialize
  };
}, []);


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


/*
turn
@class turn
@main default/index
@author Jan Sanchez
 */
yOSON.AppCore.addModule("turn", function(Sb) {
  var catchDom, dom, facebookAccount, functions, iframe, initialize, milliseconds, st;
  dom = {};
  facebookAccount = 'OferTOPLima';
  iframe = null;
  milliseconds = 350;
  st = {
    divLikebox: '.fb_turn',
    styleInline: 'border:none; overflow:hidden; width:100%; height:290px; background:#fff; margin-top:2em;',
    url: '//www.facebook.com/plugins/turn.php?href=https%3A%2F%2Fwww.facebook.com%2F' + facebookAccount + '&width=1000&height=290&colorscheme=light&show_faces=true&header=true&stream=false&show_border=true'
  };
  catchDom = function() {
    dom.divLikebox = $(st.divLikebox);
  };
  functions = {
    setupIframe: function() {
      iframe = document.createElement('iframe');
      iframe.frameBorder = 0;
      iframe.scrolling = 'no';
      iframe.setAttribute("src", st.url);
      iframe.setAttribute("style", st.styleInline);
      iframe.setAttribute("allowTransparency", 'true');
    },
    appendIframe: function() {
      setTimeout(function() {
        return dom.divLikebox.append(iframe);
      }, milliseconds);
    }
  };
  initialize = function(oP) {
    return $(document).ready(function() {
      $.extend(st, oP);
      catchDom();
      functions.setupIframe();
      functions.appendIframe();
    });
  };
  return {
    init: initialize
  };
}, []);
