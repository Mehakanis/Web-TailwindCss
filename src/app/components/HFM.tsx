import Image from "next/image"
export default function HFM(){
    return(
        <section>
            <div className="text-center mt-5">
                <h1 className="font-bold text-3xl">High Efficiency Motor</h1>
                <br />
                <br />
                <p>More torque for powerful riding with 22% maximum hill climbing capability.</p>
                <br />
                
                <div className="flex justify-center">
                <Image src="/image/p2.png" alt="" width={800} height={500} />
                </div>
            </div>
        </section>
    )
}