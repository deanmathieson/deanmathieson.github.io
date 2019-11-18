const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

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
/* FORM */

//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
	access_token: "pz670z2d7096uvv2uc83oy1e"
};

function js_onSuccess() {
	// remove this to avoid redirect
	window.location =
		window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
	// remove this to avoid redirect
	window.location =
		window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = document.getElementById("js_send");

function js_send() {
	sendButton.value = "Sending…";
	sendButton.disabled = true;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			js_onSuccess();
		} else if (request.readyState == 4) {
			js_onError(request.response);
		}
	};

	var subject = document.querySelector("#" + form_id_js + " [name='subject']")
		.value;
	var message = document.querySelector("#" + form_id_js + " [name='text']")
		.value;
	data_js["subject"] = subject;
	data_js["text"] = message;
	var params = toParams(data_js);

	request.open("POST", "https://postmail.invotes.com/send", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.send(params);

	return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
	var form_data = [];
	for (var key in data_js) {
		form_data.push(
			encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
		);
	}

	return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function(e) {
	e.preventDefault();
});
