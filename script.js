let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", dets => {
    cursor.style.left = dets.x - 8 + "px";
    cursor.style.top = dets.y - 8 + "px";
    cursorBlur.style.left = dets.x - 150 + "px";
    cursorBlur.style.top = dets.y - 150 + "px";
});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "108px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -20%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
    }
});