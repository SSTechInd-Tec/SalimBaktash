import type { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-5">So Who Am I ??? </h1>
      <hr />
      <p className="mt-5">
        My name is <b>Salim Baktash</b> and I also like <b>StarkBak</b> as my
        nickname. And currently I&apos;m <b>18</b> years old. I&apos;m a person
        who loves computer so much and have spend a lot of my time on computer,
        specially computer programming and I&apos;m a skilled person in{" "}
        <b>Web Development</b>, <b>Mobile App Development</b> and{" "}
        <b>Desktop App Development</b>. Alongside those I&apos;m also skilled in{" "}
        <b>Cloud Computing</b> Technologies and Linux. You can explore my skills
        in{" "}
        <Link className="underline text-blue-500" href={""}>
          Skills
        </Link>{" "}
        section.
      </p>
      <p className="mt-5">
        I started my computer programming journey when I was <b>12</b> years old
        after I finished MS. Office programs. I never take any in present
        computer class or course instead I learn everything by <b>Self-Study</b>
        . I have a lot of experience in computer programming but I never stop
        learning new technologies, I&apos;m a very curious person I wants to
        learn any new technology related to this field. And this habit causes
        that I become a experienced person in this age.
      </p>
      <p className="mt-5">
        Alongside computer I have some other hobbies (Computer is One of them)
        and they&apos;re:
        <ul className="list-disc my-5 mx-10">
          <li>Hand Writing</li>
          <li>Listening to Music (Specially speechless musics)</li>
          <li>Watching Movies</li>
          <li>Drinking Coffee</li>
          <li>Playing Chess</li>
          <li>Sleeping (I&apos;m a very sleepy person)</li>
          <li>Spending Time with Family and close Friends</li>
        </ul>
      </p>
      <p className="mt-5">
        My favorite color is <b>Blue</b> and colors that are like blue (like the
        colors of this site) And my favorite color pet are <b>Cats</b>.
      </p>
    </div>
  );
};

export default AboutPage;
