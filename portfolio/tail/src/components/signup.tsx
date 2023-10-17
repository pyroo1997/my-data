import React, { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="bg-slate-300 flex justify-center align-middle">
      <form className="w-[400px] h-[600px] text-center pt-[100px]">
        <h1 className="text-lg mb-[20px]">SIGN UP</h1>
        <hr className="pt-[40px]" />
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="Email Address"
          className="w-full h-[60px] bg-slate-500 text-white rounded-[5px] m-[5px] p-[10px]"
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          className="w-full h-[60px] bg-slate-500 text-white rounded-[5px] m-[5px] p-[10px]"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={passwordConfirmRef}
          className="w-full h-[60px] bg-slate-500 text-white rounded-[5px] m-[5px] p-[10px]"
        />
        <button
          type="submit"
          className="bg-gray-400 p-[5px] w-[100px] h-[40px] rounded-[2px] mb-[20px] mt-[20px]"
        >
          SIGN UP
        </button>
        <hr className="pt-[20px]" />
        <h2 className="">Already a user?</h2>
        <a href="#">
          <button className="bg-gray-400 p-[5px] w-[80px] h-[40px] rounded-[2px] mt-[20px]">
            Log in
          </button>
        </a>
      </form>
    </div>
  );
}
