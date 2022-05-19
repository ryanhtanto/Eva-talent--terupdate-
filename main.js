//section scope of evaluation
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  gsap.to("#section1-1 .mask1", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 0.5,
  });
  gsap.to("#section1-1 .mask2", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 0.5,
  });
  gsap.to("#section1-1 .orang", {
    scale: 0.85,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 0.7,
  });
  gsap.to("#section1-1 .orang", {
    scale: 1,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.to("#section1-1 .mask3", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.from("#section1-1 .solusibtn", {
    scale: 1.3,
    transformOrigin: "top left",
    duration: 0.5,
    delay: 1.2,
  });
  gsap.from("#section1-1 .kart", { opacity: 0, delay: 1.2, duration: 0.5 });
});

// parallax effect

// random 0
gsap.to("#section1-1 .random0 .panahlingkaran", {
  yPercent: -1500,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random0",
    pin:"#section1-1 .random0 .row",
    scrub: 0.01,
  }, 
});

gsap.to("#section1-1 .random0 .kart", {
  yPercent: -400,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random0",
    pin:"#section1-1 .random0 .row",
    start: "-10%",
    scrub: true
  }, 
}); 

gsap.to("#section1-1 .random0 .bgorang , #section1-1 .random0 .mask2", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random0",
    pin:"#section1-1 .random0 .row",
    start: "-10%",
    scrub: true
  }, 
});

gsap.to("#section1-1 .random0 .col1", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random0",
    pin:"#section1-1 .random0 .row",
    start: "-10%",
    scrub: true
  }, 
});

// random 1
gsap.to("#section1-1 .random1 .panahlingkaran", {
  yPercent: -1500,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random1",
    pin:"#section1-1 .random1 .row",
    scrub: 0.01,
  }, 
});

gsap.to("#section1-1 .random1 .kart", {
  yPercent: -400,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random1",
    pin:"#section1-1 .random1 .row",
    start: "-10%",
    scrub: true
  }, 
});

gsap.to("#section1-1 .random1 .bgorang , #section1-1 .random1 .mask2", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random1",
    pin:"#section1-1 .random1 .row",
    start: "-10%",
    scrub: true
  }, 
});

gsap.to("#section1-1 .random1 .col1", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random1",
    pin:"#section1-1 .random1 .row",
    start: "-10%",
    scrub: true
  }, 
});

// random 2
gsap.to("#section1-1 .random2 .panahlingkaran", {
  yPercent: -1500,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random2",
    pin:"#section1-1 .random2 .row",
    scrub: 0.01,
  }, 
});

gsap.to("#section1-1 .random2 .kart", {
  yPercent: -400,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random2",
    pin:"#section1-1 .random2 .row",
    start: "-10%",
    scrub: true
  }, 
});

gsap.to("#section1-1 .random2 .bgorang , #section1-1 .random2 .mask2", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random2",
    pin:"#section1-1 .random2 .row",
    start: "-10%",
    scrub: true
  }, 
});

gsap.to("#section1-1 .random2 .col1", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1 .random2",
    pin:"#section1-1 .random2 .row",
    start: "-10%",
    scrub: true
  }, 
});

/*section pelacakan*/
const pelacakan = gsap.timeline();
pelacakan.to("#pelacakan .mask5", {
  delay: 1,
  scaleY: 0,
  transformOrigin: "top bottom",
  duration: 100,
});

pelacakan.to("#pelacakan .mask6", {
  delay: 1.5,
  scaleY: 0,
  transformOrigin: "top bottom",
  duration: 100,
})

pelacakan.to("#pelacakan .mask1", {
  delay: 2,
  scaleY: 0,
  transformOrigin: "bottom top",
  duration: 100,
});

pelacakan.to("#pelacakan .mask2", {
  delay: 2.5,
  scaleY: 0,
  transformOrigin: "bottom top",
  duration: 100,
});

pelacakan.to("#pelacakan .mask3", {
  delay: 3,
  scaleY: 0,
  transformOrigin: "bottom top",
  duration: 100,
});

ScrollTrigger.create({
  animation: pelacakan,
  trigger: "#pelacakan",
  scrub:1,
  start: "7% top",
  end: "+=2000",
  snap: 1/5,
  pin:true,
});

//section analisa performa karyawan


pindah3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#quadrant",
    scrub: 1,
    start: "15% top",
    end: "15% top",
    // markers:true,
  },
});

const pindah = gsap.timeline();

pindah3.to(".pop-up-1", { scale: 0, transformOrigin: "center", duration: 1, delay: 0.7 });
pindah3.to(".pop-up-1", { scale: 1, transformOrigin: "center", duration: 2, delay: 1.2, display: "block" });
pindah3.to(".pop-up-2", { scale: 0, transformOrigin: "center", duration: 1, delay: 0.7 });
pindah3.to(".pop-up-2", { scale: 1, transformOrigin: "center", duration: 1, delay: 1.2, display: "block" });
// pindah.to(".percent-change-1", {duration: 2, delay: 5, text : "48%"});
// pindah.to(".percent-change-1", {duration: 2, delay: 2, text : "50%", color: '#fed25e'});
// pindah.to(".percent-change-1", {duration: 2, delay: 2, text : "55%", color: '#fed25e'});
pindah.to(".percent-change-1", {duration: 2, delay: 2, text : "60%", color: '#fed25e'});
pindah.to(".percent-change-1", {duration: 2, delay: 2, text : "67%", color: '#fed25e'});
pindah.to(".card-pindah-1", {x: "-110%", duration: 5});
if(window.innerWidth < 1337){
  pindah.to(".card-pindah-1", {x: "-112%", duration: 5});
}
pindah.to(".card-change-color-1", {backgroundColor:'#fed25e'});
pindah.to(".pop-up-1", { scale: 0, transformOrigin: "center", duration: 1, delay: 0.7 });
pindah.to(".pop-up-1", { duration: 5, delay: 0.7, zIndex: -1});
pindah.to(".pop-up-1", { scale: 1, transformOrigin: "center", duration: 1, delay: 0.7 });
pindah.to(".pop-up-2", { duration: 5, delay: 0.7, zIndex: 5});
pindah.to(".percent-change-2", {duration: 2, delay: 1.2, text : "82%", color: '#388ba6'});
pindah.to(".percent-change-2", {duration: 2, delay: 1.2, text : "70%", color: '#388ba6'});
pindah.to(".percent-change-2", {duration: 2, delay: 1.2, text : "55%", color: '#fed25e'});
// pindah.to(".percent-change-2", {duration: 2, delay: 1.2, text : "51%", color: '#fed25e'});
pindah.to(".percent-change-2", {duration: 2, delay: 1.2, text : "42%", color: '#ff8066'});
pindah.to(".card-pindah-2", {x: "333%", duration: 5});
if(window.innerWidth < 1337){
  pindah.to(".card-pindah-2", {x: "340%", duration: 5});
}
pindah.to(".card-change-color-2", {backgroundColor:'#ff8066'});
pindah.to(".card-change-color-2", {backgroundColor:'#ff8066'});

ScrollTrigger.create({
  animation: pindah,
  trigger: "#quadrant",
  pin: true,
  scrub: 1,
  start: "8% top",
  snap: 1/6,
  end: "+=2800",
  // markers:true,
});

/*section horizontal scroll (ai suggestion + skill overview)*/
const horizontal = gsap.timeline();
horizontal.to("#ai-suggestion-new .mask7", 1, { delay: 0.5, scaleY: 0, transformOrigin: "top bottom", duration: 1}, 0)
.to("#ai-suggestion-new .people", 1, { scale: 1, transformOrigin: "center bottom", duration: 3 }, 0)
horizontal.to("#ai-suggestion-new .mask8", 1, { delay: 0.5, scaleY: 0, transformOrigin: "top bottom", duration: 1}, 0)
.to("#ai-suggestion-new .people", 1, { scale: 1, transformOrigin: "center bottom", duration: 3 }, 0)
// .to("#ai-suggestion-new .bg1", 1, { scale: 1, transformOrigin: "center bottom", duration: 3 }, 0)
.to("#myBar", 1, {width: "15%", duration: 1}, 0)
.to(".circlebar", {opacity: 1, scale: 1, duration: 1}, 0);

horizontal.from(".anim-kiri, .anim-kiri-1", 1, { opacity:1, x: "-100vh", stagger:0.1, duration: 0.5}, 1)
.from(".anim-kanan", 1, { opacity:1, x: "100vh", stagger:0.1, duration: 0.5}, 1)
.to("#myBar", 1, {width: "25%", duration: 0.5}, 1);

horizontal.to(".anim-kiri, .anim-kiri-1", 1, { opacity:0, x: "-100vh", stagger:0.1, duration: 5, delay:4}, 2)
.to(".anim-kanan", 1, { opacity:0, x: "100vh", stagger:0.1, duration: 2, delay:4}, 2)
.to("#myBar", 1, {width: "50%", duration: 1, delay:4}, 2);

horizontal.to("#ai-suggestion-new .people", 1, { opacity: 0, scale: 1, transformOrigin: "center bottom", duration: 1, delay:1 }, 3)
.to("#ai-suggestion-new .card-nama", 1, {opacity: 0, duration: 1, delay:1 }, 3)
.to("#ai-suggestion-new .people2", 1, { scale: 0.9, transformOrigin: "center bottom", duration: 1, delay:5 }, 3)
.to("#ai-suggestion-new .people2", 1, { scale: 1, transformOrigin: "center bottom", duration: 1.5, delay:5 }, 3)
.to("#ai-suggestion-new .people2", 1, { opacity: 1, transformOrigin: "center bottom", duration: 1, delay:5 }, 3)
.to("#myBar", 1, {width: "75%", duration: 1, delay:4}, 3);

horizontal.to("#ai-suggestion-new .bg1", 1, { opacity: 0, scale: 1, transformOrigin: "center bottom", duration: 1, delay:1 }, 3)
.to("#ai-suggestion-new .bg2", 1, { scale: 0.9, transformOrigin: "center bottom", duration: 1, delay:5 }, 3)
.to("#ai-suggestion-new .bg2", 1, { scale: 1, transformOrigin: "center bottom", duration: 1.5, delay:5 }, 3)
.to("#ai-suggestion-new .bg2", 1, { opacity: 1, transformOrigin: "center bottom", duration: 1, delay:5 }, 3)
.to("#ai-suggestion-new .card-nama", 1, {opacity: 1, duration: 1, delay:5 }, 3)

horizontal.from(".anim-kiri-after", 1, { opacity:0, x: "-130vh", stagger:0.1, duration: 1, delay: 4}, 4)
// .to(".anim-kiri-after", 1, { opacity:1, x: "0vh", stagger:0.1, duration: 1, delay: 4}, 4)
.from(".progress-bar-1, .progress-bar-2, .progress-bar-3, .progress-bar-4", 1, {width: "0%", duration: 1}, 4)
.to(".progress-bar-1", 1, {width: "90%", duration: 1, delay: 5}, 4)
.to(".progress-bar-2", 1, {width: "75%", duration: 1, delay: 5}, 4)
.to(".progress-bar-3", 1, {width: "60%", duration: 1, delay: 5}, 4)
.to(".progress-bar-4", 1, {width: "50%", duration: 1, delay: 5}, 4)
.from(".anim-kanan-after", 1, { opacity:0, x: "100vh", stagger:0.1, duration: 1 , delay: 4, onComplete: function() {
  $('body').css('overflow-y','hidden')
  setTimeout(function(){
      $('body').css('overflow-y','scroll')
  }, 2500)
}}, 4)
// .to(".anim-kanan-after", 1, { opacity:1, x: "0vh", stagger:0.1, duration: 1 , delay: 4}, 4)
.to("#myBar", 1, {width: "100%", duration: 1, delay:6}, 4);

if(window.innerWidth < 1337){
  ScrollTrigger.create({
    animation: horizontal,
    trigger: "#ai-suggestion-new",
    scrub:1,
    snap: 1/5,
    start: "16% top",
    end: "+=3000",
    pin:true,
  });
}else{
  ScrollTrigger.create({
    animation: horizontal,
    trigger: "#ai-suggestion-new",
    scrub:1,
    snap: 1/5,
    start: "13% top",
    end: "+=3000",
    pin:true,
  });
}



/*form-section*/
/*ScrollTrigger mask animation*/
gsap.registerPlugin(ScrollTrigger);

if (window.matchMedia("(min-width: 992px)").matches) {
  const tl5 = gsap.timeline();
  tl5.fromTo(".formSection .imageforForm", { y: 500 }, { y: 0 }).fromTo(".formSection .cardforForm", { x: 1000 }, { x: 0 }, "<");

  ScrollTrigger.create({
    animation: tl5,
    trigger: ".formSection",
    start: "top center",
    end: "top center",
    toggleActions: "play none none none",
    scrub: 1,
    // markers: true,
  });
}

/*navbar*/
if (window.matchMedia("(max-width: 992px)").matches) {
  $('#nav li.dropdown>a').attr('data-bs-toggle','dropdown');
}

$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 150) {
      $("#nav .container-lg").addClass("scrolltop");
    } else {
      $("#nav .container-lg").removeClass("scrolltop");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector("#nav .navbar");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector("#nav .navbar").offsetHeight;

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end

document.querySelector('#nav .first-button').addEventListener('click', function () {

  document.querySelector('#nav .animated-icon1').classList.toggle('open');
  });

/*random content setiap refresh*/       
$(".random"+(new Date().getTime() % 3)).css("display", "block");

/*smooth scroll*/

$(".target0").click(function() {
  $('html, body').animate({
    scrollTop: $("#target0").offset().top - 70
  }, 1500);
});

$(".target1").click(function() {
  $('html, body').animate({
    scrollTop: $("#target1").offset().top - 70
  }, 1500);
});

$(".target2").click(function() {
  $('html, body').animate({
    scrollTop: $("#target2").offset().top - 70
  }, 1500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// leaderboard section
  const leaderboardCard = gsap.timeline();
  leaderboardCard
    .from(".leaderboard-card", { y: -700, duration: 1, delay: 0.5 })
    .to(".leaderboard-card", { y: -30, duration: 0.7});

  ScrollTrigger.create({
    animation: leaderboardCard,
    trigger: ".judul-leaderboard",
    start: "20% 80%",
    end: "20% 80%",
    toggleActions: "restart none none none",
    // markers: true,
  });
  
  
// Final evaluation section
const finalEvaluation = gsap.timeline();
finalEvaluation
.from(".text-final, .card-ai-one , .card-ai-two", { y: 400, duration: 1, delay: 0.1 })
.from(" .text-second", { y: 100, duration: 0.3, delay: 0.1 })
.from(".img-finalEvaluation", { opacity: 0, duration: 0.5, delay:0.1})
.from(".floating-one", { opacity: 0, duration: 0.3, delay:0.1})
.from(".floating-two", { opacity: 0, duration: 0.3, delay:0.1})
.from(".floating-three", { opacity: 0, duration: 0.3, delay:0.1})
.from(".floating-four", { opacity: 0, duration: 0.3, delay:0.1})

ScrollTrigger.create({
  animation: finalEvaluation,
  trigger: ".final-evaluation",
  start: "8% 80%",
  end: "8% 80%",
  toggleActions: "restart none none none",
  // markers: true,
});


/*section client*/
const tl3 = gsap.timeline();
tl3
  .fromTo("#section3-4 .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
  .fromTo("#section3-4 .judul", { y: 100, }, { y: 0, duration: 3 })
  .fromTo("#section3-4 .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo("#section3-4 .solusibtn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo("#section3-4 .slider", { opacity: 0 }, { opacity: 1, duration: 1 })

ScrollTrigger.create({
  animation: tl3,
  trigger: "#section3-4",
  start: "top",
  end: "top",
  toggleActions: "play none none none",
  scrub: 3,
  // markers: true
});
//--------------------------------------------------------------------------
// JAVASCRIPT FOR BLOG
function textCutter(element) {
  let cardTeks = [];
  element.forEach((el) => {
    cardTeks.push(el.textContent.substring(0, 200));
  });
  document.querySelectorAll(".card-text-extra").forEach((el, i) => {
    el.innerHTML = `${cardTeks[i]}...`;
  });
}
const cardText = document.querySelectorAll(".card-text-extra");
textCutter(cardText);

/*animasi blog*/
const tlBlog = gsap.timeline();
tlBlog
  .fromTo(".blog .judul h1", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".blog .judul p", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".blog .slider-blog", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".blog .button", { opacity: 0 }, { opacity: 1, duration: 3 });

ScrollTrigger.create({
  animation: tlBlog,
  trigger: ".blog",
  start: "top center",
  end: "top center",
  scrub: 2,
  // markers: true
});

//--------------------------------------------------------------------------
