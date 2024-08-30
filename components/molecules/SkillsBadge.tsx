import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  skill: string;
  link: string;
  photoLink: string;
}

const SkillsBadge: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <Link href={props.link}>
      <div className="w-28 h-28 border-4 border-cyan-900 rounded-3xl p-6 m-3 inline-block">
        <img
          src={props.photoLink}
          className="w-auto h-auto m-auto"
          alt={`${props.skill} images`}
        />
      </div>
    </Link>
  );
};

export default SkillsBadge;
