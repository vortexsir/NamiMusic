import man from "../public/images/man.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import gsap, { Linear } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

export default function HeroSection() {
  const heroImageRef = useRef(null);
  const textRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useGSAP(
    () => {
      gsap.from(heroImageRef.current, {
        duration: 2,
        x: -200,
        opacity: 0,
        ease: "power4.out",
      });
      gsap.from(textRef.current, {
        duration: 2,
        x: 200,
        opacity: 0,
        ease: "power4.out",
      });
    },
    { scope: heroImageRef }
  );

  const onHover = (e) => {
    if (!isDesktop) return;
    gsap.to(e.target, {
      duration: 0.5,
      rotate: 5,
      scale: 1.1,
      ease: "power4.out",
    });
  };

  const onHoverExit = (e) => {
    if (!isDesktop) return;
    gsap.to(e.target, {
      duration: 0.5,
      rotate: 0,
      scale: 1,
      ease: "power4.out",
    });
  };

  return (
    <div className="flex flex-col md:flex-row z-[10000] gap-8 w-full min-h-screen items-center justify-center md:justify-between px-4 md:px-16">
      <div className="flex flex-col gap-8 w-full" ref={textRef}>
        <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Discover and stream<br></br>
          your favourite music<br></br>
          with <span className="text-[#1ED760]">Nami</span>
        </h1>
        <div className="flex flex-row gap-2">
          <a
            href="https://t.me/NamiMusic_Bot"
            className="bg-[#1ED760] text-black px-4 py-2 rounded-full hover:scale-105 transition-all ease-in-out"
          >
            Try Now
          </a>
          <a
            href="https://t.me/NamiMusic_Bot?start=true"
            className="bg-black border px-4 py-2 border-white/30 rounded-full hover:scale-105 transition-all ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="relative">
        <Image
          src={man}
          width={900}
          height={900}
          alt="hero-image"
          ref={heroImageRef}
          onMouseEnter={onHover}
          onMouseLeave={onHoverExit}
        />
        <div className="absolute w-full flex flex-row gap-4 bottom-1">
          <div className="bg-black bg-opacity-50 p-4 rounded-xl border border-white/30">
            <h1 className="text-white font-semibold text-center">
              Top Choices
            </h1>
            <Separator className="my-2 bg-white/40" />
            <p className="text-white font-thin text-xs md:text-sm">
              Since only 2 months we have over 100+ active chats playing music
              everyday!
            </p>
          </div>
          <div className="bg-black bg-opacity-50 p-4 rounded-xl border border-white/30">
            <h1 className="text-white font-semibold text-center">
              High Quality
            </h1>
            <Separator className="my-2 bg-white/40" />
            <p className="text-white font-thin text-xs md:text-sm">
              Streaming music using mini-apps allows Nami to provide high
              quality music without any lag!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
