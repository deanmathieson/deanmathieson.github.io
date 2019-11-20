$(document).ready(function() {
	const content = document.querySelector(".content");
	const left = document.querySelector(".left");
	const right = document.querySelector(".right");
	var controller = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller({
		globalSceneOptions: { triggerHook: "onEnter", duration: "200%" }
	});

	var tl = new TimelineMax({
		repeat: -1,
		repeatDelay: 1,
		yoyo: true,
		delay: 1.5
	});
	tl.to(".tag", 3.5, { text: "Creative Design Studio" });

	// parallax
	new ScrollMagic.Scene({ triggerElement: "#parallax1" })
		.setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
		.addTo(controller2);

	new ScrollMagic.Scene({ triggerElement: "#parallax2" })
		.setTween("#parallax2 > div", { y: "80%", ease: Linear.easeNone })
		.addTo(controller2);

	new ScrollMagic.Scene({ triggerElement: "#parallax3" })
		.setTween("#parallax3 > div", { y: "80%", ease: Linear.easeNone })
		.addTo(controller2);

	new ScrollMagic.Scene({ triggerElement: "#parallax4" })
		.setTween("#parallax4 > div", { y: "80%", ease: Linear.easeNone })
		.addTo(controller2);

	//overlay
	TweenMax.to(".overlayTitle", 1.5, {
		delay: 1.2,
		top: "-100%",
		ease: Expo.easeInOut
	});
	TweenMax.to(".first", 1.5, {
		delay: 1.5,
		top: "-100%",
		ease: Expo.easeInOut
	});
	TweenMax.to(".second", 1.5, {
		delay: 1.7,
		top: "-100%",
		ease: Expo.easeInOut
	});
	TweenMax.to(".third", 1.5, {
		delay: 1.9,
		top: "-100%",
		ease: Expo.easeInOut
	});

	TweenMax.from(".logo", 1, {
		delay: 2.5,
		opacity: 0,
		x: -20,
		ease: Expo.easeInOut
	});
	TweenMax.staggerFrom(
		".menu-links ul li",
		1,
		{
			delay: 2.6,
			opacity: 0,
			x: -20,
			ease: Power3.easeInOut
		},
		0.08
	);
	TweenMax.from(".tag", 1, {
		delay: 2.7,
		opacity: 0,
		x: -100,
		ease: Power3.easeInOut
	});
	/* WHO WE ARE 
	================*/
	left.addEventListener("mouseenter", () => {
		content.classList.add("hover-left");
	});
	left.addEventListener("mouseleave", () => {
		content.classList.remove("hover-left");
	});
	right.addEventListener("mouseenter", () => {
		content.classList.add("hover-right");
	});
	right.addEventListener("mouseleave", () => {
		content.classList.remove("hover-right");
	});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.fromTo(
				".who .title",
				1,
				{ opacity: 0 },
				{
					delay: 1,
					opacity: 1,
					ease: Expo.easeInOut
				}
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.staggerFrom(
				".picture",
				1,
				{
					delay: 2,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.2
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
	var scene = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.staggerFrom(
				".picture",
				1,
				{ opacity: 0 },
				{
					delay: 2,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.2
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whocontent .subtitle",
				1,
				{
					delay: 2.2,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.2
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whocontent .jobtitle",
				1,
				{
					delay: 2.4,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.2
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whocontent .desc",
				1,
				{
					delay: 2.6,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.2
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".who"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whocontent .button",
				1,
				{
					delay: 2.8,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.2
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
	/* WHAT WE DO */
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".what"
	})
		.setTween(
			TweenMax.fromTo(
				".what .title",
				1,
				{ opacity: 0 },
				{
					delay: 1,
					opacity: 1,
					ease: Expo.easeInOut
				}
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".what"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whatcontent .block .subtitle",
				1,
				{
					delay: 2,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.5
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".what"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whatcontent .block .fas",
				1,
				{
					delay: 2.4,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.5
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".what"
	})
		.setTween(
			TweenMax.staggerFrom(
				".whatcontent .block .desc",
				1,
				{
					delay: 2.6,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.5
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	/* CHUNK 3 */
	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".contact"
	})
		.setTween(
			TweenMax.fromTo(
				".contact .title",
				1,
				{ opacity: 0 },
				{
					delay: 1,
					opacity: 1,
					ease: Expo.easeInOut
				}
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".contact"
	})
		.setTween(
			TweenMax.staggerFrom(
				"#javascript_form span",
				1,
				{
					delay: 1.5,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.5
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".contact"
	})
		.setTween(
			TweenMax.staggerFrom(
				"#javascript_form input",
				1,
				{
					delay: 1.9,
					opacity: 0,
					ease: Power3.easeInOut
				},
				0.5
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);

	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".contact"
	})
		.setTween(
			TweenMax.fromTo(
				"#js_send",
				1,
				{ opacity: 0 },
				{
					delay: 3.5,
					opacity: 1,
					ease: Expo.easeInOut
				}
			)
		) // trigger a TweenMax.to tween
		.addTo(controller);
});
