import {
  LogoLinkedin,
  LogoFacebook,
  LogoTwitter,
  LogoInstagram,
} from "react-ionicons";
import NewsBgm from "../../assets/newsletter-bg.jpeg";

export default function Newsletter() {
  return (
    <div
      className="relative max-h-[350px] bg-cover bg-center h-[400px] w-[100%] flex justify-center items-center"
      style={{
        backgroundImage: `url(${NewsBgm})`,
      }}>
      <div className=" text-center h-[80%]">
        <h3 className="relative top-5 pb-8 text-gray-400 mx-auto">
          NEWSLETTER
        </h3>
        <h2 className="w-[80%] mx-auto text-xl pb-4">
          SIGN UP FOR LATEST UPDATES AND OFFERS
        </h2>
        <form className="pb-4" action="post">
          <input
            className="h-[35px] px-2 border-none outline-none"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <button
            className="ml-2 bg-purple-500 w-[80px] h-[35px] outline-0 text-white"
            type="submit">
            Signup
          </button>
        </form>
        <h4 className="text-gray-400 pb-4 text-sm">
          Will be used with accoudance with our Privacy Policy
        </h4>
        <div className="flex mx-auto w-[50%] justify-around">
          <LogoLinkedin />
          <LogoFacebook />
          <LogoTwitter />
          <LogoInstagram />
        </div>
      </div>
    </div>
  );
}
