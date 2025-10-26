"use client";

import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative my-20 px-8 md:px-16">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/promo-banner.jpg"
          alt="Promo Banner"
          width={1200}
          height={400}
          className="w-full h-72 md:h-96 object-cover"
        />

        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Big Savings on Electronics ⚡
          </h2>
          <p className="text-white text-lg mb-6">
            Upgrade your setup — deals up to 40% off!
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
