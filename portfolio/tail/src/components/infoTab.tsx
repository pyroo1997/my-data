import Port from "./images/postfolio img.jpg";
import react from "./images/react.png";
import html from "./images/html.png";

export function Infotab() {
  return (
    <div className="bg-slate-200 w-screen text-center p-20 grid grid-cols-3 gap-0 place-items-stretch">
      <img src={Port} className="rounded-xl w-3/4 object-cover shadow-2xl" />
      <div className="text-left pt-10 pb-10">
        <h1 className=" text-neutral-800 font-Poppins text-5xl pb-10 w-3/4 ">
          I am a React Web Developer
        </h1>
        <p className="font-light text-xl font-Questrial text-neutral-500">
          I still am learning to practice react as a front end web tool so i can
          become better at it day by day and shift to learning react native as
          soon as possible. i hole you like my this rookie project.
        </p>
        <button className="mt-20 h-16 rounded-sm p-5 text-white bg-slate-700 transition duration-300 ease-linear hover:rounded-2xl hover:ease-in">
          Check my projects here
        </button>
      </div>
      <div className="flex flex-col justify-center p-10">
        <div className="">
          <div className=" flex text-left pl-5 h-36 ">
            <img src={react} className="h-20 " />
            <div className="pl-5 w-full">
              <h1 className="text-2xl pb-2 font-normal text-neutral-800 font-Poppins">
                React Projects
              </h1>
              <p className="text-sm font-Questrial text-neutral-500">
                Explore some of my react projects here!
              </p>
            </div>
          </div>
        </div>
        <hr className="border-neutral-400" />
        <div>
          <div className=" flex text-left pl-5 pt-20 h-36">
            <img src={html} className="h-20 " />
            <div className="pl-5 w-full">
              <h1 className="text-2xl pb-2 text-neutral-800 font-Poppins">
                Html And Css Projects
              </h1>
              <p className="text-sm font-Questrial text-neutral-500">
                Explore some of my D-HTML projects here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
