/* Additional JS for home.html view */
function homeJS () {
  window.sr = ScrollReveal({ reset: true })
    .reveal('.icon', { duration: 1000 }, 250)
    .reveal('.sr-button')
  $("#modal_pic").on('hidden.bs.modal', function () {
    $(this).data('bs.modal', null);
  });
  $("#header-btn").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
         window.location.hash = hash;
      });
    }
  });
}
/* Additional JS for p1x.html views */