import {HeroSection}  from "@/components/custom/non-reusable";
import { CardComponent } from "../components/custom/reusable/CardComponent";
export default function Home() {
  return (
    <>
      <HeroSection/>
      <div className="flex justify-center mt-10">
      <CardComponent/>
      </div>
    </>
  );
}
