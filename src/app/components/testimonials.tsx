import Image from "next/image";

export default function Test() {
  return (
    <section className="bg-[#FAFAFA]  w-full max-w-[1300px] mx-auto py-8 px-4 mt-6">
      <div className="text-center mt-6">
        <h1 className="font-bold text-2xl md:text-4xl text-[#42454A] space-y-4">
          Testimonials
        </h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-10 text-[#42454A]">
        <div className=" border w-full sm:w-[350px] text-center px-4 py-8 space-y-4 bg-[#FFFFFF] border-none shadow-lg">
          <p className="">⭐⭐⭐⭐⭐</p>
          <p className="text-sm md:text-base">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure.
          </p>
          <span className="flex justify-center gap-2 items-center py-4">
            <Image src="/image/t1.png" alt="" width={40} height={40} />
            <div>
              <h2 className="font-bold text-sm">Serhiy Hipskyy</h2>
              <h3 className="text-sm">CEO Universal</h3>
            </div>
          </span>
        </div>

        <div className=" border w-full sm:w-[350px] text-center px-4 py-8 space-y-4  border-[#D8D8D8]">
          <p className="">⭐⭐⭐⭐⭐</p>
          <p className="text-sm md:text-base">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus.
          </p>
          <span className="flex justify-center gap-2 items-center py-4">
            <Image src="/image/t3.png" alt="" width={40} height={40} />
            <div>
              <h2 className="font-bold text-sm">Justus Menke</h2>
              <h3 className="text-sm">CEO Eronaman</h3>
            </div>
          </span>
        </div>
        <div className=" border w-full sm:w-[350px] text-center px-4 py-8 space-y-4  border-[#D8D8D8]">
          <p className="">⭐⭐⭐⭐⭐</p>
          <p className="text-sm md:text-base">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores.
          </p>
          <span className="flex justify-center gap-2 items-center py-4">
            <Image src="/image/t2.png" alt="" width={40} height={40} />
            <div>
              <h2 className="font-bold text-sm">Britain Eriksen</h2>
              <h3 className="text-sm">CEO Universal</h3>
            </div>
          </span>
        </div>
      </div>
      <div className="flex justify-center py-6">
      <Image src="/image/Arrows.png" alt="" width={100} height={100} />

      </div>
    </section>
  );
}
