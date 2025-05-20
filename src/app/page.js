import ParallaxEffect from "@/components/ParallaxEffect";
import SectionTwo from "@/components/SectionTwo";
import SplitText from "@/components/PinScroll";
import Image from "next/image";
import PinScroll from "@/components/PinScroll";
import TextSplit from "@/components/TextSplit";
import SectionFive from "@/components/SectionFive";
import SeeScroll from "@/components/SeeScroll";
import ImageSize from "@/components/ImageSize";
import ImageChanging from "@/components/ImageChanging";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TextSplit />
      {/* <PinScroll /> */}
      {/* <ParallaxEffect /> */}
      {/* <ImageSize /> */}
      <ImageChanging />
      {/* <SeeScroll /> */}

      <SectionFive />
    </div>
  );
}
