(function () {
	"use strict";

	if (!bodyClasses.contains("article")) {
		return;
	}

	var article = document.querySelector("article");
	article.insertAdjacentHTML("afterend", "<div id='disqus_thread'></div>");
	var disqusWrapper = document.getElementById("disqus_thread");
	var disqusWrapperTop = disqusWrapper.offsetTop;

	var scrollHandler = function () {
		window.requestAnimationFrame(scrollTest);
	};

	var scrollTest = function () {
		if ((window.scrollY + window.innerHeight + 200) > disqusWrapperTop) {
			setupDisqus();
		}
	};

	var resizeHandler = function () {
		window.requestAnimationFrame(recalcHeight);
	};

	var recalcHeight = function () {
		disqusWrapperTop = disqusWrapper.offsetTop;
	};

	window.addEventListener("scroll", scrollHandler);
	window.addEventListener("resize", resizeHandler);

	var setupDisqus = function () {
		window.removeEventListener("scroll", scrollHandler);
		window.removeEventListener("resize", resizeHandler);
		var dsq = document.createElement("script");
		dsq.type = "text/javascript";
		dsq.async = true;
		dsq.src = "//adrianosmond.disqus.com/embed.js";
		(document.getElementsByTagName('body')[0]).appendChild(dsq);
	};

	if (window.scrollY > 0) {
		scrollTest();
	}

}());