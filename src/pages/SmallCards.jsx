import React from 'react';
import { FaBootstrap, FaReact, FaHtml5, FaCss3Alt, FaSass, FaWordpress } from 'react-icons/fa';
import { SiShadcnui, SiRedux, SiZod } from 'react-icons/si';
import { RiTailwindCssFill, RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import smallCardData from '../data/smallcard.json';

const iconMapping = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaSass: FaSass,
  FaBootstrap: FaBootstrap,
  RiTailwindCssFill: RiTailwindCssFill,
  SiShadcnui: SiShadcnui,
  RiJavascriptFill: RiJavascriptFill,
  FaReact: FaReact,
  SiRedux: SiRedux,
  BiLogoTypescript: BiLogoTypescript,
  RiNextjsFill: RiNextjsFill,
  TbBrandFramerMotion: TbBrandFramerMotion,
  SiZod: SiZod,
  AiOutlineApi: AiOutlineApi,
  FaWordpress: FaWordpress
};

const SmallCard = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center flex-wrap gap-5 bg-[#292929] py-6">
      {smallCardData.map((item, index) => {
        const IconComponent = iconMapping[item.icon];
        if (!IconComponent) {
          console.error(`Icon ${item.icon} not found in iconMapping`);
          return null;
        }
        return (
          <div key={index} className="inline-flex h-[40px] px-[14px] py-[9px] items-center gap-[10px] bg-[#7A7A7A] rounded-lg shadow-md">
            <IconComponent size={32} />
            <p className='text-white font-medium'>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard;