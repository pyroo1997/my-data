import react from "./images/react.png";
import html from "./images/html.png";
import bootstrap from "./images/bootstrap.png";
import figma from "./images/figma.png";
import python from "./images/python.png";
import firebase from "./images/firebase.png";
import js from "./images/js.png";
import nodejs from "./images/nodejs.png";
import sass from "./images/sass.png";
import github from "./images/github.png";
import { skillComponent } from "./skillcomponent";

export function Skills() {
  const skills = [
    {
      image: react,
      skillName: "React",
    },
    {
      image: html,
      skillName: "Html",
    },
    {
      image: bootstrap,
      skillName: "Bootstrap",
    },
    {
      image: nodejs,
      skillName: "Node.js",
    },
    {
      image: js,
      skillName: "JavaScript",
    },
    {
      image: sass,
      skillName: "SASS",
    },
    {
      image: github,
      skillName: "Github",
    },
    {
      image: python,
      skillName: "Python",
    },
    {
      image: figma,
      skillName: "Figma",
    },
    {
      image: firebase,
      skillName: "Firebase",
    },
  ];

  return (
    <div className="bg-slate-600 h-screen w-screen text-center p-20 relative">
      <h1 className=" relative text-5xl font-CinzelDecorative font-medium text-white">
        My Skills
      </h1>
      {skills.map((e) => {
        return <skillComponent image={e.image} skillName={e.skillName} />;
      })}
      {/*<div className=" relative p-20">
        <div className="grid grid-cols-5 grid-rows-2 gap-20">
          <div className="flex flex-col items-center">
            <img src={react} className="h-1/2 " />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              React
            </h1>
          </div>
          <div>
            <img src={html} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={nodejs} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={js} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={bootstrap} className="" />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={figma} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={firebase} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={github} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={python} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
          <div>
            <img src={sass} />
            <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
              react
            </h1>
          </div>
        </div>
      </div>
  */}
    </div>
  );
}
