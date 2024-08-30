import type { NextComponentType, NextPageContext } from "next";
import NameAndIntroSection from "../atoms/NameAndIntroSection";
import MainContactButtons from "../atoms/MainContactButtons";
import DownloadResumeButton from "../atoms/DownloadResumeButton";
import MainAvatar from "../atoms/MainAvatar";

interface Props {}

const HomePage: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-start lg:space-x-12 space-y-8 lg:space-y-0">
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <NameAndIntroSection />
        <MainContactButtons />
        <DownloadResumeButton />
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <MainAvatar />
      </div>
    </div>
  );
};

export default HomePage;
