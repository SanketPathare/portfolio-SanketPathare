import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import TimeClock from "@/components/TimeClock";
import RadioStation from "@/components/RadioStation";
import BuyMeACoffee from "@/components/BuyMeACoffee";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2">
        <TimeClock />
        <RadioStation />
      </div>
      <Principles />
      <div className="pb-12">
        <BuyMeACoffee />
      </div>
    </>
  );
}
