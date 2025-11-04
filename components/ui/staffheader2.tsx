"use client";

import { useState } from "react";
import { Bell, ChevronDown, LogOut, LogIn } from "lucide-react";
import { toast } from "sonner";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheck = async () => {
    setIsProcessing(true);

    const nextStatus = !checkedIn; // 👈 determine what the next state will be
    const action = nextStatus ? "Checking In..." : "Checking Out...";

    const toastId = toast.loading(action, {
      description: "Please wait while we update your status.",
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setCheckedIn(nextStatus);
    toast.dismiss(toastId);

    if (nextStatus) {
      toast.success("✅ Checked In Successfully!", {
        description: "Welcome! You are now checked in.",
      });
    } else {
      toast.success("✅ Checked Out Successfully!", {
        description: "You have been checked out of the system.",
      });
    }

    setIsProcessing(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between relative">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Bell Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* Avatar + Dropdown */}
        <div className="relative flex items-center gap-3 pl-4 border-l border-gray-200">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Staff"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 text-gray-900 font-medium hover:text-gray-600"
          >
            Staff Member
            <ChevronDown className="w-4 h-4" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-12 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <button
                onClick={handleCheck}
                disabled={isProcessing}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              >
                {checkedIn ? (
                  <>
                    <LogOut className="w-4 h-4" /> Check Out
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" /> Check In
                  </>
                )}
              </button>

              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                onClick={() =>
                  toast.info("Logging out...", {
                    description: "Redirecting you to login page...",
                  })
                }
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
