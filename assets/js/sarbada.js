$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (a) {
    if ("" !== this.hash) {
      a.preventDefault();
      var b = this.hash;
      $("html, body").animate(
        { scrollTop: $(b).offset().top },
        700,
        function () {
          window.location.hash = b;
        }
      );
    }
  });
}),
  $(window).on("load", function () {
    var a = $(".portfolio-container");
    a.isotope({
      filter: ".new",
      animationOptions: { duration: 750, easing: "linear", queue: !1 },
    }),
      $(".filters a").click(function () {
        return (
          $(".filters .active").removeClass("active"),
          $(this).addClass("active"),
          a.isotope({
            filter: $(this).attr("data-filter"),
            animationOptions: { duration: 750, easing: "linear", queue: !1 },
          }),
          !1
        );
      });
  }),
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (a) {
      a.preventDefault();
      var b = new FormData(this);
      fetch(this.action, {
        method: this.method,
        body: b,
        headers: { Accept: "application/json" },
      })
        .then(function (a) {
          a.ok
            ? (alert("Message sent successfully!"), this.reset())
            : a.json().then(function (a) {
                Object.hasOwn(a, "errors")
                  ? alert(
                      "Failed to send message: " +
                        a.errors
                          .map(function (a) {
                            return a.message;
                          })
                          .join(", ")
                    )
                  : alert("Failed to send message. Please try again later.");
              });
        })
        .catch(function () {
          alert("Failed to send message. Please try again later.");
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy-load"));
    
      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy-load");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });
    
        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        // Possibly fall back to event handlers here
      }
    });
    