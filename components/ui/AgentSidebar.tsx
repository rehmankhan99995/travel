"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CreditCard, Map, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Package,
  Bookmark,
  RefreshCw,
  Ticket,
  Dessert as Passport,
  Upload,
  Settings,
} from "lucide-react";

export function AgentSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "available packages",
      label: "Available packages",
      icon: Package,
      href: "/availablepackages",
    },
    {
      id: "My Bookings",
      label: "My Bookings",
      icon: Bookmark,
      href: "/MyBookings",
    },
    {
      id: "Account Statement",
      label: "Account Statement",
      icon: CreditCard,
      href: "/AccountStatement",
    },
    { id: "Refunds", label: "Refunds", icon: RefreshCw, href: "/Refunds" },
    {
      id: "Hotel Vouchers",
      label: "Hotel Vouchers",
      icon: Ticket,
      href: "/HotelVouchers",
    },
    {
      id: "Visa Services",
      label: "Visa Services",
      icon: Passport,
      href: "/Visa Services",
    },
  
    {
      id: "Payments Receipts",
      label: "Payments Receipts",
      icon: Upload,
      href: "/Payments Receipts",
    },
  ];

  const getIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="h-full w-[270px] bg-blue-700 flex flex-col p-6">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold text-center">
          Kalima Travels
        </h1>
      <p className="text-white  font-bold ">Travel Agent Dashboard</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = getIsActive(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-white text-black"
                  : "text-white hover:text-white cursor-pointer"
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <Link href="/login">
        <button className="w-full flex mt-8 items-center gap-3 px-4 py-3 text-white hover:text-white cursor-pointer transition-colors rounded-lg">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </Link>
    </div>
  );
}
