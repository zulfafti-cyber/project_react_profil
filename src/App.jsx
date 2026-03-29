import React, { useState } from "react";
import { Search, Home, Bell, Settings, User, LogOut, CircleChevronRight, CircleChevronLeft } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Search", icon: <Search size={18} /> },
    { name: "Home", icon: <Home size={18} /> },
    { name: "Notification", icon: <Bell size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
    { name: "Profil", icon: <User size={18} /> },
    { name: "Log out", icon: <LogOut size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1f3a] to-[#2b2e5a] text-white flex">

      {/* ================= MINI SIDEBAR ================= */}
      <div className="flex h-screen p-4">
        <div className="w-16 h-[47vh] rounded-2xl backdrop-blur-xl border border-white/20 flex flex-col items-center py-4 justify-between">
          <div className="flex flex-col gap-6">
            {menu.map((item, i) => (
              <div key={i} className="p-3 rounded-lg cursor-pointer hover:bg-white/20">
                {item.icon}
              </div>
            ))}
          </div>

          <button onClick={() => setOpen(!open)}>
            {open ? <CircleChevronLeft /> : <CircleChevronRight />}
          </button>
        </div>

        {/* ================= MAIN SIDEBAR ================= */}
        <div
          className={`transition-all duration-300 ${
            open ? "w-72" : "w-0 opacity-0"
          } overflow-hidden h-[47vh] rounded-2xl backdrop-blur-xl border border-white/20 p-5`}
        >
          <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-5">
            <Search size={16} className="mr-2" />
            <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-full" />
          </div>

          <div className="space-y-6">
            {menu.slice(1).map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-3 rounded-lg cursor-pointer hover:bg-white/20">
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT (DI TENGAH HALAMAN) ================= */}
      <div className="flex-1 flex items-center justify-center px-10">
        <div className="grid grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-64 text-center hover:bg-white/20 transition">
            <h3 className="font-semibold text-lg">Zulfa Fitri</h3>
            <p className="text-sm opacity-80 mt-2">Universitas Brawijaya · TI</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-64 text-center hover:bg-white/20 transition">
            <h3 className="font-semibold text-lg">Kayla</h3>
            <p className="text-sm opacity-80 mt-2">Universitas Brawijaya · TI</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-64 text-center hover:bg-white/20 transition">
            <h3 className="font-semibold text-lg">Lanika</h3>
            <p className="text-sm opacity-80 mt-2">Universitas Brawijaya · TI</p>
          </div>

        </div>
      </div>

    </div>
  );
}