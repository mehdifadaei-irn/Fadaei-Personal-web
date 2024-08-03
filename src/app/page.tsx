import MainSection from "@/components/MainSection";
import SideSection from "@/components/SideSection";
import Tile from "@/components/ui/Tile";

export default function Home() {
  return (
    <div className="w-full relative ">
      <section className=" lg:grid hidden w-full grid-cols-20 h-full overflow-y-clip z-0 absolute inset-0  ">
        {Array.from(Array(60 * 12), (m, i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="flex flex-row min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 font-sans md:py-20 lg:px-24 lg:py-0 w-full">
        <div className="lg:flex lg:justify-between lg:gap-4 w-full">
          <SideSection />
          <MainSection />
        </div>
      </div>
    </div>
  );
}
