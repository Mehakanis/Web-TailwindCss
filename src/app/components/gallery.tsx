import Image from "next/image"
export default function Gallery(){
    return(
        <section>
            <div className="text-center mt-10 text-[#42454A]">
                <h1 className="font-bold text-2xl">Gallery</h1> <br />
                <p>View gallery of our products and make yourself satisfied with our creation.</p>
            </div>

            <div className="flex justify-around mt-14">
                {/* left side */}
                <div className="mt-32 text-center">
                    <Image src="/image/g2.png" alt="" width={450} height={400} />
                    <br />
<ul className="space-y-6 leading-10">
                    <li className="border font-bold rounded-md border-[#42454A] text-[#42454A] p-3 px-4 text-sm leading-3">Battery Images</li>
                    <li className="border font-bold rounded-md border-[#42454A] text-[#42454A] p-2 px-4 text-sm">Spare Parts Images</li>
                
                    <li className="border font-bold rounded-md border-[#42454A] text-[#42454A] p-2 px-4 text-sm">Charging Cable Images</li>
                    </ul>
                </div>
                {/* right side */}
                <div>
                <Image src="/image/g1.png" alt="" width={450} height={400} />
                <br />
                <Image src="/image/g3.png" alt="" width={450} height={400} />

                </div>
            </div>
        </section>
    )
}