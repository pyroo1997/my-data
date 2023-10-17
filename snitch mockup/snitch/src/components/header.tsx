import slack from "./logos/slack-white.svg";
import bars_solid from "./logos/bars-solid.svg";
import user from "./logos/user-regular.svg";
import search from "./logos/magnifying-glass-solid.svg";
import fav from "./logos/heart-regular.svg";
import cart from "./logos/bag-shopping-solid.svg";

function Header() {
  return (
    <>
      <div className="bg-gray-400 h-[100px] w-full flex basis-1/4 items-center pl-[6%] pr-[10%]">
        <div className="flex justify-around ">
          <button>
            <img className="h-[100%] w-[8%]" src={bars_solid} />
          </button>
        </div>
        <div className="flex basis-1/2 justify-around">
          <div className="flex justify-center">
            <img className="h-[100%] w-[6.5%]" src={slack} />
            <h1 className="pl-2 text-3xl font-light tracking-widest font-bold text-white">
              SNITCH
            </h1>
          </div>
        </div>
        <div className="flex justify-end basis-1/4">
          <button>
            <img className="h-[50%] w-[50%]" src={user} />
          </button>
          <button>
            <img className="h-[50%] w-[50%]" src={search} />
          </button>
          <button>
            <img className="h-[50%] w-[50%]" src={fav} />
          </button>
          <button>
            <img className="h-[50%] w-[50%]" src={cart} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
