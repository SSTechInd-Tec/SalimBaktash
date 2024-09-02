import type { NextComponentType, NextPageContext } from "next";

interface Props {
  title: string;
  description: string;
  imageLink: string;
  date: string;
}

const ExperienceSectionItem: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="sm:w-12/12 lg:w-10/12 lg:mx-auto border-2 border-cyan-900 rounded-lg mt-12 p-5">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 p-4">
          <img className="m-auto rounded-full" src={props.imageLink} />
        </div>
        <div className="sm:w-2/3 p-4 mt-16">
          <h1 className="w-full text-left text-2xl font-bold p-5">
            {props.title}
            <br />
            <small>{props.date}</small>
          </h1>
          <p className="pl-7">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSectionItem;
