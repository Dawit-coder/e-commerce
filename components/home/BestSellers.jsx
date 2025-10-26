"use client";

import Image from "next/image";

const bestSellers = [
  {
    id: 1,
    name: "Men’s Leather Jacket",
    price: "$110",
    image: "/mens-jacket.jpg",
  },
  {
    id: 2,
    name: "Women’s Handbag",
    price: "$75",
    image: "/womens-handbag.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Earbuds",
    price: "$60",
    image: "/earbuds.jpg",
  },
  {
    id: 4,
    name: "Smart Fitness Band",
    price: "$90",
    image: "/fitness-band.jpg",
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-950">Best Sellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className="rounded-lg object-cover h-56 w-full"
            />
            <h3 className="text-lg text-gray-900 font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-900 font-bold mt-2">{item.price}</p>
            <button className="mt-4 bg-orange-500 text-gray-900 px-6 py-2 rounded-xl hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
