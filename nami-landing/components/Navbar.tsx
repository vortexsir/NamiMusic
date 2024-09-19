import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Navbar() {
  const navbarRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(navbarRef.current, {
        duration: 2,
        y: -200,
        opacity: 0,
        ease: "power4.out",
      });
    },
    { scope: navbarRef }
  );

  return (
    <div
      className="fixed top-0 w-full bg-black/20 backdrop-blur-xl flex flex-row justify-between py-2 px-4 md:px-16 z-[100000]"
      ref={navbarRef}
    >
      <div className="flex flex-row items-center gap-1">
        <img
          src="/images/bot.jpg"
          alt="Nami Logo"
          className="w-5 h-5 rounded-full"
        />
        <h1 className="font-medium">Nami Music</h1>
      </div>
      <div className="flex-row gap-4 hidden md:flex">
        <a
          href="https://t.me/IACBotSupport"
          className="text-white font-thin hover:text-[#1ed760] transition-colors ease-in-out"
        >
          Support
        </a>
        <a
          href="https://t.me/IACNetwork"
          className="text-white font-thin hover:text-[#1ed760] transition-colors ease-in-out"
        >
          Network
        </a>
      </div>
      <div className="flex flex-row">
        <a
          href="https://t.me/NamiMusic_Bot"
          className="bg-[#1ED760] text-black px-4 py-1 rounded-full hover:scale-105 transition-all ease-in-out"
        >
          Try Now
        </a>
      </div>
    </div>
  );
}
