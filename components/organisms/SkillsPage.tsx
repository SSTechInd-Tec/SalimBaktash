import type { NextComponentType, NextPageContext } from "next";
import SkillsBadge from "../molecules/SkillsBadge";
import { programmingLanguages } from "@/skills";

interface Props {}

const SkillsPage: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">My Skills</h1>
      <hr />
      <div className="text-center my-5 w-10/12 m-auto">
        {programmingLanguages.map((skill) => (
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
