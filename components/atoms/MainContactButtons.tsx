import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

interface Props {}

const MainContactButtons: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="m-10 text-white sm:text-center lg:text-left">
      <Link
        href={"https://www.instagram.com/starkbaktec/"}
        target="_blank"
        className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
      >
        <IconBrandInstagram size={20} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mohammad-salim-8453a729b"}
        target="_blank"
        className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
      >
        <IconBrandLinkedin size={20} />
      </Link>
      <Link
        href={"https://github.com/SSTechInd-Tec"}
        target="_blank"
        className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
      >
        <IconBrandGithub size={20} />
      </Link>
      <Link
        href={"https://t.me/StarkBak"}
        target="_blank"
        className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
      >
        <IconBrandTelegram size={20} />
      </Link>
    </div>
  );
};

export default MainContactButtons;
