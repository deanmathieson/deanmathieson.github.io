var tl = gsap.timeline({ repeat: 0 });

var rotate = 360;

// timeline for main container (circle expanding)
tl.to("#mainContainer", {
  duration: 2,
  width: "100%",
  height: "100%",
  transformOrigin: "center",
  ease: "steps.out",
});
tl.to("#mainContainer", {
  duration: 2,
  borderRadius: "0%",
});
tl.to("#mainContainer", {
  duration: 1,
});

//center block spin

var centertl = gsap.timeline({ repeat: -1 });
centertl.to("#ant", {
  rotation: 1080,
  ease: "rough.out",
  borderRadius: "0%",
  scale: 0.1,
});
centertl.to("#ant", {
  ease: "rough.out",
  borderRadius: "20%",
  scale: 1,
});

// timeline for blocks.
$(".spinning").each(function (index) {
  var tlBox = gsap.timeline({ repeat: -1, delay: index * 2 });

  tlBox.to(this, {
    duration: 2,
    x: "400",
    ease: "steps.out",
    scale: 0.5,
    backgroundColor: "red",
  });

  tlBox.to(this, {
    duration: 2,
    y: "400",
    ease: "steps.out",
    rotate: rotate,
    scale: 1,
    backgroundColor: "teal",
  });

  tlBox.to(this, {
    duration: 2,
    x: "0",
    ease: "steps.out",
    scale: 0.5,
    backgroundColor: "purple",
  });

  tlBox.to(this, {
    duration: 2,
    y: "0",
    ease: "steps.out",
    rotate: -360,
    backgroundColor: "brown",
    scale: 1,
  });
});
$(".block").click(function () {
  $(".block").css("border", "none");
  $(".info").html("");

  const dean =
    "<ul class='table'><li>Name: Dean</li><li>Age: 30ish</li><li>Stamina: questionable</li><li>Skill: Bottomless Bevvying </li></ul>";
  const fran =
    "<ul class='table'><li>Name: Fran</li><li>Age: Old</li><li>Intellect: some</li><li>Skill: Cooking Pro </li></ul>";
  const vicky =
    "<ul class='table'><li>Name: Vicky</li><li>Age: Old</li><li>Stamina: Zero </li><li>Skill: Sleep</li></ul>";
  const john =
    "<ul class='table'><li>Name: John</li><li>Age: Old</li><li>Agility: Always</li><li>Skill: high Kicks</li></ul>";
  const ant =
    "<ul class='table'><li>Name: Ant</li><li>Age: Old</li><li>Strength: lacking</li><li>Skill: Windmill Protocol </li></ul>";

  if (this.id === "dean") {
    $(".info").append(dean);
  } else if (this.id === "fran") {
    $(".info").append(fran);
  } else if (this.id === "vicky") {
    $(".info").append(vicky);
  } else if (this.id === "john") {
    $(".info").append(john);
  } else if (this.id === "ant") {
    $(".info").append(ant);
  }

  gsap.to(".table", {
    opacity: 1,
    duration: 3,
  });

  gsap.to(this, {
    border: "5px solid red",
    duration: 3,
  });

  gsap.to("li", {
    x: -100,
    stagger: 2,
    opacity: 1,
  });
});
