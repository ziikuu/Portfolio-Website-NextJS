import React from "react";
import group6 from "./group-6.png";
{/*This is from Figma to Code And I will use this as a reference*/}
export const Stack2 = () => {
  return (
    <div className="bg-[#f9faf9] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#f9faf9] overflow-hidden w-[1440px] h-[974px]">
        <div className="relative w-[2025px] h-[1123px] left-[-211px]">
          <div className="absolute w-[1440px] h-[1024px] top-0 left-[211px] bg-[#d9d9d9]" />

          <div className="absolute w-[2025px] h-[927px] top-[196px] left-0">
            <div className="absolute w-[646px] h-[646px] top-0 left-0 bg-[#4f504e] rounded-[323px] blur-[149.1px] opacity-[0.83]" />

            <div className="absolute w-[646px] h-[646px] top-[281px] left-[1379px] bg-[#4f504e] rounded-[323px] blur-[156.4px] opacity-[0.64]" />
          </div>

          <div className="absolute w-[262px] h-[231px] top-28 left-[718px]">
            <div className="absolute w-[260px] -top-px -left-px [-webkit-text-stroke:1px_#000000] [font-family:'Playfair_Display_SC-Bold',Helvetica] font-bold text-[#151419] text-[77px] text-right tracking-[0] leading-[77px]">
              My Tech Stack
            </div>
          </div>

          <div className="absolute w-[157px] h-[222px] top-[121px] left-[988px]">
            <p className="absolute w-[155px] top-0 left-0 [font-family:'Playfair_Display_SC-Regular',Helvetica] font-normal text-[#151419] text-[22px] tracking-[0] leading-[22px]">
              These Include, But Are Not Limited To, The Technologies I Use For
              Building Websites And Software
            </p>
          </div>

          <div className="absolute w-[1182px] h-[200px] top-[369px] left-[340px]">
            <div className="absolute w-[369px] h-[22px] top-0 left-0">
              <p className="absolute w-[367px] top-0 left-0 [font-family:'Playfair_Display_SC-Regular',Helvetica] font-normal text-[#151419] text-[22px] tracking-[0] leading-[22px]">
                Tools | Frameworks | Database
              </p>
            </div>

            <img
              className="absolute w-[1182px] h-[165px] top-[35px] left-0"
              alt="Group"
              //src={group6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack2;