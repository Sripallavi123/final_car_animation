import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carImage from "@/assets/car-top-view.png";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "WELCOME ITZFIZZ";

const Index = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: trackRef.current,
        },
      });

      // Car moves across screen — end half off-screen
      tl.to(".car", {
        x: () => window.innerWidth - 150,
        ease: "none",
        duration: 1,
      }, 0);

      // Trail grows behind car (includes the clipped text)
      tl.to(".trail", {
        width: () => window.innerWidth,
        ease: "none",
        duration: 1,
      }, 0);

      // Stat boxes fade in
      tl.to("#box1", { opacity: 1, duration: 0.15 }, 0.3);
      tl.to("#box2", { opacity: 1, duration: 0.15 }, 0.45);
      tl.to("#box3", { opacity: 1, duration: 0.15 }, 0.5);
      tl.to("#box4", { opacity: 1, duration: 0.15 }, 0.65);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="section" ref={sectionRef} style={{ height: "300vh" }}>
      <div className="track" ref={trackRef}>
        <div className="road">
          <img src={carImage} alt="car" className="car" />
          {/* Trail with text inside — text is clipped by trail width */}
          <div className="trail" style={{ width: 75 }}>
            <div className="value-add">
              {HEADLINE}
            </div>
          </div>
        </div>

        {/* Top-right stat cards */}
        <div
          id="box1"
          className="text-box stat-yellow"
          style={{ top: "8%", right: "28%" }}
        >
          <span className="num-box">58%</span>
          <span className="stat-label">Increase in pick up point use</span>
        </div>

        <div
          id="box3"
          className="text-box stat-dark"
          style={{ top: "8%", right: "5%" }}
        >
          <span className="num-box">27%</span>
          <span className="stat-label">Increase in pick up point use</span>
        </div>

        {/* Bottom-right stat cards */}
        <div
          id="box2"
          className="text-box stat-blue"
          style={{ bottom: "8%", right: "28%" }}
        >
          <span className="num-box">23%</span>
          <span className="stat-label">Decreased in customer phone calls</span>
        </div>

        <div
          id="box4"
          className="text-box stat-orange"
          style={{ bottom: "8%", right: "5%" }}
        >
          <span className="num-box">40%</span>
          <span className="stat-label">Decreased in customer phone calls</span>
        </div>
      </div>
    </div>
  );
};

export default Index;