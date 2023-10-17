import Bannerimg from "../../assets/banner-img.png";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 h-[60vh] sm:h-[50vh] md:h-[60vh] xl:w-[100%] lg:h-[100vh] 2xl:w-full">
      <div className="relative w-[100%] sm:flex h-[100vh]">
        <div className="flex-col items-center sm:w-[50%] sm:pt-[25px] md:pt-[50px]">
          <div className="">
            <h1 className="relative text-white text-center text-[50px] top-4 pb-4 sm:text-left sm:text-[80px] sm:top-[25px] sm:left-[85px] md:text-[100px] md:top-[25px] md:translate-x-[-6px] lg:translate-x-[-8px] lg:text-[150px] lg:top-[50px] xl:text-[200px]">
              SALES
            </h1>
            <p className="relative text-white text-center h-[100px] w-[100%] text-[10px] pt-4 sm:pl-[85px] sm:translate-x-[-3px] sm:text-left sm:w-[75%] sm:text-[10px] sm:pt-4 sm:pb-5 md:text-[12px] md:pt-4 md:pb-5 lg:text-[16px] lg:pt-8 xl:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              vitae esse laborum itaque tenetur optio omnis, dolorem est
              consectetur distinctio, placeat voluptate totam accusamus ipsam
              assumenda fugit voluptatem veniam dolorum.
            </p>
          </div>
          <div className="flex justify-center sm:pt-[50px] sm:block sm:relative sm:left-[85px] lg:pt-[120px] xl:pt-[140px] ">
            <button className="h-[30px] w-[80px] text-[10px] mr-4  border-solid border-white border-[1px] text-white ease-in duration-300 hover:bg-white hover:text-black hover:border-white sm:h-[20px] sm:w-[60px] sm:text-[8px] sm:mr-3 md:h-[40px] md:w-[80px] md:text-xs md:mr-4 lg:mr-8 lg:w-[150px] lg:h-[60px]">
              READ MORE
            </button>
            <button className="h-[30px] w-[80px] text-[10px] border-solid border-white bg-white border-[1px] ease-in duration-300 hover:bg-black hover:text-white hover:border-black sm:h-[20px] sm:w-[60px] sm:text-[8px] md:h-[40px] md:w-[80px] md:text-xs lg:w-[150px] lg:h-[60px]">
              SHOP NOW
            </button>
          </div>
        </div>
        <img
          className="relative z-40 m-[auto] w-[auto%] h-[25%] top-[30px] sm:m-0 sm:translate-x-[-30px] sm:w-[auto] sm:h-[35%] sm:top-[50px] md:w-[auto] md:h-[50%] md:top-[50px] lg:w-[auto] lg:h-[60%] lg:top-[100px] xl:relative xl:w-[auto%] xl:h-[100%] xl:top-10"
          src={Bannerimg}
          alt=""
        />
      </div>
    </div>
  );
}
