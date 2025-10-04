import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { format } from "date-fns";

export default function ProductDetail() {
  // P.S. Dummy Data buat ntar masukin databasenya
  const product = {
    name: "Nama Produk",
    price: "Rp 1.200.000",
    rating: 3.4,
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
        ratings: 4.8,
        date: "20/01/2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        buyer: "Nama Buyer",
        ratings: 3.6,
        date: "22/01/2025",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
      {
        buyer: "Nama Buyer",
        ratings: 3.1,
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
    <div className="flex flex-col justify-center items-center mx-auto px-6 py-10 space-y-10">
      <div className="inline-flex max-w-[1274px] gap-10 mx-auto">
        {/* Thumbnail*/}
        <div className="flex gap-4 w-max">
          <div className="flex flex-col justify-between h-[503px]">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt={`Foto ${i}`} onClick={() => setSelectedImage(img)} className={`w-[105px] h-[89px] object-cover border cursor-pointer ${ selectedImage === img ? "ring-2 ring-blue-500" : ""}`}/>
            ))}
          </div>
          <img src={selectedImage} alt="Foto Produk" className="w-[618px] h-[503px] object-cover border flex-shrink-0"/>
        </div>

        {/* Product Info */}
        <div className="w-[495px]">
          <h1 className="text-[40px] font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating) ? <span key={i} className="text-[30px] text-yellow-400">★</span> : <span key={i} className="text-[30px] text-gray-300">★</span>)}
            <span className="font-semibold">[{product.rating}]</span>
            <span className="font-bold">
              {product.reviewsCount} reviews
            </span>
          </div>

          <p className="text-[36px] font-bold mb-4">
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
          <div className="flex flex-col mb-6">
            <h2 className="font-semibold mb-2">Shipping Information</h2>
            <div className="flex flex-col text-sm text-gray-700 w-full max-w-[400px] min-w-50">

              {/* Payment */}
              <div className="mb-3 flex border rounded-lg overflow-hidden divide-x h-[66px]">
                <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-gray-50">
                  <img src="/cash-on-delivery.png" alt="COD" />
                  <span className="text-[20px]">COD</span>
                </div>
                <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-gray-50">
                  <img src="/pickup.png" alt="pickup" />
                  <span className="text-[20px]">Drop & Pick</span>
                </div>
              </div>

              <div className="flex flex-col items-left justify-between border rounded-lg px-3 py-2 bg-gray-50 h-[101px]">
              {/* Seller */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <img src="shop.png" className="w-[27px] h-[27px]" alt="shop" />
                    <span>{product.shipping.seller}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-800 text-sm">
                      ({product.rating}) {product.shipping.reviews}K Reviews
                    </span>
                  </div>
                </div>
                <hr></hr>
                {/* Location  */}
                <div className="flex items-center gap-2">
                  <img src="/placeholder-2.png" className="w-[27px] h-[27px]" alt="location" />
                  <span>{product.shipping.location}</span>
                </div>
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
            <div key={i} className="flex flex-col border rounded-lg p-4 bg-white shadow min-h-[149px] w-[414px] flex-shrink-0">
              <div className="flex flex-col justify-between mb-2">
                <span className="text-[20px] font-bold">{rev.buyer}</span>
                <div className="flex justify-between item-center">
                  <span className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => i < Math.round(rev.ratings) ? <span key={i} className="text-[22px] text-yellow-400">★</span> : <span key={i} className="text-[22px] text-gray-300">★</span>)}
                  </span>
                  <span className="text-gray-500 text-sm">{rev.date}</span>
                </div>
              </div>
              <p className="text-gray-700 text-[14px]">{rev.text}</p>
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
            <div className="ml-1 border rounded-lg p-4 bg-[#D9C4B0] shadow flex flex-col items-center w-[302px] h-[376px] flex-shrink-0 transform-gpu">
              <img src={item.img} alt={item.name} className="bg-white w-full h-199 object-cover rounded-md mb-3"/>
              <div className="flex flex-col item-left w-full">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex bg-[#7ED751] gap-1 items-center w-2/5 rounded-lg px-1">
                  <img src="/checkmark.png" className="w-[12px] h-[12px]" alt="checkmark" />
                  <span className="text-[11px]">Good Seller</span>
                </div>
                <p className="font-bold mb-3">{item.price}</p>
                  <Link href="#" className=" flex w-full text-[20px] text-center mt-auto px-4 py-2 bg-white rounded-lg hover:bg-blue-700 gap-3 items-center justify-center">
                    Make Appointment
                    <img src="/chat-bubble.png" alt="chatbubble" className="w-[21px] h-[21px]" />
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
