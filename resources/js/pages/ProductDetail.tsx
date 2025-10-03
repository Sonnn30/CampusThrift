import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";

export default function ProductDetail() {
  // P.S. Dummy Data buat ntar masukin databasenya
  const product = {
    name: "Nama Produk",
    price: "Rp 1.200.000",
    rating: 4.7,
    reviewsCount: 1203,
    description: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Sed do eiusmod tempor",
    ],
    images: [
      "/images/foto1.jpg",
      "/images/foto2.jpg",
      "/images/foto3.jpg",
      "/images/foto4.jpg",
      "/images/foto5.jpg",
    ],
    shipping: {
      method: ["COD", "Drop & Pick"],
      seller: "Nama Penjual",
      ratings: 4.8,
      location: "Jalan X, Kota X",
      fee: "Rp 44.000",
      reviews: 1.2,
    },
    reviews: [
      {
        buyer: "Nama Buyer",
        date: "20/01/2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        buyer: "Nama Buyer",
        date: "22/01/2025",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
      {
        buyer: "Nama Buyer",
        date: "23/01/2025",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      },
    ],
    anotherItems: [
      { name: "Produk A", price: "Rp 950.000", img: "/images/item1.jpg" },
      { name: "Produk B", price: "Rp 1.500.000", img: "/images/item2.jpg" },
      { name: "Produk C", price: "Rp 700.000", img: "/images/item3.jpg" },
      { name: "Produk D", price: "Rp 2.000.000", img: "/images/item4.jpg" },
    ],
  };
  //P.S. Dummy Data ^

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Thumbnail*/}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt={`Foto ${i}`} onClick={() => setSelectedImage(img)} className={`w-20 h-20 object-cover border rounded-lg cursor-pointer ${ selectedImage === img ? "ring-2 ring-blue-500" : ""}`}/>
            ))}
          </div>
          <motion.div key={selectedImage} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="flex-1"
          >
            <img src={selectedImage} alt="Foto Produk" className="w-full h-[400px] object-cover rounded-lg border"/>
          </motion.div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-gray-500">
              ({product.reviewsCount} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold text-green-600 mb-4">
            {product.price}
          </p>

          {/* Description */}
          <div className="mb-6">
            <h2 className="font-semibold mb-1">Description:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          {/* Shipping info */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Shipping Information</h2>
            <div className="space-y-3 text-sm text-gray-700 min-w-80 max-w-100">

              {/* Payment */}
              <div className="flex border rounded-lg overflow-hidden divide-x">
                <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-gray-50">
                  <span className="text-lg">💵</span>
                  <span>COD</span>
                </div>
                <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-gray-50">
                  <span className="text-lg">📦</span>
                  <span>Drop & Pick</span>
                </div>
              </div>

              {/* Seller */}
              <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏬</span>
                  <span>{product.shipping.seller}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-800 text-sm">
                    ({product.rating}) {product.shipping.reviews}K Reviews
                  </span>
                </div>
              </div>

              {/* Location  */}
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50">
                <span className="text-lg">📍</span>
                <span>{product.shipping.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="flex gap-4 overflow-x-auto">
          {product.reviews.map((rev, i) => (
            <div key={i} className="border rounded-lg p-4 bg-white shadow w-64 flex-shrink-0">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{rev.buyer}</span>
                <span className="text-gray-500 text-sm">{rev.date}</span>
              </div>
              <p className="text-gray-700 text-sm">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Another Items */}
      <div>
        <h2 className="text-xl font-bold mb-4">Another Item</h2>
        {/* horizontal row: no vertical scrollbar allowed */}
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden py-2">
          {product.anotherItems.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} style={{ transformOrigin: "center center" }} className="ml-1 border rounded-lg p-4 bg-[#D9C4B0] shadow flex flex-col items-center w-64 flex-shrink-0 transform-gpu">
              <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-md mb-3"/>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-green-600 font-bold mb-3">{item.price}</p>
              <Link href="#" className="mt-auto px-4 py-2 bg-white rounded-lg hover:bg-blue-700">
                Make Appointment
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
