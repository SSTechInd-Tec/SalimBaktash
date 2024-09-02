import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

interface Props {}

const DownloadResumeButton: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="m-10 text-white sm:text-center lg:text-left">
      <Link
        href={"/SalimBaktashResume.pdf"}
        target="_blank"
        className="transition-shadow duration-700 ease-in-out bg-cyan-900 p-5 rounded-2xl text-white font-bold hover:shadow-lg hover:shadow-gray-500 "
      >
        Download Resume
      </Link>
    </div>
  );
};

export default DownloadResumeButton;
