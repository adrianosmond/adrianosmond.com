var SVGArtist = {};

(function (o) {
	"use strict";

	o.init = function () {
		o.drawStack = {
			"isDrawing": false,
			"pathQueues": []
		};

		o.draw = function (svg, speed, time) {
			var i;
			var paths = svg.querySelectorAll("path");
			if (paths.length > 0) {
				var pathQueue = {
					"currentPath": 0,
					"paths": []
				};

				if (!speed) {
					speed = 1;
				}

				if (time) {
					var allPathsTotalLength = 0;
					for (i=0; i<paths.length; i++) {
						allPathsTotalLength += paths[i].getTotalLength();
					}
					speed = allPathsTotalLength / time * 100 / 6;
				}

				for (i=0; i<paths.length; i++) {
					var totalLength = paths[i].getTotalLength();
					paths[i].style.strokeDasharray = totalLength + " " + totalLength;
					paths[i].style.strokeDashoffset = totalLength;
					var path = {
						"pathObj": paths[i],
						"pathLength": totalLength,
						"currentFrame": 0,
						"totalFrames": Math.floor(totalLength / speed)
					};
					pathQueue.paths.push(path);
				}

				o.drawStack.pathQueues.push(pathQueue);

				if (!o.drawStack.isDrawing) {
					o.drawStack.isDrawing = true;
					window.requestAnimationFrame(drawPath);
				}
			}
		};

		o.drawAfterTime = function (svg, timeout, speed, time) {
			setTimeout(function () {
				o.draw(svg, speed, time);
			}, timeout);
		};

		o.erase = function (svg) {
			var paths = svg.querySelectorAll("path");
			if (o.drawStack.isDrawing) {
				erase: for (var j=0; j < o.drawStack.pathQueues.length; j++) {
					var queue = o.drawStack.pathQueues[j];
					for (var k=0; k< queue.paths.length; k++) {
						var p = queue.paths[k].pathObj;
						if (paths[0] === p) {
							queue.currentPath = Number.MAX_VALUE;
							break erase;
						}
					}
				}
			}
			for (var i=0; i<paths.length; i++) {
				var l = paths[i].getTotalLength();
				paths[i].style.strokeDasharray = l + " " + (2 * l);
				paths[i].style.strokeDashoffset = l;
			}
		};

		o.eraseAll = function (svgs) {
			if (svgs.length) {
				for (var i=0; i<svgs.length; i++) {
					o.erase(svgs[i]);
				}
			} else {
				o.erase(svgs);
			}
		};

		var drawPath = function (path) {
			var stillDrawing = false;
			for (var i=0; i < o.drawStack.pathQueues.length; i++) {
				var queue = o.drawStack.pathQueues[i];
				if (queue.currentPath < queue.paths.length) {
					var pathToAnimate = queue.paths[queue.currentPath];
					pathToAnimate.currentFrame++;
					if (pathToAnimate.currentFrame === pathToAnimate.totalFrames) {
						pathToAnimate.pathObj.style.strokeDashoffset = 0;
						queue.currentPath++;
						if (queue.currentPath <= queue.paths.length) {
							pathToAnimate.currentFrame=0;
							stillDrawing = true;
						}
					} else {
						var percentage = pathToAnimate.currentFrame / pathToAnimate.totalFrames;
						pathToAnimate.pathObj.style.strokeDashoffset = Math.floor(pathToAnimate.pathLength * (1 - percentage));
						stillDrawing = true;
					}
				}
			}

			if (!stillDrawing) {
				o.drawStack.isDrawing = false;
				while (o.drawStack.pathQueues.legnth > 0) {
					o.drawStack.pathQueues.pop();
				}
			} else {
				window.requestAnimationFrame(drawPath);
			}
		};
	};
	
}(SVGArtist));