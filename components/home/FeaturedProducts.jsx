"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Men’s Classic T-Shirt",
    price: "1250 Birr",
    image: "/mens-shirt.jpg",
  },
  {
    id: 2,
    name: "Women’s Summer Dress",
    price: "1800 Birr",
    image: "/womens-dress.jpg",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "1400 Birr",
    image: "/headphones.jpg",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: "7000 Birr",
    image: "/smartwatch.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-orange-700">𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐝 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className="rounded-lg object-cover h-56 w-full"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-900">{item.name}</h3>
            <p className="text-orange-600 font-bold mt-2">{item.price}</p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
