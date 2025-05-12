import ParallaxEffect from "@/components/ParallaxEffect";
import SectionTwo from "@/components/SectionTwo";
import SplitText from "@/components/SplitText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SplitText />
      <ParallaxEffect />

    </div>
  );
}
