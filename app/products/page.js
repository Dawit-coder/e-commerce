"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
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
    name: "Wireless Earbuds",
    price: "$60",
    image: "/earbuds.jpg",
  },
  {
    id: 4,
    name: "Smart Fitness Band",
    price: "$90",
    image: "/fitness-band.jpg",
  },
  {
    id: 5,
    name: "Men’s Classic T-Shirt",
    price: "$25",
    image: "/mens-shirt.jpg",
  },
  {
    id: 6,
    name: "Women’s Summer Dress",
    price: "$45",
    image: "/womens-dress.jpg",
  },
];

export default function ProductsPage() {
  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className="rounded-lg object-cover h-56 w-full"
            />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{item.name}</h3>
            <p className="text-orange-600 font-bold text-gray-900 mt-2">{item.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
