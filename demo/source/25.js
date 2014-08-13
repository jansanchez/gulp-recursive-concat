
/*
25
@class 25
@main default/all
@author Ana Reyna
 */
yOSON.AppCore.addModule("25", function(Sb) {
  var catchDom, dom, functions, initialize, st, subscribeEvents;
  dom = {};
  st = {
    loginDropdown: '.login_dropdown',
    dropdownMenu: '.dropdown_menu',
    categoriesMenu: '.option',
    arrowUp: '.arrow_up',
    mobile: true
  };
  catchDom = function() {
    dom.loginDropdown = $(st.loginDropdown);
    dom.dropdownMenu = $(st.dropdownMenu);
    dom.categoriesMenu = $(st.categoriesMenu);
    dom.arrowUp = $(st.arrowUp);
  };
  subscribeEvents = function() {
    $(st.loginDropdown).on('mouseenter', function() {
      $(this).prev().addClass('active');
    });
    dom.arrowUp.on('mouseenter', function() {
      $(this).prev().addClass('active');
    });
    $(st.loginDropdown).on('mouseleave', function() {
      $(this).prev().removeClass('active');
    });
    dom.dropdownMenu.on('mouseenter', function() {
      var categoryMenu;
      categoryMenu = $(this).parent().find('.option');
      categoryMenu.addClass('active');
    });
    dom.dropdownMenu.on('mouseleave', function() {
      dom.categoriesMenu.removeClass('active');
    });
    dom.categoriesMenu.on('mouseenter', function() {
      $(this).addClass('active');
    });
    dom.categoriesMenu.on('mouseleave', function() {
      $(this).removeClass('active');
    });
  };
  functions = {
    limitCategories: function() {
      var sumCategoriesWidth;
      sumCategoriesWidth = 0;
      dom.categoriesMenu.each(function(i, e) {
        sumCategoriesWidth += $(e).outerWidth();
        if (sumCategoriesWidth > 25256) {
          $(this).hide();
        }
      });
    }
  };
  initialize = function(oP) {
    $(function() {
      $.extend(st, oP);
      if (jQuery.browser.mobile === st.mobile) {
        catchDom();
        subscribeEvents();
        functions.limitCategories();
      }
    });
  };
  return {
    init: initialize
  };
}, []);
