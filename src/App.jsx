import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpg";
import {
  Home,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  CircleChevronRight,
  CircleChevronLeft,
  ChevronRight,
} from "lucide-react";

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

  const profile = {
  nama: "Julpa",
  headline: "Frontend Dev",
  email: "email@gmail.com",
  kelas: "TI-21A",
  prodi: "Teknik Informatika",
  domisili: "Jakarta",
  about: "Isi tentang diri...",
  skills: ["React", "Tailwind"]
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1f3a] to-[#2b2e5a] text-white flex">
    <div className="flex h-screen">
      {/* Container */}
      <div className="flex gap-3 p-4">

        {/* Mini Sidebar */}
        <div className="w-16 h-[47vh] rounded-2xl backdrop-blur-xl bg-transparent border border-white/20 flex flex-col items-center py-4 justify-between">
          <div className="flex flex-col items-center gap-6">

            <div className="flex items-center gap-3">
            <img
              src={profileImg}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            </div>

            {menu.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2 py-3 rounded-lg cursor-pointer hover:bg-white/20 ${
                  i === 4 ? "bg-blue-500" : ""
                }`}
              >
                {item.icon}
              </div>
            ))}
          </div>
           <button onClick={() => setOpen(!open)}>
            {open ? <CircleChevronLeft /> : <CircleChevronRight />}
            </button>
        </div>

        {/* Main Sidebar */}
        <div
          className={`transition-all duration-300 ${
            open ? "w-72" : "w-0 opacity-0"
          } overflow-hidden h-[47vh] rounded-2xl backdrop-blur-xl bg-transparent border border-white/20 text-white p-5`}
        >
          
          {/* Profile */}
          <div className="flex items-start gap-3 mb-6">
            <img
              src={profileImg}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div >
              <p className="text-sm font-medium">Zulfa Fitri</p>
              <p className="text-xs text-gray-300">switch account</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="flex items-center gap-100">
              <ChevronRight className="w-4 h-4 text-gray-300 mt-2 ml-auto cursor-pointer " />
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-5">
            <Search size={16} className="mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Menu */}
          <div className="space-y-6">
            {menu
            .filter((item) => item.name !== "Search")
            .map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2 py-3 rounded-lg cursor-pointer hover:bg-white/20 ${
                  i === 3 ? "bg-blue-500" : ""
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>

      {/* Main Content */}
      <div className="flex-2 p-6">

        {/* Banner */}
        <div className="relative mb-20">
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 mb-6"
        >
          <h1 className="text-2xl font-bold">Welcome, {profile.nama}</h1>
          <p className="text-sm opacity-80">{profile.headline}</p>
        </motion.div>

        {/* Profile Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {["Profile", "Skills"].map((title, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#2b2e5a] p-6 rounded-2xl"
            >
              <h3 className="font-semibold mb-4">{title}</h3>
              {title === "Profile" ? (
                <div>
                  <p>Email: {profile.email}</p>
                  <p>Kelas: {profile.kelas}</p>
                  <p>Prodi: {profile.prodi}</p>
                  <p>Domisili: {profile.domisili}</p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm hover:scale-110 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#2b2e5a] p-6 rounded-2xl mb-6"
        >
          <h3 className="font-semibold mb-3">Tentang</h3>
          <p className="text-sm text-gray-300">{profile.about}</p>
        </motion.div>

        {/* Ranking */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#2b2e5a] p-6 rounded-2xl"
        >
          <h3 className="font-semibold mb-4">Ranking</h3>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((rank) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={rank}
                className="flex justify-between bg-[#1a1c3a] px-4 py-2 rounded-lg"
              >
                <span>#{rank} Player {rank}</span>
                <span>{7000 - rank * 200} pts</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
