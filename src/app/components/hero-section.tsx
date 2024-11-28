import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ml-8 ">
      {/* Left Side - Text Section */}

      <div className="mt-10 md:mt-20 text-center md:text-left ">
        <h1 className=" text-4xl md:text-7xl text-[#42454A] mb-1">{"LET'S"} RIDE </h1>

        <h1 className=" text-4xl md:text-7xl font-bold text-[#42454A] "> THE FUTURE.</h1>

        {/* Underline */}

        <div className="border-b-4 w-56 border-[#42454A] mt-16 mb-10 hidden md:block"></div>
        {/* Description */}

        <p className="text-xl md:text-xl mt-10 md:mt-0">
          Simple and sleek design with users <br className="hidden md:block" /> in mind.
        </p>
        {/* Button with Icon */}
        <div className="flex flex-row items-center md:items-center space-x-4 gap-6 md:gap-10 mt-6 ">
          <span className="flex items-center md:items-center space-x-4">
            <FontAwesomeIcon icon={faArrowRight} height={10} width={10} className="h-8 w-8  bg-[#42454A] text-[#F7EAE3] hidden md:block" />
            <button className="text-lg font-bold text-center hidden md:block">Buy now</button>
          </span>
        

        {/* Video Section */}
        <div className="mt-8 flex gap-5">
          <p className="text-lg font-semibold hidden md:block">
            Watch our <br /> video on how <br /> it works
          </p>
          <Image src="/image/play button.png" alt="play-button" height={50} width={50} className="hidden md:block" />
        </div>
        </div>
      </div>
      {/* Right Side - Image Section */}

    
      <div className="relative w-full h-[600px] flex justify-center items-center pt-30px">
        {/* Large "01" in the background */}
    
    <Image src="/image/01.png" alt="" height={200} width={200}
    className="absolute text-[180px] font-bold  stroke-[#8B938D] stroke-2 top-[520px] right-15 left-1/2 z-0 bottom-20  "
    />
  {/* Buttons next to "01" */}
  <div className="absolute bottom-[-20px] right-0 flex  ">
          <button className="bg-transparent border-2 border-[#42454A] text-[#17181A] p-2 rounded-l-full h-[50px] w-[50px] px-4 hidden md:block ">
            <FontAwesomeIcon icon={faAngleLeft} height={20} width={20} />
          </button>
          <button className="bg-transparent border-2 border-[#42454A] text-[#17181A] p-2 rounded-r-full h-[50px] w-[50px] px-3 hidden md:block ">
            <FontAwesomeIcon icon={faAngleRight} height={20} width={20} />
          </button>
        </div>
      
      {/* Background with curved effect */}
      <div className="absolute right-0 w-[200px] md:w-[360px] h-[200px] md:h-[380px]  bg-gray-200 rounded-l-full"></div>
      
      {/* Content over the background */}
      <div className="relative z-10 flex items-center ">
        <Image
          src="/image/hero.png" // Update the path accordingly
          alt="Scooter Image"
          width={800}
          height={800}
          className="object-contain md:object-cover"
        />
      </div>
      
      </div>
      
      
    


    </section>
  );
}
