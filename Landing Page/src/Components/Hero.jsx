import React from "react";

export default function Hero() {
  return (
    <section className="py-12 px-5 flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h1 className="text-[40px] font-bold leading-12">
          Teach students worldwide
        </h1>
        <p className="mt-5">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>
      </div>

      {/* Button */}
      <div className="flex gap-10">
        <button className="bg-[#EA580C] rounded-lg px-6 py-3 font-medium text-white">
          Sign Up Now
        </button>
        <button className="bg-[#fff] rounded-lg px-5 py-3 font-medium text-[#2563EB]">
          <img src="" alt="" />
          View Demo
        </button>
      </div>

      {/*logos  */}
      <div className="text-[#475569]">
        <h1 >Trusted by leading companies</h1>
      </div>
    </section>
  );
}
