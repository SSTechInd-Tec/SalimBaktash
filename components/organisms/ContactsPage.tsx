import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

interface Props {}

const ContactsPage: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Stay in Touch with Me Via</h1>
      <hr />
      <div className="m-10  text-white text-left">
        <Link
          href={"mailto:sstechnologyindtec@gmail.com"}
          target="_blank"
          className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
        >
          <IconBrandGmail size={50} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/mohammad-salim-8453a729b"}
          target="_blank"
          className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
        >
          <IconBrandLinkedin size={50} />
        </Link>
        <Link
          href={"https://github.com/SSTechInd-Tec"}
          target="_blank"
          className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
        >
          <IconBrandGithub size={50} />
        </Link>
        <Link
          href={"https://t.me/StarkBak"}
          target="_blank"
          className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
        >
          <IconBrandTelegram size={50} />
        </Link>
        <Link
          href={"https://wa.me/qr/E4TMQTI6O7LSO1"}
          target="_blank"
          className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
        >
          <IconBrandWhatsapp size={50} />
        </Link>
        <Link
          href={"https://www.instagram.com/starkbaktec/"}
          target="_blank"
          className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2"
        >
          <IconBrandInstagram size={50} />
        </Link>
      </div>
      <div className="ml-10  text-white text-left flex">
        <div className="transition-shadow duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-500 m-1 inline-block text-cyan-900 border-4 border-cyan-900 rounded-full font-bold p-2">
          <IconPhone size={50} />
        </div>
        <div className="mt-5 ml-4">
          <div className="font-bold">+ (93) 787 311 374</div>{" "}
          <div className="font-bold">+ (93) 706 833 150</div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
