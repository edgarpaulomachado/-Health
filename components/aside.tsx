'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Images } from "@/assets/images";
import { cn } from "@/lib/utils"; // helper opcional p/ juntar classes (caso uses shadcn ou tailwind-variants)
import { type StaticImageData } from "next/image";

export default function Aside() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Zonas", icon: Images.Chart },
    { href: "/dashboard/population", label: "População", icon: Images.People },
    { href: "/dashboard/alert", label: "Alertas", icon: Images.Alert },
  ];

  type MenuItem = {
    href: string;
    label: string;
    icon: StaticImageData;
  };

  const extraItems = [
    { href: "/settings", label: "Definições", icon: Images.Settings },
    { href: "/profile", label: "Perfil", icon: Images.Profile },
    { href: "/help", label: "Ajuda", icon: Images.Info },
  ];

  const renderLink = (item: MenuItem) => {
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.label}
        href={item.href}
        className={cn(
          "group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium",
          isActive
            ? "bg-[#E7E9F5] text-[#5A6ACF]"
            : "text-[#273240] hover:bg-[#E7E9F5] hover:text-[#5A6ACF]"
        )}
      >
        <Image
          src={item.icon}
          alt={item.label}
          width={20}
          height={20}
          className={cn(
            "transition-transform duration-200",
            isActive ? "scale-110" : "group-hover:scale-110"
          )}
        />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    // Aside should be fixed visually but not overlap pages — layouts will add left margin to content
    <aside className="fixed left-0 top-0 z-40 w-64 h-screen bg-[#F1F2F7] px-6 py-6 flex flex-col justify-between border-r border-[#E0E2EA]">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image src={Images.Logo} alt="Logo" priority className="w-auto h-10" />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-1 mt-8">
        {menuItems.map(renderLink)}

        <div className="mt-8 mb-2 border-t border-[#E0E2EA]" />

        <p className="text-[#9A9FAC] text-xs font-semibold uppercase tracking-wide mb-2 px-4">
          
        </p>

        {extraItems.map(renderLink)}
      </nav>

      {/* Footer / Logout opcional */}
      <div className="mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#273240] hover:bg-[#E7E9F5] hover:text-[#E53E3E] transition-all duration-200 text-sm font-medium">
          
          Sair
        </button>
      </div>
    </aside>
  );
}
