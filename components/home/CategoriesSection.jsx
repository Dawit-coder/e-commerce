"use client";

import Image from "next/image";

const categories = [
  { name: "𝒨𝑒𝓃’𝓈 𝐹𝒶𝓈𝒽𝒾𝑜𝓃", image: "/men.jpg" },
  { name: "𝒲𝑜𝓂𝑒𝓃’𝓈 𝐹𝒶𝓈𝒽𝒾𝑜𝓃", image: "/women.jpg" },
  { name: "𝐸𝓁𝑒𝒸𝓉𝓇𝑜𝓃𝒾𝒸𝓈 & 𝒜𝒸𝒸𝑒𝓈𝓈𝑜𝓇𝒾𝑒𝓈", image: "/electronics.jpg" },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-8 md:px-16 bg-white h-[90vh]">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-950">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 group cursor-pointer"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={500}
              height={400}
              className="w-full h-72 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-orange-700 text-2xl font-semibold tracking-wide">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
