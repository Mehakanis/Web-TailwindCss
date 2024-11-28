// import Image from "next/image"
// export default function Footer(){
//     return(
//         <section className="w-full">
//             <div className="text-center py-12 px-4 space-y-4">
//                 <h1 className="font-bold text-2xl md:text-3xl">Subscribe To Newsletter</h1>
//                 <p className="text-sm md:text-base">Subscribe to our newsletter to get amazing offers in future.</p>
//             </div>
//             <div className="flex flex-col md:flex-row justify-center gap-4 items-center px-4">
//                 <p className="border w-[300px] h-[60px] p-3 rounded-md align-middle border-[#F5F5F5] bg-[#FAFAFA] text-[#42454A]">Enter your email.</p>
//                 <button className="border w-[120px] h-[60px] p-3 rounded-md text-[#FBFBFB] bg-[#42454A]">Get start</button>
//             </div>
//             <div className="w-[1300px] h-[520px] bg-[#42454A] my-28 grid grid-cols-2">
//                 <div>
//                     <Image src="/image/f1.png" alt="" width={600} height={600}
//                     className="-mt-16" />
//                 </div>
            
//                     <div className="flex justify-around  items-center text-[#FBFBFB] -mt-52 mr-20 ">

// <ul className="space-y-5">
//     <li className="font-bold text-xl pb-3">About</li>
//     <li>Company</li>
//     <li>Teams</li>
//     <li>Profile</li>
//     <li>Careers</li>
// </ul>

// <h1></h1>
// <ul className="space-y-5 -mt-9">
//     <li className="font-bold text-xl pb-3">Resources</li>
//     <li>Contact</li> 
//         <li>Application</li>
//         <li> FQA Features</li>
// </ul>

// <h1></h1>
// <ul className="space-y-5 mt-7">
//     <li className="font-bold text-xl pb-3">Legals</li>
//     <li>Copyright Privacy</li>
//     <li>Policy Disclaimer</li>
//     <li>Terms</li>
//     <Image src="/image/icons.png" alt="" width={120} height={120}  
//     className="pt-6"/>
// </ul>
//                 </div>
//                 <div className="text-center">
//                 <p className="text-right text-[#FBFBFB] ml-52 pb-6 mb-4 ">© Copyright 2021. All rights reserved.</p>
//                 </div>
//                 </div>

//         </section>
//     )
// }

import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-white w-full">
      {/* Newsletter Section */}
      <div className="text-center py-12 px-4 space-y-4">
        <h1 className="font-bold text-2xl md:text-3xl text-[#42454A]">Subscribe To Newsletter</h1>
        <p className="text-sm md:text-base text-[#42454A]">Subscribe to our newsletter to get amazing offers in the future.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center px-4">
        <input
          type="email"
          placeholder="Enter your email."
          className="border w-full md:w-[300px] h-[50px] p-3 rounded-md bg-[#FAFAFA] text-[#42454A] placeholder-[#42454A] focus:outline-none"
        />
        <button className="w-full md:w-[120px] h-[50px] p-3 rounded-md text-[#FBFBFB] bg-[#42454A] hover:bg-[#333] transition">
          Get Started
        </button>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-[#42454A] mt-16 py-12 px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-4 lg:justify-between max-w-[1300px] mx-auto">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
            <Image
              src="/image/f1.png"
              alt="Footer Image"
              width={600}
              height={600}
              className="w-full max-w-[400px] lg:max-w-[600px] -mt-4"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-[#FBFBFB] text-center lg:text-left">
            {/* About Column */}
            <ul className="space-y-2">
              <li className="font-bold text-xl">About</li>
              <li>Company</li>
              <li>Teams</li>
              <li>Profile</li>
              <li>Careers</li>
            </ul>

            {/* Resources Column */}
            <ul className="space-y-2">
              <li className="font-bold text-xl">Resources</li>
              <li>Contact</li>
              <li>Application</li>
              <li>FAQ Features</li>
            </ul>

            {/* Legals Column */}
            <ul className="space-y-2">
              <li className="font-bold text-xl">Legals</li>
              <li>Copyright Privacy</li>
              <li>Policy Disclaimer</li>
              <li>Terms</li>
              <Image src="/image/icons.png" alt="Icons" width={120} height={120} className="pt-4 mx-auto lg:mx-0" />
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#FBFBFB]">© Copyright 2021. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
