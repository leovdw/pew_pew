module.exports = function() {
  var clickDelay      = 500,
      clickDelayTimer = null,
      burger_menu     = document.querySelector('.burger-menu-sidebar');

  $('.burger-click-region').on('click', function () {

    if(clickDelayTimer === null) {

      var $burger = $(this);
      $burger.toggleClass('active');
      burger_menu.classList.toggle('is-open');

      if(!$burger.hasClass('active')) {
        $burger.addClass('closing');
      }

      clickDelayTimer = setTimeout(function () {
        $burger.removeClass('closing');
        clearTimeout(clickDelayTimer);
        clickDelayTimer = null;
      }, clickDelay);
    }
  });
}
