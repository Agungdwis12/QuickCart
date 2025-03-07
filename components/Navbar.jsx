"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
<nav className="bg-white shadow-md flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image className="cursor-pointer w-28 md:w-32" onClick={() => router.push("/")} src={assets.logo1} alt="logo" />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        {[
          { href: "/", label: "Home" },
          { href: "/all-products", label: "Shop" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} className={`relative transition hover:text-gray-900 ${pathname === href ? "text-gray-900 after:block after:h-0.5 after:bg-blue-500 after:w-full after:absolute after:bottom-0" : ""}`}>
            {label}
          </Link>
        ))}

        {isSeller && (
          <button onClick={() => router.push("/seller")} className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              {[
                { label: "Home", icon: <HomeIcon />, path: "/" },
                { label: "Products", icon: <BoxIcon />, path: "/all-products" },
                { label: "Cart", icon: <CartIcon />, path: "/cart" },
                { label: "My Orders", icon: <BagIcon />, path: "/my-orders" },
              ].map(({ label, icon, path }) => (
                <UserButton.Action key={path} label={label} labelIcon={icon} onClick={() => router.push(path)} />
              ))}
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button onClick={() => router.push("/seller")} className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
        )}
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              {[
                { label: "Cart", icon: <CartIcon />, path: "/cart" },
                { label: "My Orders", icon: <BagIcon />, path: "/my-orders" },
              ].map(({ label, icon, path }) => (
                <UserButton.Action key={path} label={label} labelIcon={icon} onClick={() => router.push(path)} />
              ))}
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
