import DownloadResumeButton from "@/components/atoms/DownloadResumeButton";
import MainAvatar from "@/components/atoms/MainAvatar";
import MainContactButtons from "@/components/atoms/MainContactButtons";
import NameAndIntroSection from "@/components/atoms/NameAndIntroSection";
import Image from "next/image";

export default function Home() {
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
}
