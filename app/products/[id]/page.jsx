"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Men’s Leather Jacket",
    price: "$110",
    image: "/mens-jacket.jpg",
    description: "Premium leather jacket for all occasions. Stylish and durable.",
  },
  {
    id: 2,
    name: "Women’s Handbag",
    price: "$75",
    image: "/womens-handbag.jpg",
    description: "Elegant handbag crafted from premium materials. Perfect for everyday use.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$60",
    image: "/earbuds.jpg",
    description: "Experience superior sound quality with noise cancellation technology.",
  },
  {
    id: 4,
    name: "Smart Fitness Band",
    price: "$90",
    image: "/fitness-band.jpg",
    description: "Track your health and fitness goals with real-time stats and alerts.",
  },
  {
    id: 5,
    name: "Men’s Classic T-Shirt",
    price: "$25",
    image: "/mens-shirt.jpg",
    description: "Soft cotton tee that keeps you comfortable all day long.",
  },
  {
    id: 6,
    name: "Women’s Summer Dress",
    price: "$45",
    image: "/womens-dress.jpg",
    description: "Light and breezy summer dress with floral patterns.",
  },
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find(
    (p) => p.id.toString() === params.id
  );

  if (!product) {
    return <p className="text-center mt-20 text-xl">Product not found</p>;
  }

  return (
    <section className="py-20 px-8 md:px-16 bg-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-2xl object-cover w-full"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-orange-600 text-2xl font-semibold mb-6">{product.price}</p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition font-semibold">
            Add to Cart
          </button>

          <Link href="/products" className="mt-6 text-orange-500 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
