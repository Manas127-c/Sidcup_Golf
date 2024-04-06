var crsr = document.querySelector("#cursor")
var b = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    b.style.left = dets.x + "px"
    b.style.top = dets.y + "px"
})



gsap.to("#nav", {
    backgroundColor: "black",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 3
    }
})