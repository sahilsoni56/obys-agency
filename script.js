
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}



function loadingAnimation() {
    // Create a GSAP timeline
    var tl = gsap.timeline();

    // Animate the h1 element with a stagger effect
    tl.from("#loader h1", {
        opacity:0,
        y: 500,
        stagger: 0.2
    });

    // Animate the h4 element inside #line1-part1 with a growing number effect
    tl.from("#line1-part1 h4", {
        opacity: 0,
        onStart: function() {
            var timer = document.querySelector("#line1-part1 h4");
            var grow = 0; // Initialize grow as a number, not a string
            var intervalId = setInterval(function() {
                if (grow <= 100) {
                    timer.innerHTML = grow++;
                } else {
                    timer.innerHTML = 100;
                    clearInterval(intervalId); // Clear the interval when done
                }
            }, 35);
        }
    });

    // Animate the opacity of the h5 element inside #line3
    tl.to("#line3 h5", {
        opacity: 1
    });

    // Fade out and move up the #loader element
    tl.to("#loader h1", {
        opacity: 0,
        y: "-100%",
        duration: 0.8,
        delay: 3
    });
    tl.to("#loader", {
        y: "-100%", // Use quotes for the property value
        duration:1
    });

   

    // Animate the hero section of #page1
    tl.from("#hero1 h1 , #hero2 h1 , #hero3 h1 , #hero3 h2 , #hero4 h1", {
        y: 150,
        stagger:0.1,
        delay:0.4
    });

    tl.from(".part1 svg",{
        opacity:0
    })
}

  function cursorAnimation(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
      });
    
    Shery.makeMagnet("#nav .part2 h1 " /* Element to target.*/, {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      var vid_con = document.querySelector("#vid-container");
var vid_cursor = document.querySelector(".vid-cursor");

      var initialCursorPosition = { left:  '80%', top:'14%' };
      var vid_con = document.querySelector("#vid-container");

      // Add a single mousemove event listener to vid_con
     
        vid_con.addEventListener("mousemove", function(dets) {
            gsap.to(".vid-cursor", {
                left: dets.x + vid_con.scrollLeft, // Use clientX for horizontal position
                top: dets.y + vid_con.scrollTop // Use clientY for vertical position
            });
        });

      vid_con.addEventListener("mouseleave", function() {
        gsap.to(".vid-cursor", {
            left: initialCursorPosition.left ,
            top: initialCursorPosition.top ,
        });
        var video = document.querySelector("#vid-container video");
        var img = document.querySelector("#vid-container img");
        var flag =true;
        var icon = document.querySelector(".vid-cursor");
        vid_con.addEventListener("click",function(){
            if(flag){
                gsap.to(img,{
                    opacity:0
                })
                gsap.to(".vid-cursor",{
                    scale:0.6
                })
                icon.innerHTML = `<i class="ri-pause-line"></i>`
                video.play()
            }else{
                gsap.to(img,{
                    opacity:1
                })
                gsap.to(".vid-cursor",{
                    scale:1
                })
                icon.innerHTML = `<i class="ri-play-line"></i>`
                video.pause()
            }
            flag = !flag;
        })
    });
      
      
  }

function Sheryanima(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272682196134508},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2],"_gsap":{"id":14}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
        
        gooey:true,
    })
}

function flaganima(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    
    var flag = document.querySelector("#hero3")
    flag.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1,
            delay:0.2
        })
    })
    flag.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}

function hovering_text(){
    
var elements = document.querySelectorAll('.hover-text');

elements.forEach(function(element) {
    var first_h2 = element.querySelector('.first-h2');
    var second_h2 = element.querySelector('.second-h2');

    element.addEventListener('mouseenter', function() {
        gsap.to(first_h2, {
            y: '-100%'
        });
        gsap.to(second_h2, {
            y: '-100%'
        });
    });

    element.addEventListener('mouseleave', function() {
        gsap.to(first_h2, {
            y: '0%'
        });
        gsap.to(second_h2, {
            y: '0%'
        });
    });
});

}



Sheryanima();
  locomotive();
cursorAnimation();
loadingAnimation();
flaganima();



hovering_text();







