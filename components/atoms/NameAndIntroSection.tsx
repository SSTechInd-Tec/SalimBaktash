import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const NameAndIntroSection: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="m-10 text-white sm:text-center lg:text-left">
      <h1 className="font-bold text-2xl">Hello, It&apos;s Me</h1>
      <h1 className="font-bold text-6xl my-5">Salim Baktash</h1>
      <h1 className="font-bold text-3xl">
        And I&apos;m a{" "}
        <span className="text-cyan-900">Full Stack Developer</span>
      </h1>

      <p className="my-10 text-justify">
        A passionate developer who loves creating innovative solutions to solve
        real-world problems. I&apos;m currently focusing on Web and Mobile apps
        development. Along with Web and Mobile apps development I&apos;m also
        developing new skills in other technologies that I don&apos;t know how
        to use.
      </p>
    </div>
  );
};

export default NameAndIntroSection;
