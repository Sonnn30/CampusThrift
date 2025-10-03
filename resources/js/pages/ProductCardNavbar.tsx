import { useState } from "react";

export default function ProductCardNavbar() {
  const [active, setActive] = useState("Best Seller");

  const tabs = ["Best Seller", "New Added", "Like New"];

  return (
    <div className="flex ml-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-5 py-4 text-2xl font-semibold transition-transform duration-300 ${
            active === tab
              ? "text-black underline decoration-blue-500 decoration-2 underline-offset-4 scale-102"
              : "text-[#AFAFAF] hover:text-black hover:underline hover:decoration-blue-500 hover:underline-offset-4 hover:scale-102"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}


// BELUM ADA LINK BUAT MASING-MASING TAB (new-added/like-new)