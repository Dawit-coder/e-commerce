"use client";

export default function Newsletter() {
  return (
    <section className="py-20 px-8 md:px-16 bg-orange-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Join Our Newsletter
      </h2>
      <p className="text-gray-600 mb-8">
        Get the latest updates, new arrivals, and exclusive discounts right in your inbox.
      </p>

      <form className="flex flex-col sm:flex-row justify-center text-gray-900 items-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition font-semibold"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
