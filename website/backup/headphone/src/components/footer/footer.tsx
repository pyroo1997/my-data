import { Navigate, PhonePortraitOutline, MailOutline } from "react-ionicons";
import paymentImg from "../../assets/payments.png";

export default function Footer() {
  return (
    <footer>
      <div className="lg:flex">
        <div className="text-left p-6 lg:w-[35%] lg:p-8">
          <h1 className="text-xl text-gray-600 pb-2 lg:pb-4">About</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            suscipit omnis quaerat quae in reiciendis voluptas inventore laborum
            laboriosam, maxime obcaecati, repudiandae non provident! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Magni dolores vitae!
          </p>
        </div>
        <div className="text-left p-6 lg:w-[35%] lg:p-8">
          <h1 className="text-xl text-gray-600 pb-2 lg:pb-4">Contact</h1>
          <div className="flex items-center pb-4">
            <Navigate color={"#b4b4b4"} />
            <p className="text-sm text-gray-400 pl-4">
              Kayalam Rd, Punnamada, Kottanklangara, Alappuzha, Kerela, 688006
            </p>
          </div>
          <div className="flex items-center pb-4">
            <PhonePortraitOutline color={"#b4b4b4"} />
            <p className="text-sm text-gray-400 pl-4">Phone: 0465 675 3455</p>
          </div>
          <div className="flex items-center pb-4">
            <MailOutline color={"#b4b4b4"} />
            <p className="text-sm text-gray-400 pl-4">
              Email: snoxenxd@gmail.com
            </p>
          </div>
        </div>
        <div className="flex lg:w-[40%] lg:p-8">
          <div className="p-4 w-[50%] lg:p-0">
            <h1 className="text-xl text-gray-600 pb-4 lg:pb-4">Categories</h1>
            <ul className="">
              <li className="text-sm text-gray-400 pb-2">Headphones</li>
              <li className="text-sm text-gray-400 pb-2">Smart Watches</li>
              <li className="text-sm text-gray-400 pb-2">Bluetooth Speakers</li>
              <li className="text-sm text-gray-400 pb-2">Wireless Earbuds</li>
              <li className="text-sm text-gray-400 pb-2">Home Theater</li>
              <li className="text-sm text-gray-400 pb-2">Projecters</li>
            </ul>
          </div>
          <div className="p-4 w-[50%] lg:p-0">
            <h1 className="text-xl text-gray-600 pb-4">Pages</h1>
            <ul>
              <li className="text-sm text-gray-400 pb-2">Home</li>
              <li className="text-sm text-gray-400 pb-2">About</li>
              <li className="text-sm text-gray-400 pb-2">Privacy Policy</li>
              <li className="text-sm text-gray-400 pb-2">Returns</li>
              <li className="text-sm text-gray-400 pb-2">Terms & Conditions</li>
              <li className="text-sm text-gray-400 pb-2">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mb-4 w-[90%] mx-auto bg-gray-300 h-[1px]" />
      <div className="flex-col justify-center items-center pb-8">
        <h3 className="text-gray-400 text-center w-[80%] mx-auto pb-4">
          PRAROOPSTORE 2023 CREATED BY JATIN THAKUR - A WEB DEV!
        </h3>
        <div>
          <img className="mx-auto" src={paymentImg} alt="" />
        </div>
      </div>
    </footer>
  );
}
