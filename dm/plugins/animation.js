const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
var controller = new ScrollMagic.Controller();

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
var scroller = new ScrollMagic({
	target: document.querySelector(".cta"), // element container to scroll
	scrollEase: 0.05
});

//overlay

TweenMax.from(".overlayTitle", 1, {
	opacity: 0,
	y: 120,
	ease: Expo.easeInOut
});
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
	y: -100,
	ease: Power3.easeInOut
});

var scene = new ScrollMagic.Scene({
	triggerElement: ".chunk1"
})
	.setTween(".chunk1 .title", 1, {
		delay: 1,
		opacity: 1,
		ease: Expo.easeInOut
	}) // trigger a TweenMax.to tween
	.addTo(controller);

var scene = new ScrollMagic.Scene({
	triggerElement: ".chunk1"
})
	.setTween(".picture", 1, {
		delay: 2,
		opacity: 1,
		ease: Expo.easeInOut
	}) // trigger a TweenMax.to tween
	.addTo(controller);

var scene = new ScrollMagic.Scene({
	triggerElement: ".chunk1"
})
	.setTween(".text .subtitle", 1, {
		delay: 2.2,
		color: "#fff",
		ease: Expo.easeInOut
	}) // trigger a TweenMax.to tween
	.addTo(controller);

var scene = new ScrollMagic.Scene({
	triggerElement: ".chunk1"
})
	.setTween(".chunk1 .title", 1, {
		delay: 2.4,
		color: "#fff",
		ease: Expo.easeInOut
	}) // trigger a TweenMax.to tween
	.addTo(controller);
var scene = new ScrollMagic.Scene({
	triggerElement: ".chunk1"
})
	.setTween(".text .desc", 1, {
		delay: 2.6,
		color: "#fff",
		ease: Expo.easeInOut
	}) // trigger a TweenMax.to tween
	.addTo(controller);
var scene = new ScrollMagic.Scene({
	triggerElement: ".chunk1"
})
	.setTween(".text .button", 1, {
		delay: 2.8,
		opacity: 1,
		ease: Expo.easeInOut
	}) // trigger a TweenMax.to tween
	.addTo(controller);

/* CHUNK 2 */
var scene2 = new ScrollMagic.Scene({
	triggerElement: ".chunk2"
})
	.setTween(
		TweenMax.fromTo(
			".chunk2 .title",
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
	triggerElement: ".chunk2"
})
	.setTween(
		TweenMax.staggerFrom(
			".chunk2content .block .subtitle",
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
	triggerElement: ".chunk2"
})
	.setTween(
		TweenMax.staggerFrom(
			".chunk2content .block .fas",
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
	triggerElement: ".chunk2"
})
	.setTween(
		TweenMax.staggerFrom(
			".chunk2content .block .desc",
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
	triggerElement: ".chunk3"
})
	.setTween(
		TweenMax.fromTo(
			".chunk3 .title",
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
	triggerElement: ".chunk2"
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
	triggerElement: ".chunk2"
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
	triggerElement: ".chunk3"
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
