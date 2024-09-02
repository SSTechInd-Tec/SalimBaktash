import type { NextComponentType, NextPageContext } from "next";
import ExperienceSectionItem from "../atoms/ExperienceSectionItem";
import { experiences } from "@/experiences";

interface Props {}

const ExperiencePage: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const t = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            voluptatum id incidunt exercitationem quibusdam voluptates dolor!
            Culpa excepturi similique alias, libero minima tenetur ratione nihil
            labore voluptatem temporibus debitis in.`;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">My Experience</h1>
      <hr />
      {experiences.map((experience) => (
        <ExperienceSectionItem
          title={experience.title}
          description={experience.description}
          imageLink={experience.imageLink}
          date={experience.date}
        />
      ))}
    </div>
  );
};

export default ExperiencePage;
