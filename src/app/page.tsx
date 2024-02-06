import HeroForm from "@/components/Forms/HeroForm";
import Container from "@/components/container";
import Listing from "@/components/property-page/Listing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section>
        <div className="bg-cover bg-center bg-[url('/bg.png')] h-[419px] relative">
          <Image
            alt="bg"
            src="/hero-bg.png"
            height={100}
            width={100}
            className="absolute top-0 left-0 h-full w-[55%]"
          />
          <div className="h-full relative flex flex-col gap-3 px-[50px] pt-[108px]">
            <span className="text-white text-4xl">Discover your Ideal</span>
            <span className="text-[#0097cb] text-4xl">Property</span>
            <span className="text-white text-2xl">
              Explore Properties for Sale across the UK & worldwide
            </span>
          </div>
        </div>
      </section>
      <section className="px-[50px] relative w-[100%]">
        <div className=" relative top-[-50px] bg-white z-10 shadow-2xl border rounded-[8px] w-[100%] p-[30px]">
          <div>
            <HeroForm />
          </div>
        </div>
      </section>
      <Container>
        <Listing />
      </Container>
    </main>
  );
}
