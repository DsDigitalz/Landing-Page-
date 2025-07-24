import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="py-12 px-5 flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h1 className="text-[40px] font-bold leading-13">
          Teach students worldwide
        </h1>
        <p className="mt-5 leading-7">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>
      </div>

      {/* Button */}
      <div className="flex gap-5">
        <button className="bg-[#EA580C] rounded-lg px-6 py-3 font-medium text-white">
          Sign Up Now
        </button>
        <button className="flex border border-[#2563EB] items-center gap-3 bg-[#fff] rounded-lg px-5 py-3 font-medium text-[#2563EB]">
          <FaRegCirclePlay />
          View Demo
        </button>
      </div>

      {/*logos  */}
      <div className="flex flex-col gap-4 text-[#475569] mt-5">
        <h1 >Trusted by leading companies</h1>
        <img src="/icons.png" alt="" />
      </div>

      {/* Hero-image */}
      <div className="mt-10">
        <img src="/hero-img.png" alt="" />
      </div>
    </section>
  );
}
