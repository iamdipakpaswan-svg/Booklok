/* script.js */

// जीएसएपी एनिमेशन - जब पेज लोड हो
gsap.from(".hero-content h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    delay: 0.5
});

gsap.from(".hero-content p", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 1.2
});

gsap.from(".btn-cta", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1.8
});

// जीएसएपी एनिमेशन - स्क्रॉल करने पर बुक ग्रिड के तत्वों को लाएं
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".book-card").forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        delay: index * 0.1 // थोड़ा देरी के साथ एक-एक करके लाएं
    });
});

// नियॉन ग्लो प्रभाव पर सूक्ष्म ग्लिच (वैकल्पिक)
function pulseNeonLogo() {
    gsap.to("#booklok-logo path", {
        duration: 1,
        stroke: "#ff00ff",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
}

pulseNeonLogo();
