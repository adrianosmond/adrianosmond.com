(function () {
	"use strict";

	if (!bodyClasses.contains("homepage")) {
		return;
	}

	var iconSVGs;
	var aoSVG;
	var doodleSVG;
	var doodleTimeout;
	var socialMediaIcons = document.querySelector(".social-media-icons");
	var socialMediaStatement = document.querySelector(".social-media-statement");

	var init = function () {
		SVGArtist.init();
		createJSOnlyElements();
		eraseSVGS();
		setupToggles();
		setupKeyboard();
		setupDoodles();
	};

	var createJSOnlyElements = function () {
		var header = document.querySelector("header");
		header.insertAdjacentHTML("afterend","<button class='close-ao-pic' data-toggle='picture'><span class='cross'></span><span class='visually-hidden'>Close picture</span></button>");
		header.insertAdjacentHTML("beforebegin","<div class='ao-svg-holder'></div>");
		var articles = document.querySelector(".article-teasers article:last-child");
		articles.insertAdjacentHTML("afterend","<button class='emphasis click-action back-to-home' data-toggle='articles'>Back to the homepage</button>");
		socialMediaIcons.innerHTML = socialMediaIcons.innerHTML + "<button href='#' data-toggle='social' class='close-social social-media-icon'><span class='cross'></span><span class='social-media-name'>Close<span class='visually-hidden'> social media panel</span></span></button>";
	};

	var toggles = {
		"picture": {
			active: false,
			doodlesLoaded: false,
			postToggle: function () {
				if (!this.doodlesLoaded) {
					return;
				}
				if (this.active) {
					setTimeout(function () {
						SVGArtist.draw(aoSVG, undefined, 1000);
						doodleTimeout = setTimeout(function () {
							SVGArtist.draw(doodleSVG, undefined, 3000);
						}, 3000);
					}, 300);
				} else {
					clearTimeout(doodleTimeout);
					setTimeout(function () {
						SVGArtist.erase(aoSVG);
						SVGArtist.erase(doodleSVG);
					}, 300);
				}
			}
		},
		"social": {
			active: false,
			postToggle: function () {
				if (this.active) {
					socialMediaIcons.focus();
				} else {
					socialMediaStatement.focus();
				}
				if (this.active) {
					for (var i=0; i<iconSVGs.length; i++) {
						SVGArtist.drawAfterTime(iconSVGs[i], i * 300, undefined, 500);
					}
				} else {
					setTimeout(function () {
						SVGArtist.eraseAll(iconSVGs);
					}, 300);
				}
			}
		},
		"articles": {
			active: false,
			preToggle: function (e) {
				//on the homepage we don't want to follow the link
				// back to the homepage so we prevent default
				if (e) {
					e.preventDefault();
				}
				var scrollY = window.scrollY;
				if (scrollY > 0 && this.active) {
					scrollAndShowArticles(scrollY);
					return false;
				} else {
					return true;
				}
			}
		}
	};

	var scrollAndShowArticles = function (scrollY) {
		var scrollSpeed = 10;
		scrollY = Math.max(scrollY - Math.max(scrollSpeed, 2 * Math.sqrt(scrollY)), 0);
		window.scrollTo(0, scrollY);
		if (scrollY > 0) {
			window.requestAnimationFrame(function () {
				scrollAndShowArticles(scrollY);
			});
		} else {
			setTimeout(function () {
				toggle("articles");
			}, 100);
		}
	};

	var eraseSVGS = function () {
		iconSVGs = document.querySelectorAll(".social-media-icon svg");
		SVGArtist.eraseAll(iconSVGs);
	};

	var setupToggles = function () {
		var togglesEls = document.querySelectorAll("[data-toggle]");
		for (var i=0; i<togglesEls.length; i++) {
			togglesEls[i].addEventListener("click", toggle);
		}
	};

	var toggle = function (e) {
		var t = e;
		if (typeof t !== "string") {
			t = this.attributes.getNamedItem("data-toggle").value;
		}

		var obj = toggles[t];
		if (obj) {
			if (!obj.preToggle || obj.preToggle(e)) {
				bodyClasses.toggle("show-" + t);
				obj.active = !obj.active;
				if (obj.postToggle) {
					obj.postToggle();
				}
			}
		}
	};

	var setupKeyboard = function () {
		var closeSocial = document.querySelector(".close-social");
		var firstSocialMedia = document.querySelector(".social-media-icon:first-child");

		if (closeSocial) {
			closeSocial.addEventListener("blur", function (e) {
				if (!e.relatedTarget ||
					!e.relatedTarget.classList ||
					(!e.relatedTarget.classList.contains("social-media-statement") &&
						!e.relatedTarget.classList.contains("social-media-icon"))) {
					firstSocialMedia.focus();
				}
			});
		}

		
		if (firstSocialMedia) {
			firstSocialMedia.addEventListener("blur", function (e) {
				if (!e.relatedTarget ||
					!e.relatedTarget.classList ||
					!e.relatedTarget.classList.contains("social-media-icon")) {
					closeSocial.focus();
				}
			});
		}
		
		body.addEventListener("blur", function(e) {
			if (toggles["social"].active && e.relatedTarget === null) {
				if (!e.target.classList.contains("social-media-statement")) {
					toggle("social");
				}
			}
		}, true);

		body.addEventListener("touchstart", function (e) {
			if (toggles["social"].active && !e.relatedTarget) {
				if (e.touches.length === 1) {
					var target = e.touches[0].target;
					if (target === body) {
						return;
					}
					var parent = target.parentElement;
					while (parent !== body) {
						if (parent === socialMediaIcons) {
							return;
						}
						parent = parent.parentElement;
					}
					e.preventDefault();
					e.stopPropagation();
					toggle("social");
				}
			}
		});
	};

	var setupDoodles = function () {
		if (document.readyState === "complete") {
			loadDoodles();
		} else {
			document.addEventListener("readystatechange", loadDoodles);
		}
	};

	var loadDoodles = function(){
		if (document.readyState === "complete") {
			setTimeout(function() {
				var request = new XMLHttpRequest();
				request.open("GET", "/images/doodles/doodle-1.svg", true);

				request.onload = function() {
					if (request.status >= 200 && request.status < 400){
						var resp = request.responseText;
						document.querySelector(".ao-svg-holder").innerHTML = resp;
						aoSVG = document.querySelector("#me");
						doodleSVG = document.querySelector("#doodle");
						SVGArtist.erase(aoSVG);
						SVGArtist.erase(doodleSVG);
						document.body.classList.toggle("ao-svg-processed");
						toggles["picture"].doodlesLoaded = true;
					}
				};

				request.send();
			}, 500);
		}
	};
	init();

}());