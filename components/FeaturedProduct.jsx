"use client"; // Tambahkan ini jika menggunakan Next.js App Router (versi 13+)

import React from "react";
import { useRouter } from "next/navigation"; // Gunakan 'next/navigation' jika menggunakan App Router
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: "67d2dd8d772f7b1b7e67b155", // Sesuaikan dengan ID produk
    image: assets.boy_shoes,
    title: "Step Up Your Game!",
    description: "Look stylish and confident with our trendy shoe collection!",
  },
  {
    id: "67d2e028772f7b1b7e67b161",
    image: assets.boy_shoes1,
    title: "Comfort Meets Style",
    description: "Sleek design with maximum comfort for every step.",
  },
  {
    id: "67d2e17c772f7b1b7e67b18d",
    image: assets.boy_shoes2,
    title: "Run, Walk, Conquer!",
    description: "High-quality shoes built to accompany your every adventure.",
  },
];

const FeaturedProduct = () => {
  const router = useRouter(); // Inisialisasi router

  const handleBuyNow = (id) => {
    router.push(`/product/${id}`); // Navigasi ke halaman produk
  };

  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-blue-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image src={image} alt={title} className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover" />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">{description}</p>
              <button
                className="flex items-center gap-1.5 bg-blue-600 px-4 py-2 rounded"
                onClick={() => handleBuyNow(id)} // Navigasi saat tombol diklik
              >
                Buy now
                <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
