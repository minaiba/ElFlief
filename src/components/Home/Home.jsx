import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Carousel from "../carousel/Carousel";
import Stories from "../stories/Stories";
import Shik from "../card/Shik";
import Dalba from "../card/Dalba";


export default function Home() {
  
  return (
    <div className="mt-[30px] items-center justify-center w-[1400px] m-auto">
    <Carousel/>
    {/* <Stories/> */}
    <Shik/>
    <Dalba/>
</div>
  )
}
