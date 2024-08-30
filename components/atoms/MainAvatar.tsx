import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const MainAvatar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="my-16 lg:mr-20 relative w-70 h-70 lg:center">
      <div className="absolute shadow-2xl shadow-cyan-100 inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-75 rounded-[20%] transform rotate-45 z-0"></div>
      <img
        src="/avatar.png"
        alt="Profile Image"
        className="relative object-cover m-auto w-80 rounded-[20%] -translate-y-14  z-10"
      />
    </div>
  );
};

export default MainAvatar;
