import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="absolute top-0 left-0 h-screen w-full overflow-hidden">

        <Spotlight className="-top-40 -left-10 md:-left-12 md:top-10 h-screen" fill="white"/>
        <Spotlight className="top-10 left-[85%]  h-screen" fill="purple"/>
        <Spotlight className="top-28 left-80  h-screen" fill="blue"/>
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626,transparent_0.7px),linear-gradient(to_bottom,#262626,transparent_0.7px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      
    </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[80vh] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Web Magic with Nextjs
            </h2>
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl "
            words="Transforming Ideas into Seamless Digital Experiences" />
            <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl my-5">
              Hi, I'm Skedd, a passionate web developer specializing in Next.js.
            </p>
            <a href="#about">
              <MagicButton otherClasses="mt-10" title="See my Work" icon={<FaLocationArrow />} position="right" />
            </a>
        </div>

      </div>
    </div>
  )
}

export default Hero