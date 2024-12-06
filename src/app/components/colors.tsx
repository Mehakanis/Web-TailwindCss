import Image from "next/image"
export default function Color(){
    return(
        <div className="text-center space-y-4 mt-10">
            <h1 className="font-bold text-3xl text-[#42454A]">Colors</h1>
            <p className="text-[#42454A]">Checkout our products colors.</p> <br />
<div className="flex justify-center mt-20">
            <Image src="/c1.png" alt="" width={1000} height={500}
            className="mx-2" />
            </div>
            <div className=" flex justify-center">
            <Image src="/c2.png" alt="" width={800} height={500}
            className="-mt-28" />
            </div>
        </div>
    )
}