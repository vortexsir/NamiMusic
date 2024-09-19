import man from "../public/images/man.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function FeaturesSection() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  useGSAP(() => {
    gsap.from(firstRef.current, {
      scrollTrigger: "#feature-1",
      duration: 2,
      x: 200,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(secondRef.current, {
      scrollTrigger: "#feature-2",
      duration: 2,
      x: -200,
      opacity: 0,
      ease: "power4.out",
    });
  });

  return (
    <div className="bg-black flex flex-col z-[1000] gap-8 w-full h-full items-center justify-center md:justify-between px-4 md:px-16">
      <h2 className="text-2xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
        Features
      </h2>
      <div className="flex flex-col gap-4 w-full px-16">
        <div className="flex flex-col-reverse md:flex-row gap-2 items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-3xl font-bold text-white">
              High Quality with <span className="italic font-thin">Zero</span>{" "}
              Lag
            </h2>
            <p className="text-white">
              Enjoy high quality audio streaming with zero lag and no buffering.
            </p>
          </div>
          <Image
            id="feature-1"
            src={"/images/1.png"}
            width={300}
            height={200}
            alt="feature 1"
            ref={firstRef}
          />
        </div>
        <Separator className="w-full md:hidden bg-white/30 rounded-full" />
        <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
          <Image
            id="feature-2"
            src={"/images/2.png"}
            width={300}
            height={200}
            alt="feature 2"
            ref={secondRef}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-3xl font-bold text-white">
              Customisable<br></br>
              <span className="font-thin">Experience</span>
            </h2>
            <p className="text-white">
              Personalise your music experience with custom playlists and
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
