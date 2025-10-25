export default function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-950">Shop</h1>
        <ul className="flex gap-4 text-gray-900">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
      </nav>
    );
  }
  