(function () {
	var header = document.getElementById("mainHeader");

	function changeHeader() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		header.classList.toggle("header-background", scrollTop >= 50 || document.body.classList.contains("nav-open"));
	}

	var didScroll = false;

	$(window).scroll(function () {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			didScroll = false;
			changeHeader();
		}
	}, 100);

	changeHeader();

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.toggle("nav-open");
		changeHeader();
	});

	$("a[href*=\\#]").on("click", function (event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
})();

// fade in
$(document).ready(function() {
  var element = document.getElementById("js-fadeInElement1");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement1").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show-left');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show-left');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });
});
$(document).ready(function() {
  var element = document.getElementById("js-fadeInElement2");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement2").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show-left');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show-left');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });
});
$(document).ready(function() {
  var element = document.getElementById("js-fadeInElement3");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement3").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show-left');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show-left');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });
});
