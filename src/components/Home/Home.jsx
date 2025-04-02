
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Carousel from "../carousel/Carousel";
import Stories from "../stories/Stories";
import Shik from "../card/Shik";
import Dalba from "../card/Dalba";
import Our from "../card/Our";
import Banana from "../card/Banana";
import Pikky from "../card/Pikky";




export default function Home() {
  
  return (
    <div className="mt-[20px] items-center justify-center  overflow-x-hidden">
    <Carousel/>      
    <Stories/>
    <Shik/>
    <Dalba/>
    <Banana/>
    <Pikky/>
    <Our/>
</div>
  )
}
