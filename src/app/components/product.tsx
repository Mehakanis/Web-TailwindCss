import Image from "next/image"
export default function ProductInfo (){
    return (
        <section>
        <div className="text-center mt-28 md:mt-16">
            <h1 className="font-bold text-[#42454A] text-3xl">Product Information</h1>
            <br />
            <p className=" text-[#42454A]">Our Scooter has following unique design and technology features:</p>
        </div>
        <div className="flex justify-around mt-10 items-center">
            <div className="">
            <Image src="/p1.png" alt="" width={500} height={500}  />
            </div>
            <div className="mt-2 ">
                <ul className="list-disc leading-extra-loose text-xl ">
                    <li>
                    Lightweight aircraft grade aluminium frame
                    </li>
                    <li>Car grade lithium battery</li>
                    <li>Self-balanced</li>
                    <li>Plug n play</li>
                    <li>Quick release adapter</li>
                    <li>RFID key card</li>
                </ul>
            </div>

        </div>
        </section>
    )
}