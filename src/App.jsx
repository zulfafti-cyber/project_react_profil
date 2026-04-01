import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1f3a] to-[#2b2e5a] text-white flex relative overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-20">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Halaman Profil
        </h1>

        {/* CARD LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 animate-fadeIn">

          {/* ZULFA */}
          <div
            onClick={() => navigate("/zulfa")}
            className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-full max-w-xs mx-auto text-center 
            hover:bg-white/20 transition group hover:scale-105 duration-300
            hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4 opacity-70 group-hover:opacity-100 transition"></div>
            <h3 className="font-semibold text-lg mt-2">Zulfa Fitri</h3>
            <p className="text-sm opacity-80 mt-1">253140700111055</p>
            <p className="text-sm opacity-80">Universitas Brawijaya</p>
          </div>

          {/* KAYLA */}
          <div
            onClick={() => navigate("/kayla")}
            className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-full max-w-xs mx-auto text-center 
            hover:bg-white/20 transition group hover:scale-105 duration-300
            hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-4 opacity-70 group-hover:opacity-100 transition"></div>
            <h3 className="font-semibold text-lg mt-2">
              Kayla Rihadatul Haniyah
            </h3>
            <p className="text-sm opacity-80 mt-1">253140700111002</p>
            <p className="text-sm opacity-80">Universitas Brawijaya</p>
          </div>

          {/* LANIKA */}
          <div
            onClick={() => navigate("/lanika")}
            className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-full max-w-xs mx-auto text-center 
            hover:bg-white/20 transition group hover:scale-105 duration-300
            hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mb-4 opacity-70 group-hover:opacity-100 transition"></div>
            <h3 className="font-semibold text-lg mt-2">Keisya Lanika</h3>
            <p className="text-sm opacity-80 mt-1">253140701111001</p>
            <p className="text-sm opacity-80">Universitas Brawijaya</p>
          </div>

        </div>
      </div>

    </div>
  );
}