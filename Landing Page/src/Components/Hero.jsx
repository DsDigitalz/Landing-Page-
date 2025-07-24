import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="py-12 px-5 flex flex-col gap-5 lg:flex-row md:px-10 lg:px-20 lg:items-center xl:px-40 ">
      {/* Heading */}
      <div className="flex-1">
        <div>
          <h1 className="text-[40px] font-bold leading-13 xl:text-[72px] lg:text-[45px] lg:leading-15 xl:leading-20 2xl:w-[90%] ">
            Teach students worldwide
          </h1>
          <p className="mt-5 leading-7 md:w-[80%] 2xl:w-[80%]">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
        </div>

        {/* Button */}
        <div className="flex gap-5 md:mt-5">
          <button className="bg-[#EA580C] rounded-lg px-6 py-3 font-medium text-white">
            Sign Up Now
          </button>
          <button className="flex border border-[#2563EB] items-center gap-3 bg-[#fff] rounded-lg px-5 py-3 font-medium text-[#2563EB]">
            <FaRegCirclePlay />
            View Demo
          </button>
        </div>

        {/*logos  */}
        <div className="flex flex-col gap-4 text-[#475569] mt-5 lg:flex-row md:mt-10 lg:items-center">
          <h1>Trusted by leading companies</h1>
          <div>
            <img src="/icons.png" alt="" className="md:w-[50%] lg:w-full" />
          </div>
        </div>
      </div>

      {/* Hero-image */}
      <div className="mt-10 flex-1 lg:mt-0">
        <img src="/hero-img.png" alt="" className="md:w-[50%] lg:w-full" />
      </div>
    </section>
  );
}
