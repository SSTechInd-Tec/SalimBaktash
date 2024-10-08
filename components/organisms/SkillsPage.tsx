import type { NextComponentType, NextPageContext } from "next";
import SkillsBadge from "../molecules/SkillsBadge";
import { skills } from "@/skills";

interface Props {}

const SkillsPage: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">My Skills</h1>
      <hr />
      <div className="text-center my-5 lg:w-10/12 m-auto">
        {skills.map((skill) => (
          <SkillsBadge
            key={skill.skill}
            skill={skill.skill}
            photoLink={skill.photoLink}
            link={skill.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
