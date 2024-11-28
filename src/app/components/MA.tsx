import Image from "next/image";
export default function MultipleAccessories() {
  return (
    <section>
      <div className="text-center mt-12">
        <h1 className="font-bold text-3xl text-[#42454A]">
          Multiple Accessories
        </h1>{" "}
        <br />
        <p className=" text-[#42454A]">
          There are multiple modes for the scooter for your multiple needs.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around items-center mt-8  ">
        <div className="">
          <h1 className="font-bold text-3xl">Golf Bag Rock</h1>
          <ul className="list-disc leading-10 text-xl mt-2">
            <li>Material : Aluminium alloy</li>
            <li>Color : Black</li>
            <li>Capacity : 45lbs</li>
            <li>Ease : Steady & adjustable</li>
          </ul>
        </div>
        <div>
          <Image src="/image/ma1.png" alt="" width={200} height={200} />
        </div>

        <div>
          <Image src="/image/ma2.png" alt="" width={350} height={350} />
        </div>
        </div>



         <div className="flex flex-wrap justify-center md:justify-around items-center mt-8 gap-6 px-4">
            <div className="flex justify-center">
            <Image src="/image/ma3.png" alt="" width={350} height={350} className="object-contain" />
            </div >
            <div className="flex justify-center">
            <Image src="/image/ma4.png" alt="" width={150} height={150} className="object-contain"/>
            </div>
<div className="flex-1 max-w-sm text-left">
                <h1 className="font-bold text-3xl">Shopping Rack</h1>
                <ul className="list-disc leading-10 text-xl mt-4 ml-4">
                    <li>Material : Aluminium alloy</li>
                    <li>Color : Black</li>
                    <li>Capacity : 45lbs</li>
                    <li>Ease : Quick & adjustable</li>
                </ul>
            </div> 
            </div>
<div className="text-center mt-8 md:mt-2">
            <h2 className="font-bold text-center text[#42454A] mt-3 border border-[#42454A] inline-block p-3 rounded-md">More Accessories Coming Soon</h2>
            </div>
    </section>
  );
}
